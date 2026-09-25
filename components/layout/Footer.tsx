import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SocialIcon from "@/components/ui/SocialIcon";
import { footerNav, languages } from "@/lib/data/navigation";
import Logo from "./Logo";

const socials = [
  { platform: "instagram" as const, href: "https://instagram.com", label: "Instagram" },
  { platform: "facebook" as const, href: "https://facebook.com", label: "Facebook" },
  { platform: "whatsapp" as const, href: "https://wa.me/", label: "WhatsApp" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-ivory">
      <Container className="py-20">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo theme="dark" />
            <p className="max-w-sm text-sm leading-relaxed text-ivory-200/70">
              A Finland-based, family-owned gemstone house offering 100% natural,
              hand-selected Sri Lankan gemstones to collectors, investors and
              jewellery designers across Europe.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-ivory-200/70">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-400" />
                hello@taprogems.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-400" />
                +358 40 000 0000
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold-400" />
                Helsinki, Finland
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerNav.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold-400">
                  {column.title}
                </span>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ivory-200/70 transition-colors hover:text-ivory"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory-200/50">
            &copy; {year} Tapro Gems Oy, Finland. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-ivory-200/60 transition-colors hover:text-gold-400"
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-1 border-l border-ivory/10 pl-6 text-xs font-medium tracking-wide">
              {languages.map((language, index) => (
                <button
                  key={language.code}
                  type="button"
                  aria-current={index === 0}
                  className={`rounded-full px-2 py-1 transition-colors ${
                    index === 0
                      ? "text-gold-400"
                      : "text-ivory-200/50 hover:text-ivory"
                  }`}
                >
                  {language.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
