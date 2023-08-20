import { CategoryType } from "@src/types";

const STORAGE_URL = process.env.STORAGE_URL;
const path = STORAGE_URL + '/public/common/items';

export default [
  {
    id: 'BAG001',
    title: 'Bags',
    tag: CategoryType.BAGS,
    ru: {
      name: 'Бабье лето',
      description:
        'It is made in various embroidery techniques on a velvet basis. The article was awarded as the first place at the international festival of author’s ornament artwork in Prague (2019).',
      material:
        'Кристаллы и жемчуг Сваровски, золотая нить, шелковые ленты, французские пайетки, проволочная лента и японский бисер.'
    },
    en: {
      name: 'Indian Summer',
      description:
        'It is made in various embroidery techniques on a velvet basis. The article was awarded as the first place at the international festival of author’s ornament artwork in Prague (2019).',
      material:
        'Crystals and pearls Swarovski, gold thread, silk tapes, French sequins, wire ribbon and Japanese beads.'
    },
    dimensions: '17–22',
    price: 500,
    images: [path + '/bags/IndianSummer.jpg'],
    available: true
  }
]