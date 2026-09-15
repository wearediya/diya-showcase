import Image from "next/image";

import { Container } from "@/components/ui/Container";

/**
 * En-tête de page interne (Documentation, Contact) :
 * photo de fond `hero-min.jpg` + dégradé vert de marque par-dessus,
 * texte en blanc. Badge optionnel (pastille translucide).
 */
export function PageHero({
  badge,
  title,
  subtitle,
}: {
  badge?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Photo de fond */}
      <Image
        src="/hero-min.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dégradé vert par-dessus l'image */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-700/92 to-brand/70" />

      <Container className="relative py-16 sm:py-20">
        <div className="max-w-2xl">
          {badge ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[12.5px] font-semibold text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
              {badge}
            </span>
          ) : null}
          <h1
            className={`text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl ${
              badge ? "mt-4" : ""
            }`}
          >
            {title}
          </h1>
          <p className="mt-4 text-pretty text-[17px] leading-7 text-white/85">
            {subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
