import GemPlaceholder from "@/components/ui/GemPlaceholder";

/**
 * Stands in for the large gemstone video/visual until real footage is
 * supplied — same slot, same layout, just swap GemPlaceholder for a video.
 */
export default function CinematicStory() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 text-ivory">
      <GemPlaceholder tone="mixed" className="absolute inset-0" />
      <div className="absolute inset-0 bg-linear-to-b from-navy-950/70 via-navy-950/20 to-navy-950/80" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-8 px-6 text-center">
        <span className="text-sm font-medium tracking-[0.3em] text-gold-300 uppercase">
          The Tapro Story
        </span>
        <span className="h-px w-16 bg-gold-400" />
        <p className="font-accent text-2xl leading-relaxed text-ivory italic sm:text-3xl lg:text-4xl">
          &ldquo;Every gemstone carries the story of the earth it was formed
          in — we simply help it find the hands it belongs to.&rdquo;
        </p>
      </div>
    </section>
  );
}
