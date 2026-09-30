import type { Metadata } from "next";
import AppointmentForm from "@/components/sections/appointment/AppointmentForm";

export const metadata: Metadata = {
  title: "Book a Private Appointment | Tapro Gems",
  description:
    "Book a private consultation with Tapro Gems to discuss natural Sri Lankan gemstones, sourcing options and certification.",
};

export default function AppointmentPage() {
  return <AppointmentForm />;
}
