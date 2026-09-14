import type { ReactNode } from "react";

export type UnitSpec = { icon: ReactNode; value: string; label: string };

/** Fiche logement (façon page détail de l'app) : nom + statut + grille de specs. */
export function UnitSpecCard({
  name,
  status,
  specs,
  width = 250,
  className = "",
}: {
  name: string;
  status: string;
  specs: UnitSpec[];
  width?: number;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white p-3.5 shadow-xl ${className}`}
      style={{ width }}
    >
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <span className="truncate text-[13px] font-extrabold text-ink">{name}</span>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-mint/70 px-2 py-0.5 text-[10px] font-bold text-brand-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {status}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {specs.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center rounded-xl bg-soft/80 px-1 py-2 text-center"
          >
            <span className="text-brand">{s.icon}</span>
            <span className="mt-1 text-[13px] font-extrabold leading-none text-ink">{s.value}</span>
            <span className="mt-0.5 text-[8px] leading-tight text-muted">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
