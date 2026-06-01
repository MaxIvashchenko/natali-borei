import type { ReactNode } from "react";
import "@/styles/admin.css";

export const metadata = {
  title: "Atelier Dashboard — Natali Borei",
  description: "Internal admin dashboard for the Natali Borei studio.",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="admin-root">{children}</div>;
}
