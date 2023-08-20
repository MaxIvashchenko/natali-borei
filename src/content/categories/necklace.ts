import { CategoryType } from '@src/types';

const STORAGE_URL = process.env.STORAGE_URL;
const path = STORAGE_URL + '/public/common/items';

export const necklace = [
  {
    id: 'NEC001',
    title: 'Necklace',
    tag: CategoryType.NECKLACE,
    ru: {
      name: 'Timeless Wind',
      description:
        'Время похоже на энергию преобразования и созидания. Он заставляет звезды сиять и расширяется в пространстве. Время идет вечно. The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Различные натуральные камни, японский бисер бронзового блеска, кристаллы Сваровски.'
    },
    en: {
      name: 'Timeless Wind',
      description:
        'The time is like energy of transformation and creation. It makes the stars shining and expands through the space; the time keeps on going forever. The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Various natural stones, Japanese beads of bronzy sheens, crystals Swarovski.'
    },
    dimensions: '18/4',
    price: 400,
    images: [
      path + '/necklace/TimelessWind__1.jpg',
      path + '/necklace/TimelessWind__2.jpg'
    ],
    available: false
  },
  {
    id: 'NEC002',
    title: 'Necklace',
    tag: CategoryType.NECKLACE,
    ru: {
      name: 'Всплеск',
      description:
        'This is a feast of violet colors full of joy and light. The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Натуральные камни аметист, японский бисер фиолетового блеска, кристаллы Сваровски.'
    },
    en: {
      name: 'Splashes',
      description:
        'This is a feast of violet colors full of joy and light. The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Natural amethyst stones, Japanese beads of violet sheens, crystals Swarovski.'
    },
    dimensions: '18/4',
    price: 400,
    images: [
      path + '/necklace/Splashes__1.jpg',
      path + '/necklace/Splashes__2.jpg',
      path + '/necklace/Splashes__3.jpg'
    ],
    available: false
  },
  {
    id: 'NEC003',
    title: 'Necklace',
    tag: CategoryType.NECKLACE,
    collection: 'Molecula',
    ru: {
      name: 'Кулон Молекула',
      description:
        'Кулон, как каркас уникальна и неповторима, рождая что-то новое. Потоки жемчуга переливаются в пятидесяти серых оттенках. Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Различный натуральный жемчуг, кристаллы, жемчуг Сваровски и японский бисер.'
    },
    en: {
      name: 'Pendant Molecula',
      description:
        'Conjunction, as a framework, is unique and inimitable that brings to life something new. Pearls flows are going on in light of fifty grey tinges. The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Various natural pearls, crystals and pearls Swarovski, Japanese beads.'
    },
    dimensions: '8/17',
    price: 250,
    images: [
      path + '/necklace/lavalierMolecula__1.jpg',
      path + '/necklace/lavalierMolecula__2.jpg'
    ],
    available: true
  },
  {
    id: 'NEC004',
    title: 'Necklace',
    tag: CategoryType.NECKLACE,
    ru: {
      name: 'Butterfly',
      description:
        'This is a shining festivity of Swarovski crystals. You can hardly go unnoticed. The lavaliere has an asymmetric shape. The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Натуральный камень, детали Савровски, японский бисер и сутажный шнур.'
    },
    en: {
      name: 'Butterfly',
      description:
        'This is a shining festivity of Swarovski crystals. You can hardly go unnoticed. The lavaliere has an asymmetric shape. The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Natural stone, Swarovski components, Japanese beads and soutache cord.'
    },
    dimensions: '15/15',
    price: 500,
    images: [path + '/necklace/Butterfly__1.jpg'],
    available: true
  },
  {
    id: 'NEC005',
    title: 'Necklace',
    tag: CategoryType.NECKLACE,
    ru: {
      name: 'Secret Garden',
      description:
        "At the marvelous moment, when the angels sleep, let space and time be powerless. I'll fly to a mysterious garden throwing away everything earthly, like a burden.",
      material:
        'Натуральный камень, кристаллы и жемчуг Сваровски, японский бисер, металлическая вставка.'
    },
    en: {
      name: 'Secret Garden',
      description:
        "At the marvelous moment, when the angels sleep, let space and time be powerless. I'll fly to a mysterious garden throwing away everything earthly, like a burden.",
      material:
        'Natural stone, crystals and pearls Swarowski, Japanese beads, metal furniture.'
    },
    dimensions: '10-11',
    price: 270,
    images: [
      path + '/necklace/SecretGarden__1.jpg',
      path + '/necklace/SecretGarden__2.jpg',
      path + '/necklace/SecretGarden__3.jpg'
    ],
    available: true
  }
];
