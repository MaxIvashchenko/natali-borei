export enum CategoryType {
  BROOCH = 'brooch',
  BRACELETS = 'bracelets',
  BAGS = 'bags',
  PENDANT = 'pendant',
  NECKLACE = 'necklace',
  ETHNIC = 'ethnic',
  EARRINGS = 'earrings'
}

export interface ICategory {
  tag: CategoryType;
  imgSrc: string;
  label: string;
}

export type LangDetails = {
  name: string;
  description: string;
  material: string;
};

export interface ShopItem {
  title: string;
  collection?: string;
  tag: CategoryType;
  id: string;
  price: number;
  images: string[];
  ru: LangDetails;
  en: LangDetails;
  dimensions: string;
  available: boolean;
}
