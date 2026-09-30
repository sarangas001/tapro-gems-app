export interface TeamMember {
  name: string;
  title: string;
  paragraphs: string[];
}

export interface TeamBlock {
  image: string;
  imageAlt: string;
  members: TeamMember[];
}

export const teamBlocks: TeamBlock[] = [
  {
    image: "/udith.png",
    imageAlt: "Uditha De Alwis, Proprietor of On Gem Group",
    members: [
      {
        name: "Uditha De Alwis",
        title: "Proprietor of On Gem Group and Managing Director of Serene Gem Group",
        paragraphs: [
          "Uditha De Alwis leads On Gem Group and Serene Gem Group, two established names in Sri Lanka’s gem trade. His experience spans sourcing rough and cut stones at origin, working alongside miners and cutters, and supplying gemstones to international buyers.",
          "That hands-on knowledge of the Ratnapura gem fields and long-standing relationships across the industry shape the standards behind every stone Tapro Gems offers.",
        ],
      },
    ],
  },
  {
    image: "/team.png",
    imageAlt: "The Tapro Gems founding team",
    members: [
      {
        name: "Chathuranga Weerakoon",
        title: "Co-Founder & Marketing Director",
        paragraphs: [
          "Chathuranga guides how Tapro Gems presents its gemstones to European collectors, investors and designers, telling the story of each stone clearly and honestly.",
        ],
      },
      {
        name: "Akla De Alwis",
        title: "Co-Founder & Operational Director",
        paragraphs: [
          "Akla oversees day-to-day operations, from selecting stones in Sri Lanka to certification, logistics and personal client service in Finland.",
        ],
      },
    ],
  },
];
