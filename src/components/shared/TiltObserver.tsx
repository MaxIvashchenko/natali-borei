"use client";

import { useEffect } from "react";

export default function TiltObserver() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    interface TileCfg {
      el: HTMLElement;
      inner: HTMLElement | null;
      depth: number;
      phaseY: number;
      phaseRX: number;
      phaseRY: number;
      phaseRZ: number;
      windMulRX: number;
      windMulRY: number;
      windMulY: number;
    }

    const tiles: TileCfg[] = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]"),
    ).map((el, i) => ({
      el,
      inner: el.querySelector<HTMLElement>("[data-tilt-img]"),
      depth: parseFloat(el.dataset.depth ?? "1"),
      phaseY: Math.PI * 2 * (i * 0.37),
      phaseRX: Math.PI * 2 * (i * 0.51) + 0.7,
      phaseRY: Math.PI * 2 * (i * 0.29) + 1.4,
      phaseRZ: Math.PI * 2 * (i * 0.43) + 2.1,
      windMulRX: 0.45 + (i % 2 === 0 ? 0.1 : -0.1),
      windMulRY: 0.55 + (i % 3 === 0 ? -0.18 : 0.12),
      windMulY: 12 + i * 3,
    }));

    if (!tiles.length) return;

    let wind = 0;
    let vel = 0;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastScrollY;
      lastScrollY = y;
      vel += dy * 0.55;
      vel = Math.max(-220, Math.min(220, vel));
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let startedAt = 0;
    let rafId: number;

    function tick(now: number) {
      if (!startedAt) startedAt = now;
      wind += vel * 0.07;
      vel *= 0.84;
      wind *= 0.9;
      if (Math.abs(wind) < 0.01) wind = 0;
      if (Math.abs(vel) < 0.01) vel = 0;

      const t = (now - startedAt) / 1000;
      const vh = window.innerHeight;

      tiles.forEach((cfg) => {
        const r = cfg.el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - vh / 2);
        const reach = vh * 0.95 + r.height * 0.5;
        const vis = Math.max(0, 1 - dist / reach);
        const k = vis * cfg.depth;

        if (k < 0.001) {
          if (cfg.el.style.transform !== "") {
            cfg.el.style.transform = "";
            if (cfg.inner) cfg.inner.style.transform = "";
          }
          return;
        }

        const idleY = Math.sin(t * 0.55 + cfg.phaseY) * 14;
        const idleRX = Math.sin(t * 0.38 + cfg.phaseRX) * 2.6;
        const idleRY = Math.sin(t * 0.31 + cfg.phaseRY) * 3.4;
        const idleRZ = Math.sin(t * 0.27 + cfg.phaseRZ) * 0.9;

        const p = Math.max(
          -1,
          Math.min(1, (center - vh / 2) / (vh / 2 + r.height / 2)),
        );
        const windRX = wind * cfg.windMulRX * 0.04;
        const windRY = wind * cfg.windMulRY * 0.04;
        const windY = wind * 0.04 * cfg.depth;

        const rotX = ((idleRX + windRX) * k - p * 4 * cfg.depth).toFixed(2);
        const rotY = ((idleRY + windRY) * k).toFixed(2);
        const rotZ = (idleRZ * k).toFixed(2);
        const transY = ((idleY + windY) * k).toFixed(1);

        cfg.el.style.transform = `perspective(1200px) translate3d(0,${transY}px,0) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;

        if (cfg.inner) {
          const innerY = (-p * 22 * cfg.depth - idleY * 0.4).toFixed(1);
          const innerX = (idleRY * 0.6 * k).toFixed(1);
          cfg.inner.style.transform = `translate3d(${innerX}px,${innerY}px,0) scale(1.12)`;
        }
      });

      rafId = requestAnimationFrame(tick);
    }

    if (!reduce) rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      tiles.forEach((cfg) => {
        cfg.el.style.transform = "";
        if (cfg.inner) cfg.inner.style.transform = "";
      });
    };
  }, []);

  return null;
}
