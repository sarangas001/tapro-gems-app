import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import AutoplayVideo from "@/components/ui/AutoplayVideo";
import Section from "@/components/ui/Section";
import { getMedia } from "@/lib/store";

export const metadata: Metadata = {
  title: "Gallery | Tapro Gems",
  description: "Images and films from Tapro Gems.",
  alternates: { canonical: "/gallery" },
};

export default async function GalleryPage() {
  const items = await getMedia("gallery");

  return (
    <Section background="white" className="pt-32 md:pt-40 lg:pt-48">
      <Reveal className="mb-16 flex flex-col items-center gap-4 text-center">
        <h1 className="font-display text-3xl font-semibold tracking-[0.2em] text-ink uppercase sm:text-4xl">
          Gallery
        </h1>
        <span className="h-px w-12 bg-gold-500" />
      </Reveal>

      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm shadow-navy-900/10"
          >
            {item.type === "video" ? (
              <AutoplayVideo
                src={item.src}
                poster=""
                controls
                aria-label={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
            )}
          </div>
        ))}
      </RevealGroup>
    </Section>
  );
}
