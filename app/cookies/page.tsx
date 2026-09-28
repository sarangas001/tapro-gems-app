import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import LegalHero from "@/components/sections/legal/LegalHero";
import { cookiePolicy } from "@/lib/data/legal/cookies";

export const metadata: Metadata = {
  title: "Cookie Policy | Tapro Gems",
  description:
    "How Tapro Gems uses cookies and similar technologies on our website, and how to manage your preferences.",
};

export default function CookiesPage() {
  return (
    <>
      <LegalHero
        eyebrow={cookiePolicy.eyebrow}
        title={cookiePolicy.title}
        lastUpdated={cookiePolicy.lastUpdated}
        intro={cookiePolicy.intro}
      />
      <LegalDocument sections={cookiePolicy.sections} />
    </>
  );
}
