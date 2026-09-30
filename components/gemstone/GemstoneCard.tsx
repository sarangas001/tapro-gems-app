import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AutoplayVideo from "@/components/ui/AutoplayVideo";
import type { GemstoneSummary } from "@/types/gemstone";

interface GemstoneCardProps {
  gemstone: GemstoneSummary;
  /** Play the gemstone's video in place of its image, when it has one. */
  autoplayVideo?: boolean;
}

export default function GemstoneCard({ gemstone, autoplayVideo = false }: GemstoneCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-ivory-100 shadow-sm shadow-navy-900/5 transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-900/10">
      <div className="relative aspect-square">
        {autoplayVideo && gemstone.video ? (
          <AutoplayVideo
            src={gemstone.video}
            poster={gemstone.image}
            aria-label={gemstone.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Image
            src={gemstone.image}
            alt={gemstone.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span
          aria-hidden="true"
          className="absolute -bottom-5 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md shadow-navy-900/15 transition-colors group-hover:bg-gold-400 group-hover:text-navy-950"
        >
          <Plus className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-col gap-4 p-5 pt-8">
        <div className="text-center">
          <span className="text-[11px] font-medium tracking-[0.2em] text-gold-600 uppercase">
            {gemstone.category}
          </span>
          <h3 className="mt-1.5 font-display text-lg text-ink">{gemstone.name}</h3>
        </div>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-navy-900/10 pt-4 text-sm">
          <div>
            <dt className="text-[11px] text-ink-muted/60 uppercase">Carat</dt>
            <dd className="text-ink">{gemstone.caratWeight.toFixed(2)} ct</dd>
          </div>
          <div>
            <dt className="text-[11px] text-ink-muted/60 uppercase">Cut</dt>
            <dd className="text-ink">{gemstone.cut}</dd>
          </div>
          <div>
            <dt className="text-[11px] text-ink-muted/60 uppercase">Colour</dt>
            <dd className="text-ink">{gemstone.colour}</dd>
          </div>
          <div>
            <dt className="text-[11px] text-ink-muted/60 uppercase">Origin</dt>
            <dd className="text-ink">{gemstone.origin}</dd>
          </div>
        </dl>
      </div>
      <Link
        href={`/shop/${gemstone.slug}`}
        aria-label={`View ${gemstone.name}`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-gold-500"
      />
    </div>
  );
}
