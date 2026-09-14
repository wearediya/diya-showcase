import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

export function Pricing({ dict }: { dict: Dict["pricing"] }) {
  return (
    <section id="pricing" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Tarifs"
          title={dict.title}
          subtitle={dict.subtitle}
        />
        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {dict.tiers.map((tier) => {
            const featured = tier.featured;
            const showPerMonth = /\d/.test(tier.price);
            return (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-7 ${
                  featured
                    ? "bg-ink text-white shadow-[0_30px_70px_-30px_rgba(11,21,18,0.7)] lg:-mt-4 lg:pb-10"
                    : "border border-line bg-white text-ink"
                }`}
              >
                {featured && (
                  <span className="absolute right-6 top-7 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {dict.popular}
                  </span>
                )}
                <div
                  className={`text-[14px] font-semibold ${
                    featured ? "text-mint-400" : "text-brand"
                  }`}
                >
                  {tier.name}
                </div>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                  {showPerMonth && (
                    <span className={featured ? "text-white/60" : "text-muted"}>
                      {dict.perMonth}
                    </span>
                  )}
                </div>
                <div className={`mt-1 text-[13.5px] ${featured ? "text-white/60" : "text-muted"}`}>
                  {tier.note}
                </div>

                <a
                  href="#download"
                  className={`mt-6 flex h-12 w-full items-center justify-center rounded-full text-[15px] font-semibold transition-colors ${
                    featured
                      ? "bg-brand text-white hover:bg-brand-600"
                      : "border border-line bg-white text-ink hover:bg-soft"
                  }`}
                >
                  {tier.cta}
                </a>

                <ul className="mt-7 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14.5px]">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          featured ? "bg-brand/25 text-mint-400" : "bg-mint/70 text-brand"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className={featured ? "text-white/85" : "text-ink/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
