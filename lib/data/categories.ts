import type { GemTone } from "@/components/ui/GemPlaceholder";

export interface GemstoneCategory {
  name: string;
  slug: string;
  description: string;
  tone: GemTone;
}

export const gemstoneCategories: GemstoneCategory[] = [
  {
    name: "Sapphire",
    slug: "sapphire",
    description:
      "The signature Ceylon blue — hand-selected and certified for depth of colour.",
    tone: "sapphire",
  },
  {
    name: "Ruby",
    slug: "ruby",
    description:
      "Rare Sri Lankan rubies prized for their vivid, pigeon-blood tone.",
    tone: "ruby",
  },
  {
    name: "Star Sapphire",
    slug: "star-sapphire",
    description:
      "Natural asterism formed over millions of years, cut en cabochon.",
    tone: "gold",
  },
  {
    name: "Rare Gemstones",
    slug: "rare-gemstones",
    description:
      "Exceptional and unusual stones sourced for the discerning collector.",
    tone: "mixed",
  },
];
