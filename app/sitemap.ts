import type { MetadataRoute } from "next";
import { getGemstones } from "@/lib/store";

const SITE_URL = "https://www.taprogems.fi";

// Admin saves call revalidatePath("/sitemap.xml") (lib/admin/actions.ts); this is the fallback
// for edits made on another instance or outside the admin.
export const revalidate = 3600;

const staticPaths = [
  "/",
  "/about",
  "/appointment",
  "/collections",
  "/contact",
  "/cookies",
  "/gallery",
  "/privacy",
  "/shop",
  "/terms",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // /shop/[id] renders every gemstone in the store (there is no draft state), keyed by slug.
  const slugs = new Set(
    (await getGemstones()).map((gemstone) => gemstone.slug).filter(Boolean),
  );

  const paths = [...staticPaths, ...[...slugs].map((slug) => `/shop/${encodeURIComponent(slug)}`)];
  return paths.map((path) => ({ url: path === "/" ? SITE_URL : `${SITE_URL}${path}` }));
}
