"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Hides the public navbar/footer on the admin dashboard. */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return pathname.startsWith("/admin") ? null : children;
}
