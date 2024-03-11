import { ShopItem } from '@src/types';

import {
  bags,
  bracelets,
  brooch,
  necklace,
  pendant,
} from './categories';

export const items: ShopItem[] = [
  ...bags,
  ...bracelets,
  ...brooch,
  ...necklace,
  ...pendant,

];

export default items;
