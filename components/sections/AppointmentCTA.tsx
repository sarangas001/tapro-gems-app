import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function AppointmentCTA() {
  return (
    <Section background="navy-deep">
      <div className="flex flex-col items-center gap-8 text-center">
        <span className="h-px w-16 bg-gold-400" />
        <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
          Discover your next exceptional gemstone.
        </h2>
        <Button href="/appointment" size="md">
          Book a Private Appointment
        </Button>
      </div>
    </Section>
  );
}
