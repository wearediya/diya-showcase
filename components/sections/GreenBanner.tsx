import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import {
  Download,
  Calendar,
  Check,
  Receipt,
  Wallet,
  TrendingUp,
} from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

export function GreenBanner({ dict }: { dict: Dict["banner"] }) {
  return (
    <section className="bg-gradient-to-b from-mint-400 to-mint py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-[40px] sm:leading-[1.1]">
            {dict.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-7 text-brand-ink/75">
            {dict.subtitle}
          </p>
          <div className="mt-7 flex justify-center">
            <Button href="#download" size="lg" variant="dark">
              <Download className="h-5 w-5" />
              {dict.cta}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-3xl justify-center">
          <Tag className="animate-floaty absolute left-0 top-8 hidden sm:flex" icon={<Check className="h-4 w-4" />}>
            {dict.tag1}
          </Tag>
          <Tag className="animate-floaty-slow absolute right-0 top-24 hidden sm:flex" icon={<Receipt className="h-4 w-4" />}>
            {dict.tag2}
          </Tag>
          <Tag className="animate-floaty absolute bottom-6 left-8 hidden sm:flex" icon={<Wallet className="h-4 w-4" />}>
            {dict.tag3}
          </Tag>

          <PhoneMockup width={280} className="animate-floaty-slow relative z-10">
            <BookingScreen dict={dict} />
          </PhoneMockup>
        </div>
      </Container>
    </section>
  );
}

function Tag({
  children,
  icon,
  className = "",
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`z-20 items-center gap-2 rounded-full border border-white/70 bg-white/95 px-4 py-2 text-[13px] font-semibold text-ink shadow-lg ${className}`}
    >
      <span className="text-brand">{icon}</span>
      {children}
    </div>
  );
}

function BookingScreen({ dict }: { dict: Dict["banner"] }) {
  return (
    <div className="px-4 pb-5 pt-9">
      <div className="flex items-center justify-between">
        <div className="text-[15px] font-bold text-ink">Réservation</div>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-mint/70 text-brand">
          <Calendar className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-4 rounded-2xl border border-line p-4">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold text-ink">Chambre 04</span>
          <span className="rounded-full bg-mint/70 px-2 py-0.5 text-[11px] font-bold text-brand-ink">
            3 nuits
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-[12px] text-muted">
          <span className="rounded-lg bg-soft px-2 py-1">12 août</span>
          <span>→</span>
          <span className="rounded-lg bg-soft px-2 py-1">15 août</span>
        </div>
      </div>

      <div className="mt-3 rounded-2xl bg-gradient-to-br from-brand to-brand-700 p-4 text-white">
        <div className="text-[12px] text-white/80">Total</div>
        <div className="text-[22px] font-extrabold tracking-tight">75 000 FCFA</div>
        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-semibold">
          <TrendingUp className="h-3.5 w-3.5" />
          Encaissé
        </div>
      </div>

      <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3 text-[14px] font-semibold text-white">
        <Check className="h-4 w-4" />
        Confirmer la réservation
      </button>
    </div>
  );
}
