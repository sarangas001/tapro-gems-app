import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GemPlaceholder from "@/components/ui/GemPlaceholder";
import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";

/**
 * The rotating 3D sapphire is a later phase — this placeholder glow keeps the
 * cinematic mood of the hero without pulling in a 3D/video dependency yet.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 text-ivory">
      <Parallax
        amount={70}
        className="absolute top-[-20%] -right-1/4 h-[140%] w-full sm:w-2/3"
      >
        <GemPlaceholder
          tone="sapphire"
          className="h-full w-full rounded-full opacity-70 blur-3xl"
        />
      </Parallax>
      <Parallax amount={35} className="absolute top-24 left-[8%] h-64 w-64">
        <div
          aria-hidden="true"
          className="h-full w-full rounded-full bg-gold-500/20 blur-[100px]"
        />
      </Parallax>
      <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/40 to-navy-950/10" />

      <Container className="relative flex flex-col gap-8 pt-32 pb-20">
        <Reveal delay={0}>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-sm font-medium tracking-[0.3em] text-gold-300 uppercase">
              Tapro Gems — Finland
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl">
            Natural Sri Lankan Gemstones.
            <br />
            Selected for the World.
          </h1>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="max-w-xl text-base leading-relaxed text-ivory-200/80 sm:text-lg">
            Hand-selected, certified gemstones from Sri Lanka — sourced with
            three generations of expertise and offered with personalised,
            private service across Europe.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button href="/shop" size="md">
              Explore Gemstones
            </Button>
            <Button href="/appointment" variant="outline" tone="dark" size="md">
              Book an Appointment
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
