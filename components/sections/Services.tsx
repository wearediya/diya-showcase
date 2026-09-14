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
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {dict.cards.map((card, i) => {
            const Icon = cardIcons[i] ?? Shield;
            return (
              <div
                key={card.title}
                className="flex items-start gap-5 rounded-3xl border border-line bg-white p-6 sm:p-7"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-mint/60 text-brand">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-6 text-muted">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
