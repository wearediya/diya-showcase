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

export function LocalReality({ dict }: { dict: Dict["local"] }) {
  return (
    <section className="bg-soft py-16 sm:py-20">
      <Container>
        {/* Les 4 cartes forment un seul grand rectangle d'images (sans espace). */}
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl shadow-[0_30px_70px_-40px_rgba(11,21,18,0.5)] lg:grid-cols-4">
          {dict.cards.map((card, i) => (
            <article
              key={card.title}
              className="group relative h-[260px] overflow-hidden sm:h-[300px] lg:h-[380px]"
            >
              <Image
                src={cardImages[i] ?? "/biens.jpg"}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
              {/* Dégradé pour la lisibilité du titre (renforcé au survol). */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-colors duration-300 group-hover:from-black/90" />
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
