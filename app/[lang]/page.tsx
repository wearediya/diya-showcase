import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary, hasLocale } from "./dictionaries";
import { pageSeo, SITE_URL } from "@/lib/seo";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LocalReality } from "@/components/sections/LocalReality";
import { Priority } from "@/components/sections/Priority";
import { Split } from "@/components/sections/Split";
import { Proof } from "@/components/sections/Proof";
import { GreenBanner } from "@/components/sections/GreenBanner";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return pageSeo({
    lang,
    path: "",
    title: dict.meta.title,
    description: dict.meta.description,
  });
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Diya",
        url: SITE_URL,
        logo: `${SITE_URL}/logos/logo.svg`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Diya",
        description: dict.meta.description,
        inLanguage: lang,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: "Diya",
        operatingSystem: "Android",
        applicationCategory: "BusinessApplication",
        description: dict.meta.description,
        url: `${SITE_URL}/${lang}`,
        inLanguage: lang,
        offers: { "@type": "Offer", price: "0", priceCurrency: "XOF" },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} nav={dict.nav} />
      <main>
        <Hero dict={dict.hero} units={dict.units} />
        <LocalReality dict={dict.local} />
        <Priority dict={dict.priority} />
        <Split dict={dict.split} />
        <Proof dict={dict.proof} />
        <GreenBanner dict={dict.banner} units={dict.units} />
        <Services dict={dict.services} />
        <Testimonials dict={dict.testimonials} />
        <Faq dict={dict.faq} />
        <CtaBand dict={dict.cta} />
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
