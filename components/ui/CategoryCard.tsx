import { ArrowRight } from "lucide-react";
import Link from "next/link";
import GemPlaceholder, { type GemTone } from "./GemPlaceholder";

interface CategoryCardProps {
  name: string;
  description: string;
  href: string;
  tone: GemTone;
}

export default function CategoryCard({
  name,
  description,
  href,
  tone,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-transparent bg-white shadow-sm shadow-navy-900/5 transition-[box-shadow,border-color] duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-900/10"
    >
      <div className="relative aspect-4/5 overflow-hidden">
        <GemPlaceholder
          tone={tone}
          className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-transparent" />
        <span className="absolute bottom-5 left-5 font-display text-2xl text-ivory">
          {name}
        </span>
      </div>
      <div className="flex items-center justify-between gap-4 p-6">
        <p className="text-sm text-ink-muted">{description}</p>
        <ArrowRight
          className="h-4 w-4 shrink-0 text-sapphire-700 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
