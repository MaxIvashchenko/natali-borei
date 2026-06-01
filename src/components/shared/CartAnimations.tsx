"use client";

import { useEffect } from "react";

/* SVG token shapes */
function heartSvg() {
  return `
    <svg viewBox="0 0 36 36" width="100%" height="100%" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="nbHeart" cx="50%" cy="40%" r="65%">
          <stop offset="0%"   stop-color="#F0D080"/>
          <stop offset="60%"  stop-color="#D4AF5A"/>
          <stop offset="100%" stop-color="#8C6F2A"/>
        </radialGradient>
      </defs>
      <circle cx="18" cy="18" r="17" stroke="#B8963E" stroke-width="0.6" opacity="0.6"/>
      <circle cx="18" cy="18" r="13.5" stroke="#D4AF5A" stroke-width="0.35" opacity="0.4"/>
      <path d="M18 26.5 S8.5 21 8.5 14.8 a4.2 4.2 0 0 1 9.5 -2.6 a4.2 4.2 0 0 1 9.5 2.6 C27.5 21 18 26.5 18 26.5 z"
            fill="url(#nbHeart)" stroke="#F0D080" stroke-width="0.4" opacity="0.95"/>
    </svg>
  `;
}

function orbSvg() {
  return `
    <svg viewBox="0 0 36 36" width="100%" height="100%" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="nbCore" cx="50%" cy="40%" r="60%">
          <stop offset="0%"  stop-color="#F0D080"/>
          <stop offset="55%" stop-color="#B8963E"/>
          <stop offset="100%" stop-color="#8C6F2A"/>
        </radialGradient>
      </defs>
      <circle cx="18" cy="18" r="17" stroke="#B8963E" stroke-width="0.8" opacity="0.85"/>
      <circle cx="18" cy="18" r="14" stroke="#D4AF5A" stroke-width="0.4" opacity="0.55"/>
      <circle cx="18" cy="18" r="6.5" fill="url(#nbCore)"/>
      <circle cx="18" cy="14" r="1" fill="#F0D080" opacity="0.9"/>
    </svg>
  `;
}

function flyTo(
  originEl: Element,
  targetEl: Element | null,
  kind: "cart" | "fav",
) {
  if (!targetEl) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  const bRect = originEl.getBoundingClientRect();
  const tRect = targetEl.getBoundingClientRect();
  const size = 36;
  const sx = bRect.left + bRect.width / 2 - size / 2;
  const sy = bRect.top + bRect.height / 2 - size / 2;
  const dx = tRect.left + tRect.width / 2 - (sx + size / 2);
  const dy = tRect.top + tRect.height / 2 - (sy + size / 2);
  const dist = Math.hypot(dx, dy);
  const arcLift = Math.min(60, dist * 0.12);
  const cx = dx * 0.55;
  const cy = dy * 0.55 - arcLift;

  const token = document.createElement("div");
  token.className = `nb-fly-token nb-fly-token--${kind}`;
  token.style.cssText = [
    `left:${sx}px`,
    `top:${sy}px`,
    `width:${size}px`,
    `height:${size}px`,
    `offset-path:path('M 0 0 Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${dx.toFixed(1)} ${dy.toFixed(1)}')`,
    `offset-rotate:0deg`,
  ].join(";");
  token.style.filter =
    "drop-shadow(0 0 10px rgba(240,208,128,0.55)) drop-shadow(0 6px 14px rgba(0,0,0,0.35))";
  token.innerHTML = kind === "fav" ? heartSvg() : orbSvg();
  document.body.appendChild(token);

  const keyframes: Keyframe[] =
    kind === "fav"
      ? [
          {
            offsetDistance: "0%",
            transform: "scale(0.4) rotate(-8deg)",
            opacity: 0,
          },
          {
            offsetDistance: "0.05%",
            transform: "scale(1) rotate(6deg)",
            opacity: 1,
            offset: 0.12,
          },
          {
            offsetDistance: "70%",
            transform: "scale(0.9) rotate(-4deg)",
            opacity: 1,
            offset: 0.7,
          },
          {
            offsetDistance: "100%",
            transform: "scale(0.3) rotate(0deg)",
            opacity: 0,
          },
        ]
      : [
          {
            offsetDistance: "0%",
            transform: "scale(0.4) rotate(0deg)",
            opacity: 0,
          },
          {
            offsetDistance: "0.05%",
            transform: "scale(1) rotate(20deg)",
            opacity: 1,
            offset: 0.12,
          },
          {
            offsetDistance: "70%",
            transform: "scale(0.85) rotate(180deg)",
            opacity: 1,
            offset: 0.7,
          },
          {
            offsetDistance: "100%",
            transform: "scale(0.25) rotate(360deg)",
            opacity: 0,
          },
        ];

  const anim = token.animate(keyframes, {
    duration: 750,
    easing: "cubic-bezier(.65,.05,.36,1)",
    fill: "forwards",
  });
  anim.onfinish = () => {
    token.remove();
    if (kind === "fav") bounceIcon("[data-fav-icon]", "nb-fav-bounce");
    else bounceIcon("[data-cart-icon]", "nb-cart-bounce");
  };
}

