"use client";

import {
  createContext,
  useCallback,
  useContext,
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

function readLS<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}

function writeLS(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

function subscribeStore(event: string) {
  return (onStoreChange: () => void) => {
    const handler = () => onStoreChange();
    window.addEventListener(event, handler);
    return () => window.removeEventListener(event, handler);
  };
}

function useStoreSlice<T>(key: string, event: string, fallback: T) {
  return useSyncExternalStore(
    subscribeStore(event),
    () => readLS(key, fallback),
    () => fallback,
  );
}

function publishStore(event: string) {
  window.dispatchEvent(new Event(event));
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const cart = useStoreSlice<CartItem[]>(CART_KEY, CART_EVENT, []);
  const favorites = useStoreSlice<string[]>(FAV_KEY, FAV_EVENT, []);

  const setCart = useCallback(
    (updater: CartItem[] | ((prev: CartItem[]) => CartItem[])) => {
      const prev = readLS<CartItem[]>(CART_KEY, []);
      const next = typeof updater === "function" ? updater(prev) : updater;
      writeLS(CART_KEY, next);
      publishStore(CART_EVENT);
    },
    [],
  );

  const setFavorites = useCallback(
    (updater: string[] | ((prev: string[]) => string[])) => {
      const prev = readLS<string[]>(FAV_KEY, []);
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
