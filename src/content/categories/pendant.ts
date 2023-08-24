import { CategoryType } from '@src/types';

const STORAGE_URL = process.env.STORAGE_URL;
const path = STORAGE_URL + '/public/common/items';

export const pendant = [
  {
    id: 'PEN001',
    title: 'Pendant',
    tag: CategoryType.PENDANT,
    ru: {
      name: 'Цветок Мандрагоры',
      description:
        'The philosophers’ stone amid the Globe flora, mystical and enigmatical. Is there a way to obtain eternal youth and immortality, to have a welfare and wealth, to enjoy supernatural capabilities and real love? This is what the story of beads wickerwork narrates about the magical flower. Lavaliere is made by technique of embroidery and multilayer beads wickerwork.',
      material:
        'Кристаллы, жемчуг Сваровски и японские бусины, покрытые золотом'
    },
    en: {
      name: 'Mandrake Flower',
      description:
        'The philosophers’ stone amid the Globe flora, mystical and enigmatical. Is there a way to obtain eternal youth and immortality, to have a welfare and wealth, to enjoy supernatural capabilities and real love? This is what the story of beads wickerwork narrates about the magical flower. Lavaliere is made by technique of embroidery and multilayer beads wickerwork.',
      material: 'Crystals and pearls Swarovski, Japanese gold coated beads.'
    },
    dimensions: '8-9',
    price: 200,
    images: [
      path + '/pendant/MandrakeFlower__1.jpg',
      path + '/pendant/MandrakeFlower__2.jpg',
      path + '/pendant/MandrakeFlower__3.jpg'
    ],
    available: true
  },
  {
    id: 'PEN002',
    title: 'Pendant',
    tag: CategoryType.PENDANT,
    collection: 'Edelweiss',
    ru: {
      name: 'Эделвейс',
      description:
        'Коллекция “Flowers come to life from stones”. Reaching to the stars through the thorns, cherishing delicate dreams and looking for the right way to achieve the hope the flowers come to life from stones. The lavaliere is made by technique of multilayer beads wickerwork and beads embroidery.',
      material:
        'Натуральный камень, компоненты Swarovski, Японский бисер and chain work and French sequins.'
    },
    en: {
      name: 'Edelweiss Purple',
      description:
        'Collection “Flowers come to life from stones”. Reaching to the stars through the thorns, cherishing delicate dreams and looking for the right way to achieve the hope the flowers come to life from stones. The lavaliere is made by technique of multilayer beads wickerwork and beads embroidery.',
      material:
        'Natural stone, Swarovski components, Japanese beads and chain work and French sequins.'
    },
    dimensions: '10-10',
    price: 260,
    images: [
      path + '/pendant/EdelweissPurple__1.jpg',
      path + '/pendant/EdelweissPurple__2.jpg'
    ],
    available: true
  },
  {
    title: 'Lavalier brooch',
    tag: CategoryType.PENDANT,
    collection: 'Molecula',
    id: 'PEN003',
    ru: {
      name: 'Подвеска Молекула',
      description:
        'Conjunction, as a framework, is unique and inimitable that brings to life something new. The brooch is made by technique of embroidery and beads wickerwork.',
      material:
        'Состоит из разнообразного натурального жемчуга, кристаллов, жемчуга Сваровски и японского бисера.'
    },
    en: {
      name: 'Lavalier Molecula',
      description:
        'Conjunction, as a framework, is unique and inimitable that brings to life something new. The brooch is made by technique of embroidery and beads wickerwork.',
      material:
        'Consists of various natural pearls, crystals and pearls Swarovski, Japanese beads.'
    },
    dimensions: '6-7',
    price: 90,
    images: [
      path + '/pendant/Molecula__1.jpg',
      path + '/pendant/Molecula__2.jpg'
    ],
    available: false
  },
  {
    id: 'PEN004',
    tag: CategoryType.PENDANT,
    title: 'Lavalier brooch',
    collection: 'Aquaworld',
    ru: {
      name: 'Aquaworld',
      description:
        'Подвеска изготовлена в технике вышивки, плетения бисером и сутажной вышивки.',
      material:
        'Натуральный камень, детали Савровски, японский бисер и сутажный шнур.'
    },
    en: {
      name: 'Aquaworld',
      description:
        'The lavaliere is made by technique of embroidery, beads wickerwork and soutache embroidery.',
      material:
        'Natural stone, Swarovski components, Japanese beads and soutache cord.'
    },
    dimensions: '7-9',
    price: 190,
    images: [
      path + '/pendant/Aquaworld__1.jpg',
      path + '/pendant/Aquaworld__2.jpg'
    ],
    available: true
  },
  {
    id: 'PEN005',
    tag: CategoryType.PENDANT,
    title: 'Lavalier brooch',
    collection: 'Aquaworld',
    ru: {
      name: 'Aquaworld small',
      description:
        'Подвеска изготовлена в технике вышивки, плетения бисером и сутажной вышивки.',
      material:
        'Натуральный камень, детали Савровски, японский бисер и сутажный шнур.'
    },
    en: {
      name: 'Aquaworld small',
      description:
        'The lavaliere is made by technique of embroidery, beads wickerwork and soutache embroidery.',
      material:
        'Natural stone, Swarovski components, Japanese beads and soutache cord.'
    },
    dimensions: '9-5',
    price: 170,
    images: [
      path + '/pendant/AquaworldSmall__1.jpg',
      path + '/pendant/AquaworldSmall__2.jpg'
    ],
    available: true
  },
];
