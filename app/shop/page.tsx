import type { Metadata } from "next";
import ShopGrid from "@/components/sections/shop/ShopGrid";
import ShopHero from "@/components/sections/shop/ShopHero";
import EveryOccasion from "@/components/sections/EveryOccasion";
import PrivateAppointment from "@/components/sections/contact/PrivateAppointment";
import AppointmentCTA from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Shop Natural Gemstones | Tapro Gems",
  description:
    "Browse certified natural Sri Lankan sapphires, rubies, star sapphires and rare gemstones from Tapro Gems.",
};

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ShopGrid />
      <EveryOccasion />
      <PrivateAppointment />
      <AppointmentCTA />
    </>
  );
}
