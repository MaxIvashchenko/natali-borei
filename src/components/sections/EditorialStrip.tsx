"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface StripCard {
  name: string;
  cat: string;
  href: string;
  src: string;
  alt: string;
}

const cards: StripCard[] = [
  {
    name: "Shining River",
    cat: "Beadwork · Couture Cuff",
    href: "/shop",
    src: "/photos/shining-river.jpg",
    alt: "Shining River bracelet",
  },
  {
    name: "Korall",
    cat: "Beadwork · Couture Cuff",
    href: "/shop",
    src: "/photos/korall.jpg",
    alt: "Bracelet Коралл",
  },
  {
    name: "Rosali",
    cat: "Contemporary · Bracelet",
    href: "/shop",
    src: "/photos/rosali-bracelet.jpg",
    alt: "Bracelet Rosali",
  },
  {
    name: "Amber Guardian",
    cat: "Beadwork · Order Brooch",
    href: "/shop",
    src: "/photos/hranitel.jpg",
    alt: "Хранитель Амбры pendant",
  },
  {
    name: "Mandragora",
    cat: "Beadwork · Insect Brooch",
    href: "/shop",
    src: "/photos/mandragora.jpg",
    alt: "Mandragora brooch",
  },
  {
    name: "Ambra Noir",
    cat: "Beadwork · Couture Cuff",
    href: "/shop",
    src: "/photos/ambra-noir.jpg",
    alt: "Ambra Noir cuff",
  },
];

export default function EditorialStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const rafId = useRef<number>(0);
  const autoX = useRef(0);
  const paused = useRef(false);
  const speed = 0.6;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!paused.current) {
        autoX.current += speed;
        const maxScroll = track.scrollWidth / 2;
        if (autoX.current >= maxScroll) autoX.current = 0;
        track.style.transform = `translateX(-${autoX.current}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX + autoX.current;
      paused.current = true;
      track.classList.add("is-dragging");
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      autoX.current = startX.current - e.pageX;
      track.style.transform = `translateX(-${autoX.current}px)`;
    };
    const onMouseUp = () => {
      isDragging.current = false;
      track.classList.remove("is-dragging");
      setTimeout(() => {
        paused.current = false;
      }, 1200);
    };

    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    track.addEventListener("mouseenter", () => {
      paused.current = true;
    });
    track.addEventListener("mouseleave", () => {
      if (!isDragging.current) paused.current = false;
    });

    return () => {
      cancelAnimationFrame(rafId.current);
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const allCards = [...cards, ...cards];

  return (
    <section className="es" aria-label="Editorial moments">
      <button className="es__nav es__nav--prev" type="button" aria-label="Previous">
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M10 2 L4 8 L10 14" />
        </svg>
      </button>
      <button className="es__nav es__nav--next" type="button" aria-label="Next">
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M6 2 L12 8 L6 14" />
        </svg>
      </button>

      <div className="es__viewport" id="esViewport">
        <div className="es__track" id="esTrack" ref={trackRef}>
          {allCards.map((card, i) => (
            <figure key={i} className="es__card" data-name={card.name} data-cat={card.cat}>
              <div className="ph ph--editorial">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="ph__img" src={card.src} alt={card.alt} />
              </div>
              <figcaption className="es__cap">
                <span className="es__cap-cat">{card.cat}</span>
                <span className="es__cap-name">{card.name}</span>
                <Link className="es__cap-cta" href={card.href}>
                  View Piece <span className="arr">→</span>
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <p className="es__caption">Each piece is handcrafted. Each story is unique.</p>
    </section>
  );
}
