import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";
import ColumnLines from "@/components/ui/ColumnLines";
import GemPlaceholder from "@/components/ui/GemPlaceholder";

/**
 * Stands in for the large gemstone video/visual until real footage is
 * supplied — same slot, same layout, just swap GemPlaceholder for a video.
 */
export default function CinematicStory() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 text-ivory">
      <Parallax amount={100} className="absolute inset-x-0 -top-32 -bottom-32">
        <GemPlaceholder tone="mixed" className="h-full w-full" />
      </Parallax>
      <div className="absolute inset-0 bg-linear-to-b from-navy-950/70 via-navy-950/20 to-navy-950/80" />
      <ColumnLines tone="dark" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-8 px-6 text-center">
        <Reveal className="flex flex-col items-center gap-8">
          <span className="text-sm font-medium tracking-[0.3em] text-gold-300 uppercase">
            The Tapro Story
          </span>
          <span className="h-px w-16 bg-gold-400" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-accent text-2xl leading-relaxed text-ivory italic sm:text-3xl lg:text-4xl">
            &ldquo;Every gemstone carries the story of the earth it was
            formed in — we simply help it find the hands it belongs
            to.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
