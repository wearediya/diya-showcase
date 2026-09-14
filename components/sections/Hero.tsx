import { Container } from "@/components/ui/Container";
import { ArrowRight, TrendingUp, Calendar } from "@/components/icons";
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
            {/* Principal : pilule sombre + badge rond flèche (style maquette) */}
            <a
              href="#download"
              className="group inline-flex h-[58px] w-full items-center justify-between gap-3 rounded-full bg-ink pl-7 pr-2 font-semibold text-white transition-colors hover:bg-ink-2 sm:w-auto"
            >
              <span className="text-[15px]">{dict.primary}</span>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-[18px] w-[18px]" />
              </span>
            </a>
            {/* Secondaire : pilule menthe, texte foncé */}
            <a
              href="#features"
              className="inline-flex h-[58px] w-full items-center justify-center rounded-full bg-mint-400 px-8 text-[15px] font-semibold text-ink transition-colors hover:bg-mint-strong sm:w-auto"
            >
              {dict.secondary}
            </a>
          </div>
        </div>

        {/* Visuel : main tenant le téléphone (image) + app incrustée + cartes flottantes */}
        <div className="relative mx-auto mt-10 flex max-w-3xl justify-center">
          <div className="relative w-[440px] max-w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-phone.png"
              alt="Diya sur mobile"
              className="pointer-events-none relative z-10 mx-auto h-auto w-full select-none"
            />

            {/* Écran de l'app incrusté dans l'écran du téléphone */}
            <div
              className="@container absolute z-[11] overflow-hidden bg-white"
              style={{
                left: "24%",
                top: "8.5%",
                width: "36%",
                height: "50%",
                borderRadius: "3.5%",
              }}
            >
              <PhoneScreen dict={dict} />
            </div>

            {/* Carte flottante haut-gauche (revenu) */}
            <div className="absolute left-[-9%] top-[2%] z-20 hidden w-[190px] rounded-2xl border border-line bg-white p-3.5 shadow-xl sm:block">
              <div className="flex items-center justify-between">
                <span className="text-[12.5px] font-medium text-muted">{dict.revenueLabel}</span>
                <TrendingUp className="h-4 w-4 text-brand" />
              </div>
              <div className="mt-1 text-lg font-extrabold tracking-tight text-ink">
                {dict.revenueValue}
              </div>
              <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-mint/60 px-2 py-0.5 text-[11px] font-semibold text-brand-ink">
                {dict.revenueTrend}
              </div>
            </div>

            {/* Carte flottante bas-droite (réservation) */}
            <div className="absolute right-[-9%] bottom-[18%] z-20 hidden w-[190px] rounded-2xl border border-line bg-white p-3.5 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint/70 text-brand">
                  <Calendar className="h-4.5 w-4.5" />
                </span>
                <div>
                  <div className="text-[13px] font-semibold text-ink">{dict.bookingLabel}</div>
                  <div className="text-[11px] text-muted">{dict.bookingValue}</div>
                </div>
              </div>
              <div className="mt-2.5 h-1.5 w-full rounded-full bg-soft">
                <div className="h-1.5 w-2/3 rounded-full bg-brand" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Écran d'app compact, dimensionné en unités de conteneur (cqw) pour épouser
   l'écran du téléphone quelle que soit la taille rendue. */
function PhoneScreen({ dict }: { dict: Dict["hero"] }) {
  return (
    <div className="flex h-full flex-col bg-white" style={{ padding: "6cqw 5cqw" }}>
      {/* Barre supérieure */}
      <div className="flex items-center justify-between" style={{ marginTop: "3cqw" }}>
        <div>
          <div className="text-muted" style={{ fontSize: "3.4cqw" }}>
            {dict.dashboardTitle}
          </div>
          <div className="font-extrabold text-ink" style={{ fontSize: "5.4cqw" }}>
            Diya
          </div>
        </div>
        <div
          className="rounded-full bg-gradient-to-br from-mint-400 to-brand"
          style={{ width: "8cqw", height: "8cqw" }}
        />
      </div>

      {/* Carte revenu */}
      <div
        className="bg-gradient-to-br from-brand to-brand-700 text-white"
        style={{ marginTop: "5cqw", borderRadius: "4.5cqw", padding: "5cqw" }}
      >
        <div className="text-white/85" style={{ fontSize: "3.4cqw" }}>
          {dict.revenueLabel}
        </div>
        <div className="font-extrabold tracking-tight" style={{ fontSize: "8cqw", marginTop: "1cqw" }}>
          {dict.revenueValue}
        </div>
        <div
          className="inline-flex items-center gap-1 rounded-full bg-white/20 font-semibold"
          style={{ fontSize: "3cqw", padding: "1cqw 2.5cqw", marginTop: "2.5cqw" }}
        >
          {dict.revenueTrend}
        </div>
      </div>

      {/* Chips stats */}
      <div className="grid grid-cols-2" style={{ gap: "3cqw", marginTop: "3.5cqw" }}>
        <StatChip value={dict.receiptsValue} label={dict.receiptsLabel} />
        <StatChip value="92%" label="Occupation" bars />
      </div>

      {/* Ligne de paiement */}
      <div
        className="flex items-center border border-line"
        style={{ borderRadius: "3.5cqw", padding: "3cqw", gap: "3cqw", marginTop: "3cqw" }}
      >
        <span
          className="grid place-items-center rounded-full bg-mint/70 font-bold text-brand-ink"
          style={{ width: "9cqw", height: "9cqw", fontSize: "3.4cqw" }}
        >
          KA
        </span>
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-ink" style={{ fontSize: "3.6cqw" }}>
            Appartement B2
          </div>
          <div className="text-muted" style={{ fontSize: "3cqw" }}>
            {dict.receiptsLabel}
          </div>
        </div>
        <div className="font-bold text-brand" style={{ fontSize: "3.8cqw" }}>
          +150k
        </div>
      </div>
    </div>
  );
}

function StatChip({
  value,
  label,
  bars = false,
}: {
  value: string;
  label: string;
  bars?: boolean;
}) {
  return (
    <div
      className="border border-line"
      style={{ borderRadius: "3.5cqw", padding: "3.5cqw" }}
    >
      {bars ? (
        <div className="flex items-end" style={{ gap: "1cqw", height: "5cqw" }}>
          <span className="rounded-sm bg-mint-400" style={{ width: "1.6cqw", height: "3cqw" }} />
          <span className="rounded-sm bg-brand" style={{ width: "1.6cqw", height: "5cqw" }} />
          <span className="rounded-sm bg-mint-400" style={{ width: "1.6cqw", height: "3.6cqw" }} />
          <span className="rounded-sm bg-brand" style={{ width: "1.6cqw", height: "6cqw" }} />
        </div>
      ) : (
        <div className="rounded-full bg-mint/70" style={{ width: "6cqw", height: "6cqw" }} />
      )}
      <div className="font-extrabold text-ink" style={{ fontSize: "5cqw", marginTop: "2cqw" }}>
        {value}
      </div>
      <div className="text-muted" style={{ fontSize: "3cqw", lineHeight: 1.2 }}>
        {label}
      </div>
    </div>
  );
}
