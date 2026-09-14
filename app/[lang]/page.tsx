import { notFound } from "next/navigation";

import { getDictionary, hasLocale } from "./dictionaries";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Priority } from "@/components/sections/Priority";
import { Split } from "@/components/sections/Split";
import { Proof } from "@/components/sections/Proof";
import { GreenBanner } from "@/components/sections/GreenBanner";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main>
        <Hero dict={dict.hero} />
        <TrustStrip dict={dict.trust} />
        <Priority dict={dict.priority} />
        <Split dict={dict.split} />
        <Proof dict={dict.proof} />
        <GreenBanner dict={dict.banner} />
        <Services dict={dict.services} />
        <Pricing dict={dict.pricing} />
        <Testimonials dict={dict.testimonials} />
        <Faq dict={dict.faq} />
        <CtaBand dict={dict.cta} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
