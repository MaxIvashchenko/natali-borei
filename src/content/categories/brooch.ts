import { CategoryType } from '@src/types';

const STORAGE_URL = process.env.STORAGE_URL;
const path = STORAGE_URL + '/public/common/items';

export const brooch = [
  {
    id: 'BRC001',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Облачный Жук',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Ткань Велюр, кристаллы, жемчуг Сваровски, японский бисер и французские пайетки.'
    },
    en: {
      name: 'Atlass Beatle',
      description:
        'The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Velure  tissue, crystals and pearls Swarovski, Japanese beads and French sequins.'
    },
    dimensions: '6-9',
    price: 130,
    images: [
      path + '/brooch/AtlassBeatle__1.jpg',
      path + '/brooch/AtlassBeatle__2.jpg'
    ],
    available: false
  },
  {
    id: 'BRC002',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Жук Паради',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Кристаллы, цепочка из страз, жемчуг Сваровски, бусины, покрытые японским золотом, французские пайетки.'
    },
    en: {
      name: 'Beetle Paradi',
      description:
        'The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Crystals, strass chain, pearls Swarovski, Japanese gold coated beads, French sequins.'
    },
    dimensions: '4-4,5 cm.',
    price: 100,
    images: [
      path + '/brooch/BeetleParadi__1.jpg',
      path + '/brooch/BeetleParadi__2.jpg'
    ],
    available: false
  },
  {
    id: 'BRC013',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Жук Паради',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Кристаллы, цепочка из страз, жемчуг Сваровски, бусины, покрытые японским золотом, французские пайетки.'
    },
    en: {
      name: 'Beetle Paradi',
      description:
        'The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Crystals, strass chain, pearls Swarovski, Japanese gold coated beads, French sequins.'
    },
    dimensions: '4-4,5 cm.',
    price: 100,
    images: [path + '/brooch/BeetleParadiBlue__1.jpg'],
    available: true
  },
  {
    id: 'BRC014',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Жук Паради',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Кристаллы, цепочка из страз, жемчуг Сваровски, бусины, покрытые японским золотом, французские пайетки.'
    },
    en: {
      name: 'Beetle Paradi',
      description:
        'The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Crystals, strass chain, pearls Swarovski, Japanese gold coated beads, French sequins.'
    },
    dimensions: '4-4,5 cm.',
    price: 100,
    images: [path + '/brooch/BeetleParadiRed__1.jpg'],
    available: true
  },
  {
    id: 'BRC011',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Жук Паради',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Кристаллы, цепочка из страз, жемчуг Сваровски, бусины, покрытые японским золотом, французские пайетки.'
    },
    en: {
      name: 'Beetle Paradi',
      description:
        'The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Crystals, strass chain, pearls Swarovski, Japanese gold coated beads, French sequins.'
    },
    dimensions: '4-4,5 cm.',
    price: 100,
    images: [path + '/brooch/RoyalBlueBeetle__1.jpg'],
    available: true
  },
  {
    id: 'BRC017',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Жук Паради',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Кристаллы, цепочка из страз, жемчуг Сваровски, бусины, покрытые японским золотом, французские пайетки.'
    },
    en: {
      name: 'Beetle Paradi',
      description:
        'The article is made by technique of embroidery and beads wickerwork.',
      material:
        'Crystals, strass chain, pearls Swarovski, Japanese gold coated beads, French sequins.'
    },
    dimensions: '4-4,5 cm.',
    price: 100,
    images: [path + '/brooch/LavenderBeetle__1.jpg'],
    available: true
  },
  {
    title: 'Lavalier brooch',
    tag: CategoryType.BROOCH,
    id: 'BRC007',
    price: 180,
    images: [
      path + '/brooch/LotusKeepSilent__2.jpg',
      path + '/brooch/LotusKeepSilent__1.jpg',
      path + '/brooch/LotusKeepSilent__3.jpg'
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
    id: 'LAV003',
    tag: CategoryType.BROOCH,
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
      path + '/brooch/Silkmoth__1.jpg',
      path + '/brooch/Silkmoth__2.jpg',
      path + '/brooch/Silkmoth__3.jpg'
    ],
    available: false
  },
  {
    id: 'BRC003',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Бабочка',
      description:
        'A romantic accessory article to keep a great mood going on. The brooch is made in various techniques of cotton thread embroidery, cannetille and beads.',
      material:
        'Элементы Сваровски, шелковая нить, японский бисер, каннетиль, французские пайетки, рафия.'
    },
    en: {
      name: 'Butterfly',
      description:
        'A romantic accessory article to keep a great mood going on. The brooch is made in various techniques of cotton thread embroidery, cannetille and beads.',
      material:
        'Swarovski elements, silk thread, Japanese beads, cannetille, French paillettes , raffia.'
    },
    dimensions: '5-10',
    price: 130,
    images: [
      path + '/brooch/Butterfly__1.jpg',
      path + '/brooch/Butterfly__2.jpg'
    ],
    available: false
  },

  {
    id: 'BRC018',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Бабочка',
      description:
        'A romantic accessory article to keep a great mood going on. The brooch is made in various techniques of cotton thread embroidery, cannetille and beads.',
      material:
        'Элементы Сваровски, шелковая нить, японский бисер, каннетиль, французские пайетки, рафия.'
    },
    en: {
      name: 'Butterfly',
      description:
        'A romantic accessory article to keep a great mood going on. The brooch is made in various techniques of cotton thread embroidery, cannetille and beads.',
      material:
        'Swarovski elements, silk thread, Japanese beads, cannetille, French paillettes , raffia.'
    },
    dimensions: '9-4,5',
    price: 130,
    images: [
      path + '/brooch/ButterflyPink__1.jpg',
      path + '/brooch/ButterflyPink__2.jpg'
    ],
    available: true
  },
  {
    id: 'BRC021',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Бабочка',
      description:
        'A romantic accessory article to keep a great mood going on. The brooch is made in various techniques of cotton thread embroidery, cannetille and beads.',
      material:
        'Элементы Сваровски, шелковая нить, японский бисер, каннетиль, французские пайетки, рафия.'
    },
    en: {
      name: 'Butterfly',
      description:
        'A romantic accessory article to keep a great mood going on. The brooch is made in various techniques of cotton thread embroidery, cannetille and beads.',
      material:
        'Swarovski elements, silk thread, Japanese beads, cannetille, French paillettes , raffia.'
    },
    dimensions: '9-4,5',
    price: 130,
    images: [
      path + '/brooch/ButterflyRosyBrown__1.jpg',
      path + '/brooch/ButterflyRosyBrown__2.jpg',
      path + '/brooch/ButterflyRosyBrown__3.gif'
    ],
    available: true
  },
  {
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    id: 'BRC004',
    ru: {
      name: 'Стрекоза',
      description:
        'The article is made by technique of painted silk, embroidery and beads wickerwork. ',
      material: 'Кристаллы и жемчуг Сваровски и японский бисер.'
    },
    en: {
      name: 'Dragonfly',
      description:
        'The article is made by technique of painted silk, embroidery and beads wickerwork. ',
      material: 'Crystals and pearls Swarovski and Japanese beads.'
    },
    dimensions: '7-9',
    price: 130,
    images: [
      path + '/brooch/Dragonfly__1.jpg',
      path + '/brooch/Dragonfly__2.jpg'
    ],
    available: true
  },
  {
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    id: 'BRC005',
    ru: {
      name: 'Муха',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Кристаллы и жемчуг Сваровски, японский бисер и французские пайетки.'
    },
    en: {
      name: 'Fly',
      description:
        'The article is made by technique of embroidery and beads wickerwork',
      material:
        'Crystals and pearls Swarovski, Japanese beads and French sequins.'
    },
    dimensions: '6-7',
    price: 130,
    images: [
      path + '/brooch/Fly__1.jpg',
      path + '/brooch/Fly__2.jpg',
      path + '/brooch/Fly__3.jpg'
    ],
    available: true
  },
  {
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    id: 'BRC016',
    ru: {
      name: 'Муха',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Кристаллы и жемчуг Сваровски, японский бисер и французские пайетки.'
    },
    en: {
      name: 'Fly',
      description:
        'The article is made by technique of embroidery and beads wickerwork',
      material:
        'Crystals and pearls Swarovski, Japanese beads and French sequins.'
    },
    dimensions: '6-7',
    price: 110,
    images: [
      path + '/brooch/FlyGreen__2.jpg',
      path + '/brooch/FlyGreen__1.jpg'
    ],
    available: true
  },
  {
    id: 'BRC006',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
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
    dimensions: '7-7',
    price: 120,
    images: [
      path + '/brooch/SilkmothWhite__1.jpg',
      path + '/brooch/SilkmothWhite__2.jpg'
    ],
    available: false
  },
  {
    id: 'BRC008',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
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
    dimensions: '7-7',
    price: 120,
    images: [
      path + '/brooch/SilkmothBlack__1.jpg',
      path + '/brooch/SilkmothBlack__2.jpg'
    ],
    available: false
  },
  {
    id: 'BRC024',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Медаль',
      description:
        'Trend of fashion season. Once upon a time Coco Chanel brought the medal brooch into fashion as a memory of a beloved Russian nobleman. And ever since then the medal brooch had become a decoration for remarkable individuals.',
      material:
        'Кристаллы, жемчуг Сваровски и японские бусины, покрытые золотом.'
    },
    en: {
      name: 'Medal',
      description:
        'Trend of fashion season. Once upon a time Coco Chanel brought the medal brooch into fashion as a memory of a beloved Russian nobleman. And ever since then the medal brooch had become a decoration for remarkable individuals.',
      material:
        'The article consists of crystals and pearls Swarovski, Japanese gold coated beads.'
    },

    dimensions: '6-6',
    price: 130,
    images: [path + '/brooch/MedalPink__1.jpg'],
    available: false
  },
  {
    id: 'BRC010',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Медаль',
      description:
        'Trend of fashion season. Once upon a time Coco Chanel brought the medal brooch into fashion as a memory of a beloved Russian nobleman. And ever since then the medal brooch had become a decoration for remarkable individuals.',
      material:
        'Кристаллы, жемчуг Сваровски и японские бусины, покрытые золотом.'
    },
    en: {
      name: 'Medal',
      description:
        'Trend of fashion season. Once upon a time Coco Chanel brought the medal brooch into fashion as a memory of a beloved Russian nobleman. And ever since then the medal brooch had become a decoration for remarkable individuals.',
      material:
        'The article consists of crystals and pearls Swarovski, Japanese gold coated beads.'
    },
    dimensions: '6-6',
    price: 130,
    images: [path + '/brooch/MedalBlue__1.jpg'],
    available: true
  },
  {
    id: 'BRC019',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Медаль',
      description:
        'Trend of fashion season. Once upon a time Coco Chanel brought the medal brooch into fashion as a memory of a beloved Russian nobleman. And ever since then the medal brooch had become a decoration for remarkable individuals.',
      material:
        'Кристаллы, жемчуг Сваровски и японские бусины, покрытые золотом.'
    },
    en: {
      name: 'Medal',
      description:
        'Trend of fashion season. Once upon a time Coco Chanel brought the medal brooch into fashion as a memory of a beloved Russian nobleman. And ever since then the medal brooch had become a decoration for remarkable individuals.',
      material:
        'The article consists of crystals and pearls Swarovski, Japanese gold coated beads.'
    },
    dimensions: '7-7',
    price: 110,
    images: [
      path + '/brooch/MedalSilver__1.jpg',
      path + '/brooch/MedalSilver__2.jpg',
      path + '/brooch/MedalSilver__3.jpg'
    ],
    available: true
  },
  {
    id: 'BRC020',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Медаль',
      description:
        'Trend of fashion season. Once upon a time Coco Chanel brought the medal brooch into fashion as a memory of a beloved Russian nobleman. And ever since then the medal brooch had become a decoration for remarkable individuals.',
      material:
        'Кристаллы, жемчуг Сваровски и японские бусины, покрытые золотом.'
    },
    en: {
      name: 'Medal',
      description:
        'Trend of fashion season. Once upon a time Coco Chanel brought the medal brooch into fashion as a memory of a beloved Russian nobleman. And ever since then the medal brooch had become a decoration for remarkable individuals.',
      material:
        'The article consists of crystals and pearls Swarovski, Japanese gold coated beads.'
    },
    dimensions: '7-7',
    price: 110,
    images: [path + '/brooch/MedalPurple__1.jpg'],
    available: true
  },
  {
    id: 'BRC009',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Королевский Жук',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material: 'Кристаллы, цепочка из страз, жемчуг Сваровски, японский бисер.'
    },
    en: {
      name: 'Royal Beetle',
      description:
        'The article is made by technique of embroidery and beads wickerwork.',
      material: 'Crystals, strass chain, pearls Swarovski, Japanese beads.'
    },
    dimensions: '4-4,5',
    price: 90,
    images: [
      path + '/brooch/RoyalRedBeetle__1.jpg',
      path + '/brooch/RoyalRedBeetle__2.jpg'
    ],
    available: true
  },
  {
    id: 'BRC015',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Королевский Жук',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material: 'Кристаллы, цепочка из страз, жемчуг Сваровски, японский бисер.'
    },
    en: {
      name: 'Royal Beetle',
      description:
        'The article is made by technique of embroidery and beads wickerwork.',
      material: 'Crystals, strass chain, pearls Swarovski, Japanese beads.'
    },
    dimensions: '4-4',
    price: 60,
    images: [path + '/brooch/RoyalGreenBeetle__1.jpg'],
    available: true
  },
  {
    id: 'BRC022',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Королевский Жук',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material: 'Кристаллы, цепочка из страз, жемчуг Сваровски, японский бисер.'
    },
    en: {
      name: 'Royal Beetle',
      description:
        'The article is made by technique of embroidery and beads wickerwork.',
      material: 'Crystals, strass chain, pearls Swarovski, Japanese beads.'
    },
    dimensions: '4-4',
    price: 70,
    images: [
      path + '/brooch/RoyalGoldBeetle__1.jpg',
      path + '/brooch/RoyalGoldBeetle__2.jpg',
      path + '/brooch/RoyalGoldBeetle__3.gif'
    ],
    available: true
  },
  {
    id: 'BRC023',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Королевский Жук',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material: 'Кристаллы, цепочка из страз, жемчуг Сваровски, японский бисер.'
    },
    en: {
      name: 'Royal Beetle',
      description:
        'The article is made by technique of embroidery and beads wickerwork.',
      material: 'Crystals, strass chain, pearls Swarovski, Japanese beads.'
    },
    dimensions: '4,5-5',
    price: 100,
    images: [path + '/brooch/RoyalPurpureBeetle__1.jpeg'],
    available: true
  },
  {
    id: 'BRC012',
    title: 'Brooch',
    tag: CategoryType.BROOCH,
    ru: {
      name: 'Цикада',
      description: 'Изделие изготовлено в технике вышивки и плетения бусинами.',
      material:
        'Кристаллы и жемчуг Сваровски, японский бисер, французские пайетки.'
    },
    en: {
      name: 'Cicada',
      description:
        'The article is made by technique of embroidery and beads wickerwork.',
      material: 'Crystals and pearls Swarovski, Japanese beads, French sequins.'
    },
    dimensions: '6-6',
    price: 120,
    images: [path + '/brooch/Cicada__1.jpg'],
    available: true
  }
];
