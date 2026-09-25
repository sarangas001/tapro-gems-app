import { Gem, Globe, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

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
      <SectionHeading
        eyebrow="Why Tapro Gems"
        title="Trusted, Natural, Certified"
        align="center"
        className="mb-14"
      />
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {points.map(({ icon: Icon, title }) => (
          <div key={title} className="flex flex-col items-center gap-3 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sapphire-900/5 text-sapphire-700">
              <Icon className="h-6 w-6" />
            </span>
            <span className="text-sm font-medium text-ink">{title}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
