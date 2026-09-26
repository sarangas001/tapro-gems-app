import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";

export default function ClosingLine() {
  return (
    <Section background="white">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
          Natural gemstones. Personal service. Trusted guidance.
        </p>
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
          We look forward to helping you discover your next exceptional
          gemstone.
        </p>
      </Reveal>
    </Section>
  );
}
