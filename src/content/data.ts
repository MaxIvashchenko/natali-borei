import { ShopItem } from '@src/types';

import {
  bags,
  bracelets,
  brooch,
  lavBrooch,
  necklace,
  pendant,
  rings
} from './categories';

export const items: ShopItem[] = [
  ...bags,
  ...bracelets,
  ...brooch,
  ...necklace,
  ...lavBrooch,
  ...pendant,
  ...rings
];

export default items;
