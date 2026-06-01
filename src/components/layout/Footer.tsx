import Image from "next/image";
import Link from "next/link";

const shopLinks = [
  { label: "Beadwork Art", href: "/shop" },
  { label: "Contemporary Jewelry", href: "/shop" },
  { label: "New Arrivals", href: "/shop" },
  { label: "Journal", href: "/about" },
];

const collectionLinks = [
  { label: "Couture Cuffs", href: "/shop" },
  { label: "Brooches", href: "/shop" },
  { label: "Art Pendants", href: "/shop" },
  { label: "Necklaces", href: "/shop" },
  { label: "Bracelets", href: "/shop" },
];

const atelierLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Custom Orders", href: "/contact" },
  { label: "Materials & Care", href: "/materials" },
  { label: "Shipping & Returns", href: "/delivery" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__top-line" aria-hidden="true" />

      <div className="footer__brand">
        <Image
          className="footer__logo"
          src="/logo-wordmark.png"
          alt="Natali Borei"
          width={160}
          height={40}
        />
        <span className="footer__tag">Exclusive Accessoires</span>
      </div>

      <div className="footer__cols">
        <div className="footer__col">
          <h4 className="footer__h">Shop</h4>
          <ul>
            {shopLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <span className="footer__divider" aria-hidden="true" />

        <div className="footer__col">
          <h4 className="footer__h">Collections</h4>
          <ul>
            {collectionLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <span className="footer__divider" aria-hidden="true" />

        <div className="footer__col">
          <h4 className="footer__h">Atelier</h4>
          <ul>
            {atelierLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <span className="footer__divider" aria-hidden="true" />

        <div className="footer__col">
          <h4 className="footer__h">Legal</h4>
          <ul>
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className="footer__social">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <p>© {new Date().getFullYear()} Natali Borei. All rights reserved.</p>
        <p>Handcrafted with soul · Ships worldwide</p>
      </div>
    </footer>
  );
}
