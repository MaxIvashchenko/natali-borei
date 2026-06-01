import Link from "next/link";

export default function NotFound() {
  return (
    <main className="nf">
      <div className="nf__core">
        <div className="nf__mark">
          <span className="nf__digits">404</span>
          <span className="nf__ornament" aria-hidden="true">
            <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80 8 L88 30 L112 30 L94 46 L101 68 L80 54 L59 68 L66 46 L48 30 L72 30 Z" stroke="#B8963E" strokeWidth="0.8" fill="none" opacity="0.55" />
              <circle cx="80" cy="40" r="34" stroke="#B8963E" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.35" />
              <circle cx="80" cy="40" r="24" stroke="#B8963E" strokeWidth="0.4" opacity="0.25" />
            </svg>
          </span>
        </div>
        <p className="eyebrow nf__eyebrow">Страница не найдена</p>
        <h1 className="nf__title">
          Кажется, вы зашли<em>не туда</em>
        </h1>
        <p className="nf__desc">
          Украшение, которое вы ищете, могло быть продано или переехать. Загляните в каталог —
          там есть другие редкие вещи.
        </p>
        <div className="nf__btns">
          <Link className="gold-btn gold-btn--filled" href="/shop">
            В каталог
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M1 5h12M9 1l4 4-4 4" />
            </svg>
          </Link>
          <Link className="gold-btn" href="/">На главную</Link>
        </div>
      </div>
    </main>
  );
}
