import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WifiOff, Shield, Cloud } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

const cardIcons = [WifiOff, Shield, Cloud];
const gradients = [
  "from-brand to-brand-700",
  "from-[#16241e] to-[#0a1310]",
  "from-mint-strong to-brand-600",
];

export function Proof({ dict }: { dict: Dict["proof"] }) {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <Container>
        <SectionHeading title={dict.title} subtitle={dict.subtitle} />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {dict.cards.map((card, i) => {
            const Icon = cardIcons[i] ?? Shield;
            return (
              <div
                key={card.caption}
                className={`group relative flex h-72 flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br ${gradients[i]} p-6 text-white`}
              >
                <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.15]" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <Icon className="absolute -right-6 -top-6 h-40 w-40 opacity-[0.08]" />
                <p className="relative text-[19px] font-bold leading-snug">
                  {card.caption}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
