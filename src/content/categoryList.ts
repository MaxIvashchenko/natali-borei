import { CATEGORIES_IMAGES } from '@src/constants';
import { CategoryType, ICategory } from '@src/types';

export const CATEGORIES: ICategory[] = [
  {
    tag: CategoryType.BROOCH,
    imgSrc: CATEGORIES_IMAGES.brooch,
    label: 'Brooch'
  },
  {
    tag: CategoryType.EARRINGS,
    imgSrc: CATEGORIES_IMAGES.earrings,
    label: 'Earrings'
  },
  {
    tag: CategoryType.BRACELETS,
    imgSrc: CATEGORIES_IMAGES.bracelet,
    label: 'Bracelets'
  },
  {
    tag: CategoryType.PENDANT,
    imgSrc: CATEGORIES_IMAGES.pendant,
    label: 'Pendant'
  },
  {
    tag: CategoryType.NECKLACE,
    imgSrc: CATEGORIES_IMAGES.necklace,
    label: 'Necklace'
  },
  {
    tag: CategoryType.ETHNIC,
    imgSrc: CATEGORIES_IMAGES.ethnic,
    label: 'Ethnic'
  }
];
