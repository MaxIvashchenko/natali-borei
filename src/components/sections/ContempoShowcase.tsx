import Link from "next/link";

const CornerSVG = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path d="M2 38 L2 2 L38 2" stroke="#B8963E" strokeWidth="1" />
  </svg>
);

const ArrowSVG = () => (
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

const products = [
  {
    href: "/shop",
    src: "/photos/oko.jpg",
    alt: "Око Лагуны pendant",
    name: "Око Лагуны",
    cat: "Contemporary · Necklaces",
  },
  {
    href: "/shop",
    src: "/photos/rosali-bracelet.jpg",
    alt: "Rosali bracelet",
    name: "Rosali",
    cat: "Contemporary · Bracelets",
  },
  {
    href: "/shop",
    src: "/photos/rosali-pendant.jpg",
    alt: "Rosali pendant",
    name: "Rosali",
    cat: "Contemporary · Pendants",
  },
];

export default function ContempoShowcase() {
  return (
    <section className="contempo">
      <div className="contempo__grid">
        <div className="contempo__intro">
          <p className="eyebrow">Collection II</p>
          <h2 className="contempo__heading">
            Modern forms, <em>timeless elegance</em>
          </h2>
          <hr className="gold-line contempo__rule" />
          <p className="contempo__body">
            Sculptural silhouettes shaped from Japanese Miyuki and TOHO beads —
            restrained, precise, and unapologetically contemporary.
          </p>
          <p className="contempo__subs">
            Necklaces &nbsp;·&nbsp; Bracelets &nbsp;·&nbsp; Pendants
          </p>
          <Link className="arrow-link contempo__cta" href="/shop">
            Explore Collection <span className="arr">→</span>
          </Link>
        </div>

        {products.map((p) => (
          <Link
            key={p.name + p.cat}
            className="prod-card"
            href={p.href}
            aria-label={p.name}
          >
            <div className="prod-card__media">
              <div className="ph ph--cool">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="ph__img" src={p.src} alt={p.alt} />
              </div>
              <span className="corner corner--tl">
                <CornerSVG />
              </span>
              <span className="corner corner--tr">
                <CornerSVG />
              </span>
              <span className="corner corner--bl">
                <CornerSVG />
              </span>
              <span className="corner corner--br">
                <CornerSVG />
              </span>
              <span className="prod-card__border" />
              <div className="prod-card__cta">
                <span className="label-wide">View Piece</span>
                <ArrowSVG />
              </div>
            </div>
            <div className="prod-card__meta">
              <h3 className="prod-card__name">{p.name}</h3>
              <p className="prod-card__cat">{p.cat}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
