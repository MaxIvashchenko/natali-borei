export type TAG =
  | 'brooch'
  | 'bracelets'
  | 'rings'
  | 'lavBrooch'
  | 'bags'
  | 'pendant'
  | 'necklace';

export interface ICategory {
  tag: TAG;
  imgSrc: string;
  label: string;
}

type LangDetails = {
  name: string;
  description: string;
  material: string;
};

export interface ShopItem {
  title: string;
  collection?: string;
  tag: TAG;
  id: string;
  price: number;
  images: string[];
  ru: LangDetails;
  en: LangDetails;
  dimensions: string;
  available: boolean;
}
