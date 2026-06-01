"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const photos = [
  { src: "/photos/rosali-big.jpg", alt: "Розали pendant" },
  { src: "/photos/oko.jpg", alt: "Око Лагуны pendant" },
  { src: "/photos/miraje.jpg", alt: "Miraje bracelet" },
  { src: "/photos/zastyvshaya.jpg", alt: "Frozen Eternity pendant" },
  { src: "/photos/ambra-noir.jpg", alt: "Ambra Noir bracelet" },
  { src: "/photos/shining-river.jpg", alt: "Shining River bracelet" },
];

export default function GalleryWall() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cells =
      gridRef.current?.querySelectorAll<HTMLElement>(".gallery__cell");
    if (!cells) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    cells.forEach((cell, i) => {
      (cell as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
      obs.observe(cell);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <section className="gallery">
      <header className="gallery__head">
        <p className="eyebrow">As Seen On</p>
        <h2 className="gallery__title">
          <em>Every piece, photographed</em>
        </h2>
        <p className="gallery__sub">
          Real pieces in real moments — captured by hand, never staged.
        </p>
      </header>

      <div className="gallery__grid" ref={gridRef}>
        {photos.map((p) => (
          <Link key={p.src} className="gallery__cell" href="/shop">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} loading="lazy" />
          </Link>
        ))}
      </div>
    </section>
  );
}
