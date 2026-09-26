import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import ColumnLines from "@/components/ui/ColumnLines";
import Container from "@/components/ui/Container";

export default function AppointmentCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-ivory">
      <ColumnLines tone="dark" />

      <Container className="relative flex flex-col items-center gap-8 pt-24 text-center md:pt-32 lg:pt-40">
        <Reveal className="flex flex-col items-center gap-8">
          <span className="h-px w-16 bg-gold-400" />
          <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            From Raw Earth to Rare Beauty.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <Button href="/appointment" size="md">
            Book a Private Appointment
          </Button>
        </Reveal>
      </Container>

      <div className="relative mx-auto mt-16 w-full max-w-[1920px] sm:mt-20 lg:mt-24">
        <div className="relative aspect-1983/793 w-full">
          <Image
            src="/footer-img.png"
            alt="Natural sapphires and a ruby resting on raw volcanic rock at origin"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
