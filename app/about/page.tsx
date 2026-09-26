import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import CertificationTrust from "@/components/sections/about/CertificationTrust";
import FamilyOwned from "@/components/sections/about/FamilyOwned";
import NaturalGemstones from "@/components/sections/about/NaturalGemstones";
import OurApproach from "@/components/sections/about/OurApproach";
import OurStory from "@/components/sections/about/OurStory";
import OurVision from "@/components/sections/about/OurVision";
import ShortIntro from "@/components/sections/about/ShortIntro";
import WhatWeOffer from "@/components/sections/about/WhatWeOffer";
import AppointmentCTA from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "About Tapro Gems | Natural Sri Lankan Gemstones",
  description:
    "Tapro Gems is a Finland-based, family-owned gemstone company specialising in 100% natural Sri Lankan gemstones for collectors, investors, jewellery professionals and private clients.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ShortIntro />
      <OurStory />
      <WhatWeOffer />
      <NaturalGemstones />
      <CertificationTrust />
      <FamilyOwned />
      <OurApproach />
      <OurVision />
      <AppointmentCTA />
    </>
  );
}
