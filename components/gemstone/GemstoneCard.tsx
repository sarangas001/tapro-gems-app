import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { GemstoneSummary } from "@/types/gemstone";

interface GemstoneCardProps {
  gemstone: GemstoneSummary;
}

export default function GemstoneCard({ gemstone }: GemstoneCardProps) {
  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-navy-800">
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
          className="absolute -bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md shadow-navy-900/15 transition-colors hover:bg-gold-400 hover:text-navy-950"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="flex flex-col items-center gap-1.5 px-2 pt-7 pb-2 text-center">
        <h3 className="text-xs font-medium tracking-[0.12em] text-ivory uppercase">
          {gemstone.name}
        </h3>
        <p className="text-[11px] tracking-[0.08em] text-ivory-200/60 uppercase">
          {gemstone.category} · {gemstone.caratWeight.toFixed(2)} ct
        </p>
      </div>
    </div>
  );
}
