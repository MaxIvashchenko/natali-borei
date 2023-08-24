import { ShopItem } from '@src/types';

import {
  bags,
  bracelets,
  brooch,
  necklace,
  pendant,
  rings
} from './categories';

export const items: ShopItem[] = [
  ...bags,
  ...bracelets,
  ...brooch,
  ...necklace,
  ...pendant,
  ...rings
];

export default items;
