import { CategoryType } from '@src/types';

const STORAGE_URL = process.env.STORAGE_URL;
const path = STORAGE_URL + '/public/common/items';

export const rings = [
  {
    id: 'RIN001',
    title: 'Rings',
    tag: CategoryType.RINGS,
    ru: {
      name: 'Молекула',
      description:
        'Conjunction, as a framework, is unique and inimitable that brings to life something new.  Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Различный натуральный жемчуг, кристаллы, жемчуг Сваровски и японский бисер.'
    },
    en: {
      name: 'Molecula',
      description:
        'Conjunction, as a framework, is unique and inimitable that brings to life something new.  The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Various natural pearls, crystals and pearls Swarovski, Japanese beads.'
    },
    dimensions: '6-7',
    price: 90,
    images: [path + '/rings/Molecula__1.jpg', path + '/rings/Molecula__2.jpg'],
    available: false
  }
];
