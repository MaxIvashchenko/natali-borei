import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ crumbs, className }: { crumbs: Crumb[]; className?: string }) {
  const ChevronSvg = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M3 1 L7 5 L3 9" />
    </svg>
  );

  return (
    <nav className={`crumbs${className ? ` ${className}` : ""}`} aria-label="Breadcrumb">
      {crumbs.map((crumb, i) => (
        <span key={i} style={{ display: "contents" }}>
          {i > 0 && <span className="crumbs__sep" aria-hidden="true"><ChevronSvg /></span>}
          {crumb.href ? (
            <Link href={crumb.href}>{crumb.label}</Link>
          ) : (
            <span className="crumbs__current">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
