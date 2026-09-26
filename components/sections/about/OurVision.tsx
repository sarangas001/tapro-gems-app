import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";

export default function OurVision() {
  return (
    <Section background="ivory">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <span className="text-sm font-medium tracking-[0.3em] text-gold-600 uppercase">
          Our Vision
        </span>
        <span className="h-px w-16 bg-gold-500" aria-hidden="true" />
        <p className="font-accent text-2xl leading-relaxed text-ink-muted italic sm:text-3xl lg:text-4xl">
          &ldquo;To build Tapro Gems into a trusted international gemstone
          brand based in Europe, known for natural Sri Lankan gemstones,
          transparency and refined personal service — a bridge between Sri
          Lanka&rsquo;s gemstone heritage and a modern European luxury
          experience.&rdquo;
        </p>
      </Reveal>
    </Section>
  );
}
