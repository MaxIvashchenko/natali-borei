"use client";

import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { Product, getCollLabel } from "@/lib/products";

const CornerSvg = () => (
  <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
    <path d="M2 38 L2 2 L38 2" stroke="#B8963E" strokeWidth="1" />
  </svg>
);

const ArrowSvg = () => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <path d="M1 5h12M9 1l4 4-4 4" />
  </svg>
);

interface Props {
  product: Product;
}

export default function ProductCard({ product: p }: Props) {
  const { addToCart, toggleFav, inCart, inFav, format } = useStore();
  const faved = inFav(p.id);
  const incart = inCart(p.id);

  return (
    <div className="prod-card" data-slug={p.id}>
      <Link
        className="prod-card__link"
        href={`/product/${p.id}`}
        aria-label={p.name}
      >
        <div className="prod-card__media">
          <div className="ph">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ph__img" src={p.img} alt={p.name} loading="lazy" />
          </div>
          <span className="corner corner--tl">
            <CornerSvg />
          </span>
          <span className="corner corner--tr">
            <CornerSvg />
          </span>
          <span className="corner corner--bl">
            <CornerSvg />
          </span>
          <span className="corner corner--br">
            <CornerSvg />
          </span>
          <span className="prod-card__border" />
          <div className="card-actions">
            <button
              className={`card-fav${faved ? " is-faved" : ""}`}
              type="button"
              aria-label="В избранное"
              data-fav-toggle={p.id}
              onClick={(e) => {
                e.preventDefault();
                toggleFav(p.id);
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={faved ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
              </svg>
            </button>
          </div>
          <div className="prod-card__cta">
            <span className="label-wide">Смотреть</span>
            <ArrowSvg />
          </div>
        </div>
        <div className="prod-card__meta">
          <h3 className="prod-card__name">{p.name}</h3>
          <p className="prod-card__cat">
            {getCollLabel(p.coll)} · {p.subCat}
          </p>
          <p className="prod-card__price">{format(p.price)}</p>
        </div>
      </Link>
      <button
        className={`card-add${incart ? " is-incart" : ""}`}
        type="button"
        data-add-cart={p.id}
        onClick={() => addToCart(p.id)}
      >
        {incart ? "В корзине" : "В корзину"}
      </button>
    </div>
  );
}
