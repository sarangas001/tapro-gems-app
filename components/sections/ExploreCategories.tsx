import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import CategoryCard from "@/components/ui/CategoryCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { gemstoneCategories } from "@/lib/data/categories";

export default function ExploreCategories() {
  return (
    <Section background="ivory">
      <Reveal className="mb-14">
        <SectionHeading eyebrow="Explore" title="Explore Our Gemstones" align="center" />
      </Reveal>
      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {gemstoneCategories.map((category) => (
          <CategoryCard
            key={category.slug}
            name={category.name}
            description={category.description}
            href={`/collections/${category.slug}`}
            tone={category.tone}
          />
        ))}
      </RevealGroup>
    </Section>
  );
}
