import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import LegalHero from "@/components/sections/legal/LegalHero";
import { termsAndConditions } from "@/lib/data/legal/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tapro Gems",
  description:
    "The terms governing use of the Tapro Gems website and any enquiries, appointments or services arranged through it.",
};

export default function TermsPage() {
  return (
    <>
      <LegalHero
        eyebrow={termsAndConditions.eyebrow}
        title={termsAndConditions.title}
        lastUpdated={termsAndConditions.lastUpdated}
        intro={termsAndConditions.intro}
      />
      <LegalDocument sections={termsAndConditions.sections} />
    </>
  );
}
