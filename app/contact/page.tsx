import type { Metadata } from "next";
import BusinessInformation from "@/components/sections/contact/BusinessInformation";
import ClosingLine from "@/components/sections/contact/ClosingLine";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactIntroduction from "@/components/sections/contact/ContactIntroduction";
import ContactOptions from "@/components/sections/contact/ContactOptions";
import PrivateAppointment from "@/components/sections/contact/PrivateAppointment";
import ShortIntro from "@/components/sections/contact/ShortIntro";
import SocialSection from "@/components/sections/contact/SocialSection";
import AppointmentCTA from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Contact Tapro Gems | Natural Sri Lankan Gemstones",
  description:
    "Get in touch with Tapro Gems for gemstone enquiries, private appointments, sourcing requests and certification questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactOptions />
      <ContactIntroduction />
      <PrivateAppointment />
      <BusinessInformation />
      <SocialSection />
      <AppointmentCTA />
    </>
  );
}
