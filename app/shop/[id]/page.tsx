import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/gemstone/ProductGallery";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { gemstones, getGemstoneBySlug } from "@/lib/data/gemstones";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return gemstones.map((gemstone) => ({ id: gemstone.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const gemstone = getGemstoneBySlug(id);

  if (!gemstone) {
    return { title: "Gemstone Not Found | Tapro Gems" };
  }

  return {
    title: `${gemstone.name} | Tapro Gems`,
    description: gemstone.description,
  };
}

export default async function GemstonePage({ params }: PageProps) {
  const { id } = await params;
  const gemstone = getGemstoneBySlug(id);

  if (!gemstone) {
    notFound();
  }

  const specs = [
    { label: "Carat", value: `${gemstone.caratWeight.toFixed(2)} ct` },
    { label: "Cut", value: gemstone.cut },
    { label: "Colour", value: gemstone.colour },
    { label: "Origin", value: gemstone.origin },
  ];

  return (
    <Section background="ivory" className="pt-32 md:pt-40 lg:pt-48">
      <Link
        href="/shop"
        className="mb-10 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Shop
      </Link>

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <ProductGallery
            name={gemstone.name}
            image={gemstone.image}
            gallery={gemstone.gallery}
            videoSrc={gemstone.video}
          />
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
          <span className="inline-block w-fit border-b-2 border-gold-500 pb-1 text-xs font-medium tracking-[0.2em] text-ink uppercase">
            {gemstone.category}
          </span>
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            {gemstone.name}
          </h1>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-b border-navy-900/10 py-6 text-sm">
            {specs.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-[11px] text-ink-muted/60 uppercase">{label}</dt>
                <dd className="mt-1 text-base text-ink">{value}</dd>
              </div>
            ))}
            <div className="col-span-2">
              <dt className="text-[11px] text-ink-muted/60 uppercase">Certification</dt>
              <dd className="mt-1 text-base text-ink">{gemstone.certification}</dd>
            </div>
          </dl>

          <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
            {gemstone.description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/appointment" size="md">
              Book Appointment
            </Button>
            <Button href="/about#certification" variant="outline" size="md">
              Certification Standards
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
