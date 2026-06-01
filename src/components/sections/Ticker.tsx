const items = [
  "Beadwork Art",
  "·",
  "Contemporary Jewelry",
  "·",
  "Couture Cuffs",
  "·",
  "Handmade in Studio",
  "·",
  "Japanese Miyuki Beads",
  "·",
  "Czech Crystals",
  "·",
  "Freshwater Pearls",
  "·",
  "Ships Worldwide",
  "·",
  "Single Edition Pieces",
  "·",
  "Natali Borei",
  "·",
];

export default function Ticker() {
  const repeated = [...items, ...items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {repeated.map((item, i) => (
          <span key={i} className={item === "·" ? "dot" : undefined}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
