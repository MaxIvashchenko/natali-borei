"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import LangSwitch from "@/components/shared/LangSwitch";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { no: "01", label: "Главная", href: "/" },
  { no: "02", label: "Каталог", href: "/shop" },
  { no: "03", label: "Коллекции", href: "/collections" },
  { no: "04", label: "О бренде", href: "/about" },
  { no: "05", label: "Архив", href: "/archive" },
  { no: "06", label: "Доставка", href: "/delivery" },
  { no: "07", label: "Контакты", href: "/contact" },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className={`mobile-menu${open ? " is-open" : ""}`}
      id="mobileMenu"
      aria-hidden={!open}
    >
      <div className="mobile-menu__backdrop" onClick={onClose} />
      <aside
        className="mobile-menu__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Навигация"
      >
        <div className="mobile-menu__head">
          <Image
            className="mobile-menu__mono"
            src="/logo-monogram.png"
            alt=""
            width={34}
            height={34}
            aria-hidden
          />
          <span className="mobile-menu__brand">
            Natali Borei
            <span className="mobile-menu__brand-sub">
              Exclusive Accessoires
            </span>
          </span>
          <button
            className="mobile-menu__close"
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="mm-link"
              href={item.href}
              onClick={onClose}
            >
              <span className="mm-link__no">{item.no}</span>
              <span className="mm-link__label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mobile-menu__foot">
          <div className="mobile-menu__util">
            <Link
              className="mobile-menu__util-link"
              href="/favorites"
              onClick={onClose}
            >
              Избранное
            </Link>
            <Link
              className="mobile-menu__util-link"
              href="/cart"
              onClick={onClose}
            >
              Корзина
            </Link>
          </div>
          <LangSwitch />
          <a className="mobile-menu__email" href="mailto:boreinatali@gmail.com">
            boreinatali@gmail.com
          </a>
        </div>
      </aside>
    </div>
  );
}
