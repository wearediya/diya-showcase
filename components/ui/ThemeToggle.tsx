"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@/components/icons";

/** Bascule clair/sombre (icône) : écrit `data-theme` sur <html> + mémorise. */
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
      title={dark ? toLight : toDark}
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-card text-brand transition-colors hover:bg-soft ${className}`}
    >
      {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
