import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GemstoneCard from "@/components/gemstone/GemstoneCard";
import { featuredGemstones } from "@/lib/data/gemstones";

export default function FeaturedGemstones() {
  return (
    <Section background="white">
      <div className="mb-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Curated Selection"
          title="Featured Gemstones"
          description="A rotating selection of exceptional stones. Prices available on request."
        />
        <Button href="/shop" variant="outline" size="sm" className="shrink-0">
          View All Gemstones
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredGemstones.map((gemstone) => (
          <GemstoneCard key={gemstone.id} gemstone={gemstone} />
        ))}
      </div>
    </Section>
  );
}
