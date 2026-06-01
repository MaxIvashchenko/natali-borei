"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import MobileMenu from "./MobileMenu";
import LangSwitch from "@/components/shared/LangSwitch";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { cartCount, favorites } = useStore();
  const favCount = favorites.length;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mm-open", menuOpen);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header${scrolled ? " scrolled" : ""}`}
        id="header"
      >
        <div className="header-inner">
          {/* left nav (desktop) */}
          <nav className="nav nav__left-spacer nav__desktop" aria-label="Primary">
            <Link className={`nav__link${isActive("/") ? " is-current" : ""}`} href="/">
              Главная
            </Link>
            <Link className={`nav__link${isActive("/shop") ? " is-current" : ""}`} href="/shop">
              Каталог
            </Link>
            <Link className={`nav__link${isActive("/collections") ? " is-current" : ""}`} href="/collections">
              Коллекции
            </Link>
            <Link className={`nav__link${isActive("/about") ? " is-current" : ""}`} href="/about">
              О бренде
            </Link>
          </nav>

          {/* center: brand */}
          <Link className="brand" href="/" aria-label="Natali Borei home">
            <Image
              className="brand__logo"
              src="/logo-wordmark.png"
              alt="Natali Borei"
              width={160}
              height={32}
              priority
            />
            <span className="brand__sub">Exclusive Accessoires</span>
          </Link>

          {/* right: utility nav + cart */}
          <nav className="nav" aria-label="Utility">
            <Link className={`nav__link nav__desktop${isActive("/delivery") ? " is-current" : ""}`} href="/delivery">
              Доставка
            </Link>
            <Link className={`nav__link nav__desktop${isActive("/contact") ? " is-current" : ""}`} href="/contact">
              Контакты
            </Link>

            <LangSwitch />

            <Link className="nav__icon nav__fav" href="/favorites" aria-label="Избранное" data-fav-icon>
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
              </svg>
              {favCount > 0 && (
                <span className="nav__badge" data-fav-count>{favCount}</span>
              )}
            </Link>

            <div className="nav__cart-wrap">
              <Link className="nav__icon" href="/cart" aria-label="Корзина" data-cart-icon>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
                  <path d="M6 8h12l-1 12H7L6 8Z" />
                  <path d="M9 8a3 3 0 0 1 6 0" />
                </svg>
                {cartCount > 0 && (
                  <span className="nav__badge" data-cart-count>{cartCount}</span>
                )}
              </Link>
            </div>

            {/* mobile burger */}
            <button
              className="nav__burger"
              type="button"
              aria-label="Меню"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span className="nav__burger-box" aria-hidden="true">
                <span className="nav__burger-line" />
                <span className="nav__burger-line" />
                <span className="nav__burger-line" />
              </span>
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
