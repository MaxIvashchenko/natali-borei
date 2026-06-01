const MARK =
  "NATALI BOREI · EXCLUSIVE ACCESSOIRES · HANDCRAFTED · MIYUKI · TOHO · " +
  "NATALI BOREI · EXCLUSIVE ACCESSOIRES · HANDCRAFTED · MIYUKI · TOHO";

function Rail({ side }: { side: "left" | "right" }) {
  return (
    <div className={`side-rail side-rail--${side}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="side-rail__mono"
        src="/logo-monogram.png"
        alt=""
        aria-hidden="true"
      />
      <span className="side-rail__year side-rail__year--top">MMXXVI</span>
      <span className="side-rail__orn side-rail__orn--top" />
      <span className="side-rail__mark">{MARK}</span>
      <span className="side-rail__orn side-rail__orn--mid" />
      <span className="side-rail__orn side-rail__orn--bot" />
      <span className="side-rail__year side-rail__year--bot">N · B</span>
    </div>
  );
}

export default function SideRail() {
  return (
    <>
      <Rail side="left" />
      <Rail side="right" />
    </>
  );
}
