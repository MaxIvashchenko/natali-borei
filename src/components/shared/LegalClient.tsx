"use client";

import { useEffect } from "react";

export default function LegalClient() {
  useEffect(() => {
    const tocLinks = [
      ...document.querySelectorAll<HTMLAnchorElement>(".legal__toc-link"),
    ];
    const sections = [
      ...document.querySelectorAll<HTMLElement>(".legal__section"),
    ];
    if (!tocLinks.length || !sections.length) return;

    function setActive(id: string) {
      tocLinks.forEach((l) => {
        l.classList.toggle("is-active", l.getAttribute("href") === "#" + id);
      });
    }

    const spy = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (!best || e.boundingClientRect.top < best.boundingClientRect.top)
            best = e;
        });
        if (best) setActive((best as IntersectionObserverEntry).target.id);
      },
      { rootMargin: "-180px 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => spy.observe(s));

    const headerOffset = 84 + 62 + 16;

    tocLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href?.startsWith("#")) return;
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        e.preventDefault();
        const toc = document.getElementById("legalToc");
        if (toc) toc.classList.remove("is-open");
        const toggle = document.getElementById("tocToggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
        const top =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
        setActive(target.id);
      });
    });

    document
      .querySelectorAll<HTMLElement>("[data-back-to-top]")
      .forEach((btn) => {
        btn.addEventListener("click", () =>
          window.scrollTo({ top: 0, behavior: "smooth" }),
        );
      });

    const tocToggle = document.getElementById("tocToggle");
    if (tocToggle) {
      tocToggle.addEventListener("click", () => {
        const toc = document.getElementById("legalToc");
        if (!toc) return;
        const open = toc.classList.toggle("is-open");
        tocToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    if (location.hash && location.hash.length > 1) {
      const target = document.querySelector<HTMLElement>(location.hash);
      if (target?.classList.contains("legal__section")) {
        requestAnimationFrame(() => {
          const top =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerOffset;
          window.scrollTo({ top, behavior: "auto" });
          setActive(target.id);
        });
      }
    }

    return () => spy.disconnect();
  }, []);

  return null;
}
