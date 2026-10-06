import { Gem, MapPin, UserRound } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/dictionary";

const pointIcons = [MapPin, Gem, UserRound];

export default async function FinlandNow() {
  const t = (await getDictionary()).home.finland;
  return (
    <Section background="navy-deep">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {t.eyebrow}
          </span>
          <SectionHeading
            align="center"
            tone="dark"
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <RevealGroup
          className="grid w-full gap-8 border-t border-white/10 pt-10 text-left sm:grid-cols-3"
          stagger={0.1}
        >
          {t.points.map(({ title, description }, i) => {
            const Icon = pointIcons[i];
            return (
              <div key={title} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400/10 text-gold-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg text-ivory">{title}</h3>
                <p className="text-sm leading-relaxed text-ivory-200/80">{description}</p>
              </div>
            );
          })}
        </RevealGroup>

        <Button href="/appointment" size="md" className="mt-4">
          {t.cta}
        </Button>
      </div>
    </Section>
  );
}
