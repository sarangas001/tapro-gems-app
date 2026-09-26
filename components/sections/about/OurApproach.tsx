import { Check } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Section from "@/components/ui/Section";

const focusPoints = [
  "Authentic Sri Lankan gemstones",
  "Carefully selected natural stones",
  "Transparent communication",
  "Certified purchases",
  "Private appointments",
  "Personalised sourcing",
  "European-based service",
];

export default function OurApproach() {
  return (
    <Section background="navy">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-10 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="text-sm font-medium tracking-[0.2em] text-gold-300 uppercase">
            Our Approach
          </span>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Hand-Selected. Natural. Certified. Personal.
          </h2>
        </Reveal>

        <RevealGroup
          as="ul"
          className="flex flex-wrap justify-center gap-x-6 gap-y-4"
          stagger={0.06}
        >
          {focusPoints.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-medium text-ivory">
              <Check className="h-4 w-4 text-gold-400" aria-hidden="true" />
              {point}
            </li>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
