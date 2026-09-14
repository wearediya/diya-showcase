import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials({ dict }: { dict: Dict["testimonials"] }) {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading title={dict.title} subtitle={dict.subtitle} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-line bg-soft/50 p-6"
            >
              <Quote className="h-7 w-7 text-mint-strong" />
              <blockquote className="mt-3 flex-1 text-[14.5px] leading-6 text-ink/80">
                {t.quote}
              </blockquote>
              <div className="mt-4 flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-line pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-mint/70 text-[13px] font-bold text-brand-ink">
                  {initials(t.name)}
                </span>
                <div>
                  <div className="text-[14px] font-bold text-ink">{t.name}</div>
                  <div className="text-[12.5px] text-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
