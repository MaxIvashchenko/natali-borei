"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const LANGS = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
] as const;

type LangCode = (typeof LANGS)[number]["code"];

const LANG_EVENT = "nb:lang";
const DEFAULT_LANG: LangCode = "ru";

let langHydrated = false;

function readLang(): LangCode {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const saved = localStorage.getItem("nb-lang") as LangCode | null;
  return saved && LANGS.some((l) => l.code === saved) ? saved : DEFAULT_LANG;
}

function subscribeLang(onStoreChange: () => void) {
  const handler = () => onStoreChange();
  window.addEventListener(LANG_EVENT, handler);
  return () => window.removeEventListener(LANG_EVENT, handler);
}

function getLangSnapshot(): LangCode {
  return langHydrated ? readLang() : DEFAULT_LANG;
}

export default function LangSwitch() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    langHydrated = true;
    window.dispatchEvent(new Event(LANG_EVENT));
  }, []);

  const lang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    () => DEFAULT_LANG,
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onOutside);
    };
  }, []);

  const select = (code: LangCode) => {
    setOpen(false);
    localStorage.setItem("nb-lang", code);
    window.dispatchEvent(new Event(LANG_EVENT));
  };

  return (
    <div
      ref={ref}
      className="lang-switch"
      data-open={open ? "true" : undefined}
    >
      <button
        className="lang-switch__trigger"
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
      >
        {lang.toUpperCase()}
        <svg
          className="lang-switch__chev"
          viewBox="0 0 8 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          aria-hidden="true"
        >
          <path d="M1 2.5l3 3 3-3" />
        </svg>
      </button>

      <ul
        className="lang-switch__menu"
        role="listbox"
        aria-label="Выбрать язык"
      >
        {LANGS.map((l) => (
          <li key={l.code}>
            <button
              className={`lang-switch__item${lang === l.code ? " is-active" : ""}`}
              role="option"
              aria-selected={lang === l.code}
              type="button"
              onClick={() => select(l.code)}
            >
              {l.label}
              <span className="lang-switch__item-code">
                {l.code.toUpperCase()}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
