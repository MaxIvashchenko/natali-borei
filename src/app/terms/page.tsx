import type { Metadata } from "next";
import Link from "next/link";
import LegalClient from "@/components/shared/LegalClient";

export const metadata: Metadata = {
  title: "Условия использования — Natali Borei",
  description:
    "Условия использования сайта Natali Borei: правила оформления заказа, доставки, возврата и применимое право.",
};

export default function TermsPage() {
  return (
    <main className="legal">
      <LegalClient />

      {/* TAB BAR */}
      <div className="legal__tabs" aria-label="Legal documents">
        <div className="legal__tabs-inner">
          <Link className="legal__tab" href="/privacy">
            Политика конфиденциальности
          </Link>
          <Link className="legal__tab is-active" href="/terms" aria-current="page">
            Условия использования
          </Link>
        </div>
      </div>

      {/* HERO */}
      <header className="legal__hero">
        <p className="eyebrow">Правовая информация</p>
        <h1 className="legal__hero-title">Условия использования</h1>
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
            <a className="legal__toc-link is-active" href="#section-1"><span className="num">01</span>Общие условия</a>
            <a className="legal__toc-link" href="#section-2"><span className="num">02</span>Продукция</a>
            <a className="legal__toc-link" href="#section-3"><span className="num">03</span>Оформление заказа</a>
            <a className="legal__toc-link" href="#section-4"><span className="num">04</span>Доставка</a>
            <a className="legal__toc-link" href="#section-5"><span className="num">05</span>Возврат и обмен</a>
            <a className="legal__toc-link" href="#section-6"><span className="num">06</span>Интеллектуальная собственность</a>
            <a className="legal__toc-link" href="#section-7"><span className="num">07</span>Ограничение ответственности</a>
            <a className="legal__toc-link" href="#section-8"><span className="num">08</span>Применимое право</a>
            <a className="legal__toc-link" href="#section-9"><span className="num">09</span>Изменения условий</a>
            <a className="legal__toc-link" href="#section-10"><span className="num">10</span>Контакты</a>
          </div>
        </aside>

        {/* CONTENT */}
        <article className="legal__doc is-active">

          <section className="legal__section" id="section-1">
            <span className="legal__section-num">01</span>
            <h2 className="legal__h2">Общие условия</h2>
            <p className="legal__p">
              Использование сайта nataliborei.com означает принятие настоящих условий в полном объёме.
            </p>
          </section>

          <section className="legal__section" id="section-2">
            <span className="legal__section-num">02</span>
            <h2 className="legal__h2">Продукция</h2>
            <p className="legal__p">
              Все украшения Natali Borei — авторская ручная работа в единственном экземпляре. Фотографии
              максимально точно передают цвет и фактуру изделий.
            </p>
          </section>

          <section className="legal__section" id="section-3">
            <span className="legal__section-num">03</span>
            <h2 className="legal__h2">Оформление заказа</h2>
            <ul className="legal__list">
              <li>Заказ считается принятым после подтверждения по email.</li>
              <li>Цены указаны в евро, включая НДС.</li>
              <li>Оплата производится в момент оформления заказа.</li>
            </ul>
          </section>

          <section className="legal__section" id="section-4">
            <span className="legal__section-num">04</span>
            <h2 className="legal__h2">Доставка</h2>
            <ul className="legal__list">
              <li>Сроки доставки зависят от региона — указаны на странице доставки.</li>
              <li>Риск утраты товара переходит к покупателю с момента передачи курьерской службе.</li>
            </ul>
          </section>

          <section className="legal__section" id="section-5">
            <span className="legal__section-num">05</span>
            <h2 className="legal__h2">Возврат и обмен</h2>
            <ul className="legal__list">
              <li>Возврат в течение 14 дней с момента получения.</li>
              <li>Изделие должно быть в оригинальном состоянии.</li>
              <li>Изделия, изготовленные по индивидуальному заказу, возврату не подлежат.</li>
            </ul>
          </section>

          <section className="legal__section" id="section-6">
            <span className="legal__section-num">06</span>
            <h2 className="legal__h2">Интеллектуальная собственность</h2>
            <p className="legal__p">
              Все фотографии, тексты, логотип и дизайн сайта являются собственностью Natali Borei.
              Копирование без письменного разрешения запрещено.
            </p>
          </section>

          <section className="legal__section" id="section-7">
            <span className="legal__section-num">07</span>
            <h2 className="legal__h2">Ограничение ответственности</h2>
            <p className="legal__p">
              Natali Borei не несёт ответственности за задержки доставки, вызванные действиями третьих
              лиц или обстоятельствами непреодолимой силы.
            </p>
          </section>

          <section className="legal__section" id="section-8">
            <span className="legal__section-num">08</span>
            <h2 className="legal__h2">Применимое право</h2>
            <p className="legal__p">
              Настоящие условия регулируются законодательством страны регистрации бренда.
            </p>
          </section>

          <section className="legal__section" id="section-9">
            <span className="legal__section-num">09</span>
            <h2 className="legal__h2">Изменения условий</h2>
            <p className="legal__p">
              Мы оставляем за собой право изменять условия. Актуальная версия всегда доступна на этой
              странице.
            </p>
          </section>

          <section className="legal__section" id="section-10">
            <span className="legal__section-num">10</span>
            <h2 className="legal__h2">Контакты</h2>
            <p className="legal__p">
              По всем вопросам:{" "}
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
                Напишите нам — ответим на всё о заказе, доставке и условиях.
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
