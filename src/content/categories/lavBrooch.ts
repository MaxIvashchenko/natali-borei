import { CategoryType } from "@src/types";

const STORAGE_URL = process.env.STORAGE_URL;
const path = STORAGE_URL + '/public/common/items';

export default [
    {
        title: 'Lavalier brooch',
        tag: CategoryType.LABVBROOCH,
        id: 'LAV001',
        price: 180,
        images: [
          path + '/lavBrooch/LotusKeepSilent__2.jpg',
          path + 'lavBrooch/LotusKeepSilent__1.jpg',
          path + 'lavBrooch/LotusKeepSilent__3.jpg'
        ],
        ru: {
          name: 'Лотос',
          description: 'Описание на русском',
          material:
            'Состоит из кристаллов и жемчуга Сваровски, японского бисера, кожаных переплетов.'
        },
        en: {
          name: 'Lotus',
          description:
            'Lotus petals are getting closed at night and going back down into the cloudy pond water, with the sunrise to come they are going up opened and getting back again in bright colors. Lotus is a symbol of virgin beauty and eternal rebirth.',
          material:
            'Consists of crystals and pearls Swarovski, Japanese beads, leather binders.'
        },
        dimensions: '7-8',
        available: true
      },
      {
        title: 'Lavalier brooch',
        tag: CategoryType.LABVBROOCH,
        collection: 'Molecula',
        id: 'LAV002',
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
          path + '/lavBrooch/Molecula__1.jpg',
          path + '/lavBrooch/Molecula__2.jpg'
        ],
        available: false
      },
      {
        id: 'LAV003',
        tag: CategoryType.LABVBROOCH,
        title: 'Lavalier brooch',
        ru: {
          name: 'Шелкопряд',
          description:
            'The article is made by technique of beads wickerwork and needlework by luvinel hook. Wings are fixed by wire thread carcass.',
          material:
            'Кристаллы, жемчуг Сваровски, японские бусины с золотым напылением, французские пайетки и натуральный мех.'
        },
        en: {
          name: 'Silkmoth',
          description:
            'The article is made by technique of beads wickerwork and needlework by luvinel hook. Wings are fixed by wire thread carcass.',
          material:
            'Crystals and pearls Swarovski, Japanese gold coated beads and French sequins, natural fur.'
        },
        dimensions: '9-10',
        price: 150,
        images: [
          path + '/lavBrooch/Silkmoth__1.jpg',
          path + '/lavBrooch/Silkmoth__2.jpg',
          path + '/lavBrooch/Silkmoth__3.jpg'
        ],
        available: false
      },
      {
        id: 'LAV004',
        tag: CategoryType.LABVBROOCH,
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
          path + '/lavBrooch/Aquaworld__1.jpg',
          path + '/lavBrooch/Aquaworld__2.jpg'
        ],
        available: true
      },
     
      {
        id: 'LAV005',
        tag: CategoryType.LABVBROOCH,
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
          path + '/lavBrooch/AquaworldSmall__1.jpg',
          path + '/lavBrooch/AquaworldSmall__2.jpg'
        ],
        available: true
      },
      {
        id: 'LAV006',
        tag: CategoryType.LABVBROOCH,
        title: 'Lavalier brooch',
        collection: '',
        ru: {
          name: 'Эделвейс',
          description:
            'Коллекция “Flowers come to life from stones”. Reaching to the stars through the thorns, cherishing delicate dreams and looking for the right way to achieve the hope the flowers come to life from stones. The lavaliere is made by technique of multilayer beads wickerwork and beads embroidery.',
          material:
            'Натуральный камень, компоненты Swarovski, Японский бисер and chain work and French sequins.'
        },
        en: {
          name: 'Edelweiss',
          description:
            'Collection “Flowers come to life from stones”. Reaching to the stars through the thorns, cherishing delicate dreams and looking for the right way to achieve the hope the flowers come to life from stones. The lavaliere is made by technique of multilayer beads wickerwork and beads embroidery.',
          material:
            'Natural stone, Swarovski components, Japanese beads and chain work and French sequins.'
        },
        dimensions: '9-9',
        price: 220,
        images: [
          path + '/lavBrooch/Edelweiss__1.jpg',
          path + '/lavBrooch/Edelweiss__2.jpg'
        ],
        available: true
      },
]