import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";

export default function ShortIntro() {
  return (
    <Section background="white">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="h-px w-16 bg-gold-500" />
        <p className="text-lg leading-relaxed text-ink-muted sm:text-xl">
          Whether you are a collector, investor, jewellery designer,
          wholesale buyer or private client, we are here to help you find
          the right natural Sri Lankan gemstone.
        </p>
      </Reveal>
    </Section>
  );
}
