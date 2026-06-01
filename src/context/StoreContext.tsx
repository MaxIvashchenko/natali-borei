"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { formatPrice, PRODUCTS } from "@/lib/products";

interface CartItem {
  id: string;
  qty: number;
}

interface StoreContextValue {
  cart: CartItem[];
  favorites: string[];
  cartCount: number;
  cartTotal: number;
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleFav: (id: string) => void;
  inCart: (id: string) => boolean;
  inFav: (id: string) => boolean;
  format: (n: number) => string;
}

const StoreContext = createContext<StoreContextValue | null>(null);

const CART_KEY = "nb-cart";
const FAV_KEY = "nb-fav";
const CART_EVENT = "nb:store:cart";
const FAV_EVENT = "nb:store:fav";

const EMPTY_CART: CartItem[] = [];
const EMPTY_FAVS: string[] = [];

let storeHydrated = false;

type CacheEntry<T> = { raw: string | null; value: T };

const snapshotCache = new Map<string, CacheEntry<unknown>>();

function readLS<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const raw = localStorage.getItem(key);
    const cached = snapshotCache.get(key) as CacheEntry<T> | undefined;
    if (cached && cached.raw === raw) return cached.value;

    const value = raw ? (JSON.parse(raw) as T) : fallback;
    snapshotCache.set(key, { raw, value });
    return value;
  } catch {
    return fallback;
  }
}

function writeLS<T>(key: string, value: T) {
  if (typeof window === "undefined") return;

  try {
    const raw = JSON.stringify(value);
    localStorage.setItem(key, raw);
    snapshotCache.set(key, { raw, value });
  } catch {}
}

function subscribeStore(event: string) {
  return (onStoreChange: () => void) => {
    const handler = () => onStoreChange();
    window.addEventListener(event, handler);
    return () => window.removeEventListener(event, handler);
  };
}

function publishStore(event: string) {
  window.dispatchEvent(new Event(event));
}

function useStoreSlice<T>(key: string, event: string, fallback: T, empty: T) {
  return useSyncExternalStore(
    subscribeStore(event),
    () => (storeHydrated ? readLS(key, fallback) : empty),
    () => empty,
  );
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    storeHydrated = true;
    publishStore(CART_EVENT);
    publishStore(FAV_EVENT);
  }, []);

  const cart = useStoreSlice<CartItem[]>(
    CART_KEY,
    CART_EVENT,
    EMPTY_CART,
    EMPTY_CART,
  );
  const favorites = useStoreSlice<string[]>(
    FAV_KEY,
    FAV_EVENT,
    EMPTY_FAVS,
    EMPTY_FAVS,
  );

  const setCart = useCallback(
    (updater: CartItem[] | ((prev: CartItem[]) => CartItem[])) => {
      const prev = readLS<CartItem[]>(CART_KEY, EMPTY_CART);
      const next = typeof updater === "function" ? updater(prev) : updater;
      writeLS(CART_KEY, next);
      publishStore(CART_EVENT);
    },
    [],
  );

  const setFavorites = useCallback(
    (updater: string[] | ((prev: string[]) => string[])) => {
      const prev = readLS<string[]>(FAV_KEY, EMPTY_FAVS);
      const next = typeof updater === "function" ? updater(prev) : updater;
      writeLS(FAV_KEY, next);
      publishStore(FAV_EVENT);
    },
    [],
  );

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);

  const dispatch = (name: string) => {
    if (typeof window !== "undefined") window.dispatchEvent(new Event(name));
  };

  const addToCart = useCallback(
    (id: string, qty = 1) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.id === id);
        if (existing)
          return prev.map((i) =>
            i.id === id ? { ...i, qty: i.qty + qty } : i,
          );
        return [...prev, { id, qty }];
      });
      dispatch("nb:cart:added");
    },
    [setCart],
  );

  const removeFromCart = useCallback(
    (id: string) => {
      setCart((prev) => prev.filter((i) => i.id !== id));
      dispatch("nb:cart:removed");
    },
    [setCart],
  );

  const setQty = useCallback(
    (id: string, qty: number) => {
      setCart((prev) =>
        prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)),
      );
    },
    [setCart],
  );

  const clearCart = useCallback(() => setCart([]), [setCart]);

  const toggleFav = useCallback(
    (id: string) => {
      setFavorites((prev) => {
        const adding = !prev.includes(id);
        dispatch(adding ? "nb:fav:added" : "nb:fav:removed");
        return adding ? [...prev, id] : prev.filter((x) => x !== id);
      });
    },
    [setFavorites],
  );

  const inCart = useCallback(
    (id: string) => cart.some((i) => i.id === id),
    [cart],
  );
  const inFav = useCallback(
    (id: string) => favorites.includes(id),
    [favorites],
  );

  return (
    <StoreContext.Provider
      value={{
        cart,
        favorites,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        setQty,
        clearCart,
        toggleFav,
        inCart,
        inFav,
        format: formatPrice,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
