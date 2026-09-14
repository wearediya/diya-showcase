import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Download, ArrowRight, TrendingUp, Calendar } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

export function Hero({ dict }: { dict: Dict["hero"] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="glow-mint pointer-events-none absolute inset-x-0 top-0 h-[560px]" />
      <Container className="relative pt-14 pb-4 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[56px]">
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

        {/* Visuel : main tenant le téléphone + cartes flottantes (statiques) */}
        <div className="relative mx-auto mt-10 flex max-w-3xl justify-center">
          <div className="relative w-[440px] max-w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-phone.png"
              alt="Diya sur mobile"
              className="pointer-events-none relative z-10 mx-auto h-auto w-full select-none"
            />

            {/* Carte flottante gauche (revenu) */}
            <div className="absolute left-[-6%] top-[24%] z-20 hidden w-[208px] rounded-2xl border border-line bg-white p-4 shadow-xl sm:block">
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

            {/* Carte flottante droite (réservation) */}
            <div className="absolute right-[-6%] bottom-[22%] z-20 hidden w-[206px] rounded-2xl border border-line bg-white p-4 shadow-xl sm:block">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
