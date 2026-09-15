import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getDictionary, hasLocale } from "../dictionaries";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/sections/Header";
import { PageHero } from "@/components/sections/PageHero";
import { Footer } from "@/components/sections/Footer";
import { WhatsApp, Mail, Phone, ArrowRight, WifiOff, MapPin, Shield } from "@/components/icons";
import { contact, type ContactMethod } from "./content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const c = contact[lang];
  return { title: c.metaTitle, description: c.metaDescription };
}

const methodIcon = {
  whatsapp: WhatsApp,
  email: Mail,
  phone: Phone,
} as const;

const valueIcons = [WifiOff, MapPin, Shield];

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const c = contact[lang];

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main>
        {/* En-tête */}
        <PageHero title={c.title} subtitle={c.subtitle} />

        {/* À propos */}
        <section className="bg-bg">
          <Container className="py-14 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <span className="text-[13px] font-bold uppercase tracking-wider text-brand">
                  {c.aboutHeading}
                </span>
                <div className="mt-3 space-y-4">
                  {c.aboutParas.map((p, i) => (
                    <p key={i} className="text-[16px] leading-7 text-ink/80">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              {/* Logo Diya (à la place des anciennes cartes) */}
              <div className="flex items-center justify-center rounded-[2rem] border border-mint-200 bg-mint/30 px-8 py-16">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/logo.svg"
                  alt="Diya"
                  className="w-full max-w-[260px]"
                />
              </div>
            </div>

            {/* Valeurs — une ligne de trois, séparées : icône (sans fond), titre, description */}
            <div className="mt-14 grid gap-8 border-t border-line pt-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
              {c.values.map((v, i) => {
                const Icon = valueIcons[i] ?? Shield;
                return (
                  <div key={v.title} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
                    <Icon className="h-9 w-9 text-brand" />
                    <h3 className="mt-4 text-[16px] font-bold text-ink">{v.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-6 text-muted">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Contact — image + infos */}
        <section className="border-t border-line bg-soft/50">
          <Container className="py-14 sm:py-16">
            <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[3/2] lg:aspect-auto lg:min-h-[540px]">
                <Image
                  src="/call-us.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/30 via-transparent to-transparent" />
              </div>

              {/* Infos (sans cards) */}
              <div className="flex flex-col justify-center">
                <span className="text-[13px] font-bold uppercase tracking-wider text-brand">
                  {c.contactHeading}
                </span>
                <p className="mt-3 text-[17px] leading-7 text-ink/80">
                  {c.contactLead}
                </p>

                <div className="mt-8 divide-y divide-line border-y border-line">
                  {c.methods.map((m) => (
                    <MethodRow key={m.kind} method={m} />
                  ))}
                  <div className="flex items-center gap-4 py-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint/60 text-brand">
                      <MapPin className="h-[22px] w-[22px]" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[13px] text-muted">
                        {c.locationLabel}
                      </div>
                      <div className="text-[15.5px] font-bold text-ink">
                        {c.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}

function MethodRow({ method }: { method: ContactMethod }) {
  const Icon = methodIcon[method.kind];
  const external = method.kind === "whatsapp";
  return (
    <a
      href={method.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 py-4 transition-colors"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint/60 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <Icon className="h-[22px] w-[22px]" />
      </span>
      <div className="min-w-0">
        <div className="text-[13px] text-muted">{method.label}</div>
        <div className="truncate text-[15.5px] font-bold text-ink">
          {method.value}
        </div>
      </div>
      <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
    </a>
  );
}
