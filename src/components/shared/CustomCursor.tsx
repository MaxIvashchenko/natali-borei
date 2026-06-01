"use client";

import { useEffect } from "react";

const LINK_SEL = [
  "a",
  "button",
  "[data-add-cart]",
  "[data-fav-toggle]",
  "[data-cart-toggle]",
  "[data-cart-remove]",
  ".lang-switch__trigger",
  ".lang-switch__item",
  "input[type='checkbox']",
  "input[type='radio']",
  "select",
  "label",
  "[role='button']",
].join(",");

const CARD_SEL = ".prod-card, .coll-card, .gallery__cell, .medallion";
const TEXT_SEL =
  "input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']), textarea";

export default function CustomCursor() {
  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const dot = document.createElement("div");
    dot.className = "nb-cursor-dot";
    dot.setAttribute("aria-hidden", "true");

    const ring = document.createElement("div");
    ring.className = "nb-cursor-ring";
    ring.setAttribute("aria-hidden", "true");
    ring.innerHTML = `<span class="nb-cursor-label">Смотреть</span>`;

    document.body.appendChild(ring);
    document.body.appendChild(dot);
    document.documentElement.classList.add("nb-cursor-on");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx,
      ry = my;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      document.documentElement.classList.add("nb-cursor-visible");
    };
    const onLeave = () =>
      document.documentElement.classList.remove("nb-cursor-visible");
    const onEnter = () =>
      document.documentElement.classList.add("nb-cursor-visible");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    function tick() {
      dot.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`;
      const k = isReduced ? 1 : 0.18;
      rx += (mx - rx) * k;
      ry += (my - ry) * k;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    function setMode(mode: string) {
      if (document.documentElement.dataset.cursorMode === mode) return;
      document.documentElement.dataset.cursorMode = mode;
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      if (!el?.closest) {
        setMode("default");
        return;
      }
      if (el.closest(TEXT_SEL)) {
        setMode("text");
        return;
      }
      if (el.closest(CARD_SEL)) {
        setMode("card");
        return;
      }
      if (el.closest(LINK_SEL)) {
        setMode("link");
        return;
      }
      setMode("default");
    };

    const onDown = () =>
      document.documentElement.classList.add("nb-cursor-down");
    const onUp = () =>
      document.documentElement.classList.remove("nb-cursor-down");

    document.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    setMode("default");

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove(
        "nb-cursor-on",
        "nb-cursor-visible",
        "nb-cursor-down",
      );
      delete document.documentElement.dataset.cursorMode;
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
