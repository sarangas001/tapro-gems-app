import Button from "@/components/ui/Button";

/**
 * Left-column hero copy. Each `data-hero` attribute is a GSAP target
 * selector scoped by HeroSection's intro/scroll timelines — no refs
 * threaded through props needed.
 */
export default function HeroContent() {
  return (
    <div data-hero="text-column" className="relative flex flex-col gap-8">
      <div data-hero="label" className="flex items-center gap-4">
        <span className="h-px w-10 bg-gold-400" />
        <span className="text-sm font-medium tracking-[0.3em] text-gold-300 uppercase">
          Tapro Gems — Finland
        </span>
      </div>
      <h1 className="max-w-xl font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl">
        <span data-hero="heading-1" className="block">
          Natural Sri Lankan Gemstones.
        </span>
        <span data-hero="heading-2" className="block">
          Selected for the World.
        </span>
      </h1>
      <p data-hero="paragraph" className="max-w-lg text-base leading-relaxed text-ivory-200/80 sm:text-lg">
        Hand-selected, certified natural gemstones from Sri Lanka, presented
        with European trust.
      </p>
      <div data-hero="buttons" className="mt-4 flex flex-col gap-4 sm:flex-row">
        <Button href="/shop" size="md">
          Explore Gemstones
        </Button>
        <Button href="/appointment" variant="outline" tone="dark" size="md">
          Book an Appointment
        </Button>
      </div>
    </div>
  );
}
