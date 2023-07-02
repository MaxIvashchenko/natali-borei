import { ICategories } from '@src/types';

import { CATEGORIES_IMAGES } from './images';

export const CATEGORIES: ICategories[] = [
  {
    tag: 'brooch',
    imgSrc: CATEGORIES_IMAGES.brooch,
    label: 'Brooch'
  },
  {
    tag: 'bracelets',
    imgSrc: CATEGORIES_IMAGES.bracelet,
    label: 'Bracelets'
  },
  {
    tag: 'rings',
    imgSrc: CATEGORIES_IMAGES.ring,
    label: 'Rings'
  },
  {
    tag: 'lavBrooch',
    imgSrc: CATEGORIES_IMAGES.lavBrooch,
    label: 'Lavalier brooch'
  },
  {
    tag: 'bags',
    imgSrc: CATEGORIES_IMAGES.bags,
    label: 'Bags'
  },
  {
    tag: 'pendant',
    imgSrc: CATEGORIES_IMAGES.pendant,
    label: 'Pendant'
  },
  {
    tag: 'necklace',
    imgSrc: CATEGORIES_IMAGES.necklace,
    label: 'Necklace'
  }
];
