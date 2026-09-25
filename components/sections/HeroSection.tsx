"use client";

import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import { useLayoutEffect, useRef, useState } from "react";
import Parallax from "@/components/motion/Parallax";
import Container from "@/components/ui/Container";
import GemPlaceholder from "@/components/ui/GemPlaceholder";
import gsap, { ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion, supportsWebGL } from "@/lib/motion";
import HeroContent from "./HeroContent";
import HeroLoader from "./HeroLoader";

const SapphireScene = dynamic(() => import("@/components/three/SapphireScene"), {
  ssr: false,
  loading: () => <HeroLoader />,
});

/**
 * Cinematic hero: intro timeline (background -> sapphire -> header -> copy
 * -> CTAs) plus a scroll-scrubbed exit (sapphire scales/fades, copy lifts,
 * background dissolves into the ivory page background beneath it). Never
 * pins the section — scrolling stays entirely native.
 */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [show3D, setShow3D] = useState(false);

  useLayoutEffect(() => {
    // One-time client-only feature detection: must run in an effect (not a
    // lazy useState initializer) so the server render and the client's
    // first hydration pass both start from the same `false` default —
    // avoiding a hydration mismatch — then upgrade right after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow3D(!prefersReducedMotion() && supportsWebGL());
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from('[data-hero="background"]', { opacity: 0, duration: 1.1 })
        .from('[data-hero="sapphire"]', { opacity: 0, scale: 0.92, duration: 1.3 }, "-=0.7")
        .from('[data-hero="label"]', { opacity: 0, y: 16, duration: 0.8 }, "-=0.7")
        .from('[data-hero="heading-1"]', { opacity: 0, y: 26, duration: 0.9 }, "-=0.45")
        .from('[data-hero="heading-2"]', { opacity: 0, y: 26, duration: 0.9 }, "-=0.6")
        .from('[data-hero="paragraph"]', { opacity: 0, y: 16, duration: 0.8 }, "-=0.55")
        .from(
          '[data-hero="buttons"] > *',
          { opacity: 0, y: 16, duration: 0.7, stagger: 0.12 },
          "-=0.4",
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
        .to('[data-hero="sapphire"]', { scale: 0.88, opacity: 0.65 }, 0)
        .to('[data-hero="text-column"]', { y: -60, opacity: 0.15 }, 0)
        .to(
          '[data-hero="background"]',
          { clipPath: "inset(0% 0% 100% 0%)" },
          0,
        );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-ivory text-ivory"
    >
      <div data-hero="background" className="absolute inset-0 bg-navy-950">
        <Parallax
          amount={70}
          className="absolute top-[-20%] -right-1/4 h-[140%] w-full sm:w-2/3"
        >
          <GemPlaceholder
            tone="sapphire"
            className="h-full w-full rounded-full opacity-70 blur-3xl"
          />
        </Parallax>
        <Parallax amount={35} className="absolute top-24 left-[8%] h-64 w-64">
          <div
            aria-hidden="true"
            className="h-full w-full rounded-full bg-gold-500/20 blur-[100px]"
          />
        </Parallax>
        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/40 to-navy-950/10" />
      </div>

      <Container className="relative grid gap-16 pt-32 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8">
        <HeroContent />
        <div
          data-hero="sapphire"
          className="relative order-first h-[320px] sm:h-[420px] lg:order-none lg:h-[560px]"
        >
          {show3D ? (
            <SapphireScene />
          ) : (
            <GemPlaceholder
              tone="sapphire"
              className="h-full w-full rounded-full opacity-80 blur-2xl"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
