import Link from "next/link";

const DividerSVG = () => (
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

export default function CollectionDiptych() {
  return (
    <section className="diptych">
      {/* Spread 01 — Beadwork Art */}
      <Link
        className="diptych__spread diptych__spread--01"
        href="/shop"
        aria-label="Enter Beadwork Art collection"
      >
        <span className="diptych__numeral" aria-hidden="true">
          I
        </span>

        <figure className="diptych__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/ambra-noir.jpg" alt="Ambra Noir cuff" />
          <span className="diptych__media-tag">Ambra Noir · 2025</span>
        </figure>

        <div className="diptych__copy">
          <p className="eyebrow diptych__eyebrow">
            Collection I &nbsp;·&nbsp; The Atelier
          </p>
          <h2 className="diptych__title">
            Beadwork <em>Art</em>
          </h2>
          <hr className="gold-line" />
          <p className="diptych__lede">
            Sculptural, one-of-a-kind pieces hand-embroidered in glass beads —
            slow craft for collectors of objects with soul.
          </p>

          <ul className="diptych__index">
            <li>
              <span>01</span> Couture Cuffs
            </li>
            <li>
              <span>02</span> Art Pendants
            </li>
            <li>
              <span>03</span> Necklaces
            </li>
            <li>
              <span>04</span> Brooches
            </li>
            <li>
              <span>05</span> Art Rings
            </li>
          </ul>

          <span className="arrow-link diptych__cta">
            Enter Collection <span className="arr">→</span>
          </span>
        </div>
      </Link>

      <span className="diptych__divider" aria-hidden="true">
        <DividerSVG />
      </span>

      {/* Spread 02 — Contemporary Jewelry */}
      <Link
        className="diptych__spread diptych__spread--02"
        href="/shop"
        aria-label="Enter Contemporary Jewelry collection"
      >
        <span className="diptych__numeral" aria-hidden="true">
          II
        </span>

        <div className="diptych__copy">
          <p className="eyebrow diptych__eyebrow">
            Collection II &nbsp;·&nbsp; Modern Forms
          </p>
          <h2 className="diptych__title">
            Contemporary <em>Jewelry</em>
          </h2>
          <hr className="gold-line" />
          <p className="diptych__lede">
            Restrained silhouettes built from Japanese Miyuki and TOHO beads —
            precise, modern, and unapologetic.
          </p>

          <ul className="diptych__index">
            <li>
              <span>01</span> Bracelets
            </li>
            <li>
              <span>02</span> Pendants
            </li>
            <li>
              <span>03</span> Necklaces
            </li>
          </ul>

          <span className="arrow-link diptych__cta">
            Enter Collection <span className="arr">→</span>
          </span>
        </div>

        <figure className="diptych__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/rosali-big.jpg" alt="Rosali pendant" />
          <span className="diptych__media-tag">Rosali · 2025</span>
        </figure>
      </Link>
    </section>
  );
}
