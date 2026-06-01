"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getCollLabel } from "@/lib/products";
import { useStore } from "@/context/StoreContext";
import ProductCard from "@/components/shared/ProductCard";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

const CornerSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
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
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: Props) {
  const { slug } = use(params);
  const product = PRODUCTS.find((p) => p.id === slug);

  if (!product) notFound();

  const { addToCart, toggleFav, inCart, inFav, format } = useStore();
  const faved = inFav(product.id);
  const incart = inCart(product.id);

  const media =
    product.media && product.media.length
      ? product.media
      : [
          {
            type: "image" as const,
            src: product.img,
            kind: "product" as const,
          },
        ];

  const [activeIdx, setActiveIdx] = useState(0);

  const related = PRODUCTS.filter(
    (p) => p.coll === product.coll && p.id !== product.id,
  ).slice(0, 4);

  const collLabel = getCollLabel(product.coll);
  const displayName = product.altName || product.name;

  return (
    <main className="product" id="productRoot">
      <header className="product__head">
        <Breadcrumbs
          crumbs={[
            { label: "Главная", href: "/" },
            { label: "Каталог", href: "/shop" },
            { label: displayName },
          ]}
        />
      </header>

      <section className="product__hero">
        <div className="product__gallery">
          <div className="product__main">
            <div className="ph" id="mainStage">
              {media[activeIdx]?.type === "video" ? (
                <video
                  className="product__media-video"
                  src={media[activeIdx].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  poster={(media[activeIdx] as { poster?: string }).poster}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="ph__img"
                  src={media[activeIdx]?.src ?? product.img}
                  alt={displayName}
                />
              )}
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
          </div>

          {media.length > 1 && (
            <div className="product__thumbs">
              {media.map((m, i) => (
                <button
                  key={i}
                  type="button"
                  className={`product__thumb${i === activeIdx ? " is-active" : ""}`}
                  aria-label={`View ${i + 1}`}
                  onClick={() => setActiveIdx(i)}
                >
                  {m.type === "video" ? (
                    <>
                      <video
                        className="product__thumb-vid"
                        src={m.src}
                        muted
                        preload="metadata"
                      />
                      <span className="product__thumb-play" aria-hidden="true">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                      </span>
                    </>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.src} alt="" loading="lazy" />
                  )}
                  {m.kind === "model" && (
                    <span className="product__thumb-tag">Model</span>
                  )}
                  {m.kind === "detail" && (
                    <span className="product__thumb-tag">Detail</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product__info">
          <p className="eyebrow">
            {collLabel} · {product.subCat}
          </p>
          <h1 className="product__name">{displayName}</h1>
          {product.altName && product.altName !== product.name && (
            <p className="product__alt">{product.name}</p>
          )}
          <hr className="gold-line gold-line--wide" />

          {product.intro && <p className="product__intro">{product.intro}</p>}

          <dl className="product__specs">
            {product.size && (
              <div className="spec">
                <dt>Размер</dt>
                <dd>{product.size}</dd>
              </div>
            )}
            {product.chain && (
              <div className="spec">
                <dt>Цепочка</dt>
                <dd>{product.chain}</dd>
              </div>
            )}
            {product.materials && product.materials.length > 0 && (
              <div className="spec">
                <dt>Материалы</dt>
                <dd>{product.materials.join(" · ")}</dd>
              </div>
            )}
            <div className="spec">
              <dt>Исполнение</dt>
              <dd>Полностью ручная работа · в единственном экземпляре</dd>
            </div>
          </dl>

          <div className="product__price">
            <span className="product__price-label">Цена</span>
            <span className="product__price-val">{format(product.price)}</span>
          </div>

          <div className="product__ctas">
            <button
              className={`gold-btn gold-btn--filled${incart ? " is-incart" : ""}`}
              type="button"
              onClick={() => addToCart(product.id)}
            >
              {incart ? "В корзине" : "В корзину"}
              <ArrowSvg />
            </button>
            <button
              className={`gold-btn product__wishlist${faved ? " is-faved" : ""}`}
              type="button"
              aria-label="В избранное"
              onClick={() => toggleFav(product.id)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill={faved ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.3"
              >
                <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
              </svg>
              В избранное
            </button>
          </div>

          <a
            className="product__enquire"
            href={`mailto:boreinatali@gmail.com?subject=${encodeURIComponent("Запрос: " + displayName)}`}
          >
            Или связаться по украшению
          </a>

          <ul className="product__notes">
            <li>Отправка по всему миру</li>
            <li>Подробная инструкция по уходу прилагается</li>
            <li>Авторская упаковка</li>
          </ul>
        </div>
      </section>

      {product.story && product.story.length > 0 && (
        <section className="product__story">
          <div className="product__story-inner">
            <p className="eyebrow">История украшения</p>
            {product.story.map((par, i) => (
              <p key={i} className="product__story-p">
                {par}
              </p>
            ))}
            {product.closing && (
              <>
                <hr className="gold-line gold-line--wide" />
                <p className="product__closing">
                  <em>{product.closing}</em>
                </p>
              </>
            )}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="product__related">
          <header className="product__related-head">
            <p className="eyebrow">Из той же коллекции</p>
            <h2 className="product__related-title">{collLabel}</h2>
          </header>
          <div className="prod-grid product__related-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="product__related-cta">
            <Link className="gold-btn" href="/shop">
              Весь каталог <ArrowSvg />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
