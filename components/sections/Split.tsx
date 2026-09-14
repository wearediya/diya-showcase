import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Receipt, Calendar, Wallet, Check, WhatsApp } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

const icons = [Receipt, Calendar, Wallet];

export function Split({ dict }: { dict: Dict["split"] }) {
  return (
    <section className="bg-soft py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Tout-en-un"
              title={dict.title}
              subtitle={dict.subtitle}
            />
            <ul className="mt-8 space-y-4">
              {dict.features.map((f, i) => {
                const Icon = icons[i] ?? Check;
                return (
                  <li key={f.title} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card text-brand shadow-sm ring-1 ring-line">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[15.5px] font-bold text-ink">{f.title}</h3>
                      <p className="mt-0.5 text-[14.5px] leading-6 text-muted">{f.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Carte quittance */}
          <div className="relative">
            <div className="glow-mint pointer-events-none absolute -inset-6 -z-0" />
            <div className="relative mx-auto max-w-sm rounded-3xl border border-line bg-card p-6 shadow-[0_30px_70px_-30px_rgba(11,21,18,0.35)]">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-white">
                  <Receipt className="h-5 w-5" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/70 px-3 py-1 text-[12px] font-bold text-brand-ink">
                  <Check className="h-3.5 w-3.5" />
                  {dict.chatStatus}
                </span>
              </div>
              <div className="mt-5 text-[13px] font-medium text-muted">{dict.chatTitle}</div>
              <div className="text-[15px] font-semibold text-ink">{dict.chatUnit}</div>
              <div className="mt-4 rounded-2xl bg-soft p-4">
                <div className="text-[12px] text-muted">Total</div>
                <div className="text-3xl font-extrabold tracking-tight text-ink">
                  {dict.chatAmount}
                </div>
              </div>
              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 text-[15px] font-semibold text-white">
                <WhatsApp className="h-[18px] w-[18px]" />
                {dict.chatButton}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
