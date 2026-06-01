import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Коллекции — Natali Borei",
  description: "Коллекции украшений ручной работы Natali Borei.",
};

const collections = [
  {
    slug: "amber",
    name: "Янтарь",
    nameEn: "Amber",
    desc: "Коллекция украшений с натуральным янтарём — сочетание бисерного искусства и современных форм. Броши, подвески, кольца и браслеты, в которых живёт тепло балтийского солнца.",
    heroImg: "/photos/zastyvshaya.jpg",
    thumbs: [
      "/photos/hranitel.jpg",
      "/photos/zastyvshaya.jpg",
      "/photos/ambra-noir.jpg",
    ],
  },
];

export default function CollectionsPage() {
  return (
    <main className="page">
      <header className="page__head">
        <Breadcrumbs
          crumbs={[{ label: "Главная", href: "/" }, { label: "Коллекции" }]}
        />
        <p className="eyebrow">Линии украшений</p>
        <h1 className="page__title">
          <em>Коллекции</em>
        </h1>
        <hr className="gold-line gold-line--wide" />
        <p className="page__lead">
          Тематические линии украшений, объединённые материалом, настроением и
          идеей. Каждая вещь — ручная работа в единственном экземпляре.
        </p>
      </header>

      <section className="collections">
        {collections.map((coll) => (
          <Link
            key={coll.slug}
            className="coll-card reveal"
            href={`/collections/${coll.slug}`}
            aria-label={`Коллекция ${coll.name}`}
          >
            <div className="coll-card__media">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="ph__img"
                  src={coll.heroImg}
                  alt={`Коллекция ${coll.name}`}
                />
              </div>
            </div>
            <div className="coll-card__body">
              <p className="eyebrow">Коллекция</p>
              <h2 className="coll-card__name">{coll.name}</h2>
              <p className="coll-card__desc">{coll.desc}</p>
              <div className="coll-card__thumbs">
                {coll.thumbs.map((src, i) => (
                  <span key={i} className="coll-card__thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" loading="lazy" />
                  </span>
                ))}
              </div>
              <span className="arrow-link coll-card__cta">
                Смотреть коллекцию <span className="arr">→</span>
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
