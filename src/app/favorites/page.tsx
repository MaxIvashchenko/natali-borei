"use client";

import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { useStore } from "@/context/StoreContext";
import ProductCard from "@/components/shared/ProductCard";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function FavoritesPage() {
  const { favorites } = useStore();
  const favProducts = PRODUCTS.filter((p) => favorites.includes(p.id));

  return (
    <main className="page">
      <header className="page__head">
        <Breadcrumbs crumbs={[{ label: "Главная", href: "/" }, { label: "Избранное" }]} />
        <p className="eyebrow">Сохранённое</p>
        <h1 className="page__title">
          <em>Избранное</em>
        </h1>
        <hr className="gold-line gold-line--wide" />
      </header>

      <div className="archive__grid-wrap">
        {favProducts.length > 0 && (
          <span className="archive__count">
            <b>{favProducts.length}</b> украшений в избранном
          </span>
        )}

        {favProducts.length === 0 ? (
          <div className="empty-state">
            <span className="empty-state__ic" aria-hidden="true">
              <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="0.9">
                <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
              </svg>
            </span>
            <p className="empty-state__text">Вы ещё не добавили украшения в избранное</p>
            <Link className="gold-btn gold-btn--filled" href="/shop">
              Перейти в каталог
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M1 5h12M9 1l4 4-4 4" />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="prod-grid">
            {favProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
