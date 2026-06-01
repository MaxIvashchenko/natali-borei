import Link from "next/link";

const OrnamentSVG = () => (
  <svg
    width="180"
    height="14"
    viewBox="0 0 180 14"
    fill="none"
    aria-hidden="true"
  >
    <line
      x1="0"
      y1="7"
      x2="66"
      y2="7"
      stroke="#B8963E"
      strokeWidth="0.8"
      opacity="0.55"
    />
    <rect
      x="72"
      y="2"
      width="10"
      height="10"
      transform="rotate(45 77 7)"
      stroke="#B8963E"
      strokeWidth="0.8"
      opacity="0.7"
      fill="none"
    />
    <circle cx="90" cy="7" r="1.4" fill="#B8963E" opacity="0.9" />
    <rect
      x="98"
      y="2"
      width="10"
      height="10"
      transform="rotate(45 103 7)"
      stroke="#B8963E"
      strokeWidth="0.8"
      opacity="0.7"
      fill="none"
    />
    <line
      x1="114"
      y1="7"
      x2="180"
      y2="7"
      stroke="#B8963E"
      strokeWidth="0.8"
      opacity="0.55"
    />
  </svg>
);

const CornerSVG = ({ size = 26 }: { size?: number }) => (
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

interface ProductCardProps {
  href: string;
  src: string;
  alt: string;
  name: string;
  cat: string;
  label?: string;
}

function ProductCard({
  href,
  src,
  alt,
  name,
  cat,
  label = "View Piece",
}: ProductCardProps) {
  return (
    <Link className="prod-card" href={href} aria-label={name}>
      <div className="prod-card__media">
        <div className="ph ph--product">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ph__img" src={src} alt={alt} />
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
          <span className="label-wide">{label}</span>
          <ArrowSVG />
        </div>
      </div>
      <div className="prod-card__meta">
        <h3 className="prod-card__name">{name}</h3>
        <p className="prod-card__cat">{cat}</p>
      </div>
    </Link>
  );
}

const beadworkProducts = [
  {
    href: "/shop",
    src: "/photos/shining-river.jpg",
    alt: "Shining River",
    name: "Shining River",
    cat: "Beadwork Art · Couture Cuff",
  },
  {
    href: "/shop",
    src: "/photos/mandragora.jpg",
    alt: "Mandragora brooch",
    name: "Mandragora",
    cat: "Beadwork Art · Insect Brooch",
  },
  {
    href: "/shop",
    src: "/photos/hranitel.jpg",
    alt: "Amber Guardian pendant",
    name: "Amber Guardian",
    cat: "Beadwork Art · Art Pendant",
  },
  {
    href: "/shop",
    src: "/photos/zastyvshaya.jpg",
    alt: "Frozen Eternity necklace",
    name: "Frozen Eternity",
    cat: "Beadwork Art · Necklaces",
  },
];

export default function BeadworkShowcase() {
  return (
    <section className="showcase showcase--beadwork">
      <header className="showcase__head">
        <p className="eyebrow">Collection I</p>
        <h2 className="showcase__title">
          <em>Beadwork Art</em>
        </h2>
        <span className="showcase__ornament">
          <OrnamentSVG />
        </span>
      </header>

      <div className="prod-grid">
        {beadworkProducts.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>

      <div className="showcase__cta">
        <Link className="gold-btn" href="/shop">
          View Full Collection <ArrowSVG />
        </Link>
      </div>
    </section>
  );
}
