export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Shop Gemstones", href: "/shop" },
      { label: "Collections", href: "/collections" },
      { label: "Our Story", href: "/about" },
      { label: "Certification", href: "/about#certification" },
      { label: "Private Appointments", href: "/appointment" },
    ],
  },
  {
    title: "Tapro Gems",
    links: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookies Policy", href: "/cookies" },
      { label: "Terms", href: "/terms" },
      { label: "Shipping & Delivery", href: "/terms#shipping-and-delivery" },
    ],
  },
];

export const languages: { code: string; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fi", label: "FI" },
  { code: "sv", label: "SV" },
];
