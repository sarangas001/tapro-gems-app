import Reveal from "@/components/motion/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Section from "@/components/ui/Section";

export default function ContactHero() {
  return (
    <Section background="ivory" className="pt-32 md:pt-40 lg:pt-48">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal className="flex flex-col gap-6">
          <span className="text-sm font-medium tracking-[0.3em] text-gold-600 uppercase">
            Contact Us
          </span>
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Let&rsquo;s Find the Right Gemstone for You
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <span
            aria-hidden="true"
            className="absolute -top-6 -right-6 -z-10 h-4/5 w-3/5 rounded-2xl bg-sapphire-100"
          />
          <ImagePlaceholder className="aspect-4/5 w-full" />
        </Reveal>
      </div>
    </Section>
  );
}
