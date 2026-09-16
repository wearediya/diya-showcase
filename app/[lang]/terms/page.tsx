import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary, hasLocale } from "../dictionaries";
import { pageSeo } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";
import { terms } from "./content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const doc = terms[lang];
  return pageSeo({
    lang,
    path: "/terms",
    title: doc.metaTitle,
    description: doc.metaDescription,
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return <LegalPage lang={lang} dict={dict} doc={terms[lang]} />;
}
