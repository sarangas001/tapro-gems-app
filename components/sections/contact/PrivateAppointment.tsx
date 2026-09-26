import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function PrivateAppointment() {
  return (
    <Section background="navy">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <span className="h-px w-16 bg-gold-400" aria-hidden="true" />
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          Prefer a More Personal Consultation?
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-ivory-200/80 sm:text-lg">
          Book a private appointment with Tapro Gems and speak directly with
          our team about your gemstone requirements, sourcing options and
          certification needs.
        </p>
        <Button href="/appointment" size="md">
          Book a Private Appointment
        </Button>
      </Reveal>
    </Section>
  );
}