function bounceIcon(selector: string, cls: string) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.classList.remove(cls);
  void (el as HTMLElement).offsetWidth;
  el.classList.add(cls);
  el.addEventListener("animationend", () => el.classList.remove(cls), {
    once: true,
  });
}

function animateCounter(el: Element | null, cls: string) {
  if (!el) return;
  el.classList.remove(cls);
  void (el as HTMLElement).offsetWidth;
  el.classList.add(cls);
  el.addEventListener("animationend", () => el.classList.remove(cls), {
    once: true,
  });
}

function setButtonAdded(btn: HTMLElement) {
  if (btn.dataset.nbBusy === "1") return;
  btn.dataset.nbBusy = "1";
  const orig = btn.innerHTML;
  btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" style="margin-right:6px;vertical-align:middle"><path d="M3 8.5 L6.5 12 L13 4"/></svg>Добавлено`;
  btn.classList.add("nb-btn-added");
  setTimeout(() => {
    btn.classList.remove("nb-btn-added");
    btn.innerHTML = orig;
    delete btn.dataset.nbBusy;
  }, 2000);
}

export default function CartAnimations() {
  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    const onClick = (e: MouseEvent) => {
      // Add to cart
      const addBtn = (e.target as Element).closest<HTMLElement>(
        "[data-add-cart]",
      );
      if (addBtn) {
        setButtonAdded(addBtn);
        if (!isCoarse) {
          const cartIcon = document.querySelector("[data-cart-icon]");
          flyTo(addBtn, cartIcon, "cart");
        }
        return;
      }

      // Fav toggle
      const heart = (e.target as Element).closest<HTMLElement>(
        "[data-fav-toggle]",
      );
      if (heart) {
        const isAdding = !heart.classList.contains("is-faved");
        heart.classList.remove("nb-fav-pop");
        void heart.offsetWidth;
        heart.classList.add("nb-fav-pop");
        heart.addEventListener(
          "animationend",
          () => heart.classList.remove("nb-fav-pop"),
          { once: true },
        );
        if (isAdding && !isCoarse) {
          const favIcon = document.querySelector("[data-fav-icon]");
          flyTo(heart, favIcon, "fav");
        }
      }
    };

    // capture phase — before React's bubbling handler so coords are still valid
    document.addEventListener("click", onClick, true);

    const onCartAdded = () => {
      animateCounter(
        document.querySelector("[data-cart-count]"),
        "nb-counter-pop",
      );
      if (isCoarse) bounceIcon("[data-cart-icon]", "nb-cart-bounce");
    };
    const onCartRemoved = () => {
      animateCounter(
        document.querySelector("[data-cart-count]"),
        "nb-counter-shake",
      );
    };
    const onFavAdded = () => {
      animateCounter(
        document.querySelector("[data-fav-count]"),
        "nb-counter-pop",
      );
      if (isCoarse) bounceIcon("[data-fav-icon]", "nb-fav-bounce");
    };
    const onFavRemoved = () => {
      animateCounter(
        document.querySelector("[data-fav-count]"),
        "nb-counter-shake",
      );
    };

    document.addEventListener("nb:cart:added", onCartAdded);
    document.addEventListener("nb:cart:removed", onCartRemoved);
    document.addEventListener("nb:fav:added", onFavAdded);
    document.addEventListener("nb:fav:removed", onFavRemoved);

    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("nb:cart:added", onCartAdded);
      document.removeEventListener("nb:cart:removed", onCartRemoved);
      document.removeEventListener("nb:fav:added", onFavAdded);
      document.removeEventListener("nb:fav:removed", onFavRemoved);
    };
  }, []);

  return null;
}
