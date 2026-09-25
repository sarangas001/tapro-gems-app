import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GemPlaceholder from "@/components/ui/GemPlaceholder";

/**
 * The rotating 3D sapphire is a later phase — this placeholder glow keeps the
 * cinematic mood of the hero without pulling in a 3D/video dependency yet.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 text-ivory">
      <GemPlaceholder
        tone="sapphire"
        className="absolute top-1/2 -right-1/4 h-[140%] w-full -translate-y-1/2 rounded-full opacity-70 blur-3xl sm:w-2/3"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-[8%] h-64 w-64 -translate-y-1/2 rounded-full bg-gold-500/20 blur-[100px]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/40 to-navy-950/10" />

      <Container className="relative flex flex-col gap-8 pt-32 pb-20">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-gold-400" />
          <span className="text-sm font-medium tracking-[0.3em] text-gold-300 uppercase">
            Tapro Gems — Finland
          </span>
        </div>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl">
          Natural Sri Lankan Gemstones.
          <br />
          Selected for the World.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-ivory-200/80 sm:text-lg">
          Hand-selected, certified gemstones from Sri Lanka — sourced with
          three generations of expertise and offered with personalised,
          private service across Europe.
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Button href="/shop" size="md">
            Explore Gemstones
          </Button>
          <Button href="/appointment" variant="outline" tone="dark" size="md">
            Book an Appointment
          </Button>
        </div>
      </Container>
    </section>
  );
}
