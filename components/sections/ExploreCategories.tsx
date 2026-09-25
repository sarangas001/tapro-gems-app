import CategoryCard from "@/components/ui/CategoryCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { gemstoneCategories } from "@/lib/data/categories";

export default function ExploreCategories() {
  return (
    <Section background="ivory">
      <SectionHeading
        eyebrow="Explore"
        title="Explore Our Gemstones"
        align="center"
        className="mb-14"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {gemstoneCategories.map((category) => (
          <CategoryCard
            key={category.slug}
            name={category.name}
            description={category.description}
            href={`/collections/${category.slug}`}
            tone={category.tone}
          />
        ))}
      </div>
    </Section>
  );
}
