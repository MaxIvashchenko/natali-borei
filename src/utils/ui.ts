import { PRICE_FORMAT } from '@src/constants';

export const getPriceFormat = (price?: number) =>
  price ? `${price} ${PRICE_FORMAT}` : '';
