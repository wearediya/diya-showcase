import { Container } from "@/components/ui/Container";
import { Wallet, Receipt, Phone, Building } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

const cardIcons = [Wallet, Receipt, Phone, Building];

export function LocalReality({ dict }: { dict: Dict["local"] }) {
  return (
    <section className="bg-soft py-16 sm:py-20">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.cards.map((card, i) => {
            const Icon = cardIcons[i] ?? Building;
            return (
              <div
                key={card.title}
                className="group rounded-3xl border border-line bg-card p-6 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(11,21,18,0.4)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint/60 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[16.5px] font-bold text-ink">{card.title}</h3>
                <p className="mt-1.5 text-[14px] leading-6 text-muted">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
