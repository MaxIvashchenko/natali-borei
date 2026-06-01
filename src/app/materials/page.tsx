import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Материалы и уход — Natali Borei",
  description:
    "Материалы, из которых создаются украшения Natali Borei, и правила ухода за ручной работой.",
};

const CornerSvg = () => (
  <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
    <path d="M2 38 L2 2 L38 2" stroke="#B8963E" strokeWidth="1" />
  </svg>
);

export default function MaterialsPage() {
  return (
    <main className="page">
      <header className="page__head">
        <Breadcrumbs crumbs={[{ label: "Главная", href: "/" }, { label: "Материалы и уход" }]} />
        <p className="eyebrow">Мастерская</p>
        <h1 className="page__title"><em>Материалы и уход</em></h1>
        <hr className="gold-line gold-line--wide" />
        <p className="page__lead">
          Каждое украшение — это сотни часов кропотливой работы и материалы, отобранные вручную.
          Расскажем, из чего создаются вещи Natali Borei и как сохранить их красоту на долгие годы.
        </p>
      </header>

      {/* MATERIALS GRID */}
      <section className="page__section">
        <h2 className="page__h reveal">Из чего мы создаём</h2>
        <div className="mat-grid">
          <article className="mat-card reveal">
            <span className="mat-card__ic" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="1.1">
                <circle cx="7" cy="9" r="2.6" />
                <circle cx="14" cy="7" r="2" />
                <circle cx="17" cy="13" r="2.4" />
                <circle cx="10" cy="15" r="2" />
                <circle cx="6" cy="17" r="1.6" />
              </svg>
            </span>
            <p className="mat-card__sub">Beadwork</p>
            <h3 className="mat-card__t">Японский бисер</h3>
            <p className="mat-card__d">
              Miyuki и Toho — эталон калибровки и стойкости цвета. Каждая бусина одинакового размера,
              что даёт идеальную геометрию плетения.
            </p>
          </article>

          <article className="mat-card reveal">
            <span className="mat-card__ic" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="1.1">
                <path d="M12 3 L19 9 L15 20 L9 20 L5 9 Z" />
                <path d="M12 3 L9 9 L12 20 L15 9 Z" />
                <path d="M5 9 L19 9" />
              </svg>
            </span>
            <p className="mat-card__sub">Crystal</p>
            <h3 className="mat-card__t">Чешские кристаллы</h3>
            <p className="mat-card__d">
              Preciosa и премиальный огранённый кристалл — глубина блеска, чистая преломляющая
              способность, многолетняя стойкость покрытия.
            </p>
          </article>

          <article className="mat-card reveal">
            <span className="mat-card__ic" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="1.1">
                <path d="M12 3 L20 12 L12 21 L4 12 Z" />
                <path d="M12 3 L8 12 L12 21 L16 12 Z" />
                <path d="M4 12 L20 12" />
              </svg>
            </span>
            <p className="mat-card__sub">Stones</p>
            <h3 className="mat-card__t">Натуральные камни</h3>
            <p className="mat-card__d">
              Янтарь, коралл, агат, оникс, лунный камень, жемчуг. Подбираем каждый камень
              индивидуально — за характер рисунка и цвета.
            </p>
          </article>

          <article className="mat-card reveal">
            <span className="mat-card__ic" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="1.1">
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="4" />
                <path d="M12 4 L12 8 M12 16 L12 20 M4 12 L8 12 M16 12 L20 12" />
              </svg>
            </span>
            <p className="mat-card__sub">Metal</p>
            <h3 className="mat-card__t">Фурнитура с покрытием</h3>
            <p className="mat-card__d">
              Латунная основа с гальваническим покрытием золотом или серебром, гипоаллергенные
              сплавы. Замки, штифты, базы — европейское качество.
            </p>
          </article>

          <article className="mat-card reveal">
            <span className="mat-card__ic" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="1.1">
                <path d="M3 6 C7 4, 10 8, 14 6 C18 4, 21 8, 21 8" />
                <path d="M3 12 C7 10, 10 14, 14 12 C18 10, 21 14, 21 14" />
                <path d="M3 18 C7 16, 10 20, 14 18 C18 16, 21 20, 21 20" />
              </svg>
            </span>
            <p className="mat-card__sub">Thread</p>
            <h3 className="mat-card__t">Нити и шёлк</h3>
            <p className="mat-card__d">
              Нейлоновые мононити с памятью формы и натуральный шёлк. Каждый узел укрепляется
              вручную — украшение держит форму годами.
            </p>
          </article>

          <article className="mat-card reveal">
            <span className="mat-card__ic" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="1.1">
                <path d="M5 5 L19 5 L17 19 L7 19 Z" />
                <path d="M5 5 C9 7, 15 7, 19 5" />
                <path d="M9 9 L15 9 M9 13 L15 13" />
              </svg>
            </span>
            <p className="mat-card__sub">Leather</p>
            <h3 className="mat-card__t">Натуральная кожа</h3>
            <p className="mat-card__d">
              Итальянская кожа растительного дубления для оснований браслетов и манжет. Мягкая
              текстура, благородное старение, без ПВХ.
            </p>
          </article>
        </div>
      </section>

      {/* QUALITY STRIP */}
      <section className="page__section">
        <div className="quality reveal">
          <div className="quality__item">
            <span className="quality__big">100%</span>
            <span className="quality__lab">Ручная работа</span>
          </div>
          <div className="quality__item">
            <span className="quality__big">1/1</span>
            <span className="quality__lab">Единственный экземпляр</span>
          </div>
          <div className="quality__item">
            <span className="quality__big">40+</span>
            <span className="quality__lab">Часов на изделие</span>
          </div>
          <div className="quality__item">
            <span className="quality__big">7</span>
            <span className="quality__lab">Стран-поставщиков материалов</span>
          </div>
        </div>
      </section>

      {/* CARE TIPS */}
      <section className="page__section">
        <p className="eyebrow reveal">Уход</p>
        <h2 className="page__h reveal">Чтобы украшение служило годами</h2>
        <div className="care-tips">
          <div className="care-tips__list reveal">
            {[
              { n: "01", t: "Храните отдельно", d: "Тканевый мешочек или фирменная коробка — украшения не должны касаться друг друга, чтобы избежать царапин на бусинах и кристаллах." },
              { n: "02", t: "Надевайте последним", d: "Сначала макияж, парфюм и причёска — потом украшение. Так металл и нити не контактируют с косметикой и спиртом." },
              { n: "03", t: "Берегите от воды", d: "Душ, бассейн, море, сауна — снимайте. Влага со временем тускнит покрытие фурнитуры и ослабляет натуральные нити." },
              { n: "04", t: "Чистите мягкой тканью", d: "Сухая микрофибра или мягкая фланель. Никаких чистящих средств, ультразвука и паровых ванночек — они разрушают плетение." },
              { n: "05", t: "Снимайте на ночь", d: "И во время спорта, сна, уборки. Резкие нагрузки и пот деформируют форму и ускоряют износ нитей." },
            ].map(({ n, t, d }) => (
              <div key={n} className="ctip">
                <span className="ctip__n">{n}</span>
                <div className="ctip__body">
                  <h3 className="ctip__t">{t}</h3>
                  <p className="ctip__d">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="repair__photo reveal" data-tilt="" data-depth="1">
            <div className="repair__photo-inner" data-tilt-img="">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/mandragora.jpg" alt="Украшение Natali Borei" />
            </div>
            <span className="corner corner--tl"><CornerSvg /></span>
            <span className="corner corner--br"><CornerSvg /></span>
          </div>
        </div>
      </section>

      {/* DO/DON'T */}
      <section className="page__section">
        <h2 className="page__h reveal">Кратко: что можно и нельзя</h2>
        <div className="dodont">
          <div className="dodont__col dodont--yes reveal">
            <h3 className="dodont__h">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.4">
                <path d="M4 12 L10 18 L20 6" />
              </svg>
              Можно
            </h3>
            <ul>
              <li>Хранить в мешочке или фирменной коробке отдельно от других украшений.</li>
              <li>Протирать сухой мягкой тканью после носки.</li>
              <li>Носить регулярно — украшение «живёт» от прикосновений.</li>
              <li>Обращаться к нам за консультацией по уходу или мелкому ремонту.</li>
            </ul>
          </div>
          <div className="dodont__col dodont--no reveal">
            <h3 className="dodont__h">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.4">
                <path d="M6 6 L18 18 M18 6 L6 18" />
              </svg>
              Нельзя
            </h3>
            <ul>
              <li>Контактировать с водой, парфюмом, лаком для волос, кремами.</li>
              <li>Чистить ультразвуком, паром или агрессивной химией.</li>
              <li>Тянуть, перекручивать, спать в украшении — нити растягиваются.</li>
              <li>Оставлять под прямым солнцем — цвет бисера со временем выгорает.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* REPAIR */}
      <section className="page__section">
        <div className="repair">
          <div className="repair__text reveal">
            <p className="eyebrow">Срок службы</p>
            <h2 className="repair__h">
              Если что-то случилось — <em>мы поможем</em>
            </h2>
            <p className="repair__d">
              Любое украшение Natali Borei можно вернуть в мастерскую для бережного ремонта или
              переосновы — заменим замок, восстановим нить, освежим покрытие. Это часть нашей работы,
              и мы всегда на связи с теми, у кого наши вещи.
            </p>
            <p className="repair__d">
              При бережном уходе украшение служит десятилетиями и со временем обретает характер —
              кожа становится мягче, металл — тише в блеске, камни — глубже.
            </p>
          </div>
          <div className="repair__photo reveal" data-tilt="" data-depth="1">
            <div className="repair__photo-inner" data-tilt-img="">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/oko.jpg" alt="Украшение Natali Borei" />
            </div>
            <span className="corner corner--tl"><CornerSvg /></span>
            <span className="corner corner--br"><CornerSvg /></span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page__cta reveal">
        <span className="shimmer-line page__cta-line" aria-hidden="true" />
        <h2 className="page__cta-title">Нужна консультация по уходу?</h2>
        <p className="page__cta-sub">
          Расскажем, как обращаться с конкретным украшением, поможем с ремонтом или подберём
          подходящую вещь под ваш образ жизни.
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
