import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";

export default function CertificationTrust() {
  return (
    <Section background="white">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <span className="h-2 w-2 rounded-full bg-gold-500" aria-hidden="true" />
        <span className="text-sm font-medium tracking-[0.2em] text-gold-600 uppercase">
          Certification &amp; Trust
        </span>
        <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
          Clear, Reliable, Confidence-Driven
        </h2>
        <div className="flex flex-col gap-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            Transparency is an important part of how we work. Our gemstones
            are supported by local Sri Lankan certificates and recognised
            gemstone authority certificates. International certification
            such as GIA or other recognised laboratories can also be
            arranged when required.
          </p>
          <p>
            Our goal is to make every purchase clear, reliable and
            confidence-driven.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
