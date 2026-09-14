import { Container } from "@/components/ui/Container";
import { Building } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

export function TrustStrip({ dict }: { dict: Dict["trust"] }) {
  return (
    <section className="border-y border-line bg-soft/60">
      <Container className="py-8">
        <p className="text-center text-[13px] font-semibold uppercase tracking-wider text-muted">
          {dict.label}
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {dict.items.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink/45"
            >
              <Building className="h-[18px] w-[18px]" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
