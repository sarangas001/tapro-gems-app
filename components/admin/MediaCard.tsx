"use client";

import { Pencil } from "lucide-react";
import { useRef, useTransition } from "react";
import { deleteMediaAction, updateMediaAction } from "@/lib/admin/actions";
import type { MediaItem } from "@/types/media";
import ConfirmDeleteButton from "./ConfirmDeleteButton";
import MediaPreview from "./MediaPreview";
import MediaUploader from "./MediaUploader";
import { inputClasses, labelClasses, primaryButton, secondaryButton } from "./ui";

const IMAGES = "image/png,image/jpeg,image/webp,image/avif";
const VIDEOS = "video/mp4,video/webm,video/quicktime";

interface MediaCardProps {
  list: "collections" | "gallery";
  item: MediaItem;
  /** Restrict replacement files to one kind; both are allowed when omitted. */
  kind?: "image" | "video";
}

export default function MediaCard({ list, item, kind }: MediaCardProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [pending, startTransition] = useTransition();
  const accept = kind === "image" ? IMAGES : kind === "video" ? VIDEOS : `${IMAGES},${VIDEOS}`;

  const save = (form: FormData) => {
    startTransition(async () => {
      await updateMediaAction(form);
      dialog.current?.close();
    });
  };

  return (
    <li className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
      <MediaPreview
        src={item.src}
        type={item.type}
        alt={item.title}
        size={400}
        className="aspect-square w-full bg-ivory-100 object-cover"
      />
      <div className="flex flex-col gap-3 p-4">
        <p className="truncate text-sm font-medium text-ink" title={item.title}>
          {item.title}
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => dialog.current?.showModal()}
            className="inline-flex items-center gap-1.5 rounded-lg border border-navy-900/15 px-3 py-1.5 text-sm text-ink transition-colors hover:bg-ivory-100"
          >
            <Pencil className="h-4 w-4" aria-hidden="true" />
            Edit
          </button>
          <ConfirmDeleteButton
            action={deleteMediaAction}
            fields={{ list, id: item.id }}
            itemName={item.title}
          />
        </div>
      </div>

      <dialog
        ref={dialog}
        className="m-auto max-h-[90vh] w-[min(92vw,30rem)] rounded-2xl p-0 shadow-2xl backdrop:bg-navy-950/60"
      >
        <form action={save} className="flex flex-col gap-5 p-6">
          <h2 className="font-display text-xl text-ink">Edit item</h2>
          <input type="hidden" name="list" value={list} />
          <input type="hidden" name="id" value={item.id} />
          <label className="flex flex-col gap-1.5">
            <span className={labelClasses}>Title</span>
            <input name="title" defaultValue={item.title} className={inputClasses} />
          </label>
          <MediaUploader
            name="src"
            typeName="type"
            label="Replace file (optional)"
            accept={accept}
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className={secondaryButton}
              onClick={() => dialog.current?.close()}
            >
              Cancel
            </button>
            <button type="submit" className={primaryButton} disabled={pending}>
              {pending ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </dialog>
    </li>
  );
}
