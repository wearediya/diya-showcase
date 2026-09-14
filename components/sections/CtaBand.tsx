import { Container } from "@/components/ui/Container";
import { AppStore, TrendingUp } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

export function CtaBand({ dict }: { dict: Dict["cta"] }) {
  return (
    <section id="download" className="scroll-mt-20 bg-bg py-16 sm:py-20">
      <Container>
        <div className="theme-light relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-mint-400 via-mint to-mint-200 p-8 sm:p-12">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-ink sm:text-[38px]">
                {dict.title}
              </h2>
              <p className="mt-4 max-w-md text-[16.5px] leading-7 text-brand-ink/75">
                {dict.subtitle}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <StoreButton store="App Store" label="App Store" />
                <StoreButton store="Google Play" label="Google Play" />
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-xs rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-muted">{dict.statLabel}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-mint/70 text-brand">
                    <TrendingUp className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-2 text-[30px] font-extrabold tracking-tight text-ink">
                  {dict.statValue}
                </div>
                <svg className="mt-4 w-full" height="56" viewBox="0 0 260 56" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="ctaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#099664" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#099664" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 44 L40 38 L80 42 L120 24 L160 30 L200 14 L260 20 L260 56 L0 56 Z" fill="url(#ctaGrad)" />
                  <path d="M0 44 L40 38 L80 42 L120 24 L160 30 L200 14 L260 20" fill="none" stroke="#099664" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StoreButton({ store, label }: { store: string; label: string }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-white transition-colors hover:bg-ink-2"
    >
      <AppStore className="h-6 w-6" />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wide text-white/60">
          {store === "App Store" ? "Download on the" : "Get it on"}
        </span>
        <span className="text-[15px] font-semibold">{label}</span>
      </span>
    </a>
  );
}
