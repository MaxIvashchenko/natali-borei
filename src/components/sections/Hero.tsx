"use client";

import Link from "next/link";
import { CSSProperties, useEffect, useRef } from "react";

interface FloatCard {
  slot: string;
  src: string;
  alt: string;
  tag: string;
  style: CSSProperties;
  idleDur: string;
  idleDelay: string;
  idleAmp: number;
  idleRot: number;
}

const cards: FloatCard[] = [
  {
    slot: "-1",
    src: "/photos/miraje.jpg",
    alt: "",
    tag: "Miraje",
    style: {
      ["--w" as string]: "210px",
      ["--h" as string]: "280px",
      ["--x" as string]: "-115%",
      ["--y" as string]: "-55%",
      ["--z" as string]: "-120px",
      ["--rx" as string]: "6deg",
      ["--ry" as string]: "14deg",
      ["--rz" as string]: "-3deg",
      ["--rx-mul" as string]: "0.55",
      ["--ry-mul" as string]: "0.85",
      ["--rz-mul" as string]: "0.22",
    },
    idleDur: "11s",
    idleDelay: "0s",
    idleAmp: 10,
    idleRot: 0.5,
  },
  {
    slot: "0",
    src: "/photos/rosali-big.jpg",
    alt: "",
    tag: "Rosali",
    style: {
      ["--w" as string]: "280px",
      ["--h" as string]: "380px",
      ["--x" as string]: "-8%",
      ["--y" as string]: "-6%",
      ["--z" as string]: "80px",
      ["--rx" as string]: "-4deg",
      ["--ry" as string]: "-8deg",
      ["--rz" as string]: "2deg",
      ["--rx-mul" as string]: "0.30",
      ["--ry-mul" as string]: "0.45",
      ["--rz-mul" as string]: "0.12",
    },
    idleDur: "13s",
    idleDelay: "-3s",
    idleAmp: 7,
    idleRot: -0.35,
  },
  {
    slot: "1",
    src: "/photos/hranitel.jpg",
    alt: "",
    tag: "Amber Guardian",
    style: {
      ["--w" as string]: "220px",
      ["--h" as string]: "270px",
      ["--x" as string]: "90%",
      ["--y" as string]: "45%",
      ["--z" as string]: "-40px",
      ["--rx" as string]: "5deg",
      ["--ry" as string]: "-16deg",
      ["--rz" as string]: "4deg",
      ["--rx-mul" as string]: "0.75",
      ["--ry-mul" as string]: "1.05",
      ["--rz-mul" as string]: "0.28",
    },
    idleDur: "9.5s",
    idleDelay: "-6s",
    idleAmp: 12,
    idleRot: 0.6,
  },
  {
    slot: "2",
    src: "/photos/shining-river.jpg",
    alt: "",
    tag: "Shining River",
    style: {
      ["--w" as string]: "180px",
      ["--h" as string]: "230px",
      ["--x" as string]: "95%",
      ["--y" as string]: "-60%",
      ["--z" as string]: "-90px",
      ["--rx" as string]: "8deg",
      ["--ry" as string]: "-18deg",
      ["--rz" as string]: "5deg",
      ["--rx-mul" as string]: "0.60",
      ["--ry-mul" as string]: "0.95",
      ["--rz-mul" as string]: "0.24",
    },
    idleDur: "10.5s",
    idleDelay: "-2s",
    idleAmp: 9,
    idleRot: -0.5,
  },
  {
    slot: "-2",
    src: "/photos/mandragora.jpg",
    alt: "",
    tag: "Mandragora",
    style: {
      ["--w" as string]: "200px",
      ["--h" as string]: "250px",
      ["--x" as string]: "-105%",
      ["--y" as string]: "50%",
      ["--z" as string]: "-60px",
      ["--rx" as string]: "-4deg",
      ["--ry" as string]: "18deg",
      ["--rz" as string]: "-5deg",
      ["--rx-mul" as string]: "0.70",
      ["--ry-mul" as string]: "1.00",
      ["--rz-mul" as string]: "0.26",
    },
    idleDur: "12s",
    idleDelay: "-4s",
    idleAmp: 11,
    idleRot: 0.45,
  },
];



export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let wind = 0;
    let lastY = 0;
    let raf = 0;

    const onScroll = () => {
      const dy = window.scrollY - lastY;
      lastY = window.scrollY;
      wind += dy * 0.012;
    };

    const decay = () => {
      if (Math.abs(wind) > 0.001) {
        wind *= 0.93;
        document.documentElement.style.setProperty("--wind", String(wind.toFixed(4)));
      } else {
        document.documentElement.style.setProperty("--wind", "0");
      }
      raf = requestAnimationFrame(decay);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(decay);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero hero--collage">
      {/* left: content */}
      <div className="hero__content">
        <p className="eyebrow hero__label enter">Exclusive Handmade Collection</p>
        <h1 className="hero__title enter">
          Where Craft<em>Meets Luxury</em>
        </h1>
        <hr className="gold-line hero__line enter" />
        <p className="hero__sub enter">
          Beaded jewelry &amp; accessories crafted with soul — each piece made by hand, no two
          alike.
        </p>
        <div className="hero__cta enter">
          <Link className="gold-btn" href="/shop">
            Explore Collection{" "}
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
          </Link>
        </div>
      </div>

      {/* right: 3D floating collage */}
      <div className="hero__stage" aria-hidden="true" id="heroStage">
        <div className="hero__scene" id="heroScene" ref={sceneRef}>
          {cards.map((card) => (
            <div
              key={card.slot}
              className="float-card"
              data-slot={card.slot}
              style={{
                ...card.style,
                ["--idle-dur" as string]: card.idleDur,
                ["--idle-delay" as string]: card.idleDelay,
                ["--idle-amp" as string]: String(card.idleAmp),
                ["--idle-rot" as string]: String(card.idleRot),
              }}
            >
              <div className="float-card__inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.src} alt={card.alt} />
              </div>
              <span className="float-card__tag">{card.tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="scroll-ind" aria-hidden="true">
        <span className="lab">Scroll</span>
        <span className="track" />
      </div>
    </section>
  );
}
