import type { GemstoneSummary } from "@/types/gemstone";

export const featuredGemstones: GemstoneSummary[] = [
  {
    id: "1",
    slug: "royal-blue-ceylon-sapphire",
    name: "Royal Blue Ceylon Sapphire",
    category: "Sapphire",
    caratWeight: 4.21,
    cut: "Cushion",
    colour: "Royal Blue",
    origin: "Ratnapura, Sri Lanka",
    image: "/Royal Blue Ceylon Sapphire.png",
    gallery: ["/sapphire.png"],
    certification: "Sri Lanka Gem & Jewellery Authority certified; GIA certification available on request.",
    description:
      "A richly saturated royal blue sapphire from the gem fields of Ratnapura, cut to a classic cushion silhouette that maximises brilliance. Its even colour saturation and exceptional clarity make it a rare find even among Ceylon sapphires.",
  },
  {
    id: "2",
    slug: "pigeon-blood-ruby",
    name: "Pigeon Blood Ruby",
    category: "Ruby",
    caratWeight: 2.85,
    cut: "Oval",
    colour: "Vivid Red",
    origin: "Elahera, Sri Lanka",
    image: "/Pigeon Blood Ruby.png",
    gallery: ["/ruby.png"],
    certification: "Sri Lanka Gem & Jewellery Authority certified; GIA certification available on request.",
    description:
      "A vivid, high-saturation red ruby from Elahera, prized for its rare pigeon-blood hue. Hand-selected for its clarity and depth of colour, this oval-cut stone is exceptionally scarce in natural, untreated form.",
  },
  {
    id: "3",
    slug: "natural-star-sapphire",
    name: "Natural Star Sapphire",
    category: "Star Sapphire",
    caratWeight: 6.02,
    cut: "Cabochon",
    colour: "Cornflower Blue",
    origin: "Ratnapura, Sri Lanka",
    image: "/Natural Star Sapphire.png",
    gallery: ["/star-sapphire.png"],
    certification: "Sri Lanka Gem & Jewellery Authority certified; GIA certification available on request.",
    description:
      "A cornflower-blue star sapphire displaying a sharp six-ray asterism when moved under light, formed naturally over millions of years. Cut en cabochon to showcase its silk inclusions and natural star effect.",
  },
  {
    id: "4",
    slug: "padparadscha-sapphire",
    name: "Padparadscha Sapphire",
    category: "Rare Gemstone",
    caratWeight: 3.14,
    cut: "Emerald",
    colour: "Pink-Orange",
    origin: "Ratnapura, Sri Lanka",
    image: "/Padparadscha Sapphire.png",
    gallery: ["/rare-gemstones.png"],
    certification: "Sri Lanka Gem & Jewellery Authority certified; GIA certification available on request.",
    description:
      "An exceptionally rare pink-orange padparadscha sapphire, named for the lotus blossom it resembles. Its delicate, even colour zoning and emerald cut make it a coveted centrepiece for collectors.",
  },
];

/** Full catalogue — currently identical to the featured set. */
export const gemstones = featuredGemstones;
