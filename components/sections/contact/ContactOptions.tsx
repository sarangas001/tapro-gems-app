import { Briefcase, CalendarCheck, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import RevealGroup from "@/components/motion/RevealGroup";
import Section from "@/components/ui/Section";

const options = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general enquiries, gemstone information and business requests.",
    href: "mailto:hello@taprogems.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "For quick questions, product availability and appointment requests.",
    href: "https://wa.me/",
  },
  {
    icon: CalendarCheck,
    title: "Book a Private Appointment",
    description: "Schedule a personal consultation to discuss your gemstone requirements.",
    href: "/appointment",
  },
  {
    icon: Briefcase,
    title: "Wholesale & Professional Enquiries",
    description:
      "For jewellery designers, collectors, investors and wholesale buyers looking for specific stones or sourcing support.",
    href: "/collectors",
  },
];

export default function ContactOptions() {
  return (
    <Section background="white">
      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
        {options.map(({ icon: Icon, title, description, href }) => (
          <Link
            key={title}
            href={href}
            className="group flex flex-col gap-4 rounded-2xl border border-navy-900/10 p-8 transition-colors duration-300 hover:border-gold-300"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sapphire-900/5 text-sapphire-700">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-lg text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
            </div>
          </Link>
        ))}
      </RevealGroup>
    </Section>
  );
}
