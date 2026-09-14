"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@/components/icons";

/** Bascule clair/sombre : écrit `data-theme` sur <html> + mémorise le choix. */
export function ThemeToggle({
  toDark,
  toLight,
  className = "",
}: {
  toDark: string;
  toLight: string;
  className?: string;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const root = document.documentElement;
    if (next) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    try {
      localStorage.setItem("diya-theme", next ? "dark" : "light");
    } catch {
      /* stockage indisponible : on ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? toLight : toDark}
      className={`inline-flex h-[58px] items-center justify-center gap-2.5 rounded-full border border-line bg-card px-7 text-[15px] font-semibold text-ink transition-colors hover:bg-soft ${className}`}
    >
      {dark ? <Sun className="h-5 w-5 text-brand" /> : <Moon className="h-5 w-5 text-brand" />}
      {dark ? toLight : toDark}
    </button>
  );
}
