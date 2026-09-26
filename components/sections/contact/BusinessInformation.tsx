import { Building2, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Section from "@/components/ui/Section";

const details = [
  { icon: Mail, label: "hello@taprogems.com" },
  { icon: Phone, label: "+358 40 000 0000 (Phone / WhatsApp)" },
  { icon: MapPin, label: "Helsinki, Finland" },
  { icon: Building2, label: "Registered in Finland" },
];

export default function BusinessInformation() {
  return (
    <Section background="white">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-center">
        <Reveal className="flex flex-col items-center gap-2">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Tapro Gems</h2>
          <p className="text-sm text-ink-muted">Finland-based family-owned gemstone company</p>
          <p className="text-sm text-ink-muted">Specialising in natural Sri Lankan gemstones</p>
        </Reveal>

        <RevealGroup as="ul" className="flex flex-col gap-3 text-sm text-ink-muted" stagger={0.06}>
          {details.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center justify-center gap-3">
              <Icon className="h-4 w-4 text-gold-600" aria-hidden="true" />
              {label}
            </li>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
