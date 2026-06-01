"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

const CornerSvg = ({ size = 34 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path d="M2 38 L2 2 L38 2" stroke="#B8963E" strokeWidth="1" />
  </svg>
);

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const subject = fd.get("subject") as string;
    const message = fd.get("message") as string;
    const body = `Имя: ${name}\n\n${message}`;
    window.location.href = `mailto:boreinatali@gmail.com?subject=${encodeURIComponent(subject || "Запрос")}` +
      `&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main className="page">
      <header className="page__head">
        <Breadcrumbs crumbs={[{ label: "Главная", href: "/" }, { label: "Контакты" }]} />
        <p className="eyebrow">Связь</p>
        <h1 className="page__title"><em>Давайте познакомимся</em></h1>
        <hr className="gold-line gold-line--wide" />
        <p className="page__lead">
          Напишите нам по поводу заказа готового украшения, индивидуальной работы или
          сотрудничества. Мы отвечаем лично и с удовольствием.
        </p>
      </header>

      <section className="contact">
        <div className="contact__details">
          <div className="contact__block">
            <span className="contact__label">Почта</span>
            <a className="contact__value" href="mailto:boreinatali@gmail.com">
              boreinatali@gmail.com
            </a>
          </div>
          <hr className="divider-line" />
          <div className="contact__block">
            <span className="contact__label">Социальные сети</span>
            <div className="contact__socials">
              <a href="#" className="contact__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <rect x="3" y="3" width="18" height="18" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
                </svg>
                <span>@nataliborei</span>
              </a>
              <a href="#" className="contact__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M11.2 7.5 L11.2 17 M11.2 11 C11.2 9.4 12.6 8.4 14 9 C15.6 9.7 14.8 13 12.5 13 C11.5 13 10.8 12.5 10.5 12" />
                </svg>
                <span>Pinterest</span>
              </a>
            </div>
          </div>
          <hr className="divider-line" />
          <div className="contact__block">
            <span className="contact__label">Часы работы</span>
            <p className="contact__text">Пн–Сб · 10:00–19:00. Отвечаем обычно в течение дня.</p>
          </div>
          <hr className="divider-line" />
          <div className="contact__block">
            <span className="contact__label">Индивидуальный заказ</span>
            <p className="contact__text">
              Создаём украшения по вашей идее — от эскиза до готовой вещи. Расскажите, что вы
              представляете.
            </p>
          </div>
        </div>

        <div className="contact__form-wrap">
          <span className="corner corner--tl"><CornerSvg /></span>
          <span className="corner corner--br"><CornerSvg /></span>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="field">
              <label htmlFor="subject">Тема</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="field">
              <label htmlFor="message">Сообщение</label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <button className="gold-btn gold-btn--filled" type="submit">
              {sent ? "Открываем почту…" : "Отправить"}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M1 5h12M9 1l4 4-4 4" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
