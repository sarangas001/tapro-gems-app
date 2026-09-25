export type GemstoneCategoryName =
  | "Sapphire"
  | "Ruby"
  | "Star Sapphire"
  | "Rare Gemstone";

export interface GemstoneSummary {
  id: string;
  slug: string;
  name: string;
  category: GemstoneCategoryName;
  caratWeight: number;
  cut: string;
  colour: string;
  origin: string;
}
