import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { docs, type DocBlock, type DocSection } from "./content";
import { Toc } from "./Toc";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const doc = docs[lang];
  return { title: doc.metaTitle, description: doc.metaDescription };
}

const uiLabels = {
  fr: { shot: "Capture d'écran à insérer" },
  en: { shot: "Screenshot to add" },
} as const;

export default async function DocumentationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const doc = docs[lang];
  const ui = uiLabels[lang as Locale];

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main>
        {/* En-tête du guide */}
        <section className="border-b border-line bg-soft/60">
          <Container className="py-14 sm:py-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-mint-200 bg-mint/50 px-3 py-1 text-[12.5px] font-semibold text-brand-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {doc.offline}
              </span>
              <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                {doc.title}
              </h1>
              <p className="mt-4 text-pretty text-[17px] leading-7 text-muted">
                {doc.subtitle}
              </p>
            </div>
          </Container>
        </section>

        {/* Sommaire + contenu */}
        <Container className="py-12 sm:py-14">
          <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
            <aside className="mb-10 lg:mb-0">
              <Toc
                items={doc.sections.map((s) => ({ id: s.id, title: s.title }))}
                label={doc.tocLabel}
              />
            </aside>

            <div className="min-w-0 max-w-2xl">
              {doc.sections.map((section, i) => (
                <Section
                  key={section.id}
                  section={section}
                  first={i === 0}
                  shotCaption={ui.shot}
                />
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}

function Section({
  section,
  first,
  shotCaption,
}: {
  section: DocSection;
  first: boolean;
  shotCaption: string;
}) {
  return (
    <section
      id={section.id}
      className={`scroll-mt-24 ${first ? "" : "mt-14 border-t border-line pt-14"}`}
    >
      <span className="text-[13px] font-bold uppercase tracking-wider text-brand">
        {section.eyebrow}
      </span>
      <h2 className="mt-2 text-[28px] font-extrabold tracking-tight text-ink">
        {section.title}
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-muted">{section.intro}</p>
      <div className="mt-6 space-y-5">
        {section.blocks.map((b, i) => (
          <Block key={i} block={b} shotCaption={shotCaption} />
        ))}
      </div>
    </section>
  );
}

function Block({ block, shotCaption }: { block: DocBlock; shotCaption: string }) {
  switch (block.t) {
    case "h3":
      return (
        <h3 className="pt-2 text-[17px] font-bold text-ink">{block.s}</h3>
      );
    case "p":
      return <p className="text-[15.5px] leading-7 text-ink/80">{rich(block.s)}</p>;
    case "steps":
      return (
        <ol className="space-y-2.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint/60 text-[12px] font-bold text-brand-ink">
                {i + 1}
              </span>
              <span className="text-[15.5px] leading-6 text-ink/80">{rich(it)}</span>
            </li>
          ))}
        </ol>
      );
    case "tip":
    case "note":
    case "warn":
      return <Callout kind={block.t}>{rich(block.s)}</Callout>;
    case "shot":
      return <Shot label={block.s} caption={shotCaption} />;
    case "qa":
      return (
        <div className="rounded-2xl border border-line bg-card p-5">
          <div className="text-[15.5px] font-bold text-ink">{block.q}</div>
          <p className="mt-1.5 text-[14.5px] leading-6 text-muted">{block.a}</p>
        </div>
      );
  }
}

/* Texte enrichi : `xxx` → puce mono (chemins de menu, boutons). */
function rich(s: string): ReactNode {
  return s.split("`").map((seg, i) =>
    i % 2 === 1 ? (
      <code
        key={i}
        className="mx-0.5 rounded-md bg-mint/60 px-1.5 py-0.5 font-mono text-[0.82em] font-semibold text-brand-ink"
      >
        {seg}
      </code>
    ) : (
      <span key={i}>{seg}</span>
    ),
  );
}

const calloutMeta = {
  tip: { cls: "border-transparent bg-mint/40", iconCls: "text-brand", icon: bulb() },
  note: { cls: "border-line bg-soft", iconCls: "text-brand", icon: info() },
  warn: { cls: "border-warn-line bg-warn-bg", iconCls: "text-warn", icon: triangle() },
} as const;

function Callout({
  kind,
  children,
}: {
  kind: "tip" | "note" | "warn";
  children: ReactNode;
}) {
  const m = calloutMeta[kind];
  return (
    <div className={`flex gap-3 rounded-2xl border p-4 ${m.cls}`}>
      <span className={`mt-0.5 shrink-0 ${m.iconCls}`}>{m.icon}</span>
      <p className="text-[14.5px] leading-6 text-ink">{children}</p>
    </div>
  );
}

function Shot({ label, caption }: { label: string; caption: string }) {
  return (
    <figure className="flex flex-col items-center py-2">
      <div className="flex aspect-[9/16] w-full max-w-[220px] flex-col items-center justify-center gap-3 rounded-[1.75rem] border-2 border-dashed border-line bg-soft/50 p-6 text-center">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-muted/60">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.6" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="text-[12.5px] font-medium text-muted">{label}</span>
      </div>
      <figcaption className="mt-2 text-[11.5px] text-muted/70">{caption}</figcaption>
    </figure>
  );
}

function bulb() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
    </svg>
  );
}
function info() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  );
}
function triangle() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  );
}
