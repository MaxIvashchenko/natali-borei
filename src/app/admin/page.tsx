"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// ── Types ─────────────────────────────────────────────────────────
type Lang = { ru: string; en: string; de: string };

interface Video {
  title: string;
  url: string;
  duration: string;
}

interface Product {
  id: string;
  price: number;
  name: Lang;
  desc: Lang;
  cat: string;
  sub: string;
  available: boolean;
  currency: string;
  tags: string[];
  sizeType: "free" | "fixed" | "custom";
  sizes: string[];
  sizeNote: string;
  photos: string[];
  videos: Video[];
}

interface OrderItem {
  id: string;
  qty: number;
}

interface Order {
  id: string;
  date: string;
  client: string;
  email: string;
  address: string;
  payment: string;
  status: string;
  items: OrderItem[];
}

interface Collection {
  id: string;
  name: Lang;
  desc: Lang;
  cover: string;
  active: boolean;
}

interface Settings {
  storeName: string;
  defaultCurrency: string;
  defaultLanguage: string;
  notifyEmail: string;
}

// ── Constants ─────────────────────────────────────────────────────
const K_PRODUCTS = "nb-admin-products";
const K_ORDERS = "nb-admin-orders";
const K_COLLECTIONS = "nb-admin-collections";
const K_SETTINGS = "nb-admin-settings";

const CATEGORIES: Record<string, { label: string; subs: string[] }> = {
  beadwork: {
    label: "Beadwork Art",
    subs: [
      "Couture Cuff",
      "Art Pendant",
      "Necklace",
      "Brooch",
      "Art Ring",
      "Insect Brooch",
      "Order Brooch",
    ],
  },
  contempo: {
    label: "Contemporary Jewelry",
    subs: ["Bracelet", "Pendant", "Necklace", "Statement Pendant"],
  },
};

