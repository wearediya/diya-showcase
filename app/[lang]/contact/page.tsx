import type { Metadata } from "next";
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
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
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
              <div className="space-y-4">
                {c.values.map((v, i) => {
                  const Icon = valueIcons[i] ?? Shield;
                  return (
                    <div
                      key={v.title}
                      className="flex items-start gap-4 rounded-3xl border border-line bg-card p-5"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint/60 text-brand">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-[16px] font-bold text-ink">{v.title}</h3>
                        <p className="mt-1 text-[14.5px] leading-6 text-muted">{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Contact */}
        <section className="border-t border-line bg-soft/50">
          <Container className="py-14 sm:py-16">
            <div className="max-w-2xl">
              <span className="text-[13px] font-bold uppercase tracking-wider text-brand">
                {c.contactHeading}
              </span>
              <p className="mt-3 text-[17px] leading-7 text-ink/80">{c.contactLead}</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.methods.map((m) => (
                <MethodCard key={m.kind} method={m} />
              ))}
            </div>

            <div className="mt-4 inline-flex items-center gap-2.5 rounded-2xl border border-line bg-card px-5 py-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint/60 text-brand">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[13px] text-muted">{c.locationLabel}</div>
                <div className="text-[15px] font-semibold text-ink">{c.location}</div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}

function MethodCard({ method }: { method: ContactMethod }) {
  const Icon = methodIcon[method.kind];
  const external = method.kind === "whatsapp";
  return (
    <a
      href={method.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-3xl border border-line bg-card p-5 transition-colors hover:border-brand/40 hover:bg-soft/40"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint/60 text-brand">
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0">
        <div className="text-[13px] text-muted">{method.label}</div>
        <div className="truncate text-[15.5px] font-bold text-ink">{method.value}</div>
      </div>
      <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
    </a>
  );
}
