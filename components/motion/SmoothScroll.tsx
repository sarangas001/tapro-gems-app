"use client";

import Lenis from "lenis";
import { useLayoutEffect } from "react";
import gsap, { ScrollTrigger } from "@/lib/gsap";

/**
 * Syncs Lenis's smooth-scroll rAF loop with GSAP's ticker so ScrollTrigger
 * stays in lock-step with the smoothed scroll position. Lenis keeps native
 * page scrolling (scrollbar, anchor links, position: fixed) intact and
 * honours prefers-reduced-motion itself (locks lerp to 1, i.e. native feel).
 */
export default function SmoothScroll() {
  useLayoutEffect(() => {
    const lenis = new Lenis({ duration: 1.1, anchors: true });

    const syncScrollTrigger = () => ScrollTrigger.update();
    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", syncScrollTrigger);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.off("scroll", syncScrollTrigger);
      lenis.destroy();
    };
  }, []);

  return null;
}