const STATUSES = [
  "new",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
] as const;
const STATUS_LABELS: Record<string, string> = {
  new: "New",
  processing: "Processing",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

// ── Seed data ─────────────────────────────────────────────────────
const SEED_PRODUCTS: Product[] = [
  {
    id: "miraje",
    price: 14500,
    name: { ru: "Miraje", en: "Miraje", de: "Miraje" },
    desc: {
      ru: "Браслет-манжета из чёрного матового бисера с центральным элементом из перламутра.",
      en: "Black matte beaded cuff with pearl center and crystal drop.",
      de: "",
    },
    cat: "beadwork",
    sub: "Couture Cuff",
    available: true,
    currency: "€",
    tags: ["cuff", "black", "pearl", "swarovski"],
    sizeType: "free",
    sizes: [],
    sizeNote: "7 × 4.5 cm",
    photos: ["/photos/miraje.jpg"],
    videos: [],
  },
  {
    id: "ambra-noir",
    price: 16800,
    name: { ru: "Ambra Noir", en: "Ambra Noir", de: "Ambra Noir" },
    desc: {
      ru: "Чёрная манжета с центральной вставкой из натурального янтаря.",
      en: "Black cuff with central Baltic amber inlay.",
      de: "",
    },
    cat: "beadwork",
    sub: "Couture Cuff",
    available: true,
    currency: "€",
    tags: ["cuff", "amber", "black"],
    sizeType: "free",
    sizes: [],
    sizeNote: "6 × 4 cm",
    photos: ["/photos/ambra-noir.jpg"],
    videos: [],
  },
  {
    id: "shining-river",
    price: 13200,
    name: {
      ru: "Shining River",
      en: "Shining River",
      de: "Shining River",
    },
    desc: {
      ru: "Браслет в тёплых золотисто-персиковых оттенках с пресноводным жемчугом.",
      en: "Warm golden-peach beaded cuff with freshwater pearls.",
      de: "",
    },
    cat: "beadwork",
    sub: "Couture Cuff",
    available: true,
    currency: "€",
    tags: ["cuff", "pearl", "gold"],
    sizeType: "fixed",
    sizes: ["S", "M", "L"],
    sizeNote: "",
    photos: ["/photos/shining-river.jpg"],
    videos: [],
  },
  {
    id: "korall",
    price: 12500,
    name: { ru: "Коралл", en: "Korall", de: "Korall" },
    desc: {
      ru: "Кремовая манжета с акцентом из натурального коралла.",
      en: "Cream cuff accented with natural coral.",
      de: "",
    },
    cat: "beadwork",
    sub: "Couture Cuff",
    available: false,
    currency: "€",
    tags: ["cuff", "coral", "cream"],
    sizeType: "free",
    sizes: [],
    sizeNote: "7 × 5 cm",
    photos: ["/photos/korall.jpg"],
    videos: [],
  },
  {
    id: "mandragora",
    price: 21000,
    name: { ru: "Mandragora", en: "Mandragora", de: "Mandragora" },
    desc: {
      ru: "Авторская брошь-жук с янтарными кристаллами и кусочками геоды.",
      en: "Statement insect brooch with amber crystals and geode fragments.",
      de: "",
    },
    cat: "beadwork",
    sub: "Insect Brooch",
    available: true,
    currency: "€",
    tags: ["brooch", "insect", "amber", "geode"],
    sizeType: "free",
    sizes: [],
    sizeNote: "7 × 5.5 cm",
    photos: ["/photos/mandragora.jpg"],
    videos: [],
  },
  {
    id: "hranitel",
    price: 23500,
    name: {
      ru: "Хранитель Амбры",
      en: "Amber Guardian",
      de: "Amber Guardian",
    },
    desc: {
      ru: "Брошь-кулон с балтийским янтарём и хрустальной короной.",
      en: "Brooch-pendant with Baltic amber and crystal crown.",
      de: "",
    },
    cat: "beadwork",
    sub: "Order Brooch",
    available: true,
    currency: "€",
    tags: ["brooch", "pendant", "amber", "crystal"],
    sizeType: "free",
    sizes: [],
    sizeNote: "6.5 × 5 cm · chain 50 cm",
    photos: ["/photos/hranitel.jpg"],
    videos: [],
  },
  {
    id: "rosali-big",
    price: 19500,
    name: {
      ru: "Розали большой",
      en: "Rosali Statement",
      de: "Rosali Statement",
    },
    desc: {
      ru: "Кулон с розовым кварцем в технике художественной вышивки бисером.",
      en: "Pink quartz statement pendant, hand-embroidered in beads.",
      de: "",
    },
    cat: "contempo",
    sub: "Statement Pendant",
    available: true,
    currency: "€",
    tags: ["pendant", "quartz", "rose"],
    sizeType: "free",
    sizes: [],
    sizeNote: "8 × 7 cm · chain 40+5 cm",
    photos: ["/photos/rosali-big.jpg"],
    videos: [],
  },
  {
    id: "oko",
    price: 17800,
    name: { ru: "Око Лагуны", en: "Oko Laguny", de: "Oko Laguny" },
    desc: {
      ru: "Кулон-медальон с глубокой бирюзовой хрустальной вставкой и веточкой коралла.",
      en: "Medallion pendant with deep turquoise crystal and coral accent.",
      de: "",
    },
    cat: "contempo",
    sub: "Necklace",
    available: false,
    currency: "€",
    tags: ["necklace", "turquoise", "coral", "pearl"],
    sizeType: "free",
    sizes: [],
    sizeNote: "5.5 cm Ø · chain 50 cm",
    photos: ["/photos/oko.jpg"],
    videos: [],
  },
];

const SEED_ORDERS: Order[] = [
  {
    id: "NB-1042",
    date: "2026-05-28",
    client: "Anna Petrenko",
    email: "anna.p@gmail.com",
    address: "Велика Васильківська 14, Київ, 01004, Україна",
    payment: "Card · **** 4218",
    status: "new",
    items: [
      { id: "rosali-big", qty: 1 },
      { id: "miraje", qty: 1 },
    ],
  },
  {
    id: "NB-1041",
    date: "2026-05-27",
    client: "Sophie Laurent",
    email: "sophie.laurent@me.com",
    address: "14 Rue Saint-Honoré, 75001 Paris, France",
    payment: "PayPal",
    status: "processing",
    items: [{ id: "hranitel", qty: 1 }],
  },
  {
    id: "NB-1040",
    date: "2026-05-25",
    client: "Olena Kovalenko",
    email: "olena.k@ukr.net",
    address: "вул. Сахарова 12, Львів, 79000, Україна",
    payment: "Card · **** 0091",
    status: "shipped",
    items: [
      { id: "mandragora", qty: 1 },
      { id: "shining-river", qty: 1 },
    ],
  },
  {
    id: "NB-1039",
    date: "2026-05-22",
    client: "Marta König",
    email: "marta.koenig@web.de",
    address: "Kantstraße 22, 10623 Berlin, Germany",
    payment: "Card · **** 7733",
    status: "delivered",
    items: [{ id: "oko", qty: 1 }],
  },
  {
    id: "NB-1038",
    date: "2026-05-21",
    client: "Iryna Borysenko",
    email: "iryna.b@gmail.com",
    address: "вул. Хрещатик 8, Київ, 01001, Україна",
    payment: "Card · **** 1245",
    status: "cancelled",
    items: [{ id: "ambra-noir", qty: 1 }],
  },
  {
    id: "NB-1037",
    date: "2026-05-19",
    client: "Camille Durand",
    email: "camille.d@orange.fr",
    address: "8 Avenue Foch, 75116 Paris, France",
    payment: "Card · **** 5512",
    status: "delivered",
    items: [{ id: "korall", qty: 1 }],
  },
];

const SEED_COLLECTIONS: Collection[] = [
  {
    id: "beadwork-art",
    name: {
      ru: "Beadwork Art",
      en: "Beadwork Art",
      de: "Beadwork Art",
    },
    desc: {
      ru: "Объёмные манжеты, броши и кулоны ручной вышивки бисером.",
      en: "Sculptural cuffs, brooches and pendants — hand-embroidered in beads.",
      de: "",
    },
    cover: "/photos/mandragora.jpg",
    active: true,
  },
  {
    id: "contemporary",
    name: {
      ru: "Contemporary Jewelry",
      en: "Contemporary Jewelry",
      de: "Contemporary Jewelry",
    },
    desc: {
      ru: "Сдержанные современные формы — браслеты, кулоны, ожерелья.",
      en: "Restrained modern silhouettes — bracelets, pendants, necklaces.",
      de: "",
    },
    cover: "/photos/rosali-big.jpg",
    active: true,
  },
  {
    id: "amber-line",
    name: { ru: "Amber Line", en: "Amber Line", de: "Amber Line" },
    desc: {
      ru: "Капсула с балтийским янтарём.",
      en: "Capsule featuring Baltic amber.",
      de: "",
    },
    cover: "/photos/ambra-noir.jpg",
    active: false,
  },
];

const SEED_SETTINGS: Settings = {
  storeName: "Natali Borei — Exclusive Accessoires",
  defaultCurrency: "€",
  defaultLanguage: "ru",
  notifyEmail: "boreinatali@gmail.com",
};

// ── Helpers ───────────────────────────────────────────────────────
function loadStore<T>(key: string, seed: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(seed));
      return JSON.parse(JSON.stringify(seed));
    }
    return JSON.parse(raw);
  } catch {
    return JSON.parse(JSON.stringify(seed));
  }
}

function saveStore(key: string, val: unknown) {
  localStorage.setItem(key, JSON.stringify(val));
}

