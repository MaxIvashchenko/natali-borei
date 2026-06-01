"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
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

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(readLS<CartItem[]>(CART_KEY, []));
    setFavorites(readLS<string[]>(FAV_KEY, []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) writeLS(CART_KEY, cart);
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) writeLS(FAV_KEY, favorites);
  }, [favorites, hydrated]);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);

  const dispatch = (name: string) => {
    if (typeof window !== "undefined") window.dispatchEvent(new Event(name));
  };

  const addToCart = useCallback((id: string, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { id, qty }];
    });
    dispatch("nb:cart:added");
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
    dispatch("nb:cart:removed");
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleFav = useCallback((id: string) => {
    setFavorites((prev) => {
      const adding = !prev.includes(id);
      dispatch(adding ? "nb:fav:added" : "nb:fav:removed");
      return adding ? [...prev, id] : prev.filter((x) => x !== id);
    });
  }, []);

  const inCart = useCallback((id: string) => cart.some((i) => i.id === id), [cart]);
  const inFav = useCallback((id: string) => favorites.includes(id), [favorites]);

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
