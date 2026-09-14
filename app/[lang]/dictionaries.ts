import "server-only";

import type fr from "./dictionaries/fr.json";

/** Forme du dictionnaire (dérivée du fichier FR, source de vérité). */
export type Dict = typeof fr;

const dictionaries = {
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
} as const;

export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];
export const defaultLocale: Locale = "fr";

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale): Promise<Dict> =>
  dictionaries[locale]();
