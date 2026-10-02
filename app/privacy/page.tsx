import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import LegalHero from "@/components/sections/legal/LegalHero";
import { privacyPolicy } from "@/lib/data/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Tapro Gems",
  description:
    "How Tapro Gems collects, uses, stores and protects personal information when you visit our website or contact us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <LegalHero
        eyebrow={privacyPolicy.eyebrow}
        title={privacyPolicy.title}
        lastUpdated={privacyPolicy.lastUpdated}
        intro={privacyPolicy.intro}
      />
      <LegalDocument sections={privacyPolicy.sections} />
    </>
  );
}
