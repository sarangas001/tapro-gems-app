import type { Metadata } from "next";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import CollectionsGallery from "@/components/sections/collections/CollectionsGallery";
import CollectionsHero from "@/components/sections/collections/CollectionsHero";

export const metadata: Metadata = {
  title: "Collections | Tapro Gems",
  description:
    "Explore jewellery pieces set with hand-selected, certified natural Sri Lankan gemstones from Tapro Gems.",
};

export default function CollectionsPage() {
  return (
    <>
      <CollectionsHero />
      <CollectionsGallery />
      <AppointmentCTA />
    </>
  );
}
