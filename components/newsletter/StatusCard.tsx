import Link from "next/link";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

interface StatusCardProps {
  eyebrow: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
}

/** Branded result screen for newsletter confirmation. */
export default function StatusCard({ eyebrow, title, children, action }: StatusCardProps) {
  return (
    <Section background="ivory" className="pt-32 md:pt-40 lg:pt-48">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold-600">{eyebrow}</span>
        <h1 className="font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h1>
        <div className="text-base leading-relaxed text-ink-muted sm:text-lg">{children}</div>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          {action}
          <Button href="/shop" variant={action ? "outline" : "primary"}>
            Explore the collection
          </Button>
        </div>
        <Link href="/" className="text-sm text-ink-muted underline underline-offset-4 hover:text-ink">
          Back to home
        </Link>
      </div>
    </Section>
  );
}
