import type { ReactNode } from "react";
import { ArrowRight } from "@/components/icons";

/** Bouton pilule sombre + badge rond avec flèche (style hero). */
export function PillButton({
  href = "#",
  className = "",
  children,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex h-[58px] items-center justify-between gap-3 rounded-full bg-ink pl-7 pr-2 font-semibold text-bg transition-colors hover:bg-ink-2 ${className}`}
    >
      <span className="text-[15px]">{children}</span>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-bg text-ink transition-transform group-hover:translate-x-0.5">
        <ArrowRight className="h-[18px] w-[18px]" />
      </span>
    </a>
  );
}
