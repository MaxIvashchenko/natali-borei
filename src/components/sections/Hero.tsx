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
      ["--x" as string]: "-128%",
      ["--y" as string]: "-68%",
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
      ["--x" as string]: "127%",
      ["--y" as string]: "-77%",
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
  const stageRef = useRef<HTMLDivElement>(null);

  // Wind physics (spring-damper scroll inertia)
  useEffect(() => {
    const root = document.documentElement;
    let wind = 0,
      vel = 0;
    let raf = 0;

    const getScrollY = () =>
      document.body.scrollTop ||
      window.scrollY ||
      document.documentElement.scrollTop ||
      0;
    let lastY = getScrollY();

    const onScroll = () => {
      const y = getScrollY();
      const dy = y - lastY;
      lastY = y;
      vel += dy * 0.55;
      if (vel > 220) vel = 220;
      if (vel < -220) vel = -220;
    };

    const tick = () => {
      wind += vel * 0.07;
      vel *= 0.84;
      wind *= 0.9;
      if (Math.abs(wind) < 0.01) wind = 0;
      if (Math.abs(vel) < 0.01) vel = 0;
      root.style.setProperty("--wind", wind.toFixed(3));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, {
      passive: true,
      capture: true,
    });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, { capture: true });
      cancelAnimationFrame(raf);
    };
  }, []);

  // Carousel (tablet ≤960px & phone ≤680px)
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const cardEls = Array.from(
      stage.querySelectorAll<HTMLElement>(".float-card"),
    );
    if (!cardEls.length) return;
    const N = cardEls.length;
    const half = Math.floor(N / 2);

    // cards[1] (Rosali) starts at slot 0
    let currentIndex = 1;
    let autoTimer: ReturnType<typeof setInterval> | null = null;
    let paused = false;
    let lastRotateAt = 0;

    const mqCarousel = window.matchMedia("(max-width: 960px)");

    const wrap = (d: number) => {
      while (d > half) d -= N;
      while (d < -half) d += N;
      return d;
    };
    const slotOf = (i: number) => wrap(i - currentIndex);

    const applySlots = () => {
      cardEls.forEach((card, i) =>
        card.setAttribute("data-slot", String(slotOf(i))),
      );
    };
    const rotate = (dir: number) => {
      currentIndex = (((currentIndex + dir) % N) + N) % N;
      applySlots();
      lastRotateAt = performance.now();
    };

    const startAuto = () => {
      stopAuto();
      autoTimer = setInterval(() => {
        if (!paused && mqCarousel.matches && !document.hidden) rotate(1);
      }, 4200);
    };
    const stopAuto = () => {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    };

    // Touch swipe
    let tStartX = 0,
      tStartY = 0,
      tActive = false,
      tMoved = false;
    const onTouchStart = (e: TouchEvent) => {
      if (!mqCarousel.matches) return;
      tStartX = e.touches[0].clientX;
      tStartY = e.touches[0].clientY;
      tActive = true;
      tMoved = false;
      paused = true;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!tActive) return;
      const dx = e.touches[0].clientX - tStartX;
      const dy = e.touches[0].clientY - tStartY;
      if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) tMoved = true;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!tActive) return;
      tActive = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - tStartX;
      const dy = t.clientY - tStartY;
      if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy)) {
        rotate(dx < 0 ? 1 : -1);
      }
      setTimeout(() => {
        paused = false;
      }, 900);
    };
    stage.addEventListener("touchstart", onTouchStart, { passive: true });
    stage.addEventListener("touchmove", onTouchMove, { passive: true });
    stage.addEventListener("touchend", onTouchEnd, { passive: true });

    // Mouse drag (for testing at small viewports on desktop)
    let mDown = false,
      mStartX = 0;
    const onMouseDown = (e: MouseEvent) => {
      if (!mqCarousel.matches) return;
      mDown = true;
      mStartX = e.clientX;
      paused = true;
    };
    const onMouseUp = (e: MouseEvent) => {
      if (!mDown) return;
      mDown = false;
      const dx = e.clientX - mStartX;
      if (Math.abs(dx) > 40) rotate(dx < 0 ? 1 : -1);
      setTimeout(() => {
        paused = false;
      }, 900);
    };
    stage.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Click side card → rotate toward it
    const cardClickHandlers: Array<() => void> = [];
    cardEls.forEach((card, i) => {
      const handler = () => {
        if (!mqCarousel.matches) return;
        if (performance.now() - lastRotateAt < 250) return;
        if (tMoved) {
          tMoved = false;
          return;
        }
        const s = slotOf(i);
        if (s === 0) return;
        rotate(s > 0 ? 1 : -1);
        paused = true;
        setTimeout(() => {
          paused = false;
        }, 1500);
      };
      card.addEventListener("click", handler);
      cardClickHandlers.push(handler);
    });

    // Pause on hover
    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
    };
    stage.addEventListener("mouseenter", onEnter);
    stage.addEventListener("mouseleave", onLeave);

    const activate = () => {
      applySlots();
      startAuto();
    };
    const deactivate = () => {
      stopAuto();
      cardEls.forEach((c) => c.removeAttribute("data-slot"));
    };

    if (mqCarousel.matches) activate();
    else deactivate();

    const onMQ = (e: MediaQueryListEvent) => {
      if (e.matches) activate();
      else deactivate();
    };
    mqCarousel.addEventListener("change", onMQ);

    return () => {
      stopAuto();
      stage.removeEventListener("touchstart", onTouchStart);
      stage.removeEventListener("touchmove", onTouchMove);
      stage.removeEventListener("touchend", onTouchEnd);
      stage.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      stage.removeEventListener("mouseenter", onEnter);
      stage.removeEventListener("mouseleave", onLeave);
      cardEls.forEach((card, i) =>
        card.removeEventListener("click", cardClickHandlers[i]),
      );
      mqCarousel.removeEventListener("change", onMQ);
    };
  }, []);

  return (
    <section className="hero hero--collage">
      {/* left: content */}
      <div className="hero__content">
        <p className="eyebrow hero__label enter">
          Exclusive Handmade Collection
        </p>
        <h1 className="hero__title enter">
          Where Craft<em>Meets Luxury</em>
        </h1>
        <hr className="gold-line hero__line enter" />
        <p className="hero__sub enter">
          Beaded jewelry &amp; accessories crafted with soul — each piece made
          by hand, no two alike.
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
      <div
        className="hero__stage"
        aria-hidden="true"
        id="heroStage"
        ref={stageRef}
      >
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
