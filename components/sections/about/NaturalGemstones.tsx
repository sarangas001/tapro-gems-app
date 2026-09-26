import { Check } from "lucide-react";
import Image from "next/image";
import ImageReveal from "@/components/motion/ImageReveal";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Section from "@/components/ui/Section";

const details = ["Carat", "Cut", "Colour", "Origin", "Certification", "Visual Details"];

export default function NaturalGemstones() {
  return (
    <Section background="ivory">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal className="flex flex-col gap-6">
          <span className="h-2 w-2 rounded-full bg-gold-500" aria-hidden="true" />
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            100% Natural Sri Lankan Gemstones
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
            Our gemstones are sourced from Sri Lanka and selected for their
            natural character, beauty and quality. We do not focus on
            synthetic or colour-enhanced stones. Each gemstone is presented
            with clear information about its:
          </p>

          <RevealGroup as="ul" className="grid grid-cols-2 gap-3 sm:grid-cols-3" stagger={0.06}>
            {details.map((detail) => (
              <li key={detail} className="flex items-center gap-2 text-sm font-medium text-ink">
                <Check className="h-4 w-4 text-gold-600" aria-hidden="true" />
                {detail}
              </li>
            ))}
          </RevealGroup>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <span
            aria-hidden="true"
            className="absolute -right-6 -bottom-6 -z-10 h-4/5 w-3/5 rounded-2xl bg-gold-100"
          />
          <ImageReveal className="relative aspect-4/5 w-full overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
            <Image
              src="/100-percent-natural.png"
              alt="Natural cushion-cut sapphire resting on marble"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </ImageReveal>
        </Reveal>
      </div>
    </Section>
  );
}
