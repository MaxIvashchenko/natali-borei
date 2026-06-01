export default function EditorialBanner() {
  return (
    <section className="banner" aria-label="Wear Art. Wear Identity.">
      <div className="banner__media">
        <div className="ph ph--banner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ph__img"
            src="/photos/korall.jpg"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="banner__overlay" aria-hidden="true" />
      <div className="banner__content">
        <h2 className="banner__title">
          Wear Art. <em>Wear Identity.</em>
        </h2>
        <hr className="gold-line gold-line--wide banner__rule" />
        <p className="banner__sub">
          Handcrafted beaded jewelry — no two pieces alike
        </p>
      </div>
    </section>
  );
}
