import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Header } from "@/components/sections/Header";
import { PageHero } from "@/components/sections/PageHero";
import { Footer } from "@/components/sections/Footer";
import { Toc } from "@/components/ui/Toc";
import type { Dict, Locale } from "@/app/[lang]/dictionaries";

/* ----------------------------------------------------------------- *
 * Rendu partagé des pages légales (Confidentialité, Conditions).
 * Même identité visuelle que Documentation / Contact.
 * ----------------------------------------------------------------- */

export type LegalBlock =
  | { t: "p"; s: string }
  | { t: "h3"; s: string }
  | { t: "list"; items: string[] }
  | { t: "note"; s: string }
  | { t: "warn"; s: string };

export type LegalSection = { id: string; title: string; blocks: LegalBlock[] };

export type LegalDoc = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  updatedLabel: string;
  updated: string;
  tocLabel: string;
  sections: LegalSection[];
};

export function LegalPage({
  lang,
  dict,
  doc,
}: {
  lang: Locale;
  dict: Dict;
  doc: LegalDoc;
}) {
  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main>
        <PageHero title={doc.title} subtitle={doc.subtitle} />

        <Container className="py-12 sm:py-14">
          <p className="text-[13.5px] text-muted">
            {doc.updatedLabel} :{" "}
            <span className="font-semibold text-ink">{doc.updated}</span>
          </p>

          <div className="mt-8 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
            <aside className="mb-10 lg:mb-0">
              <Toc
                items={doc.sections.map((s) => ({ id: s.id, title: s.title }))}
                label={doc.tocLabel}
              />
            </aside>

            <div className="min-w-0 max-w-2xl">
              {doc.sections.map((section, i) => (
                <Section key={section.id} n={i + 1} section={section} />
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}

function Section({ n, section }: { n: number; section: LegalSection }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-t border-line pt-10 mt-10 first:mt-0 first:border-0 first:pt-0"
    >
      <div className="flex items-baseline gap-3">
        <span className="text-[13px] font-bold tabular-nums text-brand">
          {String(n).padStart(2, "0")}
        </span>
        <h2 className="text-[24px] font-extrabold tracking-tight text-ink">
          {section.title}
        </h2>
      </div>
      <div className="mt-4 space-y-4">
        {section.blocks.map((b, i) => (
          <Block key={i} block={b} />
        ))}
      </div>
    </section>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.t) {
    case "h3":
      return <h3 className="pt-1 text-[16px] font-bold text-ink">{block.s}</h3>;
    case "p":
      return (
        <p className="text-[15.5px] leading-7 text-ink/80">{rich(block.s)}</p>
      );
    case "list":
      return (
        <ul className="space-y-2">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-[15.5px] leading-7 text-ink/80"
            >
              <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
              <span>{rich(it)}</span>
            </li>
          ))}
        </ul>
      );
    case "note":
    case "warn":
      return <Callout kind={block.t}>{rich(block.s)}</Callout>;
  }
}

/* Texte enrichi : `xxx` → puce mono (e-mail, numéro, termes). */
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
  note: { cls: "border-line bg-soft", iconCls: "text-brand", icon: info() },
  warn: {
    cls: "border-warn-line bg-warn-bg",
    iconCls: "text-warn",
    icon: triangle(),
  },
} as const;

function Callout({
  kind,
  children,
}: {
  kind: "note" | "warn";
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
