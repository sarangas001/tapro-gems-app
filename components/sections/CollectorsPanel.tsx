import Image from "next/image";
import ImageReveal from "@/components/motion/ImageReveal";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const audiences = ["Collectors", "Investors", "Jewellery Designers", "Wholesale Buyers"];

export default function CollectorsPanel() {
  return (
    <Section id="collectors" background="ivory" className="scroll-mt-20">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <span
            aria-hidden="true"
            className="absolute -top-6 -right-6 -z-10 h-4/5 w-4/5 rounded-2xl bg-gold-100"
          />
          <ImageReveal className="relative aspect-4/5 w-full overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
            <Image
              src="/girl-t-gem.png"
              alt="Woman holding a loose natural sapphire"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </ImageReveal>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-6">
          <div className="relative h-24 w-24 self-start sm:h-28 sm:w-28">
            <Image
              src="/ring-gem.png"
              alt="Gold ring set with a natural sapphire"
              fill
              sizes="7rem"
              className="object-contain drop-shadow-xl"
            />
          </div>

          <SectionHeading
            eyebrow="For Professionals"
            title="Collectors & Professionals"
            description="Private sourcing, wholesale parcels and consultation for collectors, investors and jewellery designers who require a trusted, direct relationship with origin."
          />

          <RevealGroup as="ul" className="flex flex-wrap gap-3" stagger={0.08} y={12}>
            {audiences.map((audience) => (
              <li
                key={audience}
                className="rounded-full border border-navy-900/15 px-4 py-2 text-sm text-ink"
              >
                {audience}
              </li>
            ))}
          </RevealGroup>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="md">
              Speak With Us
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
