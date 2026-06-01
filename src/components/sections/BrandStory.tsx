"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function BrandStory() {
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
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="story" ref={sectionRef}>
      <Image
        className="story__watermark"
        src="/logo-monogram.png"
        alt=""
        width={900}
        height={900}
        aria-hidden
      />
      <div className="story__inner">
        <p className="eyebrow">The Atelier</p>
        <h2 className="story__title">
          <em>Craft Born from Passion</em>
        </h2>
        <hr className="gold-line gold-line--wide story__rule" />
        <p className="story__body">
          Each jewel is made by hand in our studio — in single editions, never replicated. We work
          only with premium materials: Japanese <em>Miyuki</em> and <em>TOHO</em> seed beads, Czech
          crystals, freshwater pearls, and natural stones, set onto leather and silk with a slow,
          patient hand.
        </p>

        <div className="story__stats">
          <div className="stat">
            <span className="stat__n">
              150<sup>+</sup>
            </span>
            <span className="stat__l">Unique Designs</span>
          </div>
          <span className="stat__sep" aria-hidden="true" />
          <div className="stat">
            <span className="stat__n">
              7<sup>+</sup>
            </span>
            <span className="stat__l">Years of Craft</span>
          </div>
          <span className="stat__sep" aria-hidden="true" />
          <div className="stat">
            <span className="stat__n">∞</span>
            <span className="stat__l">Ships Worldwide</span>
          </div>
        </div>

        <Link className="arrow-link story__cta" href="/about">
          Our Story <span className="arr">→</span>
        </Link>
      </div>
    </section>
  );
}
