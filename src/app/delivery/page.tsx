import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Заказ и доставка — Natali Borei",
  description: "Как заказать украшение Natali Borei, оплата, доставка по миру и возврат.",
};

const CornerSvg = () => (
  <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
    <path d="M2 38 L2 2 L38 2" stroke="#B8963E" strokeWidth="1" />
  </svg>
);

export default function DeliveryPage() {
  return (
    <main className="page">
      <header className="page__head page__head--with-hero">
        <Breadcrumbs crumbs={[{ label: "Главная", href: "/" }, { label: "Заказ и доставка" }]} />
        <p className="eyebrow">Сервис</p>
        <h1 className="page__title"><em>Заказ и доставка</em></h1>
        <hr className="gold-line gold-line--wide" />
        <p className="page__lead">
          Каждое украшение — ручная работа в единственном экземпляре. Ниже — как оформить заказ,
          оплатить и получить вашу вещь в любой точке мира.
        </p>

        <div className="hero-box-image" aria-hidden="true">
          <span className="hero-box-image__dust" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i />
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-box-image__img"
            src="/photos/ambra-noir.jpg"
            alt=""
          />
        </div>
      </header>

      {/* HOW TO ORDER */}
      <section className="page__section">
        <h2 className="page__h reveal">Как сделать заказ</h2>
        <div className="order-steps">
          <div className="ostep reveal">
            <span className="ostep__n">01</span>
            <h3 className="ostep__t">Выберите украшение</h3>
            <p className="ostep__d">
              Найдите вещь в каталоге или напишите нам — поможем подобрать и расскажем о наличии.
            </p>
          </div>
          <div className="ostep reveal">
            <span className="ostep__n">02</span>
            <h3 className="ostep__t">Подтверждение</h3>
            <p className="ostep__d">
              Согласуем детали, размер и способ доставки. Для индивидуального заказа обсудим эскиз
              и сроки.
            </p>
          </div>
          <div className="ostep reveal">
            <span className="ostep__n">03</span>
            <h3 className="ostep__t">Оплата и отправка</h3>
            <p className="ostep__d">
              После оплаты украшение бережно упаковывается и отправляется с трек-номером.
            </p>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="page__section">
        <div className="info-grid">
          <article className="info-card reveal">
            <span className="info-card__ic" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#B8963E" strokeWidth="1.1">
                <path d="M3 9 L16 3 L29 9 L29 23 L16 29 L3 23 Z" />
                <path d="M3 9 L16 15 L29 9 M16 15 L16 29" />
              </svg>
            </span>
            <h3 className="info-card__t">Доставка по миру</h3>
            <p className="info-card__d">
              Отправляем в любую страну курьерскими службами. Сроки: 2–5 дней по стране, 7–18 дней
              — международно. Каждой посылке присваивается трек-номер.
            </p>
          </article>
          <article className="info-card reveal">
            <span className="info-card__ic" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#B8963E" strokeWidth="1.1">
                <rect x="3" y="8" width="26" height="18" />
                <path d="M3 13 L29 13" />
              </svg>
            </span>
            <h3 className="info-card__t">Оплата</h3>
            <p className="info-card__d">
              Банковский перевод, карта или электронные платежи. Для международных заказов —
              удобный для вас способ. Цена каждого украшения — по запросу.
            </p>
          </article>
          <article className="info-card reveal">
            <span className="info-card__ic" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#B8963E" strokeWidth="1.1">
                <path d="M16 3 L20 12 L29 12 L22 18 L25 27 L16 21 L7 27 L10 18 L3 12 L12 12 Z" />
              </svg>
            </span>
            <h3 className="info-card__t">Упаковка</h3>
            <p className="info-card__d">
              Авторская подарочная упаковка с фирменной коробкой и инструкцией по уходу. Готово для
              подарка.
            </p>
          </article>
          <article className="info-card reveal">
            <span className="info-card__ic" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#B8963E" strokeWidth="1.1">
                <path d="M16 3 a13 13 0 1 1 -9 3.8" />
                <path d="M7 3 L7 8 L12 8" />
              </svg>
            </span>
            <h3 className="info-card__t">Возврат и обмен</h3>
            <p className="info-card__d">
              Так как изделия создаются вручную в единственном экземпляре, возврат обсуждается
              индивидуально. При повреждении при доставке — заменяем или ремонтируем.
            </p>
          </article>
        </div>
      </section>

      {/* CARE */}
      <section className="page__section page__section--care reveal">
        <div className="care">
          <div className="care__text">
            <p className="eyebrow">Уход</p>
            <h2 className="page__h">Чтобы украшение служило годами</h2>
            <ul className="care__list">
              <li>Храните отдельно, в тканевом мешочке или коробке.</li>
              <li>Избегайте контакта с водой, парфюмом и косметикой.</li>
              <li>Не подвергайте резким механическим нагрузкам.</li>
              <li>Протирайте мягкой сухой тканью.</li>
            </ul>
          </div>
          <div className="care__photo reveal" data-tilt="" data-depth="1">
            <div className="care__photo-inner" data-tilt-img="">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/zastyvshaya.jpg" alt="Украшение Natali Borei" />
            </div>
            <span className="corner corner--tl"><CornerSvg /></span>
            <span className="corner corner--br"><CornerSvg /></span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page__cta reveal">
        <span className="shimmer-line page__cta-line" aria-hidden="true" />
        <h2 className="page__cta-title">Остались вопросы?</h2>
        <p className="page__cta-sub">
          Напишите нам — ответим на всё о заказе, доставке и индивидуальной работе.
        </p>
        <div className="page__cta-btns">
          <Link className="gold-btn gold-btn--filled" href="/contact">
            Связаться
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M1 5h12M9 1l4 4-4 4" />
            </svg>
          </Link>
          <Link className="gold-btn" href="/shop">В каталог</Link>
        </div>
      </section>
    </main>
  );
}
