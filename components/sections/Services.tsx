import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsApp, Cloud, Shield, Chart } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

const cardIcons = [WhatsApp, Cloud, Shield, Chart];

export function Services({ dict }: { dict: Dict["services"] }) {
  return (
    <section className="bg-soft py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Support"
          title={dict.title}
          subtitle={dict.subtitle}
        />

        <div className="relative mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-x-48 lg:gap-y-14">
          {/* Centre : logo Diya + ondes concentriques (desktop) */}
          <div className="pointer-events-none absolute inset-0 z-0 hidden place-items-center lg:grid">
            <Hub />
          </div>

          {dict.cards.map((card, i) => {
            const Icon = cardIcons[i] ?? Shield;
            return (
              <div
                key={card.title}
                className="relative z-10 rounded-3xl border border-line bg-card p-6 shadow-[0_20px_50px_-40px_rgba(11,21,18,0.5)] sm:p-7"
              >
                <Icon className="h-9 w-9 text-brand" />
                <h3 className="mt-4 text-xl font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-muted">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* Logo central + anneaux fins (statiques + ondes qui se propagent). */
function Hub() {
  const ring = (size: number, opacity: number) => (
    <span
      className="absolute rounded-full border border-brand"
      style={{ width: size, height: size, opacity }}
    />
  );
  const wave = (delay: string) => (
    <span
      className="animate-ripple absolute rounded-full border border-brand"
      style={{ width: 190, height: 190, animationDelay: delay, opacity: 0 }}
    />
  );
  return (
    <div className="relative grid place-items-center">
      {ring(190, 0.22)}
      {ring(300, 0.13)}
      {ring(430, 0.08)}
      {wave("0s")}
      {wave("1.2s")}
      {wave("2.4s")}
      <span className="relative grid h-24 w-24 place-items-center rounded-full bg-brand shadow-[0_18px_40px_-14px_rgba(9,150,100,0.7)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-icon-white.svg" alt="Diya" className="h-11 w-auto" />
      </span>
    </div>
  );
}
