import { Gem, Globe, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import ImageReveal from "@/components/motion/ImageReveal";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

const points = [
  { icon: Gem, title: "100% Natural" },
  { icon: MapPin, title: "Sri Lankan Origin" },
  { icon: Sparkles, title: "Hand Selected" },
  { icon: ShieldCheck, title: "Certified" },
  { icon: Users, title: "Family Owned" },
  { icon: Globe, title: "Europe Based" },
];

export default function WhyTapro() {
  return (
    <Section background="ivory">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <span
            aria-hidden="true"
            className="absolute -top-6 -left-6 -z-10 h-4/5 w-3/5 rounded-2xl bg-gold-100"
          />
          <span
            aria-hidden="true"
            className="absolute -right-6 -bottom-6 -z-10 h-4/5 w-3/5 rounded-2xl bg-sapphire-100"
          />
          <ImageReveal className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
            <Image
              src="/gem-w-girl.png"
              alt="Woman wearing a Tapro Gems sapphire pendant necklace and earrings"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </ImageReveal>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-6">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold-500" />
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            Trusted, Natural,
            <br />
            Certified.
          </h2>
          <p className="font-accent text-lg text-ink-muted italic">
            natural gemstones. independently certified.
          </p>
          <Button href="/certification" variant="outline" size="sm" className="w-fit gap-3">
            <span aria-hidden="true" className="h-px w-6 bg-current" />
            Discover
          </Button>
        </Reveal>
      </div>

      <RevealGroup
        className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6"
        stagger={0.08}
      >
        {points.map(({ icon: Icon, title }) => (
          <div key={title} className="flex flex-col items-center gap-3 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sapphire-900/5 text-sapphire-700">
              <Icon className="h-6 w-6" />
            </span>
            <span className="text-sm font-medium text-ink">{title}</span>
          </div>
        ))}
      </RevealGroup>
    </Section>
  );
}
