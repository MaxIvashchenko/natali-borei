"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { useStore } from "@/context/StoreContext";

type Step = 1 | 2 | 3 | "done";
type ShipMethod = "pickup" | "courier" | "intl";
type PayMethod = "card" | "paypal" | "cod";

const SHIP_COST: Record<ShipMethod, number> = {
  pickup: 0,
  courier: 500,
  intl: 2500,
};
const SHIP_LABEL: Record<ShipMethod, string> = {
  pickup: "Самовывоз",
  courier: "Курьер",
  intl: "Международная доставка",
};

interface DeliveryData {
  ship: ShipMethod;
  cost: number;
  addr: string;
  name: string;
  phone: string;
  email: string;
  note: string;
}

const ArrowSvg = () => (
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
);

export default function CartPage() {
  const {
    cart,
    cartCount,
    cartTotal,
    removeFromCart,
    setQty,
    clearCart,
    format,
  } = useStore();

  const [step, setStep] = useState<Step>(1);
  const [delivery, setDelivery] = useState<DeliveryData | null>(null);
  const [shipMethod, setShipMethod] = useState<ShipMethod>("pickup");
  const [payMethod, setPayMethod] = useState<PayMethod>("card");
  const [orderNo, setOrderNo] = useState("");

  const goStep = (s: Step) => {
    setStep(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeliverySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const ship = fd.get("ship") as ShipMethod;
    let addr = "";
    if (ship === "pickup")
      addr = "Самовывоз из мастерской · Москва, Пятницкая 12";
    else if (ship === "courier")
      addr = (fd.get("courierAddr") as string) || "—";
    else
      addr =
        [fd.get("intlCountry"), fd.get("intlCity"), fd.get("intlAddr")]
          .filter(Boolean)
          .join(", ") || "—";

    setDelivery({
      ship,
      cost: SHIP_COST[ship],
      addr,
      name: fd.get("cName") as string,
      phone: fd.get("cPhone") as string,
      email: fd.get("cEmail") as string,
      note: fd.get("cNote") as string,
    });
    goStep(3);
  };

  const handlePay = () => {
    const no = "NB-" + Date.now().toString().slice(-6);
    setOrderNo(no);
    clearCart();
    goStep("done");
  };

  const stepNum = step === "done" ? 4 : (step as number);

  return (
    <main className="cart">
      <div className="cart__wrap">
        {/* Progress */}
        <div className="steps">
          {[1, 2, 3].map((n) => (
            <span key={n} style={{ display: "contents" }}>
              <div
                className={`steps__item${stepNum === n ? " is-active" : ""}${stepNum > n ? " is-done" : ""}`}
                data-step={n}
              >
                <span className="steps__num">{n}</span>
                <span className="steps__label">
                  {n === 1 ? "Корзина" : n === 2 ? "Доставка" : "Оплата"}
                </span>
              </div>
              {n < 3 && <span className="steps__bar" />}
            </span>
          ))}
        </div>

        {/* STEP 1 */}
        <section className={`cart-step${step === 1 ? " is-shown" : ""}`}>
          <h1 className="cart-step__title">
            <em>Корзина</em>
          </h1>

          {cart.length === 0 ? (
            <div className="empty-state">
              <span className="empty-state__ic" aria-hidden="true">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B8963E"
                  strokeWidth="0.9"
                >
                  <path d="M6 8h12l-1 12H7L6 8Z" />
                  <path d="M9 8a3 3 0 0 1 6 0" />
                </svg>
              </span>
              <p className="empty-state__text">Корзина пуста</p>
              <Link className="gold-btn gold-btn--filled" href="/shop">
                Перейти в каталог
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-rows">
                {cart.map((item) => {
                  const p = PRODUCTS.find((x) => x.id === item.id);
                  if (!p) return null;
                  const name = p.altName || p.name;
                  return (
                    <div key={item.id} className="cart-row">
                      <Link
                        className="cart-row__thumb"
                        href={`/product/${p.id}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.img} alt={name} />
                      </Link>
                      <div className="cart-row__info">
                        <h3 className="cart-row__name">{name}</h3>
                        <p className="cart-row__cat">
                          {p.coll === "beadwork"
                            ? "Beadwork Art"
                            : "Contemporary"}{" "}
                          · {p.subCat}
                        </p>
                      </div>
                      <span className="cart-row__price">{format(p.price)}</span>
                      <div className="qty">
                        <button
                          className="qty__btn"
                          type="button"
                          aria-label="−"
                          onClick={() => setQty(p.id, item.qty - 1)}
                        >
                          −
                        </button>
                        <span className="qty__val">{item.qty}</span>
                        <button
                          className="qty__btn"
                          type="button"
                          aria-label="+"
                          onClick={() => setQty(p.id, item.qty + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="cart-row__rm"
                        type="button"
                        aria-label="Удалить"
                        onClick={() => removeFromCart(p.id)}
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="cart-summary" style={{ display: "flex" }}>
                <span className="cart-summary__label">
                  <span>{cartCount}</span> позиций · Итого
                </span>
                <span className="cart-summary__total">{format(cartTotal)}</span>
              </div>
            </>
          )}

          <div className="cart-actions" id="step1Actions">
            <Link className="cart-back" href="/shop">
              ← Продолжить покупки
            </Link>
            {cart.length > 0 && (
              <button
                className="gold-btn gold-btn--filled"
                type="button"
                onClick={() => goStep(2)}
              >
                Продолжить <ArrowSvg />
              </button>
            )}
          </div>
        </section>

        {/* STEP 2 */}
        <section className={`cart-step${step === 2 ? " is-shown" : ""}`}>
          <h1 className="cart-step__title">
            <em>Доставка</em>
          </h1>
          <form onSubmit={handleDeliverySubmit}>
            <div className="opt-group">
              <label className="opt">
                <input
                  type="radio"
                  name="ship"
                  value="pickup"
                  checked={shipMethod === "pickup"}
                  onChange={() => setShipMethod("pickup")}
                />
                <span className="opt__mark" />
                <span className="opt__body">
                  <span className="opt__title">Самовывоз</span>
                  <span className="opt__desc">
                    Из мастерской · г. Москва, ул. Пятницкая, 12. Бесплатно.
                  </span>
                </span>
              </label>

              <label className="opt">
                <input
                  type="radio"
                  name="ship"
                  value="courier"
                  checked={shipMethod === "courier"}
                  onChange={() => setShipMethod("courier")}
                />
                <span className="opt__mark" />
                <span className="opt__body">
                  <span className="opt__title">Курьер</span>
                  <span className="opt__desc">По городу, 1–2 дня · 500 ₽</span>
                  {shipMethod === "courier" && (
                    <span className="opt__extra">
                      <div className="field field--full">
                        <label htmlFor="courierAddr">Адрес доставки</label>
                        <input
                          type="text"
                          id="courierAddr"
                          name="courierAddr"
                        />
                      </div>
                    </span>
                  )}
                </span>
              </label>

              <label className="opt">
                <input
                  type="radio"
                  name="ship"
                  value="intl"
                  checked={shipMethod === "intl"}
                  onChange={() => setShipMethod("intl")}
                />
                <span className="opt__mark" />
                <span className="opt__body">
                  <span className="opt__title">Международная доставка</span>
                  <span className="opt__desc">
                    7–18 дней, с трек-номером · 2 500 ₽
                  </span>
                  {shipMethod === "intl" && (
                    <span className="opt__extra">
                      <div className="form-grid" style={{ margin: 0 }}>
                        <div className="field">
                          <label htmlFor="intlCountry">Страна</label>
                          <input
                            type="text"
                            id="intlCountry"
                            name="intlCountry"
                          />
                        </div>
                        <div className="field">
                          <label htmlFor="intlCity">Город</label>
                          <input type="text" id="intlCity" name="intlCity" />
                        </div>
                        <div className="field field--full">
                          <label htmlFor="intlAddr">Адрес</label>
                          <input type="text" id="intlAddr" name="intlAddr" />
                        </div>
                      </div>
                    </span>
                  )}
                </span>
              </label>
            </div>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="cName">Имя</label>
                <input type="text" id="cName" name="cName" required />
              </div>
              <div className="field">
                <label htmlFor="cPhone">Телефон</label>
                <input type="tel" id="cPhone" name="cPhone" required />
              </div>
              <div className="field field--full">
                <label htmlFor="cEmail">Email</label>
                <input type="email" id="cEmail" name="cEmail" required />
              </div>
              <div className="field field--full">
                <label htmlFor="cNote">Комментарий к заказу</label>
                <textarea id="cNote" name="cNote" rows={3} />
              </div>
            </div>

            <div className="cart-actions">
              <button
                className="cart-back"
                type="button"
                onClick={() => goStep(1)}
              >
                ← Назад в корзину
              </button>
              <button className="gold-btn gold-btn--filled" type="submit">
                Продолжить <ArrowSvg />
              </button>
            </div>
          </form>
        </section>

        {/* STEP 3 */}
        <section className={`cart-step${step === 3 ? " is-shown" : ""}`}>
          <h1 className="cart-step__title">
            <em>Подтверждение</em>
          </h1>
          <div className="review">
            <div className="review__block">
              <h3 className="review__h">Ваш заказ</h3>
              {cart.map((item) => {
                const p = PRODUCTS.find((x) => x.id === item.id);
                if (!p) return null;
                return (
                  <div key={item.id} className="review__line">
                    <span>
                      {item.qty} × {p.altName || p.name}
                    </span>
                    <span>{format(p.price * item.qty)}</span>
                  </div>
                );
              })}
            </div>

            {delivery && (
              <div className="review__block">
                <h3 className="review__h">Доставка</h3>
                <div className="review__addr">
                  <strong>{SHIP_LABEL[delivery.ship]}</strong>
                  <br />
                  {delivery.addr}
                  <br />
                  {delivery.name} · {delivery.phone}
                  <br />
                  {delivery.email}
                  {delivery.note && (
                    <>
                      <br />
                      <em style={{ color: "var(--text-secondary)" }}>
                        {delivery.note}
                      </em>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="review__block">
              <h3 className="review__h">Способ оплаты</h3>
              <div className="opt-group" style={{ margin: 0 }}>
                {(["card", "paypal", "cod"] as PayMethod[]).map((m) => (
                  <label key={m} className="opt">
                    <input
                      type="radio"
                      name="pay"
                      value={m}
                      checked={payMethod === m}
                      onChange={() => setPayMethod(m)}
                    />
                    <span className="opt__mark" />
                    <span className="opt__body">
                      <span className="opt__title">
                        {m === "card"
                          ? "Банковская карта"
                          : m === "paypal"
                            ? "PayPal"
                            : "Оплата при получении"}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {delivery && (
              <div className="review__block totals">
                <div className="review__line">
                  <span>Товары</span>
                  <span>{format(cartTotal)}</span>
                </div>
                <div className="review__line">
                  <span>Доставка</span>
                  <span>
                    {delivery.cost ? format(delivery.cost) : "Бесплатно"}
                  </span>
                </div>
                <div className="review__line totals__final">
                  <span>Итого</span>
                  <span>{format(cartTotal + (delivery.cost ?? 0))}</span>
                </div>
              </div>
            )}
          </div>

          <div className="cart-actions">
            <button
              className="cart-back"
              type="button"
              onClick={() => goStep(2)}
            >
              ← Назад к доставке
            </button>
            <button
              className="gold-btn gold-btn--filled"
              type="button"
              onClick={handlePay}
            >
              Оплатить <ArrowSvg />
            </button>
          </div>
        </section>

        {/* THANK YOU */}
        <section className={`cart-step${step === "done" ? " is-shown" : ""}`}>
          <div className="thanks">
            <span className="thanks__ic" aria-hidden="true">
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <h1 className="thanks__title">Спасибо за заказ!</h1>
            <p className="page__lead" style={{ textAlign: "center" }}>
              Мы свяжемся с вами в ближайшее время для подтверждения деталей.
            </p>
            <p className="thanks__order">
              Номер заказа: <b>{orderNo}</b>
            </p>
            <Link className="gold-btn" href="/shop">
              Вернуться в каталог
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
