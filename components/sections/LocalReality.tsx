import Image from "next/image";

import { Container } from "@/components/ui/Container";
import type { Dict } from "@/app/[lang]/dictionaries";

// Image de fond de chaque carte (même ordre que dict.local.cards).
const cardImages = [
  "/devise.jpg", // Toutes les devises
  "/recus.jpg", // Reçus partageables
  "/espece-mobile-money.jpg", // Espèces & Mobile Money
  "/biens.jpg", // Tous vos biens
];

// Tailles variées (mosaïque bento) : grande, large, deux petites.
const cardSpan = [
  "col-span-2 lg:col-span-2 lg:row-span-2", // 0 — grande
  "col-span-1 lg:col-span-2 lg:row-span-1", // 1 — large
  "col-span-1 lg:col-span-1 lg:row-span-1", // 2 — petite
  "col-span-2 lg:col-span-1 lg:row-span-1", // 3 — petite (large sur mobile)
];

export function LocalReality({ dict }: { dict: Dict["local"] }) {
  return (
    <section className="bg-soft py-16 sm:py-20">
      <Container>
        {/* Mosaïque de tailles variées, espacées, formant un grand rectangle. */}
        <div className="grid grid-cols-2 auto-rows-[172px] gap-3 sm:auto-rows-[200px] lg:grid-cols-4 lg:auto-rows-[212px]">
          {dict.cards.map((card, i) => (
            <article
              key={card.title}
              className={`group relative overflow-hidden rounded-2xl shadow-[0_18px_45px_-28px_rgba(11,21,18,0.5)] ${cardSpan[i] ?? ""}`}
            >
              <Image
                src={cardImages[i] ?? "/biens.jpg"}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
              {/* Dégradé pour la lisibilité du titre (renforcé au survol). */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition-colors duration-300 group-hover:from-black/72" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-[17px] font-bold leading-tight drop-shadow-sm">
                  {card.title}
                </h3>
                {/* Description révélée au survol (hauteur animée via grid-rows). */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <p className="overflow-hidden text-[13.5px] leading-5 text-white/90">
                    {card.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
