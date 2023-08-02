import { ShopItem } from '@src/types';
const STORAGE_URL = process.env.STORAGE_URL;
const path = STORAGE_URL + '/public/common/items';
// public/common/items/lavBrooch/LotusKeepSilent__3.jpg
const items: ShopItem[] = [
  {
    title: 'Lavalier brooch',
    tag: 'lavBrooch',
    id: 'LB001',
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
    tag: 'lavBrooch',
    collection: 'Molecula',
    id: 'LB002',
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
    id: 'LB003',
    tag: 'lavBrooch',
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
    id: 'LB004',
    title: 'Pendant',
    tag: 'pendant',
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
    id: 'LB005',
    title: 'Necklace',
    tag: 'necklace',
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
    id: 'LB006',
    title: 'Necklace',
    tag: 'necklace',
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
    id: 'LB007',
    title: 'Necklace',
    tag: 'necklace',
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
    id: 'LB008',
    tag: 'lavBrooch',
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
    id: 'LB009',
    title: 'Necklace',
    tag: 'necklace',
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
    id: 'LB010',
    tag: 'lavBrooch',
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
    id: 'LB011',
    tag: 'lavBrooch',
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
  {
    id: 'LB012',
    title: 'Pendant',
    tag: 'pendant',
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
    id: 'LB013',
    title: 'Necklace',
    tag: 'necklace',
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
  },
  {
    id: 'BR001',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR002',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR013',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR014',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR011',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR017',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR003',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR018',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR021',
    title: 'Brooch',
    tag: 'brooch',
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
    tag: 'brooch',
    id: 'BR004',
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
    tag: 'brooch',
    id: 'BR005',
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
    tag: 'brooch',
    id: 'BR016',
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
    id: 'BR006',
    title: 'Brooch',
    tag: 'brooch',
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
      path + '/brooch/Silkmoth__1.jpg',
      path + '/brooch/Silkmoth__2.jpg'
    ],
    available: false
  },
  {
    id: 'BR008',
    title: 'Brooch',
    tag: 'brooch',
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
      path + '/brooch/Silkmoth__1.jpg',
      path + '/brooch/Silkmoth__2.jpg'
    ],
    available: false
  },
  {
    id: 'BR007',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR010',
    title: 'Brooch',
    tag: 'brooch',
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
    images: [path + '/brooch/Medal__1.jpg'],
    available: true
  },
  {
    id: 'BR019',
    title: 'Brooch',
    tag: 'brooch',
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
      'items/Brooch/MedalSilver/Medal__1.jpg',
      'items/Brooch/MedalSilver/Medal__2.jpg',
      'items/Brooch/MedalSilver/Medal__3.jpg',
      'items/Brooch/MedalSilver/Medal__4.gif'
    ],
    available: true
  },
  {
    id: 'BR020',
    title: 'Brooch',
    tag: 'brooch',
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
    mainImage: [
      'items/Brooch/MedalPink/MedalPink__1.jpg',
      'items/Brooch/MedalBlue/Medal__1.jpg',
      'items/Brooch/MedalSilver/Medal__1.jpg',
      'items/Brooch/MedalPurple/Medal__1.jpg'
    ],
    dimensions: '7-7',
    price: 110,
    images: ['items/Brooch/MedalPurple/Medal__1.jpg'],
    available: true
  },

  {
    id: 'BR009',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR015',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR022',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR023',
    title: 'Brooch',
    tag: 'brooch',
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
    id: 'BR012',
    title: 'Brooch',
    tag: 'brooch',
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
  },
  {
    id: 'RG001',
    title: 'Rings',
    tag: 'rings',
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
  },
  {
    id: 'BA001',
    title: 'Bracelets',
    tag: 'bracelets',
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
    id: 'BA002',
    title: 'Bracelets',
    tag: 'bracelets',
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
    id: 'BA003',
    title: 'Bracelets',
    tag: 'bracelets',
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
  },
  {
    id: 'BG001',
    title: 'Bags',
    tag: 'bags',
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
];

export default items;
