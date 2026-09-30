"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ImageReveal from "@/components/motion/ImageReveal";
import { prefersReducedMotion } from "@/lib/motion";

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
  /** When set, the card swaps its image for this video after a short delay. */
  videoSrc?: string;
}

const VIDEO_DELAY_MS = 5000;

export default function CategoryCard({ name, image, href, videoSrc }: CategoryCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!videoSrc || !el) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.4,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [videoSrc]);

  // Start the 5s countdown once the card is on screen.
  useEffect(() => {
    if (!videoSrc || showVideo || !inView || prefersReducedMotion()) return;
    const timer = window.setTimeout(() => setShowVideo(true), VIDEO_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [videoSrc, showVideo, inView]);

  // Only decode/play the video while it is visible.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [showVideo, inView]);

  return (
    <Link ref={cardRef} href={href} className="group block overflow-hidden rounded-2xl">
      <ImageReveal className="relative aspect-4/5 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {videoSrc && showVideo ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={image}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full animate-[fadeIn_0.8s_ease-out] object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-transparent" />
        <span className="absolute bottom-6 left-0 w-full text-center font-display text-lg text-ivory">
          {name}
        </span>
      </ImageReveal>
    </Link>
  );
}
