import { CategoryType } from '@src/types';

const STORAGE_URL = process.env.STORAGE_URL;
const path = STORAGE_URL + '/public/common/items';

export const pendant = [
  {
    id: 'PEN004',
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
    id: 'PEN012',
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
  }
];
