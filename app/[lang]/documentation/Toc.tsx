"use client";

import { useEffect, useState } from "react";

export function Toc({
  items,
  label,
}: {
  items: { id: string; title: string }[];
  label: string;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-15% 0px -75% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  return (
    <nav className="lg:sticky lg:top-24">
      <div className="mb-3 text-[12px] font-bold uppercase tracking-wider text-muted">
        {label}
      </div>
      <ul className="border-l border-line">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-[14px] transition-colors ${
                active === i.id
                  ? "border-brand font-semibold text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {i.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
