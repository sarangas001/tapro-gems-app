import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";

export default function ContactIntroduction() {
  return (
    <Section background="ivory">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <span className="h-2 w-2 rounded-full bg-gold-500" aria-hidden="true" />
        <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
          Speak Directly with Tapro Gems
        </h2>
        <div className="flex flex-col gap-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            We offer personalised support for gemstone enquiries, private
            appointments, sourcing requests and certification questions.
          </p>
          <p>
            If you are looking for a specific gemstone, need more
            information about a stone in our collection, or would like to
            arrange a private consultation, please get in touch with us.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
