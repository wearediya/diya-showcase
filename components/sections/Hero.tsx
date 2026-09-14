import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Download, ArrowRight, TrendingUp, Receipt, Calendar } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

export function Hero({ dict }: { dict: Dict["hero"] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="glow-mint pointer-events-none absolute inset-x-0 top-0 h-[560px]" />
      <Container className="relative pt-14 pb-4 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-mint-200 bg-mint/50 px-3.5 py-1.5 text-[13px] font-semibold text-brand-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {dict.badge}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[56px]">
            {dict.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[17px] leading-7 text-muted">
            {dict.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#download" size="lg" variant="dark" className="w-full sm:w-auto">
              <Download className="h-5 w-5" />
              {dict.primary}
            </Button>
            <Button href="#features" size="lg" variant="outline" className="w-full sm:w-auto">
              {dict.secondary}
              <ArrowRight className="h-[18px] w-[18px]" />
            </Button>
          </div>
        </div>

        {/* Aperçu de l'app + cartes flottantes */}
        <div className="relative mx-auto mt-14 flex max-w-4xl justify-center pb-10">
          {/* Carte flottante gauche */}
          <div className="animate-floaty absolute left-0 top-10 z-20 hidden w-[212px] rounded-2xl border border-line bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-muted">{dict.revenueLabel}</span>
              <TrendingUp className="h-4 w-4 text-brand" />
            </div>
            <div className="mt-1 text-xl font-extrabold tracking-tight text-ink">
              {dict.revenueValue}
            </div>
            <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-mint/60 px-2 py-0.5 text-[11px] font-semibold text-brand-ink">
              {dict.revenueTrend}
            </div>
          </div>

          {/* Carte flottante droite */}
          <div className="animate-floaty-slow absolute right-0 bottom-16 z-20 hidden w-[210px] rounded-2xl border border-line bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint/70 text-brand">
                <Calendar className="h-4.5 w-4.5" />
              </span>
              <div>
                <div className="text-[13px] font-semibold text-ink">{dict.bookingLabel}</div>
                <div className="text-[11px] text-muted">{dict.bookingValue}</div>
              </div>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-soft">
              <div className="h-1.5 w-2/3 rounded-full bg-brand" />
            </div>
          </div>

          <PhoneMockup width={288} className="animate-floaty-slow relative z-10">
            <HeroScreen dict={dict} />
          </PhoneMockup>
        </div>
      </Container>
    </section>
  );
}

function HeroScreen({ dict }: { dict: Dict["hero"] }) {
  return (
    <div className="px-4 pb-5 pt-9">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] text-muted">{dict.dashboardTitle}</div>
          <div className="text-[15px] font-bold text-ink">Diya</div>
        </div>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-mint-400 to-brand" />
      </div>

      {/* Carte revenu */}
      <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand to-brand-700 p-4 text-white">
        <div className="text-[12px] text-white/80">{dict.revenueLabel}</div>
        <div className="mt-1 text-[22px] font-extrabold tracking-tight">{dict.revenueValue}</div>
        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-semibold">
          <TrendingUp className="h-3.5 w-3.5" />
          {dict.revenueTrend}
        </div>
      </div>

      {/* Chips stats */}
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <div className="rounded-xl border border-line p-3">
          <Receipt className="h-4 w-4 text-brand" />
          <div className="mt-1.5 text-[15px] font-bold text-ink">{dict.receiptsValue}</div>
          <div className="text-[11px] text-muted">{dict.receiptsLabel}</div>
        </div>
        <div className="rounded-xl border border-line p-3">
          <div className="flex items-end gap-0.5">
            <span className="h-3 w-1.5 rounded-sm bg-mint-400" />
            <span className="h-5 w-1.5 rounded-sm bg-brand" />
            <span className="h-4 w-1.5 rounded-sm bg-mint-400" />
            <span className="h-6 w-1.5 rounded-sm bg-brand" />
          </div>
          <div className="mt-1.5 text-[15px] font-bold text-ink">92%</div>
          <div className="text-[11px] text-muted">Occupation</div>
        </div>
      </div>

      {/* Ligne de paiement */}
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-line p-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-mint/70 text-[13px] font-bold text-brand-ink">
          KA
        </span>
        <div className="flex-1">
          <div className="text-[13px] font-semibold text-ink">Appartement B2</div>
          <div className="text-[11px] text-muted">{dict.receiptsLabel}</div>
        </div>
        <div className="text-[13px] font-bold text-brand">+150k</div>
      </div>
    </div>
  );
}
