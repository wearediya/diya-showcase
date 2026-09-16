import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary, hasLocale } from "../dictionaries";
import { pageSeo } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/sections/Header";
import { PageHero } from "@/components/sections/PageHero";
import { Footer } from "@/components/sections/Footer";
import { BrandColors } from "@/components/sections/BrandColors";
import { Download, Check, Close } from "@/components/icons";
import { brand, type BrandLogo } from "./content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const b = brand[lang];
  return pageSeo({
    lang,
    path: "/brand",
    title: b.metaTitle,
    description: b.metaDescription,
  });
}

const previewBg = {
  light: "bg-white",
  dark: "bg-night",
  mint: "bg-gradient-to-br from-mint-400 to-mint",
} as const;

export default async function BrandPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const b = brand[lang];

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main>
        <PageHero title={b.title} subtitle={b.subtitle} />

        {/* Identité */}
        <section className="bg-bg">
          <Container className="py-12 sm:py-14">
            <Eyebrow>{b.detailsHeading}</Eyebrow>
            <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {b.details.map((d) => (
                <div key={d.label} className="bg-card p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-wider text-muted">
                    {d.label}
                  </dt>
                  <dd className="mt-1.5 text-[15.5px] font-semibold text-ink">
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* Logos */}
        <section className="border-t border-line bg-soft/50">
          <Container className="py-12 sm:py-14">
            <Eyebrow>{b.logosHeading}</Eyebrow>
            <p className="mt-3 max-w-2xl text-[16px] leading-7 text-muted">
              {b.logosLead}
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {b.logos.map((logo) => (
                <LogoCard key={logo.file} logo={logo} downloadLabel={b.downloadLabel} />
              ))}
            </div>
          </Container>
        </section>

        {/* Couleurs */}
        <section className="bg-bg">
          <Container className="py-12 sm:py-14">
            <Eyebrow>{b.colorsHeading}</Eyebrow>
            <p className="mt-3 max-w-2xl text-[16px] leading-7 text-muted">
              {b.colorsLead}
            </p>
            <div className="mt-8">
              <BrandColors
                colors={b.colors}
                copyLabel={b.copyLabel}
                copiedLabel={b.copiedLabel}
              />
            </div>
          </Container>
        </section>

        {/* Bonnes pratiques */}
        <section className="border-t border-line bg-soft/50">
          <Container className="py-12 sm:py-14">
            <Eyebrow>{b.usageHeading}</Eyebrow>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-10">
              <UsageList label={b.dosLabel} items={b.dos} kind="do" />
              <UsageList label={b.dontsLabel} items={b.donts} kind="dont" />
            </div>
          </Container>
        </section>
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[13px] font-bold uppercase tracking-wider text-brand">
      {children}
    </span>
  );
}

function LogoCard({
  logo,
  downloadLabel,
}: {
  logo: BrandLogo;
  downloadLabel: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-line bg-card">
      <div className={`flex h-40 items-center justify-center p-8 ${previewBg[logo.bg]}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/logos/${logo.file}`}
          alt={logo.name}
          className="max-h-14 w-auto"
        />
      </div>
      <div className="border-t border-line px-4 pt-4">
        <div className="text-[15px] font-bold text-ink">{logo.name}</div>
        <div className="text-[13px] text-muted">{logo.desc}</div>
      </div>
      <a
        href={`/logos/${logo.file}`}
        download={logo.download}
        className="m-4 mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-line py-2.5 text-[13.5px] font-semibold text-ink transition-colors hover:border-brand/40 hover:bg-soft"
      >
        <Download className="h-[18px] w-[18px] text-brand" />
        {downloadLabel}
      </a>
    </div>
  );
}

function UsageList({
  label,
  items,
  kind,
}: {
  label: string;
  items: string[];
  kind: "do" | "dont";
}) {
  const isDo = kind === "do";
  return (
    <div>
      <h3 className="flex items-center gap-2 text-[15px] font-bold text-ink">
        <span
          className={`grid h-6 w-6 place-items-center rounded-full ${
            isDo ? "bg-mint/60 text-brand" : "bg-warn-bg text-warn"
          }`}
        >
          {isDo ? <Check className="h-4 w-4" /> : <Close className="h-4 w-4" />}
        </span>
        {label}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2.5 text-[15px] leading-6 text-ink/80">
            <span
              className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${
                isDo ? "bg-brand/60" : "bg-warn/60"
              }`}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
