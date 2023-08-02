import { CATEGORIES_IMAGES } from '@src/constants';
import { ICategory } from '@src/types';

export const CATEGORIES: ICategory[] = [
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