function fmtPrice(n: number, cur = "€") {
  return cur + " " + new Intl.NumberFormat("uk-UA").format(n);
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function orderTotal(order: Order, products: Product[]) {
  return order.items.reduce((sum, it) => {
    const p = products.find((x) => x.id === it.id);
    return sum + (p ? p.price * it.qty : 0);
  }, 0);
}

// ── SVG Icons ─────────────────────────────────────────────────────
const IconEdit = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <path d="M11 2 L14 5 L5 14 L2 14 L2 11 Z" />
  </svg>
);

const IconTrash = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <path d="M3 4h10M6 4V2h4v2M5 4l1 10h4l1-10" />
  </svg>
);

const IconClose = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
  >
    <path d="M3 3l10 10M13 3L3 13" />
  </svg>
);

const IconPlus = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M8 2v12M2 8h12" />
  </svg>
);

const IconEye = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <path d="M3 8c2-3.5 5-5 5-5s3 1.5 5 5c-2 3.5-5 5-5 5s-3-1.5-5-5z" />
    <circle cx="8" cy="8" r="2" />
  </svg>
);

// ── Main Component ─────────────────────────────────────────────────
export default function AdminPage() {
  const router = useRouter();

  // ─ Data state
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [settings, setSettings] = useState<Settings>(SEED_SETTINGS);

  // ─ UI state
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("products");
  const [skeletonOn, setSkeletonOn] = useState(true);
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    sub: "all",
    status: "all",
  });

  // ─ Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | "new" | null>(null);
  const [editDraft, setEditDraft] = useState<Product | null>(null);
  const [sizeInput, setSizeInput] = useState("");
  const [videoUrlInput, setVideoUrlInput] = useState("");

  // ─ Delete modal
  const [deleteModal, setDeleteModal] = useState<{
    open: boolean;
    id: string | null;
  }>({ open: false, id: null });

  // ─ Orders
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
  const [orderStatusDraft, setOrderStatusDraft] = useState<
    Record<string, string>
  >({});

  // ─ Notification
  const [notification, setNotification] = useState<{
    msg: string;
    type: string;
  } | null>(null);
  const notifTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notify = useCallback((msg: string, type = "success") => {
    if (notifTimer.current) clearTimeout(notifTimer.current);
    setNotification({ msg, type });
    notifTimer.current = setTimeout(() => setNotification(null), 3000);
  }, []);

  // ─ Auth + init
  useEffect(() => {
    if (!localStorage.getItem("nb-admin-auth")) {
      router.replace("/admin/login");
      return;
    }
    setProducts(loadStore(K_PRODUCTS, SEED_PRODUCTS));
    setOrders(loadStore(K_ORDERS, SEED_ORDERS));
    setCollections(loadStore(K_COLLECTIONS, SEED_COLLECTIONS));
    setSettings(loadStore(K_SETTINGS, SEED_SETTINGS));
    setIsLoaded(true);

    const hash = window.location.hash.replace("#", "");
    if (["products", "orders", "collections", "settings"].includes(hash)) {
      setActiveTab(hash);
    }
    const t = setTimeout(() => setSkeletonOn(false), 650);
    return () => clearTimeout(t);
  }, [router]);

  // ─ Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (drawerOpen) closeDrawer();
        else if (deleteModal.open) setDeleteModal({ open: false, id: null });
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen, deleteModal.open]);

  // ─ Tab switching
  const setTab = (name: string) => {
    setActiveTab(name);
    history.replaceState(null, "", "#" + name);
  };

  // ─ Product filtering
  const filteredProducts = products.filter((p) => {
    if (filters.category !== "all" && p.cat !== filters.category) return false;
    if (filters.sub !== "all" && p.sub !== filters.sub) return false;
    if (filters.status === "on" && !p.available) return false;
    if (filters.status === "off" && p.available) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const hay = [
        p.name.ru,
        p.name.en,
        p.name.de,
        p.sub,
        ...(p.tags || []),
      ]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  // ─ Subcategory options
  const subOptions = (() => {
    if (filters.category === "all") {
      const all = Object.values(CATEGORIES).flatMap((c) => c.subs);
      return [...new Set(all)];
    }
    return CATEGORIES[filters.category]?.subs ?? [];
  })();

  // ─ Toggle product availability
  const toggleAvailable = (id: string) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, available: !p.available } : p
    );
    setProducts(updated);
    saveStore(K_PRODUCTS, updated);
    const p = updated.find((x) => x.id === id);
    if (p)
      notify(
        `${p.name.en} set to ${p.available ? "available" : "not available"}`
      );
  };

  // ─ Drawer
  const openEditor = (id: string | "new") => {
    if (id === "new") {
      setEditingId("new");
      setEditDraft({
        id: "p-" + Date.now(),
        name: { ru: "", en: "", de: "" },
        desc: { ru: "", en: "", de: "" },
        price: 0,
        currency: "€",
        cat: "beadwork",
        sub: CATEGORIES.beadwork.subs[0],
        available: true,
        tags: [],
        sizeType: "free",
        sizes: [],
        sizeNote: "",
        photos: [],
        videos: [],
      });
    } else {
      const p = products.find((x) => x.id === id);
      if (!p) return;
      setEditingId(id);
      setEditDraft(JSON.parse(JSON.stringify(p)));
    }
    setSizeInput("");
    setVideoUrlInput("");
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setEditingId(null);
    setEditDraft(null);
  };

  const saveDrawer = () => {
    if (!editDraft) return;
    if (!editDraft.name.en && !editDraft.name.ru) {
      notify("Title is required", "error");
      return;
    }
    if (editingId === "new") {
      const updated = [editDraft, ...products];
      setProducts(updated);
      saveStore(K_PRODUCTS, updated);
      notify("Piece added to catalog");
    } else {
      const updated = products.map((p) =>
        p.id === editingId ? editDraft : p
      );
      setProducts(updated);
      saveStore(K_PRODUCTS, updated);
      notify("Changes saved");
    }
    closeDrawer();
  };

  const patchDraft = (patch: Partial<Product>) => {
    setEditDraft((d) => (d ? { ...d, ...patch } : d));
  };

  const addSizeChip = () => {
    const v = sizeInput.trim();
    if (!v || !editDraft) return;
    patchDraft({ sizes: [...(editDraft.sizes || []), v] });
    setSizeInput("");
  };

  const removePhoto = (i: number) => {
    if (!editDraft) return;
    const photos = [...editDraft.photos];
    photos.splice(i, 1);
    patchDraft({ photos });
  };

  const handlePhotoFiles = (files: FileList | null) => {
    if (!files || !editDraft) return;
    Array.from(files).forEach((f) => {
      if ((editDraft.photos?.length ?? 0) >= 10) return;
      const r = new FileReader();
      r.onload = () => {
        setEditDraft((d) => {
          if (!d) return d;
          if (d.photos.length >= 10) return d;
          return { ...d, photos: [...d.photos, r.result as string] };
        });
      };
      r.readAsDataURL(f);
    });
  };

  const addVideoUrl = () => {
    if (!videoUrlInput.trim() || !editDraft) return;
    const url = videoUrlInput.trim();
    patchDraft({
      videos: [
        ...editDraft.videos,
        { title: url.slice(0, 40), url, duration: "External" },
      ],
    });
    setVideoUrlInput("");
  };

  // ─ Delete
  const askDelete = (id: string) => {
    setDeleteModal({ open: true, id });
  };

  const confirmDelete = () => {
    if (!deleteModal.id) return;
    const updated = products.filter((p) => p.id !== deleteModal.id);
    setProducts(updated);
    saveStore(K_PRODUCTS, updated);
    notify("Piece removed from catalog");
    setDeleteModal({ open: false, id: null });
  };

  // ─ Orders
  const updateOrderStatus = (orderId: string) => {
    const newStatus = orderStatusDraft[orderId];
    if (!newStatus) return;
    const updated = orders.map((o) =>
      o.id === orderId ? { ...o, status: newStatus } : o
    );
    setOrders(updated);
    saveStore(K_ORDERS, updated);
    notify(`Order ${orderId} → ${STATUS_LABELS[newStatus]}`);
  };

  // ─ Collections
  const toggleCollection = (id: string) => {
    const updated = collections.map((c) =>
      c.id === id ? { ...c, active: !c.active } : c
    );
    setCollections(updated);
    saveStore(K_COLLECTIONS, updated);
    const c = updated.find((x) => x.id === id);
    if (c) notify(`${c.name.en} · ${c.active ? "visible" : "hidden"}`);
  };

  const addCollection = () => {
    const nm = window.prompt("Name of new collection");
    if (!nm) return;
    const updated = [
      ...collections,
      {
        id: "col-" + Date.now(),
        name: { ru: nm, en: nm, de: nm },
        desc: { ru: "", en: "", de: "" },
        cover: products[0]?.photos[0] || "/photos/miraje.jpg",
        active: true,
      },
    ];
    setCollections(updated);
    saveStore(K_COLLECTIONS, updated);
    notify("Collection created");
  };

  const editCollection = (id: string) => {
    const c = collections.find((x) => x.id === id);
    if (!c) return;
    const nm = window.prompt("Collection name [EN]", c.name.en);
    if (nm === null) return;
    const updated = collections.map((x) =>
      x.id === id ? { ...x, name: { ...x.name, en: nm } } : x
    );
    setCollections(updated);
    saveStore(K_COLLECTIONS, updated);
    notify("Collection updated");
  };

  // ─ Settings
  const [settingsForm, setSettingsForm] = useState<Settings>(SEED_SETTINGS);
  useEffect(() => {
    if (isLoaded) setSettingsForm(settings);
  }, [isLoaded, settings]);

  const saveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSettings(settingsForm);
    saveStore(K_SETTINGS, settingsForm);
    notify("Settings saved");
  };

  const [pwForm, setPwForm] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  const savePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwForm.current !== "nb2024") {
      notify("Current password is incorrect", "error");
      return;
    }
    if (pwForm.next.length < 4) {
      notify("New password must be at least 4 characters", "error");
      return;
    }
    if (pwForm.next !== pwForm.confirm) {
      notify("Passwords do not match", "error");
      return;
    }
    notify("Password changed (demo only — credentials are hardcoded)");
    setPwForm({ current: "", next: "", confirm: "" });
  };

  // ─ Exit
  const handleExit = () => {
    localStorage.removeItem("nb-admin-auth");
    notify("Signed out", "info");
    setTimeout(() => router.replace("/admin/login"), 300);
  };

  const deleteName =
    deleteModal.id
      ? (() => {
          const p = products.find((x) => x.id === deleteModal.id);
          return p ? p.name.en || p.name.ru : "this piece";
        })()
      : "this piece";

  const photoPickerRef = useRef<HTMLInputElement>(null);

  if (!isLoaded) return null;

  // ══════════════════════════════════════════════════════════════
  return (
    <>
      {/* ── Notification toast */}
      {notification && (
        <div className={`admin-toast admin-toast--${notification.type}`}>
          {notification.msg}
        </div>
      )}

      {/* ── Header */}
      <header className="admin-header">
        <div className="admin-header__inner">
          <a className="admin-brand" href="/admin">
            <Image
              className="admin-brand__logo"
              src="/logo-wordmark.png"
              alt="Natali Borei"
              width={120}
              height={24}
              priority
            />
            <span className="admin-brand__label">Atelier</span>
          </a>

          <nav className="admin-tabs" aria-label="Sections">
            {["products", "orders", "collections", "settings"].map((tab) => (
              <button
                key={tab}
                className={`admin-tab${activeTab === tab ? " is-active" : ""}`}
                type="button"
                onClick={() => setTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          <button className="admin-exit" type="button" onClick={handleExit}>
            Exit
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M10 3 H13 V13 H10" />
              <path d="M7 8 H1 M4 5 L1 8 L4 11" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Main */}
      <main className="admin-main">

        {/* ════ PRODUCTS ════ */}
        <section
          className={`admin-panel${activeTab === "products" ? " is-active" : ""}`}
          data-panel="products"
        >
          <div className="panel-head">
            <div>
              <h2 className="panel-head__title">
                Pieces <em>in catalog</em>
              </h2>
              <p className="panel-head__count">
                {skeletonOn
                  ? "· loading…"
                  : `· ${filteredProducts.length} item${filteredProducts.length === 1 ? "" : "s"}`}
              </p>
            </div>
          </div>

          {/* Filter bar */}
          <div className="filter-bar">
            <div className="search-field">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <circle cx="7" cy="7" r="5" />
                <path d="M11 11l3 3" />
              </svg>
              <input
                className="adm-input"
                type="text"
                placeholder="Search by name, tag…"
                value={filters.search}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, search: e.target.value }))
                }
              />
            </div>

            <select
              className="adm-select"
              value={filters.category}
              onChange={(e) =>
                setFilters((f) => ({
                  ...f,
                  category: e.target.value,
                  sub: "all",
                }))
              }
            >
              <option value="all">All categories</option>
              {Object.entries(CATEGORIES).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </select>

            <select
              className="adm-select"
              value={filters.sub}
              onChange={(e) =>
                setFilters((f) => ({ ...f, sub: e.target.value }))
              }
            >
              <option value="all">All subcategories</option>
              {subOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <select
              className="adm-select"
              value={filters.status}
              onChange={(e) =>
                setFilters((f) => ({ ...f, status: e.target.value }))
              }
            >
              <option value="all">All status</option>
              <option value="on">Available</option>
              <option value="off">Not available</option>
            </select>

            <button
              className="btn-gold"
              type="button"
              onClick={() => openEditor("new")}
            >
              <IconPlus />
              Add piece
            </button>
          </div>

          {/* Table */}
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {skeletonOn ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <tr key={i} className="skeleton-row">
                      <td>
                        <span className="sk-bar" style={{ width: 30 }} />
                      </td>
                      <td>
                        <span className="sk-bar sk-thumb" />
                      </td>
                      <td>
                        <span className="sk-bar sk-name" />
                      </td>
                      <td>
                        <span className="sk-bar sk-cat" />
                      </td>
                      <td>
                        <span className="sk-bar sk-price" />
                      </td>
                      <td>
                        <span className="sk-bar" style={{ width: 80 }} />
                      </td>
                      <td>
                        <span
                          className="sk-bar"
                          style={{ width: 60, marginLeft: "auto" }}
                        />
                      </td>
                    </tr>
                  ))
                ) : filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={7}>
                      <div className="adm-empty">
                        <div className="adm-empty__ic">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          >
                            <rect x="3" y="4" width="18" height="16" />
                            <path d="M3 8h18M8 4v16" />
                          </svg>
                        </div>
                        <p className="adm-empty__title">Nothing here</p>
                        <p className="adm-empty__sub">
                          No pieces match these filters.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((p, i) => (
                    <tr key={p.id}>
                      <td className="col-idx">
                        {String(i + 1).padStart(2, "0")}
                      </td>
                      <td className="col-thumb">
                        {p.photos[0] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            className="tbl-thumb"
                            src={p.photos[0]}
                            alt=""
                          />
                        ) : (
                          <div className="tbl-thumb" />
                        )}
                      </td>
                      <td className="col-name">
                        {p.name.en || p.name.ru}
                        {p.name.ru && p.name.ru !== p.name.en && (
                          <span className="alt">{p.name.ru}</span>
                        )}
                      </td>
                      <td className="col-cat">
                        {CATEGORIES[p.cat]?.label || "—"} · {p.sub || "—"}
                      </td>
                      <td className="col-price">
                        {fmtPrice(p.price, p.currency)}
                      </td>
                      <td>
                        <div
                          className={`status-cell status-cell--${p.available ? "on" : "off"}`}
                        >
                          <span
                            className={`status-dot status-dot--${p.available ? "on" : "off"}`}
                          />
                          <span className="status-label">
                            {p.available ? "Available" : "Not available"}
                          </span>
                          <label className="toggle">
                            <input
                              type="checkbox"
                              checked={!!p.available}
                              onChange={() => toggleAvailable(p.id)}
                            />
                            <span className="toggle__slider" />
                          </label>
                        </div>
                      </td>
                      <td className="col-actions">
                        <button
                          className="icon-btn"
                          title="Edit"
                          onClick={() => openEditor(p.id)}
                        >
                          <IconEdit />
                        </button>
                        <button
                          className="icon-btn icon-btn--danger"
                          title="Delete"
                          onClick={() => askDelete(p.id)}
                        >
                          <IconTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* ════ ORDERS ════ */}
        <section
          className={`admin-panel${activeTab === "orders" ? " is-active" : ""}`}
          data-panel="orders"
        >
          <div className="panel-head">
            <div>
              <h2 className="panel-head__title">
                Orders <em>ledger</em>
              </h2>
              <p className="panel-head__count">
                · {orders.length} order{orders.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>

          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Order #</th>
                  <th>Date</th>
                  <th>Client</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th style={{ textAlign: "right" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <>
                    <tr
                      key={o.id}
                      className={`order-row${expandedOrderId === o.id ? " is-expanded" : ""}`}
                      onClick={() =>
                        setExpandedOrderId(
                          expandedOrderId === o.id ? null : o.id
                        )
                      }
                    >
                      <td className="col-idx">{o.id}</td>
                      <td>{fmtDate(o.date)}</td>
                      <td
                        className="col-name"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                        }}
                      >
                        {o.client}
                      </td>
                      <td>
                        {o.items.reduce((a, x) => a + x.qty, 0)} item
                        {o.items.length === 1 ? "" : "s"}
                      </td>
                      <td className="col-price">
                        {fmtPrice(orderTotal(o, products), "€")}
                      </td>
                      <td>
                        <span
                          className={`status-pill status-pill--${o.status}`}
                        >
                          {STATUS_LABELS[o.status]}
                        </span>
                      </td>
                      <td className="col-actions">
                        <button className="icon-btn" title="View">
                          <IconEye />
                        </button>
                      </td>
                    </tr>

                    {expandedOrderId === o.id && (
                      <tr key={o.id + "-details"} className="order-details-row">
                        <td colSpan={7}>
                          <div
                            className="order-details"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="order-items">
                              {o.items.map((it) => {
                                const p = products.find((x) => x.id === it.id);
                                return (
                                  <div key={it.id} className="order-item">
                                    {p?.photos[0] ? (
                                      // eslint-disable-next-line @next/next/no-img-element
                                      <img src={p.photos[0]} alt="" />
                                    ) : (
                                      <div
                                        style={{
                                          width: 56,
                                          height: 68,
                                          background: "#2C2C2C",
                                        }}
                                      />
                                    )}
                                    <div>
                                      <p className="order-item__name">
                                        {p
                                          ? p.name.en || p.name.ru
                                          : it.id}
                                      </p>
                                      <p className="order-item__meta">
                                        {p ? p.sub : "—"} · qty {it.qty}
                                      </p>
                                    </div>
                                    <span className="order-item__price">
                                      {p
                                        ? fmtPrice(
                                            p.price * it.qty,
                                            p.currency
                                          )
                                        : "—"}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>

                            <div className="order-side">
                              <div className="order-side__block">
                                <p className="order-side__label">
                                  Delivery address
                                </p>
                                <p className="order-side__val">
                                  {o.client}
                                  {"\n"}
                                  {o.address}
                                  {"\n"}
                                  {o.email}
                                </p>
                              </div>
                              <div className="order-side__block">
                                <p className="order-side__label">
                                  Payment method
                                </p>
                                <p className="order-side__val">{o.payment}</p>
                              </div>
                              <div className="order-side__block">
                                <p className="order-side__label">Status</p>
                                <div className="order-side__row">
                                  <select
                                    className="adm-select"
                                    defaultValue={o.status}
                                    onChange={(e) =>
                                      setOrderStatusDraft((d) => ({
                                        ...d,
                                        [o.id]: e.target.value,
                                      }))
                                    }
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {STATUSES.map((s) => (
                                      <option key={s} value={s}>
                                        {STATUS_LABELS[s]}
                                      </option>
                                    ))}
                                  </select>
                                  <button
                                    className="btn-gold"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      updateOrderStatus(o.id);
                                    }}
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ════ COLLECTIONS ════ */}
        <section
          className={`admin-panel${activeTab === "collections" ? " is-active" : ""}`}
          data-panel="collections"
        >
          <div className="panel-head">
            <div>
              <h2 className="panel-head__title">
                Collections <em>· capsules</em>
              </h2>
              <p className="panel-head__count">
                · {collections.length} collection
                {collections.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>

          <div className="coll-grid">
            {collections.map((c) => {
              const count = products.filter((p) => {
                if (c.id === "beadwork-art") return p.cat === "beadwork";
                if (c.id === "contemporary") return p.cat === "contempo";
                return (
                  (p.tags || []).includes("amber") ||
                  (p.sub || "").toLowerCase().includes("amber")
                );
              }).length;
              return (
                <div key={c.id} className="coll-card">
                  <div className="coll-card__cover">
                    <span
                      className={`coll-card__badge coll-card__badge--${c.active ? "active" : "hidden"}`}
                    >
                      {c.active ? "Active" : "Hidden"}
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.cover} alt="" />
                  </div>
                  <div className="coll-card__body">
                    <h3 className="coll-card__name">{c.name.en || c.name.ru}</h3>
                    <p className="coll-card__count">
                      {count} piece{count === 1 ? "" : "s"}
                    </p>
                    <div className="coll-card__actions">
                      <button onClick={() => editCollection(c.id)}>Edit</button>
                      <button onClick={() => toggleCollection(c.id)}>
                        {c.active ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            <button className="coll-card--add" onClick={addCollection}>
              <div>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span>New collection</span>
              </div>
            </button>
          </div>
        </section>

        {/* ════ SETTINGS ════ */}
        <section
          className={`admin-panel${activeTab === "settings" ? " is-active" : ""}`}
          data-panel="settings"
        >
          <div className="panel-head">
            <div>
              <h2 className="panel-head__title">
                Studio <em>settings</em>
              </h2>
              <p className="panel-head__count">· preferences &amp; access</p>
            </div>
          </div>

          <div className="settings-grid">
            <div className="settings-block">
              <p className="settings-block__sub">General</p>
              <h3 className="settings-block__title">Storefront</h3>
              <form className="settings-form" onSubmit={saveSettings}>
                <div className="ed-field">
                  <label>Store name</label>
                  <input
                    className="ed-input"
                    type="text"
                    value={settingsForm.storeName}
                    onChange={(e) =>
                      setSettingsForm((s) => ({
                        ...s,
                        storeName: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="ed-row">
                  <div className="ed-field">
                    <label>Default currency</label>
                    <select
                      className="ed-select"
                      value={settingsForm.defaultCurrency}
                      onChange={(e) =>
                        setSettingsForm((s) => ({
                          ...s,
                          defaultCurrency: e.target.value,
                        }))
                      }
                    >
                      <option value="€">Euro · €</option>
                      <option value="$">Dollar · $</option>
                      <option value="₴">Hryvnia · ₴</option>
                    </select>
                  </div>
                  <div className="ed-field">
                    <label>Default language</label>
                    <select
                      className="ed-select"
                      value={settingsForm.defaultLanguage}
                      onChange={(e) =>
                        setSettingsForm((s) => ({
                          ...s,
                          defaultLanguage: e.target.value,
                        }))
                      }
                    >
                      <option value="ru">Русский</option>
                      <option value="en">English</option>
                      <option value="de">Deutsch</option>
                    </select>
                  </div>
                </div>
                <div className="ed-field">
                  <label>Notification email</label>
                  <input
                    className="ed-input"
                    type="email"
                    value={settingsForm.notifyEmail}
                    onChange={(e) =>
                      setSettingsForm((s) => ({
                        ...s,
                        notifyEmail: e.target.value,
                      }))
                    }
                  />
                </div>
                <button className="btn-gold" type="submit">
                  Save changes
                </button>
              </form>
            </div>

            <div className="settings-block">
              <p className="settings-block__sub">Security</p>
              <h3 className="settings-block__title">Change password</h3>
              <form className="settings-form" onSubmit={savePassword}>
                <div className="ed-field">
                  <label>Current password</label>
                  <input
                    className="ed-input"
                    type="password"
                    autoComplete="current-password"
                    value={pwForm.current}
                    onChange={(e) =>
                      setPwForm((f) => ({ ...f, current: e.target.value }))
                    }
                  />
                </div>
                <div className="ed-field">
                  <label>New password</label>
                  <input
                    className="ed-input"
                    type="password"
                    autoComplete="new-password"
                    value={pwForm.next}
                    onChange={(e) =>
                      setPwForm((f) => ({ ...f, next: e.target.value }))
                    }
                  />
                </div>
                <div className="ed-field">
                  <label>Confirm new password</label>
                  <input
                    className="ed-input"
                    type="password"
                    autoComplete="new-password"
                    value={pwForm.confirm}
                    onChange={(e) =>
                      setPwForm((f) => ({ ...f, confirm: e.target.value }))
                    }
                  />
                </div>
                <button className="btn-gold" type="submit">
                  Update password
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── Drawer backdrop */}
      <div
        className={`drawer-backdrop${drawerOpen ? " is-open" : ""}`}
        onClick={closeDrawer}
      />

      {/* ── Product Editor Drawer */}
      <aside
        className={`drawer${drawerOpen ? " is-open" : ""}`}
        aria-label="Product editor"
      >
        <header className="drawer__head">
          <div>
            <h2 className="drawer__title">
              {editingId === "new" ? "New Piece" : "Edit Piece"}
            </h2>
            <p className="drawer__sub">
              {editingId === "new"
                ? "Add to catalog"
                : editDraft?.name.en || editDraft?.name.ru || "—"}
            </p>
          </div>
          <button
            className="drawer__close"
            type="button"
            aria-label="Close"
            onClick={closeDrawer}
          >
            <IconClose />
          </button>
        </header>

        <div className="drawer__body">
          {editDraft && (
            <>
              {/* ─ General info */}
              <div className="ed-section">
                <h3 className="ed-section__title">General info</h3>
                {(["ru", "en", "de"] as const).map((lang) => (
                  <div className="ed-field" key={"name-" + lang}>
                    <label>
                      Title{" "}
                      <span className="lang-flag">{lang.toUpperCase()}</span>
                    </label>
                    <input
                      className="ed-input"
                      type="text"
                      value={editDraft.name[lang]}
                      onChange={(e) =>
                        patchDraft({
                          name: { ...editDraft.name, [lang]: e.target.value },
                        })
                      }
                    />
                  </div>
                ))}
                {(["ru", "en", "de"] as const).map((lang) => (
                  <div className="ed-field" key={"desc-" + lang}>
                    <label>
                      Description{" "}
                      <span className="lang-flag">{lang.toUpperCase()}</span>
                    </label>
                    <textarea
                      className="ed-textarea"
                      rows={3}
                      value={editDraft.desc[lang]}
                      onChange={(e) =>
                        patchDraft({
                          desc: { ...editDraft.desc, [lang]: e.target.value },
                        })
                      }
                    />
                  </div>
                ))}
              </div>

              {/* ─ Pricing & details */}
              <div className="ed-section">
                <h3 className="ed-section__title">Pricing &amp; details</h3>

                <div className="ed-field">
                  <label>Price</label>
                  <div className="price-group">
                    <input
                      className="ed-input"
                      type="number"
                      min={0}
                      step={100}
                      value={editDraft.price}
                      onChange={(e) =>
                        patchDraft({ price: Number(e.target.value) || 0 })
                      }
                    />
                    <select
                      className="ed-select"
                      value={editDraft.currency}
                      onChange={(e) =>
                        patchDraft({ currency: e.target.value })
                      }
                    >
                      {["€", "$", "₴"].map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="ed-toggle-row">
                  <span className="ed-toggle-row__label">
                    Available for purchase
                  </span>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={!!editDraft.available}
                      onChange={(e) =>
                        patchDraft({ available: e.target.checked })
                      }
                    />
                    <span className="toggle__slider" />
                  </label>
                </div>

                <div style={{ height: 14 }} />

                <div className="ed-row">
                  <div className="ed-field">
                    <label>Category</label>
                    <select
                      className="ed-select"
                      value={editDraft.cat}
                      onChange={(e) => {
                        const cat = e.target.value;
                        patchDraft({
                          cat,
                          sub: CATEGORIES[cat].subs[0],
                        });
                      }}
                    >
                      {Object.entries(CATEGORIES).map(([k, v]) => (
                        <option key={k} value={k}>
                          {v.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="ed-field">
                    <label>Subcategory</label>
                    <select
                      className="ed-select"
                      value={editDraft.sub}
                      onChange={(e) => patchDraft({ sub: e.target.value })}
                    >
                      {CATEGORIES[editDraft.cat]?.subs.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="ed-field">
                  <label>Tags (comma separated)</label>
                  <input
                    className="ed-input"
                    type="text"
                    value={editDraft.tags.join(", ")}
                    onChange={(e) =>
                      patchDraft({
                        tags: e.target.value
                          .split(",")
                          .map((t) => t.trim())
                          .filter(Boolean),
                      })
                    }
                  />
                </div>
              </div>

              {/* ─ Sizes */}
              <div className="ed-section">
                <h3 className="ed-section__title">Sizes &amp; dimensions</h3>

                <div className="size-type">
                  {(
                    [
                      { v: "free", l: "Free size" },
                      { v: "fixed", l: "Fixed sizes" },
                      { v: "custom", l: "Custom" },
                    ] as const
                  ).map((o) => (
                    <button
                      key={o.v}
                      type="button"
                      className={`size-type__opt${editDraft.sizeType === o.v ? " is-active" : ""}`}
                      onClick={() => patchDraft({ sizeType: o.v })}
                    >
                      {o.l}
                    </button>
                  ))}
                </div>

                {editDraft.sizeType === "fixed" && (
                  <>
                    <div className="size-fixed">
                      {editDraft.sizes.map((sz, i) => (
                        <span key={i} className="size-chip">
                          {sz}
                          <button
                            type="button"
                            className="size-chip__rm"
                            onClick={() => {
                              const sizes = [...editDraft.sizes];
                              sizes.splice(i, 1);
                              patchDraft({ sizes });
                            }}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="size-add">
                      <input
                        className="ed-input"
                        placeholder="e.g. S, M, L or 17"
                        value={sizeInput}
                        onChange={(e) => setSizeInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addSizeChip();
                          }
                        }}
                      />
                      <button type="button" onClick={addSizeChip}>
                        ＋ Add
                      </button>
                    </div>
                  </>
                )}

                <div className="ed-field" style={{ marginTop: 12 }}>
                  <label>Notes on size</label>
                  <input
                    className="ed-input"
                    type="text"
                    value={editDraft.sizeNote}
                    onChange={(e) => patchDraft({ sizeNote: e.target.value })}
                  />
                </div>
              </div>

              {/* ─ Media */}
              <div className="ed-section">
                <h3 className="ed-section__title">Media — photos &amp; videos</h3>

                <p
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    marginBottom: 10,
                  }}
                >
                  Photos · {editDraft.photos.length} / 10
                </p>

                <div className="media-grid">
                  {editDraft.photos.map((src, i) => (
                    <div key={i} className="media-cell">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="" />
                      {i === 0 && (
                        <span className="media-cell__main">Main</span>
                      )}
                      <button
                        type="button"
                        className="media-cell__rm"
                        title="Remove"
                        onClick={() => removePhoto(i)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {editDraft.photos.length < 10 && (
                    <button
                      type="button"
                      className="media-add"
                      onClick={() => photoPickerRef.current?.click()}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        style={{ display: "block", margin: "0 auto 4px" }}
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      <span>Add photo</span>
                    </button>
                  )}
                </div>

                <input
                  ref={photoPickerRef}
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  multiple
                  style={{ display: "none" }}
                  onChange={(e) => handlePhotoFiles(e.target.files)}
                />

                <div style={{ height: 18 }} />
                <p
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    marginBottom: 10,
                  }}
                >
                  Videos · {editDraft.videos.length} / 3
                </p>

                <div className="video-list">
                  {editDraft.videos.map((v, i) => (
                    <div key={i} className="video-row">
                      <div className="video-row__thumb">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M5 3l8 5-8 5V3z" />
                        </svg>
                      </div>
                      <div className="video-row__info">
                        <p className="video-row__title">
                          {v.title || v.url || "Untitled"}
                        </p>
                        <p className="video-row__dur">{v.duration}</p>
                      </div>
                      <button
                        type="button"
                        className="icon-btn icon-btn--danger"
                        title="Remove"
                        onClick={() => {
                          const videos = [...editDraft.videos];
                          videos.splice(i, 1);
                          patchDraft({ videos });
                        }}
                      >
                        <IconTrash />
                      </button>
                    </div>
                  ))}
                </div>

                {editDraft.videos.length < 3 && (
                  <>
                    <div className="video-url-row">
                      <input
                        className="ed-input"
                        placeholder="Paste YouTube / Vimeo URL"
                        value={videoUrlInput}
                        onChange={(e) => setVideoUrlInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addVideoUrl();
                          }
                        }}
                      />
                      <button
                        type="button"
                        className="btn-ghost"
                        onClick={addVideoUrl}
                      >
                        Add link
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>

        <footer className="drawer__foot">
          <button className="btn-ghost" type="button" onClick={closeDrawer}>
            Cancel
          </button>
          <button className="btn-gold" type="button" onClick={saveDrawer}>
            Save changes
          </button>
        </footer>
      </aside>

      {/* ── Delete confirm modal */}
      <div
        className={`modal-backdrop${deleteModal.open ? " is-open" : ""}`}
        onClick={() => setDeleteModal({ open: false, id: null })}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal__ic">
            <svg
              width="22"
              height="22"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M3 4h10M6 4V2h4v2M5 4l1 10h4l1-10" />
            </svg>
          </div>
          <h3 className="modal__title">Remove from catalog?</h3>
          <p className="modal__msg">
            You&apos;re about to delete <b>{deleteName}</b>. This action
            cannot be undone.
          </p>
          <div className="modal__actions">
            <button
              className="btn-ghost"
              type="button"
              onClick={() => setDeleteModal({ open: false, id: null })}
            >
              Cancel
            </button>
            <button
              className="btn-danger"
              type="button"
              onClick={confirmDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
