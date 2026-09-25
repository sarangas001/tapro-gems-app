import Link from "next/link";
import GemPlaceholder, { type GemTone } from "@/components/ui/GemPlaceholder";
import type { GemstoneSummary } from "@/types/gemstone";

const toneByCategory: Record<GemstoneSummary["category"], GemTone> = {
  Sapphire: "sapphire",
  Ruby: "ruby",
  "Star Sapphire": "gold",
  "Rare Gemstone": "mixed",
};

interface GemstoneCardProps {
  gemstone: GemstoneSummary;
}

export default function GemstoneCard({ gemstone }: GemstoneCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-transparent bg-white shadow-sm shadow-navy-900/5 transition-[box-shadow,border-color] duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-900/10">
      <div className="relative aspect-square overflow-hidden">
        <GemPlaceholder
          tone={toneByCategory[gemstone.category]}
          className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
            {gemstone.category}
          </span>
          <h3 className="mt-2 font-display text-xl text-ink">{gemstone.name}</h3>
        </div>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div>
            <dt className="text-ink-muted/70">Carat</dt>
            <dd className="text-ink">{gemstone.caratWeight}</dd>
          </div>
          <div>
            <dt className="text-ink-muted/70">Cut</dt>
            <dd className="text-ink">{gemstone.cut}</dd>
          </div>
          <div>
            <dt className="text-ink-muted/70">Colour</dt>
            <dd className="text-ink">{gemstone.colour}</dd>
          </div>
          <div>
            <dt className="text-ink-muted/70">Origin</dt>
            <dd className="text-ink">{gemstone.origin}</dd>
          </div>
        </dl>
        <Link
          href={`/gemstones/${gemstone.slug}`}
          className="mt-auto text-sm font-medium text-sapphire-700 underline decoration-sapphire-700/30 underline-offset-4 hover:decoration-sapphire-700"
        >
          View Stone
        </Link>
      </div>
    </div>
  );
}
