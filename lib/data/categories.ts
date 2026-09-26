export interface GemstoneCategory {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const gemstoneCategories: GemstoneCategory[] = [
  {
    name: "Sapphire",
    slug: "sapphire",
    description:
      "The signature Ceylon blue — hand-selected and certified for depth of colour.",
    image: "/sapphire.png",
  },
  {
    name: "Ruby",
    slug: "ruby",
    description:
      "Rare Sri Lankan rubies prized for their vivid, pigeon-blood tone.",
    image: "/ruby.png",
  },
  {
    name: "Star Sapphire",
    slug: "star-sapphire",
    description:
      "Natural asterism formed over millions of years, cut en cabochon.",
    image: "/star-sapphire.png",
  },
  {
    name: "Rare Gemstones",
    slug: "rare-gemstones",
    description:
      "Exceptional and unusual stones sourced for the discerning collector.",
    image: "/rare-gemstones.png",
  },
];
