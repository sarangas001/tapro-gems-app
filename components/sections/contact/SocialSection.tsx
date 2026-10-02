import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import SocialIcon from "@/components/ui/SocialIcon";
import { contactDetails } from "@/lib/data/contact";

const socials = [
  { platform: "whatsapp" as const, href: contactDetails.whatsapp, label: "WhatsApp" },
];

export default function SocialSection() {
  return (
    <Section background="ivory">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
          Stay Connected
        </h2>
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
          Follow Tapro Gems for new gemstone arrivals, featured stones,
          behind-the-scenes sourcing and brand updates.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-navy-900/15 text-ink-muted transition-colors hover:border-gold-400 hover:text-gold-600"
            >
              <SocialIcon platform={social.platform} className="h-6 w-6" />
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
