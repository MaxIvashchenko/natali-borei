import { FAVORITE_ITEMS } from '@src/constants';
import _get from 'lodash/get';
import { setCookie } from 'nookies';
import { parseCookies } from 'nookies';

const cookies = {
  setProductToFavorite: (id: string) => {
    const favItems: string[] = cookies.getFavoriteProducts();
    const isExist = favItems.some((itemId) => itemId === id);

    const data = isExist
      ? favItems.filter((itemId) => itemId === id)
      : [...favItems, id];

    const stringifyData = JSON.stringify(data);

    setCookie(null, FAVORITE_ITEMS, stringifyData, {
      maxAge: 24 * 60 * 60,
      path: '/'
    });
  },
  getFavoriteProducts: () => {
    const parsedCookies = parseCookies();

    const stringArray = _get(parsedCookies, FAVORITE_ITEMS, JSON.stringify([]));
    return JSON.parse(stringArray);
  }
};

export default cookies;
