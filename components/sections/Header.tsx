"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, Close, Download } from "@/components/icons";
import type { Dict, Locale } from "@/app/[lang]/dictionaries";

export function Header({ lang, nav }: { lang: Locale; nav: Dict["nav"] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${lang}#features`, label: nav.features },
    { href: `/${lang}#testimonials`, label: nav.testimonials },
    { href: `/${lang}#faq`, label: nav.faq },
    { href: `/${lang}/documentation`, label: nav.documentation },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={`/${lang}`} aria-label="Diya">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[15px] font-medium text-muted transition-colors hover:bg-soft hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} />
          <ThemeToggle toDark={nav.darkMode} toLight={nav.lightMode} />
          <button
            type="button"
            aria-label={nav.menu}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink md:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-line bg-bg md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-soft"
              >
                {l.label}
              </a>
            ))}
            <Button href="#download" className="mt-2 w-full">
              <Download className="h-[18px] w-[18px]" />
              {nav.download}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

function LangSwitch({ lang }: { lang: Locale }) {
  const other: Locale = lang === "fr" ? "en" : "fr";
  const pathname = usePathname();
  const target = pathname?.startsWith(`/${lang}`)
    ? `/${other}${pathname.slice(lang.length + 1)}`
    : `/${other}`;
  return (
    <div className="flex items-center rounded-full border border-line bg-card p-0.5 text-xs font-semibold">
      <span className="rounded-full bg-brand px-2.5 py-1 text-white uppercase">
        {lang}
      </span>
      <Link
        href={target}
        className="rounded-full px-2.5 py-1 uppercase text-muted transition-colors hover:text-ink"
      >
        {other}
      </Link>
    </div>
  );
}
