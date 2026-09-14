import { Container } from "@/components/ui/Container";
import { WhatsApp } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

export function Faq({ dict }: { dict: Dict["faq"] }) {
  return (
    <section id="faq" className="scroll-mt-20 bg-soft py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          <div className="md:sticky md:top-24 md:self-start">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-[40px] sm:leading-[1.1]">
              {dict.title}
            </h2>
            <p className="mt-4 text-[17px] leading-7 text-muted">{dict.subtitle}</p>

            <div className="mt-7 rounded-3xl border border-line bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint/70 text-brand">
                  <WhatsApp className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[15px] font-bold text-ink">{dict.contactLabel}</div>
                  <div className="text-[13px] text-muted">{dict.contactText}</div>
                </div>
              </div>
              <a
                href="#download"
                className="mt-5 flex h-11 w-full items-center justify-center rounded-full bg-brand text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
              >
                {dict.contactCta}
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {dict.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-line bg-white px-5 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15.5px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="relative grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-brand transition-transform group-open:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-5 pr-8 text-[14.5px] leading-6 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
