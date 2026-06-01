export interface ProductMedia {
  type: "image" | "video";
  src: string;
  kind?: "product" | "model" | "detail";
  poster?: string;
}

export interface Product {
  id: string;
  price: number;
  name: string;
  altName?: string;
  coll: "beadwork" | "contempo";
  cat: string;
  subCat: string;
  img: string;
  media: ProductMedia[];
  intro?: string;
  story?: string[];
  size?: string;
  chain?: string;
  materials?: string[];
  closing?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "miraje",
    price: 14500,
    name: "Miraje",
    altName: "Браслет Miraje",
    coll: "beadwork",
    cat: "cuff",
    subCat: "Couture Cuff",
    img: "/photos/miraje.jpg",
    media: [{ type: "image", src: "/photos/miraje.jpg", kind: "product" }],
    intro:
      "Браслет-манжета из чёрного матового бисера с центральным элементом из перламутра и хрустальной каплей.",
    story: [
      "Тёплый блеск перламутра окружён графитовой матовой основой — спокойствие и сдержанная глубина в одном силуэте.",
      "Каждое зерно бисера уложено вручную, в технике художественной вышивки. Камень в центре — единственный, неповторимый.",
    ],
    size: "7 × 4,5 см",
    chain: "",
    materials: [
      "Матовый чёрный бисер Miyuki",
      "Перламутр",
      "Хрустальная капля Swarovski",
    ],
    closing:
      "Miraje — украшение для тех, кто ценит спокойную силу и сдержанную красоту.",
  },
  {
    id: "ambra-noir",
    price: 16800,
    name: "Ambra Noir",
    altName: "Браслет Ambra Noir",
    coll: "beadwork",
    cat: "cuff",
    subCat: "Couture Cuff",
    img: "/photos/ambra-noir.jpg",
    media: [{ type: "image", src: "/photos/ambra-noir.jpg", kind: "product" }],
    intro: "Чёрная манжета с центральной вставкой из натурального янтаря.",
    story: [
      "Тёплый янтарь словно солнечный отпечаток на ночной поверхности — контраст света и тени, в котором рождается сила украшения.",
      "Бисер уложен плотно и многослойно, создавая объёмную, почти скульптурную фактуру.",
    ],
    size: "6 × 4 см",
    chain: "",
    materials: [
      "Матовый чёрный бисер",
      "Балтийский янтарь",
      "Золотистый рубчик",
    ],
    closing:
      "Ambra Noir — украшение-портрет: тёплое сердце под глубокой ночью.",
  },
  {
    id: "shining-river",
    price: 13200,
    name: "Shining River",
    altName: "Браслет Shining River",
    coll: "beadwork",
    cat: "cuff",
    subCat: "Couture Cuff",
    img: "/photos/shining-river.jpg",
    media: [
      { type: "image", src: "/photos/shining-river.jpg", kind: "product" },
    ],
    intro:
      "Браслет в тёплых золотисто-персиковых оттенках с пресноводным жемчугом.",
    story: [
      "Поток жемчужин течёт по золотой реке бисера — украшение строится на ощущении движения и света.",
      "Ручная вышивка сочетает оттенки от персиковых до медовых, переходящих один в другой.",
    ],
    size: "18 × 3,5 см",
    chain: "",
    materials: [
      "Бисер Miyuki золотистых оттенков",
      "Пресноводный жемчуг",
      "Декоративные кристаллы",
    ],
    closing: "Shining River — золотое течение, остановленное на запястье.",
  },
  {
    id: "korall",
    price: 12500,
    name: "Korall",
    altName: "Браслет «Коралл»",
    coll: "beadwork",
    cat: "cuff",
    subCat: "Couture Cuff",
    img: "/photos/korall.jpg",
    media: [{ type: "image", src: "/photos/korall.jpg", kind: "product" }],
    intro: "Кремовая манжета с акцентом из натурального коралла.",
    story: [
      "Тёплый кремовый цвет с алым всплеском кораллов — украшение, в котором живёт море.",
      "Натуральный коралл вшит в основу и оттеняется крупной жемчужиной — сочетание органики и ремесла.",
    ],
    size: "7 × 5 см",
    chain: "",
    materials: ["Кремовый бисер", "Натуральный коралл", "Барочный жемчуг"],
    closing: "Korall — память о побережье и солёном воздухе.",
  },
  {
    id: "mandragora",
    price: 21000,
    name: "Mandragora",
    altName: "Брошь «Цветок мандрагоры»",
    coll: "beadwork",
    cat: "brooch",
    subCat: "Insect Brooch",
    img: "/photos/mandragora.jpg",
    media: [{ type: "image", src: "/photos/mandragora.jpg", kind: "product" }],
    intro: "Авторская брошь-жук с янтарными кристаллами и кусочками геоды.",
    story: [
      "Скульптурное украшение, балансирующее между реальностью и мифом. Каждая деталь — отдельная работа: усики, крылья, центральный цветок.",
      "Медный и бронзовый бисер собирают форму, в которой угадываются и насекомое, и растение, и драгоценный камень.",
    ],
    size: "7 × 5,5 см",
    chain: "",
    materials: [
      "Бисер медных и бронзовых оттенков",
      "Чешские кристаллы",
      "Срез агатовой геоды",
    ],
    closing:
      "Mandragora — украшение-объект, в котором природа становится драгоценностью.",
  },
  {
    id: "hranitel",
    price: 23500,
    name: "Amber Guardian",
    altName: "Кулон «Хранитель Амбры»",
    coll: "beadwork",
    cat: "brooch",
    subCat: "Order Brooch",
    img: "/photos/hranitel.jpg",
    media: [{ type: "image", src: "/photos/hranitel.jpg", kind: "product" }],
    intro: "Брошь-кулон с балтийским янтарём и хрустальной короной.",
    story: [
      "Две янтарные капли, оправленные в плотную бисерную фактуру, и хрустальная корона сверху — украшение в стиле орденской броши, но с авторской свободой.",
      "Тёмный жемчуг служит акцентом, добавляя в композицию ощущение тяжести и достоинства.",
    ],
    size: "6,5 × 5 см",
    chain: "Тонкая золотая цепочка 50 см",
    materials: [
      "Балтийский янтарь",
      "Бисер бронзовых оттенков",
      "Кристаллы Swarovski",
      "Тёмный жемчуг",
    ],
    closing:
      "Amber Guardian — украшение для тех, кто помнит вес собственной истории.",
  },
  {
    id: "zastyvshaya",
    price: 18900,
    name: "Frozen Eternity",
    altName: "Кулон «Застывшая вечность»",
    coll: "beadwork",
    cat: "pendant",
    subCat: "Art Pendant",
    img: "/photos/zastyvshaya.jpg",
    media: [{ type: "image", src: "/photos/zastyvshaya.jpg", kind: "product" }],
    intro:
      "Длинный кулон с крупной янтарной каплей в авторской оправе из бисера.",
    story: [
      "Янтарь — окаменевшая смола, в которой время остановилось. Украшение строится вокруг этой идеи: спокойный жест, медленный ритм.",
      "Бисер оплетает камень в технике плотной бугорчатой вышивки и оставляет ему главную роль.",
    ],
    size: "6 × 3,5 см",
    chain: "Тонкая бисерная нить 50 см",
    materials: ["Балтийский янтарь", "Бронзовый бисер"],
    closing: "Frozen Eternity — украшение для тишины и долгих взглядов.",
  },
  {
    id: "rosali-br",
    price: 11500,
    name: "Rosali",
    altName: "Браслет Rosali",
    coll: "contempo",
    cat: "bracelet",
    subCat: "Bracelet",
    img: "/photos/rosali-bracelet.jpg",
    media: [
      { type: "image", src: "/photos/rosali-bracelet.jpg", kind: "product" },
    ],
    intro: "Браслет с центральным розовым кварцем на основе из чёрного бисера.",
    story: [
      "Мягкий розовый камень в густой графитовой оправе — нежность в строгом обрамлении.",
      "Сбоку — каскад из розовых кристаллов и жемчуга, создающий движение и ритм.",
    ],
    size: "18 × 4 см",
    chain: "",
    materials: [
      "Розовый кварц",
      "Матовый чёрный бисер",
      "Жемчуг",
      "Декоративные кристаллы",
    ],
    closing: "Rosali — про женственность, оправленную в характер.",
  },
  {
    id: "rosali-pn",
    price: 8900,
    name: "Rosali",
    altName: "Кулон Розали",
    coll: "contempo",
    cat: "pendant",
    subCat: "Pendant",
    img: "/photos/rosali-pendant.jpg",
    media: [
      { type: "image", src: "/photos/rosali-pendant.jpg", kind: "product" },
    ],
    intro: "Кулон с розовым кварцем — компактная версия линии Rosali.",
    story: [
      "Камень в овальной оправе, окружённый каскадом мелких кристаллов и жемчуга. Лёгкий, ежедневный, но не тривиальный.",
      "Тёплый розовый прекрасно сочетается с чёрной и графитовой одеждой.",
    ],
    size: "4,5 × 3 см",
    chain: "Тонкая золотая цепочка 45 см",
    materials: ["Розовый кварц", "Матовый чёрный бисер", "Кристаллы", "Жемчуг"],
    closing: "Rosali — про нежность, которую носишь каждый день.",
  },
  {
    id: "rosali-big",
    price: 19500,
    name: "Rosali",
    altName: "Розали большой",
    coll: "contempo",
    cat: "pendant",
    subCat: "Statement Pendant",
    img: "/photos/rosali-big.jpg",
    media: [{ type: "image", src: "/photos/rosali-big.jpg", kind: "product" }],
    intro:
      "Кулон с розовым кварцем, созданный вручную в технике художественной вышивки бисером.",
    story: [
      "Мягкое сияние натурального камня сочетается с глубокими графитовыми оттенками и деликатным блеском кристаллов, создавая утончённый и чувственный образ.",
      "Розовый кварц традиционно связывают с энергией нежности, внутренней гармонии и женственности. В этом украшении он раскрывается особенно мягко — через свет, фактуру и тонкую игру оттенков.",
      "Фактурная поверхность, ручное плетение и многослойная вышивка делают украшение живым и объёмным — его хочется рассматривать в деталях.",
    ],
    size: "8 × 7 см",
    chain: "Цепочка 40 см + удлинитель 5 см",
    materials: ["Розовый кварц", "Бисер", "Декоративные кристаллы"],
    closing:
      "Rosali — украшение для женщин, которые ценят эстетику, глубину и особую энергетику вещей.",
  },
  {
    id: "oko",
    price: 17800,
    name: "Oko Laguny",
    altName: "Кулон «Око Лагуны»",
    coll: "contempo",
    cat: "necklace",
    subCat: "Necklace",
    img: "/photos/oko.jpg",
    media: [{ type: "image", src: "/photos/oko.jpg", kind: "product" }],
    intro:
      "Кулон-медальон с глубокой бирюзовой хрустальной вставкой и веточкой коралла.",
    story: [
      "Большой круглый кристалл цвета морской воды как смотрит в ответ — отсюда название.",
      "Акценты из натурального коралла и пресноводного жемчуга добавляют органики и истории.",
    ],
    size: "5,5 см диаметр",
    chain: "Тонкая золотая цепочка 50 см",
    materials: [
      "Бирюзовый хрустальный кристалл",
      "Бисер Miyuki",
      "Натуральный коралл",
      "Пресноводный жемчуг",
    ],
    closing: "Oko — лагуна, которую можно носить с собой.",
  },
];

export function formatPrice(n: number): string {
  return n.toLocaleString("ru-RU").replace(/,/g, " ") + " ₽";
}

export function getCollLabel(coll: string): string {
  return coll === "beadwork" ? "Beadwork Art" : "Contemporary Jewelry";
}
