import { ShopItem } from '@src/types';

const items: ShopItem[] = [
  {
    title: 'Lavalier brooch',
    tag: 'lavBrooch',
    id: 'LB001',
    price: 180,
    images: [
      'items/Lavalierbrooch/LotusKeepSilent/LotusKeepSilent__2.jpg',
      'items/Lavalierbrooch/LotusKeepSilent/LotusKeepSilent__1.jpg',
      'items/Lavalierbrooch/LotusKeepSilent/LotusKeepSilent__3.jpg'
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
    available: 'available'
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
      'items/Lavalierbrooch/pendantMolecula/Molecula__1.jpg',
      'items/Lavalierbrooch/pendantMolecula/Molecula__2.jpg'
    ],
    available: 'sold'
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
      'items/Lavalierbrooch/Silkmoth/Silkmoth__1.jpg',
      'items/Lavalierbrooch/Silkmoth/Silkmoth__2.jpg',
      'items/Lavalierbrooch/Silkmoth/Silkmoth__3.jpg'
    ],
    available: 'sold'
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
      'items/Lavalierbrooch/MandrakeFlower/MandrakeFlower__1.jpg',
      'items/Lavalierbrooch/MandrakeFlower/MandrakeFlower__2.jpg',
      'items/Lavalierbrooch/MandrakeFlower/MandrakeFlower__3.jpg'
    ],
    available: 'available'
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
      'items/Lavalierbrooch/lavalierMolecula/lavalierMolecula__1.jpg',
      'items/Lavalierbrooch/lavalierMolecula/lavalierMolecula__2.jpg'
    ],
    available: 'available'
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
      'items/Lavalierbrooch/TimelessWind/TimelessWind__1.jpg',
      'items/Lavalierbrooch/TimelessWind/TimelessWind__2.jpg'
    ],
    available: 'sold'
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
      'items/Lavalierbrooch/Splashes/Splashes__1.jpg',
      'items/Lavalierbrooch/Splashes/Splashes__2.jpg',
      'items/Lavalierbrooch/Splashes/Splashes__3.jpg'
    ],
    available: 'sold'
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
      'items/Lavalierbrooch/Aquaworld1/Aquaworld__1.jpg',
      'items/Lavalierbrooch/Aquaworld1/Aquaworld__2.jpg'
    ],
    available: 'available'
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
    images: ['items/Lavalierbrooch/Butterfly/Butterfly__1.jpg'],
    available: 'available'
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
      'items/Lavalierbrooch/AquaworldSmall/AquaworldSmall__1.jpg',
      'items/Lavalierbrooch/AquaworldSmall/AquaworldSmall__2.jpg'
    ],
    available: 'available'
  },
  {
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
      name: 'Edelweiss',
      description:
        'Collection “Flowers come to life from stones”. Reaching to the stars through the thorns, cherishing delicate dreams and looking for the right way to achieve the hope the flowers come to life from stones. The lavaliere is made by technique of multilayer beads wickerwork and beads embroidery.',
      material:
        'Natural stone, Swarovski components, Japanese beads and chain work and French sequins.'
    },
    mainImage: [
      'items/Lavalierbrooch/Edelweiss/Edelweiss__1.jpg',
      'items/Lavalierbrooch/EdelweissPurple/Edelweiss__1.jpg'
    ],
    variants: [
      {
        color: 'gold',
        id: 'LB011',
        dimensions: '9-9',
        price: 220,
        images: [
          'items/Lavalierbrooch/Edelweiss/Edelweiss__1.jpg',
          'items/Lavalierbrooch/Edelweiss/Edelweiss__2.jpg'
        ],
        available: 'available'
      },
      {
        color: 'goldPlum',
        id: 'LB012',
        dimensions: '10-10',
        price: 260,
        images: [
          'items/Lavalierbrooch/EdelweissPurple/Edelweiss__1.jpg',
          'items/Lavalierbrooch/EdelweissPurple/Edelweiss__2.jpg'
        ],
        available: 'available'
      }
    ]
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
      'items/Lavalierbrooch/SecretGarden/SecretGarden__1.jpg',
      'items/Lavalierbrooch/SecretGarden/SecretGarden__2.jpg',
      'items/Lavalierbrooch/SecretGarden/SecretGarden__3.jpg'
    ],
    available: 'available'
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
      'items/Brooch/AtlassBeatle/AtlassBeatle__1.jpg',
      'items/Brooch/AtlassBeatle/AtlassBeatle__2.jpg'
    ],
    available: 'sold'
  },
  {
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
    mainImage: [
      'items/Brooch/BeetleParadi/BeetleParadi__1.jpg',
      'items/Brooch/BeetleParadiBlue/BeetleParadiBlue__1.jpg',
      'items/Brooch/BeetleParadiRed/BeetleParadiRed__1.jpg',
      'items/Brooch/RoyalBlueBeetle/RoyalBlueBeetle__1.jpg',
      'items/Brooch/LavenderBeetle/LavenderBeetle__1.jpg'
    ],
    variants: [
      {
        color: 'goldPlum',
        id: 'BR002',
        dimensions: '4-4,5 cm.',
        price: 100,
        images: [
          'items/Brooch/BeetleParadi/BeetleParadi__1.jpg',
          'items/Brooch/BeetleParadi/BeetleParadi__2.jpg'
        ],
        available: 'sold'
      },
      {
        color: 'goldBlue',
        id: 'BR013',
        dimensions: '4-4,5 cm.',
        price: 100,
        images: ['items/Brooch/BeetleParadiBlue/BeetleParadiBlue__1.jpg'],
        available: 'available'
      },
      {
        color: 'goldRed',
        id: 'BR014',
        dimensions: '4-4,5 cm.',
        price: 100,
        images: ['items/Brooch/BeetleParadiRed/BeetleParadiRed__1.jpg'],
        available: 'available'
      },
      {
        color: 'darkBlue',
        id: 'BR011',
        dimensions: '4-4,5 cm.',
        price: 100,
        images: ['items/Brooch/RoyalBlueBeetle/RoyalBlueBeetle__1.jpg'],
        available: 'available'
      },
      {
        color: 'roseBrown',
        id: 'BR017',
        dimensions: '4-4,5 cm.',
        price: 100,
        images: ['items/Brooch/LavenderBeetle/LavenderBeetle__1.jpg'],
        available: 'available'
      }
    ]
  },
  {
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
    mainImage: [
      'items/Brooch/Butterfly/Butterfly__1.jpg',
      'items/Brooch/ButterflyPink/ButterflyPink__1.jpg',
      'items/Brooch/ButterflyRosyBrown/ButterflyRosyBrown__1.jpg'
    ],
    variants: [
      {
        color: 'purple',
        id: 'BR003',
        dimensions: '5-10',
        price: 130,
        images: [
          'items/Brooch/Butterfly/Butterfly__1.jpg',
          'items/Brooch/Butterfly/Butterfly__2.jpg'
        ],
        available: 'sold'
      },
      {
        color: 'pink',
        id: 'BR018',
        dimensions: '9-4,5',
        price: 130,
        images: [
          'items/Brooch/ButterflyPink/ButterflyPink__1.jpg',
          'items/Brooch/ButterflyPink/ButterflyPink__2.jpg'
        ],
        available: 'available'
      },
      {
        color: 'roseBrown',
        id: 'BR021',
        dimensions: '9-4,5',
        price: 130,
        images: [
          'items/Brooch/ButterflyRosyBrown/ButterflyRosyBrown__1.jpg',
          'items/Brooch/ButterflyRosyBrown/ButterflyRosyBrown__2.jpg',
          'items/Brooch/ButterflyRosyBrown/ButterflyRosyBrown__3.gif'
        ],
        available: 'available'
      }
    ]
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
      'items/Brooch/Dragonfly/Dragonfly__1.jpg',
      'items/Brooch/Dragonfly/Dragonfly__2.jpg'
    ],
    available: 'available'
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
    mainImage: [
      'items/Brooch/Fly/Fly__1.jpg',
      'items/Brooch/FlyGreen/FlyGreen__1.jpg'
    ],
    variants: [
      {
        color: 'gold',
        id: 'BR005',
        dimensions: '6-7',
        price: 130,
        images: [
          'items/Brooch/Fly/Fly__1.jpg',
          'items/Brooch/Fly/Fly__2.jpg',
          'items/Brooch/Fly/Fly__3.jpg'
        ],
        available: 'available'
      },
      {
        color: 'green',
        id: 'BR016',
        dimensions: '6-7',
        price: 110,
        images: [
          'items/Brooch/FlyGreen/FlyGreen__2.jpg',
          'items/Brooch/FlyGreen/FlyGreen__1.jpg'
        ],
        available: 'available'
      }
    ]
  },
  {
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
    mainImage: [
      'items/Brooch/SilkmothWhite/Silkmoth__1.jpg',
      'items/Brooch/SilkmothBlack/Silkmoth__1.jpg'
    ],
    variants: [
      {
        color: 'silverWhite',
        id: 'BR006',
        dimensions: '7-7',
        price: 120,
        images: [
          'items/Brooch/SilkmothWhite/Silkmoth__1.jpg',
          'items/Brooch/SilkmothWhite/Silkmoth__2.jpg'
        ],
        available: 'sold'
      },
      {
        color: 'darkBlue',
        id: 'BR008',
        dimensions: '7-7',
        price: 120,
        images: [
          'items/Brooch/SilkmothBlack/Silkmoth__1.jpg',
          'items/Brooch/SilkmothBlack/Silkmoth__2.jpg'
        ],
        available: 'sold'
      }
    ]
  },
  {
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
    variants: [
      {
        color: 'pinkBlue',
        id: 'BR007',
        dimensions: '6-6',
        price: 130,
        images: ['items/Brooch/MedalPink/MedalPink__1.jpg'],
        available: 'sold'
      },
      {
        color: 'lightBlue',
        id: 'BR010',
        dimensions: '6-6',
        price: 130,
        images: ['items/Brooch/MedalBlue/Medal__1.jpg'],
        available: 'available'
      },
      {
        color: 'silverBlue',
        id: 'BR019',
        dimensions: '7-7',
        price: 110,
        images: [
          'items/Brooch/MedalSilver/Medal__1.jpg',
          'items/Brooch/MedalSilver/Medal__2.jpg',
          'items/Brooch/MedalSilver/Medal__3.jpg',
          'items/Brooch/MedalSilver/Medal__4.gif'
        ],
        available: 'available'
      },
      {
        color: 'purple',
        id: 'BR020',
        dimensions: '7-7',
        price: 110,
        images: ['items/Brooch/MedalPurple/Medal__1.jpg'],
        available: 'available'
      }
    ]
  },
  {
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
    mainImage: [
      'items/Brooch/RoyalRedBeetle/RoyalRedBeetle__1.jpg',
      'items/Brooch/RoyalGreenBeetle/RoyalGreenBeetle__1.jpg',
      'items/Brooch/RoyalGoldBeetle/RoyalGoldBeetle__1.jpg'
    ],
    variants: [
      {
        color: 'purple',
        id: 'BR009',
        dimensions: '4-4,5',
        price: 90,
        images: [
          'items/Brooch/RoyalRedBeetle/RoyalRedBeetle__1.jpg',
          'items/Brooch/RoyalRedBeetle/RoyalRedBeetle__2.jpg'
        ],
        available: 'available'
      },
      {
        color: 'goldGreen',
        id: 'BR015',
        dimensions: '4-4',
        price: 60,
        images: ['items/Brooch/RoyalGreenBeetle/RoyalGreenBeetle__1.jpg'],
        available: 'available'
      },
      {
        color: 'gold',
        id: 'BR022',
        dimensions: '4-4',
        price: 70,
        images: [
          'items/Brooch/RoyalGoldBeetle/RoyalGoldBeetle__1.jpg',
          'items/Brooch/RoyalGoldBeetle/RoyalGoldBeetle__2.jpg',
          'items/Brooch/RoyalGoldBeetle/RoyalGoldBeetle__3.gif'
        ],
        available: 'available'
      },
      {
        color: 'purple',
        id: 'BR023',
        dimensions: '4,5-5',
        price: 100,
        images: ['items/Brooch/RoyalPurpureBeetle/RoyalPurpureBeetle__1.jpeg'],
        available: 'available'
      }
    ]
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
    images: ['items/Brooch/Cicada/Cicada__1.jpg'],
    available: 'available'
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
    images: [
      'items/Ring/Molecula/Molecula__1.jpg',
      'items/Ring/Molecula/Molecula__2.jpg'
    ],
    available: 'sold'
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
      'items/Bracelets/Molecula/Molecula__1.jpg',
      'items/Bracelets/Molecula/Molecula__2.jpg'
    ],
    available: 'available'
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
    images: ['items/Bracelets/Butterfly/Butterfly__1.jpg'],
    available: 'available'
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
    images: ['items/Bracelets/FairyOfTheNight/FairyOfTheNight.jpg'],
    available: 'available'
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
    images: ['items/Bags/IndianSummer/IndianSummer.jpg'],
    available: 'available'
  }
];

export default items;
