import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BrandIntro() {
  return (
    <Section background="white">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Our Story"
            title="A family tradition of exceptional gemstones."
            description="Tapro Gems is a Finland-based, family-owned gemstone house dedicated to sourcing 100% natural Sri Lankan gemstones. Every stone is hand-selected at origin, evaluated for exceptional colour and clarity, and offered with the certification and personal service our clients expect."
          />
        </Reveal>
        <RevealGroup
          as="dl"
          className="grid grid-cols-3 gap-6 border-t border-ivory-200 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
          stagger={0.15}
        >
          <div>
            <dt className="font-display text-3xl text-sapphire-700">100%</dt>
            <dd className="mt-1 text-sm text-ink-muted">Natural gemstones</dd>
          </div>
          <div>
            <dt className="font-display text-3xl text-sapphire-700">3</dt>
            <dd className="mt-1 text-sm text-ink-muted">Generations sourcing</dd>
          </div>
          <div>
            <dt className="font-display text-3xl text-sapphire-700">EU</dt>
            <dd className="mt-1 text-sm text-ink-muted">Finland based, Europe wide</dd>
          </div>
        </RevealGroup>
      </div>
    </Section>
  );
}
