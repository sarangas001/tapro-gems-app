import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
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
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
            <Image
              src="/team.png"
              alt="The Tapro Gems team"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-6">
          <span className="h-2 w-2 rounded-full bg-gold-500" aria-hidden="true" />
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">Our Story</h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              Tapro Gems is a family-owned gem business rooted in Sri Lanka, built on more than 25 years of knowledge, experience, and passion for the country’s precious gemstones. What began as a family business in Sri Lanka has grown through years of dedication and expertise, and is now expanding to Europe, beginning in Finland.
            </p>
            <p>
              Our experienced team in Sri Lanka has developed extensive knowledge of the local gem industry and carefully selects each gemstone brought to Finland. From the wide variety of gemstones available in Sri Lanka, we choose only the finest stones that meet our standards for quality, authenticity, color, clarity, cut, and overall character.
            </p>
            <p>
              Every gemstone offered by Tapro Gems is selected with care and with the belief that our customers deserve something truly special. Our aim is to bring the finest selections of Sri Lankan gemstones to European customers while maintaining the standards, knowledge, and values that have guided our family business for generations.
            </p>
            <p>
              We believe that owning a gemstone should be more than simply owning something beautiful. It should be an experience built on trust, knowledge, quality, transparency, and genuine value.
            </p>
            <p>
              Tapro Gems is more than a new business — it is the continuation of a family legacy, bringing the beauty, character, and heritage of Sri Lankan gemstones from our homeland to a new generation of customers across Europe.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
