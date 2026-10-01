"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  checkCredentials,
  createSession,
  destroySession,
  requireAdmin,
} from "@/lib/admin/auth";
import {
  addMedia,
  deleteGemstone,
  deleteMedia,
  getGemstoneById,
  getMedia,
  removeUploadedFile,
  saveGemstone,
  updateMedia,
} from "@/lib/store";
import type { GemstoneCategoryName } from "@/types/gemstone";
import type { MediaType } from "@/types/media";

export interface FormState {
  error?: string;
}

const CATEGORIES: GemstoneCategoryName[] = ["Sapphire", "Ruby", "Star Sapphire", "Rare Gemstone"];

function refreshSite() {
  revalidatePath("/", "layout");
}

const text = (form: FormData, key: string) => String(form.get(key) ?? "").trim();

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/* ------------------------------------ Session ------------------------------------ */

export async function signIn(_: FormState, form: FormData): Promise<FormState> {
  if (!checkCredentials(text(form, "username"), String(form.get("password") ?? ""))) {
    return { error: "Invalid username or password." };
  }
  await createSession();
  redirect("/admin");
}

export async function signOut() {
  await destroySession();
  redirect("/admin");
}

/* ------------------------------------ Shop ------------------------------------ */

export async function saveGemstoneAction(_: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();

  const id = text(form, "id") || undefined;
  const name = text(form, "name");
  const category = text(form, "category") as GemstoneCategoryName;
  const caratWeight = Number(text(form, "caratWeight"));
  const image = text(form, "image");

  if (!name) return { error: "Gemstone name is required." };
  if (!CATEGORIES.includes(category)) return { error: "Choose a valid category." };
  if (!Number.isFinite(caratWeight) || caratWeight <= 0) {
    return { error: "Carat weight must be a positive number." };
  }
  if (!image) return { error: "A main image is required." };

  const previous = id ? await getGemstoneById(id) : undefined;
  const gallery = form.getAll("gallery").map(String).filter(Boolean);
  const video = text(form, "video") || undefined;

  try {
    await saveGemstone(
      {
        slug: slugify(text(form, "slug") || name),
        name,
        category,
        caratWeight,
        cut: text(form, "cut"),
        colour: text(form, "colour"),
        origin: text(form, "origin"),
        certification: text(form, "certification"),
        description: text(form, "description"),
        image,
        gallery,
        video,
        featured: form.get("featured") === "on",
      },
      id,
    );
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Could not save gemstone." };
  }

  // Drop uploaded files that this edit no longer references.
  if (previous) {
    const kept = new Set([image, video, ...gallery]);
    for (const src of [previous.image, previous.video, ...previous.gallery]) {
      if (src && !kept.has(src)) await removeUploadedFile(src);
    }
  }

  refreshSite();
  redirect("/admin/shop");
}

export async function deleteGemstoneAction(form: FormData) {
  await requireAdmin();
  const id = text(form, "id");
  const gemstone = await getGemstoneById(id);
  await deleteGemstone(id);
  if (gemstone) {
    for (const src of [gemstone.image, gemstone.video, ...gemstone.gallery]) {
      await removeUploadedFile(src);
    }
  }
  refreshSite();
  revalidatePath("/admin/shop");
}

/* ------------------------------ Collections / Gallery ------------------------------ */

type MediaList = "collections" | "gallery";

function assertList(list: string): MediaList {
  if (list !== "collections" && list !== "gallery") throw new Error("Invalid list");
  return list;
}

export async function addMediaAction(list: string, src: string, type: MediaType, title: string) {
  await requireAdmin();
  await addMedia(assertList(list), { src, type, title: title.trim() || "Untitled" });
  refreshSite();
  revalidatePath(`/admin/${list}`);
}

export async function updateMediaAction(form: FormData) {
  await requireAdmin();
  const list = assertList(text(form, "list"));
  const id = text(form, "id");
  const patch: { title: string; src?: string; type?: MediaType } = { title: text(form, "title") };

  const newSrc = text(form, "src");
  if (newSrc) {
    const existing = (await getMedia(list)).find((m) => m.id === id);
    patch.src = newSrc;
    patch.type = text(form, "type") === "video" ? "video" : "image";
    if (existing && existing.src !== newSrc) await removeUploadedFile(existing.src);
  }

  await updateMedia(list, id, patch);
  refreshSite();
  revalidatePath(`/admin/${list}`);
}

export async function deleteMediaAction(form: FormData) {
  await requireAdmin();
  const list = assertList(text(form, "list"));
  const id = text(form, "id");
  const item = (await getMedia(list)).find((m) => m.id === id);
  await deleteMedia(list, id);
  await removeUploadedFile(item?.src);
  refreshSite();
  revalidatePath(`/admin/${list}`);
}
