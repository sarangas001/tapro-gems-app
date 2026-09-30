"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ImageReveal from "@/components/motion/ImageReveal";
import { prefersReducedMotion } from "@/lib/motion";

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
  /** When set, the card plays this video instead of showing the image. */
  videoSrc?: string;
}

export default function CategoryCard({ name, image, href, videoSrc }: CategoryCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Only decode/play the video while it is on screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !prefersReducedMotion()) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, [videoSrc]);

  return (
    <Link href={href} className="group block overflow-hidden rounded-2xl">
      <ImageReveal className="relative aspect-4/5 overflow-hidden">
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={image}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-transparent" />
        <span className="absolute bottom-6 left-0 w-full text-center font-display text-lg text-ivory">
          {name}
        </span>
      </ImageReveal>
    </Link>
  );
}
