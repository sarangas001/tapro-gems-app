import { Award, ShieldCheck } from "lucide-react";
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
      <SectionHeading
        eyebrow="Certification"
        title="Certification & Authenticity"
        description="Every gemstone is offered with clear provenance. Sri Lankan gem authority certification is standard, with international certificates such as GIA available on request."
        className="mb-14"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {certificates.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex gap-4 rounded-2xl border border-ivory-200 p-8 transition-colors duration-300 hover:border-gold-300"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sapphire-900/5 text-sapphire-700">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-lg text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
