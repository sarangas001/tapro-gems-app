import Reveal from "@/components/motion/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Section from "@/components/ui/Section";

export default function OurStory() {
  return (
    <Section background="ivory">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal className="relative mx-auto w-full max-w-sm lg:order-first lg:max-w-none">
          <span
            aria-hidden="true"
            className="absolute -top-6 -left-6 -z-10 h-4/5 w-3/5 rounded-2xl bg-sapphire-100"
          />
          <ImagePlaceholder className="aspect-4/5 w-full" />
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-6">
          <span className="h-2 w-2 rounded-full bg-gold-500" aria-hidden="true" />
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">Our Story</h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              Tapro Gems was created with a clear purpose: to connect the
              natural beauty of Sri Lankan gemstones with clients who value
              authenticity, rarity and trust.
            </p>
            <p>
              As a family-owned business based in Finland, we combine direct
              access to Sri Lankan gemstones with a calm, transparent and
              personalised approach to service.
            </p>
            <p>
              Every stone is selected with care, with a strong focus on
              natural origin, quality and certification.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
