import { Award, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const certificates = [
  {
    icon: ShieldCheck,
    title: "Sri Lankan Gem Authority",
    description: "Local gemmological certification recognised at origin.",
  },
  {
    icon: Award,
    title: "International Certification",
    description: "GIA and other international certificates arranged on request.",
  },
];

export default function Certification() {
  return (
    <Section background="white">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold-500" />
          <SectionHeading
            align="center"
            eyebrow="Certification"
            title="Certification & Authenticity"
            description="Every gemstone is offered with clear provenance. Sri Lankan gem authority certification is standard, with international certificates such as GIA available on request."
          />
        </Reveal>

        <RevealGroup
          className="flex w-full flex-col gap-6 border-t border-navy-900/10 pt-8"
          stagger={0.1}
        >
          {certificates.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sapphire-900/5 text-sapphire-700">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </RevealGroup>

        <Button href="/certification" variant="outline" size="sm" className="w-fit gap-3">
          <span aria-hidden="true" className="h-px w-6 bg-current" />
          Learn About Certification
        </Button>
      </div>
    </Section>
  );
}
