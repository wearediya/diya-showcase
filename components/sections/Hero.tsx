import { Container } from "@/components/ui/Container";
import { ArrowRight, Calendar } from "@/components/icons";
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

        {/* Visuel : main tenant le téléphone (image) + cartes flottantes */}
        <div className="relative mx-auto mt-10 flex max-w-3xl justify-center">
          <div className="relative w-[440px] max-w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-phone.png"
              alt="Diya sur mobile"
              className="pointer-events-none relative z-10 mx-auto h-auto w-full select-none"
            />

            {/* Carte flottante haut-gauche : revenu du mois (design fourni) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/homecard.svg"
              alt={dict.revenueLabel}
              className="absolute left-[-17%] top-[1%] z-20 hidden w-[228px] select-none drop-shadow-[0_18px_35px_rgba(11,21,18,0.35)] sm:block"
            />

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
