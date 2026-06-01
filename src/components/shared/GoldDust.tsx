"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function GoldDust() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const syncHeight = () => {
      if (ref.current) {
        ref.current.style.height = `${document.documentElement.scrollHeight}px`;
      }
    };

    syncHeight();

    const ro = new ResizeObserver(syncHeight);
    ro.observe(document.body);

    return () => ro.disconnect();
  }, [pathname]);

  return (
    <div ref={ref} className="gold-dust" aria-hidden="true">
      {Array.from({ length: 50 }, (_, i) => (
        <i key={i} />
      ))}
    </div>
  );
}
