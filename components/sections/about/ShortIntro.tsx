import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";

export default function ShortIntro() {
  return (
    <Section background="white">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="h-px w-16 bg-gold-500" />
        <p className="text-lg leading-relaxed text-ink-muted sm:text-xl">
          Tapro Gems is a Finland-based, family-owned gemstone company
          specialising in 100% natural Sri Lankan gemstones. We bring
          carefully selected stones to collectors, investors, jewellery
          professionals and private clients across Europe and international
          markets.
        </p>
      </Reveal>
    </Section>
  );
}
