import { CategoryType } from '@src/types';

const STORAGE_URL = process.env.STORAGE_URL;
const path = STORAGE_URL + '/public/common/items';

export const bracelets = [
  {
    id: 'BRA001',
    title: 'Bracelets',
    tag: CategoryType.BRACELETS,
    ru: {
      name: 'Молекула',
      description:
        'Кулон, как каркас уникальна и неповторима, рождая что-то новое. Потоки жемчуга переливаются в пятидесяти серых оттенках. Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Различный натуральный жемчуг, кристаллы, жемчуг Сваровски и японский бисер.'
    },
    en: {
      name: 'Molecula',
      description:
        'Conjunction, as a framework, is unique and inimitable that brings to life something new. Pearls flows are going on in light of fifty grey tinges. The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Various natural pearls, crystals and pearls Swarovski, Japanese beads.'
    },
    dimensions: '19/5',
    price: 200,
    images: [
      path + '/bracelets/Molecula__1.jpg',
      path + '/bracelets/Molecula__2.jpg'
    ],
    available: true
  },
  {
    id: 'BRA002',
    title: 'Bracelets',
    tag: CategoryType.BRACELETS,
    ru: {
      name: 'Бабочка',
      description:
        'The article is made by technique of beads wickerwork and needlework by luvinel hook. ',
      material:
        'Кристаллы и жемчуг Сваровски, японский бисер и французские пайетки.'
    },
    en: {
      name: 'Butterfly',
      description:
        'The article is made by technique of beads wickerwork and needlework by luvinel hook. ',
      material:
        'Crystals and pearls Swarovski, Japanese beads and French sequins.'
    },
    dimensions: '19/4',
    price: 120,
    images: [path + '/bracelets/Butterfly__1.jpg'],
    available: true
  },
  {
    id: 'BRA003',
    title: 'Bracelets',
    tag: CategoryType.BRACELETS,
    ru: {
      name: 'Фея ночи',
      description:
        'The article is made by technique of beads wickerwork and needlework by luvinel hook.',
      material:
        'Кристаллы и жемчуг Сваровски, японский бисер и французские пайетки.'
    },
    en: {
      name: 'Fairy of the Night',
      description:
        'The article is made by technique of beads wickerwork and needlework by luvinel hook.',
      material:
        'Crystals and pearls Swarovski, Japanese beads and French sequins.'
    },
    dimensions: '19/4',
    price: 120,
    images: [path + '/bracelets/FairyOfTheNight.jpg'],
    available: true
  }
];
