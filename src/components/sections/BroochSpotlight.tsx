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

const MedallionRingSVG = () => (
  <svg
    className="medallion__ring"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <ellipse
      cx="50"
      cy="50"
      rx="46"
      ry="47"
      fill="none"
      stroke="#B8963E"
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    />
    <ellipse
      cx="50"
      cy="50"
      rx="43"
      ry="44"
      fill="none"
      stroke="#B8963E"
      strokeWidth="0.5"
      opacity="0.45"
      vectorEffect="non-scaling-stroke"
    />
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

const brooches = [
  {
    href: "/shop",
    src: "/photos/mandragora.jpg",
    alt: "Mandragora insect brooch",
    name: "Mandragora",
    cat: "Insect Brooch",
  },
  {
    href: "/shop",
    src: "/photos/hranitel.jpg",
    alt: "Amber Guardian order brooch",
    name: "Amber Guardian",
    cat: "Order Brooch",
  },
  {
    href: "/shop",
    src: "/photos/korall.jpg",
    alt: "Coral statement brooch",
    name: "Coral",
    cat: "Statement Brooch",
  },
];

export default function BroochSpotlight() {
  return (
    <section className="spotlight">
      <div className="spotlight__glow" aria-hidden="true" />
      <header className="spotlight__head">
        <p className="eyebrow">The Art of the Brooch</p>
        <h2 className="spotlight__title">
          Insect <span className="sep">·</span> Order{" "}
          <span className="sep">·</span> <em>Statement</em>
        </h2>
        <span className="showcase__ornament">
          <OrnamentSVG />
        </span>
      </header>

      <div className="spotlight__row">
        {brooches.map((b) => (
          <Link
            key={b.name}
            className="medallion"
            href={b.href}
            aria-label={b.alt}
          >
            <div className="medallion__frame">
              <div className="medallion__img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt={b.alt} />
              </div>
              <MedallionRingSVG />
            </div>
            <h3 className="medallion__name">{b.name}</h3>
            <p className="medallion__cat">{b.cat}</p>
          </Link>
        ))}
      </div>

      <div className="spotlight__cta">
        <Link className="gold-btn" href="/shop">
          Browse Brooches <ArrowSVG />
        </Link>
      </div>
    </section>
  );
}
