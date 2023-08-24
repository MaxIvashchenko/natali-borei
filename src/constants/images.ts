const STORAGE_URL = process.env.STORAGE_URL;

export const IMAGES = {
  FULL_LOGO:
    STORAGE_URL + '/public/common/full_logo.png?t=2023-06-23T08%3A25%3A11.452Z',
  BANNER_BACKGROUND:
    STORAGE_URL +
    '/public/common/banner_background.jpg?t=2023-06-23T15%3A16%3A47.641Z',
  AUTHOR: STORAGE_URL + '/public/common/author.jpg',
  MATERIALS: STORAGE_URL + '/public/common/materials.jpg'
};

export const CATEGORIES_IMAGES = {
  brooch: STORAGE_URL + '/public/common/categories/brooch.png',
  bracelet: STORAGE_URL + '/public/common/categories/bracelets.png',
  ring: STORAGE_URL + '/public/common/categories/rings.png',
  bags: STORAGE_URL + '/public/common/categories/bags.png',
  pendant: STORAGE_URL + '/public/common/categories/pendant.png',
  necklace: STORAGE_URL + '/public/common/categories/necklace.png',
  ethnic: STORAGE_URL + '/public/common/categories/ethnic.png',
  earrings: STORAGE_URL + '/public/common/categories/earrings.png'
};
