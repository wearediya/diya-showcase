import type { ReactNode } from "react";

/**
 * Cadre de téléphone : liseré extérieur clair + contour noir épais + écran
 * blanc, avec poinçon caméra centré (façon Pixel). `children` = contenu de
 * l'écran.
 */
export function PhoneMockup({
  children,
  className = "",
  width = 280,
}: {
  children: ReactNode;
  className?: string;
  width?: number;
}) {
  return (
    <div className={`relative ${className}`} style={{ width }}>
      {/* Liseré extérieur (bord clair du téléphone) */}
      <div className="rounded-[2.9rem] bg-[#e7e8d7] p-[3px] shadow-[0_30px_70px_-24px_rgba(11,21,18,0.5)]">
        {/* Contour noir (bezel) */}
        <div className="rounded-[2.75rem] bg-[#0a0a0a] p-2.5">
          {/* Écran */}
          <div className="relative overflow-hidden rounded-[2.15rem] bg-white">
            {/* Poinçon caméra */}
            <div className="absolute left-1/2 top-3 z-20 grid h-3.5 w-3.5 -translate-x-1/2 place-items-center rounded-full bg-black">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16283a]" />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
