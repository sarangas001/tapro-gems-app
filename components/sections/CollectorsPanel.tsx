import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const audiences = ["Collectors", "Investors", "Jewellery Designers", "Wholesale Buyers"];

export default function CollectorsPanel() {
  return (
    <Section background="navy">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          tone="dark"
          eyebrow="For Professionals"
          title="Collectors & Professionals"
          description="Private sourcing, wholesale parcels and consultation for collectors, investors and jewellery designers who require a trusted, direct relationship with origin."
        />
        <div className="flex flex-col gap-6 border-t border-gold-400/20 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          <ul className="flex flex-wrap gap-3">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="rounded-full border border-ivory/20 px-4 py-2 text-sm text-ivory-200/80"
              >
                {audience}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/collectors" size="md">
              Private Sourcing
            </Button>
            <Button href="/contact" variant="outline" tone="dark" size="md">
              Speak With Us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
