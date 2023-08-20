import { ShopItem } from '@src/types';
import {
  rings,
  bags,
  bracelets,
  brooch,
  necklace,
  lavBrooch,
  pendant
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