const VERCEL_STORAGE_URL = process.env.VERCEL_STORAGE_URL;

export const IMAGES = {
  FULL_LOGO: VERCEL_STORAGE_URL + '/common/full_logo.png',
  BANNER_BACKGROUND: VERCEL_STORAGE_URL + '/common/banner_background.jpg',
  AUTHOR: VERCEL_STORAGE_URL + '/common/author.jpg',
  MATERIALS: VERCEL_STORAGE_URL + '/common/materials.jpg'
};

export const CATEGORIES_IMAGES = {
  brooch: VERCEL_STORAGE_URL + '/common/categories/brooch.png',
  bracelet: VERCEL_STORAGE_URL + '/common/categories/bracelets.png',
  bags: VERCEL_STORAGE_URL + '/common/categories/bags.png',
  pendant: VERCEL_STORAGE_URL + '/common/categories/pendant.png',
  necklace: VERCEL_STORAGE_URL + '/common/categories/necklace.png',
  ethnic: VERCEL_STORAGE_URL + '/common/categories/ethnic.png',
  earrings: VERCEL_STORAGE_URL + '/common/categories/earrings.png'
};

// https://y1fv9pkaclpwgvci.public.blob.vercel-storage.com/common/author.jpg