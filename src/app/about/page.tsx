import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "О бренде — Natali Borei",
  description:
    "История ателье Natali Borei — украшения ручной работы из бисера, созданные с душой.",
};

const CornerSvg = () => (
  <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
    <path d="M2 38 L2 2 L38 2" stroke="#B8963E" strokeWidth="1" />
  </svg>
);

export default function AboutPage() {
  return (
    <main className="about">
      {/* INTRO */}
      <section className="about__intro">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="about__watermark"
          src="/logo-monogram.png"
          alt=""
          aria-hidden="true"
        />
        <div className="about__intro-inner">
          <Breadcrumbs
            crumbs={[{ label: "Главная", href: "/" }, { label: "О бренде" }]}
          />
          <p className="eyebrow">Ателье</p>
          <h1 className="about__title">
            Украшения, рождённые<em>из страсти к ремеслу</em>
          </h1>
          <hr className="gold-line gold-line--wide" />
          <p className="about__lead">
            Natali Borei — это авторская мастерская украшений ручной работы.
            Каждое изделие создаётся в единственном экземпляре, по зёрнышку, в
            технике художественной вышивки бисером.
          </p>
        </div>
      </section>

      {/* STORY BLOCK 1 */}
      <section className="about__row reveal">
        <div className="about__photo reveal" data-tilt="" data-depth="1">
          <div className="about__photo-inner" data-tilt-img="">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photos/mandragora.jpg" alt="Брошь ручной работы" />
          </div>
          <span className="corner corner--tl">
            <CornerSvg />
          </span>
          <span className="corner corner--br">
            <CornerSvg />
          </span>
        </div>
        <div className="about__text">
          <p className="eyebrow">Философия</p>
          <h2 className="about__h">Каждое украшение — характер</h2>
          <p className="about__p">
            Мы не делаем тираж. Брошь, кулон, манжета — каждая вещь проживает
            свою собственную историю от первого эскиза до последнего узелка. Это
            медленное, вдумчивое ремесло, в котором нет двух одинаковых
            результатов.
          </p>
          <p className="about__p">
            Украшение становится продолжением того, кто его носит — его
            настроения, силы, тишины.
          </p>
        </div>
      </section>

      {/* STORY BLOCK 2 */}
      <section className="about__row about__row--reverse reveal">
        <div className="about__photo reveal" data-tilt="" data-depth="1.3">
          <div className="about__photo-inner" data-tilt-img="">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/shining-river.jpg"
              alt="Процесс работы с бисером"
            />
          </div>
          <span className="corner corner--tr">
            <CornerSvg />
          </span>
          <span className="corner corner--bl">
            <CornerSvg />
          </span>
        </div>
        <div className="about__text">
          <p className="eyebrow">Материалы</p>
          <h2 className="about__h">Только премиальное сырьё</h2>
          <p className="about__p">
            Японский бисер Miyuki и TOHO, чешские кристаллы, натуральный янтарь,
            пресноводный жемчуг, коралл и природные камни. Основа — кожа и шёлк.
            Ничего случайного.
          </p>
          <ul className="about__materials">
            <li>Miyuki · TOHO</li>
            <li>Чешский хрусталь</li>
            <li>Балтийский янтарь</li>
            <li>Жемчуг · Коралл</li>
          </ul>
        </div>
      </section>

      {/* FULL-BLEED FEATURE */}
      <section className="about__feature reveal" data-tilt="" data-depth="0.6">
        <div className="about__feature-inner" data-tilt-img="">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/oko.jpg" alt="Авторское украшение Natali Borei" />
        </div>
        <div className="about__feature-cap">
          <p className="about__feature-text">
            <em>
              «Я создаю украшения, которые хочется рассматривать в деталях —
              живые, объёмные, со своей энергией.»
            </em>
          </p>
          <p className="about__feature-sign">Natali Borei</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="about__process">
        <header className="about__process-head">
          <p className="eyebrow">Процесс</p>
          <h2 className="about__h2">
            <em>От эскиза до узелка</em>
          </h2>
        </header>
        <div className="about__steps">
          <div className="step">
            <span className="step__n">01</span>
            <h3 className="step__t">Эскиз</h3>
            <p className="step__d">
              Идея рождается из камня, цвета или фактуры. Каждая работа
              начинается с рисунка от руки.
            </p>
          </div>
          <div className="step">
            <span className="step__n">02</span>
            <h3 className="step__t">Вышивка</h3>
            <p className="step__d">
              Бисер укладывается вручную, зерно за зерном, слой за слоем —
              десятки часов кропотливой работы.
            </p>
          </div>
          <div className="step">
            <span className="step__n">03</span>
            <h3 className="step__t">Завершение</h3>
            <p className="step__d">
              Обработка края, кожаная основа, фурнитура. Украшение становится
              завершённым объектом.
            </p>
          </div>
        </div>

        <div className="about__stats">
          <div className="stat">
            <span className="stat__n">
              150<sup>+</sup>
            </span>
            <span className="stat__l">Уникальных работ</span>
          </div>
          <span className="stat__sep" aria-hidden="true" />
          <div className="stat">
            <span className="stat__n">
              7<sup>+</sup>
            </span>
            <span className="stat__l">Лет ремесла</span>
          </div>
          <span className="stat__sep" aria-hidden="true" />
          <div className="stat">
            <span className="stat__n">∞</span>
            <span className="stat__l">Доставка по миру</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about__cta">
        <span className="shimmer-line about__cta-line" aria-hidden="true" />
        <h2 className="about__cta-title">Найдите своё украшение</h2>
        <div className="about__cta-btns">
          <Link className="gold-btn gold-btn--filled" href="/shop">
            Смотреть каталог
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M1 5h12M9 1l4 4-4 4" />
            </svg>
          </Link>
          <a className="gold-btn" href="mailto:boreinatali@gmail.com">
            Индивидуальный заказ
          </a>
        </div>
      </section>
    </main>
  );
}
