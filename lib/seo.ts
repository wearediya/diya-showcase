import type { Metadata } from "next";

import type { Locale } from "@/app/[lang]/dictionaries";

/**
 * URL de base du site. Câblée par défaut sur diya.wearekarfi.dev,
 * surchargeable via la variable d'environnement NEXT_PUBLIC_SITE_URL
 * (aucun code à modifier au moment du déploiement).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://diya.wearekarfi.dev"
).replace(/\/+$/, "");

/** Toutes les routes du site (chemins sans préfixe de langue). */
export const ROUTES = [
  "",
  "/documentation",
  "/contact",
  "/privacy",
  "/terms",
  "/brand",
] as const;

const ogLocale: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
};

/**
 * Métadonnées communes à une page localisée :
 * URL canonique, alternances hreflang FR/EN + x-default, OpenGraph et Twitter.
 * `path` est le chemin SANS la langue (ex. "" pour l'accueil, "/contact").
 */
export function pageSeo({
  lang,
  path = "",
  title,
  description,
}: {
  lang: Locale;
  path?: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = `/${lang}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: `/fr${path}`,
        en: `/en${path}`,
        "x-default": `/fr${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Diya",
      locale: ogLocale[lang],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
