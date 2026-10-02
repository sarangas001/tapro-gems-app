import type { Metadata } from "next";
import { getGemstones } from "@/lib/store";
import AppointmentForm from "@/components/sections/appointment/AppointmentForm";

export const metadata: Metadata = {
  title: "Book a Private Appointment | Tapro Gems",
  description:
    "Book a private consultation with Tapro Gems to discuss natural Sri Lankan gemstones, sourcing options and certification.",
  alternates: { canonical: "/appointment" },
};

export default async function AppointmentPage() {
  return <AppointmentForm gemstones={await getGemstones()} />;
}
