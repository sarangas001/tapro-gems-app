"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { primaryNav } from "@/lib/data/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ivory shadow-sm shadow-navy-900/5" : "bg-transparent"
      }`}
    >
      <Reveal delay={0.1} y={-12} duration={0.8}>
        <Container className="flex h-20 items-center justify-between">
          <Logo className="h-12 w-auto sm:h-14" />

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  solid ? "text-ink hover:text-sapphire-700" : "text-ivory hover:text-gold-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/appointment" size="sm" tone={solid ? "light" : "dark"}>
              Book Appointment
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              solid ? "text-ink" : "text-ivory"
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>
      </Reveal>

      {open ? (
        <div id="mobile-menu" className="border-t border-ivory-200 bg-ivory lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-ivory-100"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/appointment" className="mt-4" onClick={() => setOpen(false)}>
              Book Appointment
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
