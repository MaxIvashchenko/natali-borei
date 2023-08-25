import { PRICE_FORMAT } from '@src/constants';
import { CategoryIdName, CategoryType } from '@src/types';

export const getPriceFormat = (price?: number) =>
  price ? `${price} ${PRICE_FORMAT}` : '';

export const setItemId = (num: number, type: CategoryType) =>
  CategoryIdName[type] + `0000${num}`.substr(3);
