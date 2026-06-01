"use client";

import { useState, useMemo } from "react";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/shared/ProductCard";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

type SortKey = "new" | "name" | "coll";
type CollKey = "all" | "beadwork" | "contempo";

const BEADWORK_CATS = [
  { key: "all", label: "Все" },
  { key: "cuff", label: "Couture Cuffs" },
  { key: "brooch", label: "Brooches" },
  { key: "pendant", label: "Art Pendants" },
  { key: "necklace", label: "Necklaces" },
  { key: "ring", label: "Art Rings" },
];

const CONTEMPO_CATS = [
  { key: "all", label: "Все" },
  { key: "bracelet", label: "Bracelets" },
  { key: "pendant", label: "Pendants" },
  { key: "necklace", label: "Necklaces" },
];

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "new", label: "Сначала новые" },
  { key: "name", label: "По названию" },
  { key: "coll", label: "По коллекции" },
];

const ChevronSvg = () => (
  <svg className="nb-select__chev" width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
    <path d="M1 1 L4.5 4.5 L8 1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ShopPage() {
  const [activeColl, setActiveColl] = useState<CollKey>("all");
  const [activeCat, setActiveCat] = useState("all");
  const [sort, setSort] = useState<SortKey>("new");
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter(
      (p) =>
        (activeColl === "all" || p.coll === activeColl) &&
        (activeCat === "all" || p.cat === activeCat)
    );
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name, "ru"));
    else if (sort === "coll") {
      const rank: Record<string, number> = { beadwork: 0, contempo: 1 };
      list = [...list].sort((a, b) => rank[a.coll] - rank[b.coll]);
    }
    return list;
  }, [activeColl, activeCat, sort]);

  const handleColl = (key: CollKey) => {
    setActiveColl(key);
    setActiveCat("all");
  };

  const subCats = activeColl === "beadwork" ? BEADWORK_CATS : activeColl === "contempo" ? CONTEMPO_CATS : null;

  const currentSortLabel = SORT_OPTIONS.find((o) => o.key === sort)?.label ?? "";

  return (
    <main className="shop">
      <header className="shop__head">
        <Breadcrumbs crumbs={[{ label: "Главная", href: "/" }, { label: "Каталог" }]} />
        <p className="eyebrow shop__eyebrow">Каталог украшений</p>
        <h1 className="shop__title"><em>Все украшения</em></h1>
        <hr className="gold-line gold-line--wide" />
        <p className="shop__sub">
          Каждое украшение создано вручную в нашей мастерской — в единственном экземпляре, никогда не повторяется.
        </p>
      </header>

      <section className="shop__toolbar" aria-label="Filters">
        <div className="shop__filters">
          {(["all", "beadwork", "contempo"] as CollKey[]).map((key) => (
            <button
              key={key}
              className={`filter-pill${activeColl === key ? " is-active" : ""}`}
              type="button"
              onClick={() => handleColl(key)}
            >
              {key === "all" ? "Все" : key === "beadwork" ? "Beadwork Art" : "Contemporary"}
            </button>
          ))}

          <div className="shop__sort">
            <span className="shop__sort-label">Сортировка</span>
            <div className={`nb-select${sortOpen ? " is-open" : ""}`}>
              <button
                className="nb-select__btn"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={sortOpen}
                onClick={() => setSortOpen((v) => !v)}
                onBlur={() => setTimeout(() => setSortOpen(false), 150)}
              >
                <span className="nb-select__val">{currentSortLabel}</span>
                <ChevronSvg />
              </button>
              <ul className="nb-select__list" role="listbox">
                {SORT_OPTIONS.map((o) => (
                  <li
                    key={o.key}
                    className={`nb-select__opt${sort === o.key ? " is-selected" : ""}`}
                    role="option"
                    aria-selected={sort === o.key}
                    onClick={() => { setSort(o.key); setSortOpen(false); }}
                  >
                    {o.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {subCats && (
          <div className="shop__subfilters">
            {subCats.map((c) => (
              <button
                key={c.key}
                className={`subpill${activeCat === c.key ? " is-active" : ""}`}
                type="button"
                onClick={() => setActiveCat(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}
      </section>

      <div className="shop__results">
        <span className="shop__count">
          <span>{filtered.length}</span> украшений
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="prod-grid shop__grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="shop__empty">
          <p>В этой категории пока пусто. Скоро будут новые украшения.</p>
        </div>
      )}
    </main>
  );
}
