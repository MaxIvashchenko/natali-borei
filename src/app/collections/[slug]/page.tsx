import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/shared/ProductCard";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

interface CollectionData {
  slug: string;
  name: string;
  lead: string[];
  productIds: string[];
}

const COLLECTIONS: CollectionData[] = [
  {
    slug: "amber",
    name: "Янтарь",
    lead: [
      "Натуральный балтийский янтарь — окаменевшая смола, в которой остановилось время. В этой коллекции он становится сердцем украшений, оправленный в плотную бисерную вышивку и современные формы.",
      "Тёплый медовый свет камня сочетается с глубокими графитовыми и бронзовыми оттенками бисера. Броши, подвески, кольца и браслеты — каждое украшение хранит в себе тепло балтийского солнца и проживает свою собственную историю.",
    ],
    productIds: ["hranitel", "zastyvshaya", "ambra-noir", "oko", "mandragora"],
  },
];

export async function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const coll = COLLECTIONS.find((c) => c.slug === slug);
  if (!coll) return {};
  return {
    title: `Коллекция ${coll.name} — Natali Borei`,
    description: coll.lead[0],
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coll = COLLECTIONS.find((c) => c.slug === slug);
  if (!coll) notFound();

  const products = coll.productIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as typeof PRODUCTS;

  return (
    <main className="colldetail">
      <section className="colldetail__intro">
        <div className="colldetail__intro-inner">
          <Breadcrumbs
            className="colldetail__crumbs"
            crumbs={[
              { label: "Главная", href: "/" },
              { label: "Коллекции", href: "/collections" },
              { label: coll.name },
            ]}
          />
          <p className="eyebrow">Коллекция</p>
          <h1 className="colldetail__title">{coll.name}</h1>
          <hr className="gold-line gold-line--wide" />
          {coll.lead.map((p, i) => (
            <p key={i} className="colldetail__lead">
              {p}
            </p>
          ))}
        </div>
      </section>

      <div className="colldetail__grid-wrap">
        <span className="colldetail__count">
          <b>{products.length}</b> украшений в коллекции
        </span>
        <div className="prod-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
