"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

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

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="final" ref={sectionRef}>
      <span className="shimmer-line final__shimmer" aria-hidden="true" />
      <div className="final__inner">
        <span className="final__ornament" aria-hidden="true">
          <svg width="58" height="58" viewBox="0 0 60 60" fill="none">
            <rect
              x="14"
              y="14"
              width="32"
              height="32"
              transform="rotate(45 30 30)"
              stroke="#B8963E"
              strokeWidth="1"
              fill="none"
              opacity="0.85"
            />
            <rect
              x="22"
              y="22"
              width="16"
              height="16"
              transform="rotate(45 30 30)"
              stroke="#B8963E"
              strokeWidth="0.6"
              fill="none"
              opacity="0.55"
            />
            <circle cx="30" cy="30" r="2.4" fill="#F0D080" opacity="0.85" />
          </svg>
        </span>
        <h2 className="final__title">
          Find Your <em>Signature Piece</em>
        </h2>
        <p className="final__sub">
          Browse our full catalog of handcrafted beaded jewelry.
        </p>
        <div className="final__ctas">
          <Link className="gold-btn gold-btn--filled" href="/shop">
            Beadwork Art <ArrowSVG />
          </Link>
          <Link className="gold-btn" href="/shop">
            Contemporary Jewelry <ArrowSVG />
          </Link>
        </div>
        <a className="final__email" href="mailto:boreinatali@gmail.com">
          boreinatali@gmail.com
        </a>
      </div>
    </section>
  );
}
