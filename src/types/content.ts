export type TAG =
  | 'brooch'
  | 'bracelets'
  | 'rings'
  | 'lavBrooch'
  | 'bags'
  | 'pendant'
  | 'necklace';

export interface ICategories {
  tag: TAG;
  imgSrc: string;
  label: string;
}

type LangDetails = {
  name: string;
  description: string;
  material: string;
};

type Variant = {
  color: string;
  id: string;
  dimensions: string;
  price: number;
  images: string[];
  available: string;
};

export interface ShopItem {
  title: string;
  collection?: string;
  tag: TAG;
  id?: string;
  price?: number;
  images?: string[];
  ru: LangDetails;
  en: LangDetails;
  dimensions?: string;
  available?: string;
  mainImage?: string[];
  variants?: Variant[];
}
