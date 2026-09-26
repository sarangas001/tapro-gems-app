import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { GemstoneSummary } from "@/types/gemstone";

interface GemstoneCardProps {
  gemstone: GemstoneSummary;
}

export default function GemstoneCard({ gemstone }: GemstoneCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-navy-800 shadow-sm shadow-navy-950/30 transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-950/40">
      <div className="relative aspect-square">
        <Image
          src={gemstone.image}
          alt={gemstone.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Link
          href={`/gemstones/${gemstone.slug}`}
          aria-label={`View ${gemstone.name}`}
          className="absolute -bottom-5 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md shadow-navy-950/30 transition-colors hover:bg-gold-400 hover:text-navy-950"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="flex flex-col gap-4 p-5 pt-8">
        <div className="text-center">
          <span className="text-[11px] font-medium tracking-[0.2em] text-gold-400 uppercase">
            {gemstone.category}
          </span>
          <h3 className="mt-1.5 font-display text-lg text-ivory">{gemstone.name}</h3>
        </div>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-ivory/10 pt-4 text-sm">
          <div>
            <dt className="text-[11px] text-ivory-200/50 uppercase">Carat</dt>
            <dd className="text-ivory-200/90">{gemstone.caratWeight.toFixed(2)} ct</dd>
          </div>
          <div>
            <dt className="text-[11px] text-ivory-200/50 uppercase">Cut</dt>
            <dd className="text-ivory-200/90">{gemstone.cut}</dd>
          </div>
          <div>
            <dt className="text-[11px] text-ivory-200/50 uppercase">Colour</dt>
            <dd className="text-ivory-200/90">{gemstone.colour}</dd>
          </div>
          <div>
            <dt className="text-[11px] text-ivory-200/50 uppercase">Origin</dt>
            <dd className="text-ivory-200/90">{gemstone.origin}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
