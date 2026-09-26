import Image from "next/image";
import Link from "next/link";
import ImageReveal from "@/components/motion/ImageReveal";
import Reveal from "@/components/motion/Reveal";

const columnLines = {
  backgroundImage:
    "repeating-linear-gradient(to right, transparent, transparent 239px, rgba(11,21,38,0.06) 239px, rgba(11,21,38,0.06) 240px)",
};

export default function CollectionsBanner() {
  return (
    <Link
      href="/shop"
      aria-label="View All Gemstones"
      className="group relative flex h-115 items-center justify-center overflow-hidden bg-ivory sm:h-140 lg:h-165"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={columnLines} />

      <Reveal className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span
          aria-hidden="true"
          className="select-none font-display text-[5rem] leading-none tracking-tight text-sapphire-300 sm:text-[8rem] lg:text-[11rem]"
        >
          brilliance
        </span>
      </Reveal>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[18%] right-[28%] h-2 w-2 rounded-full bg-gold-500/70 sm:right-[32%]"
      />

      <ImageReveal className="pointer-events-none absolute top-0 left-1/2 h-full w-64 -translate-x-1/2 sm:w-80 lg:w-96">
        <Image
          src="/hand-with-gem.png"
          alt="Hand holding a natural sapphire gemstone"
          fill
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 16rem"
          className="object-contain object-top transition-transform duration-500 group-hover:scale-105"
        />
      </ImageReveal>
    </Link>
  );
}
