import type { Metadata } from "next";
import Link from "next/link";
import LegalClient from "@/components/shared/LegalClient";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Natali Borei",
  description:
    "Политика конфиденциальности Natali Borei: какие данные мы собираем, как используем и защищаем вашу личную информацию.",
};

export default function PrivacyPage() {
  return (
    <main className="legal">
      <LegalClient />

      {/* TAB BAR */}
      <div className="legal__tabs" aria-label="Legal documents">
        <div className="legal__tabs-inner">
          <Link className="legal__tab is-active" href="/privacy" aria-current="page">
            Политика конфиденциальности
          </Link>
          <Link className="legal__tab" href="/terms">
            Условия использования
          </Link>
        </div>
      </div>

      {/* HERO */}
      <header className="legal__hero">
        <p className="eyebrow">Правовая информация</p>
        <h1 className="legal__hero-title">Политика конфиденциальности</h1>
        <hr className="gold-line" />
        <p className="legal__updated">Последнее обновление: январь 2025</p>
      </header>

      {/* BODY */}
      <div className="legal__body">

        {/* TOC */}
        <aside className="legal__toc" id="legalToc" aria-label="Table of contents">
          <button className="legal__toc-toggle" type="button" id="tocToggle" aria-expanded="false">
            Содержание
            <span className="chev" aria-hidden="true">
              <svg width="11" height="7" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M1 1.5 L6 6 L11 1.5" />
              </svg>
            </span>
          </button>
          <p className="legal__toc-label">Содержание</p>
          <div className="legal__toc-list">
            <a className="legal__toc-link is-active" href="#section-1"><span className="num">01</span>Общие положения</a>
            <a className="legal__toc-link" href="#section-2"><span className="num">02</span>Какие данные мы собираем</a>
            <a className="legal__toc-link" href="#section-3"><span className="num">03</span>Как мы используем данные</a>
            <a className="legal__toc-link" href="#section-4"><span className="num">04</span>Передача третьим лицам</a>
            <a className="legal__toc-link" href="#section-5"><span className="num">05</span>Cookies</a>
            <a className="legal__toc-link" href="#section-6"><span className="num">06</span>Хранение данных</a>
            <a className="legal__toc-link" href="#section-7"><span className="num">07</span>Ваши права</a>
            <a className="legal__toc-link" href="#section-8"><span className="num">08</span>Контакты</a>
          </div>
        </aside>

        {/* CONTENT */}
        <article className="legal__doc is-active">

          <section className="legal__section" id="section-1">
            <span className="legal__section-num">01</span>
            <h2 className="legal__h2">Общие положения</h2>
            <p className="legal__p">
              Natali Borei уважает конфиденциальность каждого клиента. Настоящая политика описывает, какие
              данные мы собираем, как используем и защищаем вашу личную информацию.
            </p>
          </section>

          <section className="legal__section" id="section-2">
            <span className="legal__section-num">02</span>
            <h2 className="legal__h2">Какие данные мы собираем</h2>
            <ul className="legal__list">
              <li>Имя и контактные данные при оформлении заказа.</li>
              <li>Адрес доставки.</li>
              <li>История заказов.</li>
              <li>Данные об использовании сайта (cookies, аналитика).</li>
              <li>Платёжные данные — обрабатываются платёжным провайдером; мы не храним данные карт.</li>
            </ul>
          </section>

          <section className="legal__section" id="section-3">
            <span className="legal__section-num">03</span>
            <h2 className="legal__h2">Как мы используем данные</h2>
            <ul className="legal__list">
              <li>Обработка и доставка заказов.</li>
              <li>Связь с клиентом по вопросам заказа.</li>
              <li>Улучшение работы сайта.</li>
              <li>Рассылка — только с вашего согласия.</li>
            </ul>
          </section>

          <section className="legal__section" id="section-4">
            <span className="legal__section-num">04</span>
            <h2 className="legal__h2">Передача данных третьим лицам</h2>
            <p className="legal__p">
              Мы не продаём и не передаём ваши данные третьим лицам, кроме случаев, необходимых для
              выполнения заказа — служба доставки, платёжный провайдер.
            </p>
          </section>

          <section className="legal__section" id="section-5">
            <span className="legal__section-num">05</span>
            <h2 className="legal__h2">Cookies</h2>
            <p className="legal__p">
              Сайт использует cookies для корректной работы корзины, сохранения языка и аналитики. Вы
              можете отключить cookies в настройках браузера.
            </p>
          </section>

          <section className="legal__section" id="section-6">
            <span className="legal__section-num">06</span>
            <h2 className="legal__h2">Хранение данных</h2>
            <p className="legal__p">
              Данные хранятся в течение срока, необходимого для выполнения заказа и соблюдения
              законодательства.
            </p>
          </section>

          <section className="legal__section" id="section-7">
            <span className="legal__section-num">07</span>
            <h2 className="legal__h2">Ваши права</h2>
            <p className="legal__p">
              Вы вправе запросить доступ, исправление или удаление ваших персональных данных. Запросы
              принимаются на email.
            </p>
          </section>

          <section className="legal__section" id="section-8">
            <span className="legal__section-num">08</span>
            <h2 className="legal__h2">Контакты</h2>
            <p className="legal__p">
              По вопросам конфиденциальности:{" "}
              <a href="mailto:info@nataliborei.com">info@nataliborei.com</a>
            </p>
          </section>

          <div className="legal__doc-end">
            <button className="legal__top" type="button" data-back-to-top="">
              Наверх <span className="arr" aria-hidden="true">↑</span>
            </button>
            <div className="legal__contact">
              <h3 className="legal__contact-h">Остались вопросы?</h3>
              <p className="legal__contact-p">
                Напишите нам — ответим на всё о конфиденциальности и обработке данных.
              </p>
              <Link className="gold-btn" href="/contact">
                Связаться
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M1 5h12M9 1l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </main>
  );
}
