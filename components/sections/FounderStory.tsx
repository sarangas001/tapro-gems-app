import ImageReveal from "@/components/motion/ImageReveal";
import Reveal from "@/components/motion/Reveal";
import GemPlaceholder from "@/components/ui/GemPlaceholder";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FounderStory() {
  return (
    <Section background="ivory">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <ImageReveal className="aspect-4/5 w-full overflow-hidden rounded-2xl">
          <GemPlaceholder tone="gold" className="h-full w-full" />
        </ImageReveal>
        <Reveal delay={0.15}>
          <SectionHeading
            eyebrow="Founder Story"
            title="Three generations, one origin."
            description="Tapro Gems began with a family connection to the gem fields of Ratnapura, Sri Lanka. Today, that relationship allows us to hand-select stones directly at origin — passing the same trust and care on to every client we serve, from Helsinki to across Europe."
          />
        </Reveal>
      </div>
    </Section>
  );
}
