import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import ImageReveal from "@/components/motion/ImageReveal";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Section from "@/components/ui/Section";

const IMAGE_PATTERN = /\.(png|jpe?g|webp|avif)$/i;

/** Every image dropped into public/jew appears in the gallery automatically. */
function getJewelleryImages() {
  const dir = path.join(process.cwd(), "public", "jew");
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_PATTERN.test(file))
    .sort()
    .map((file) => `/jew/${encodeURIComponent(file)}`);
}

export default function CollectionsGallery() {
  const images = getJewelleryImages();

  return (
    <Section background="white">
      <Reveal className="mb-16 flex flex-col items-center gap-4 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-[0.2em] text-ink uppercase sm:text-4xl">
          The Jewellery Collection
        </h2>
        <span className="h-px w-12 bg-gold-500" />
      </Reveal>

      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <ImageReveal
            key={src}
            className="relative aspect-3/4 w-full overflow-hidden rounded-2xl shadow-sm shadow-navy-900/10"
          >
            <Image
              src={src}
              alt={`Tapro Gems jewellery piece ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </ImageReveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
