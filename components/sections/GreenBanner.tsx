import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { UnitSpecCard, type UnitSpec } from "@/components/ui/UnitSpecCard";
import { Building, Stairs, DoorRooms, Bed, Bath, Sofa, Wifi } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

export function GreenBanner({
  dict,
  units,
}: {
  dict: Dict["banner"];
  units: Dict["units"];
}) {
  const specs: UnitSpec[] = [
    { icon: <Stairs className="h-4 w-4" />, value: "0", label: units.floor },
    { icon: <DoorRooms className="h-4 w-4" />, value: "2", label: units.rooms },
    { icon: <Bed className="h-4 w-4" />, value: "1", label: units.beds },
    { icon: <Bath className="h-4 w-4" />, value: "1", label: units.baths },
    { icon: <Sofa className="h-4 w-4" />, value: units.no, label: units.furnished },
    { icon: <Wifi className="h-4 w-4" />, value: units.yes, label: units.wifi },
  ];

  return (
    <section className="theme-light bg-gradient-to-b from-mint-400 to-mint py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-[40px] sm:leading-[1.1]">
            {dict.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-7 text-brand-ink/75">
            {dict.subtitle}
          </p>
          <div className="mt-7 flex justify-center">
            <PillButton href="#download">{dict.cta}</PillButton>
          </div>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-3xl justify-center">
          {/* Cartes = vrais bouts de l'app (masquées sur mobile). */}
          <PropertyListCard dict={dict} className="absolute left-0 top-4 z-20 hidden sm:block" />
          <CreateUnitCard dict={dict} className="absolute right-0 top-2 z-20 hidden sm:block" />
          <UnitSpecCard
            name="Boutique B3"
            status={units.vacant}
            specs={specs}
            width={242}
            className="absolute bottom-0 left-0 z-20 hidden lg:block"
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/all-in-diya.png"
            alt={dict.title}
            className="relative z-10 h-auto w-[270px] max-w-full select-none"
          />
        </div>
      </Container>
    </section>
  );
}

/* Liste de biens (façon page Biens de l'app). */
function PropertyListCard({ dict, className }: { dict: Dict["banner"]; className?: string }) {
  const rows = [
    { name: "Résidence Les Palmiers", city: "Lomé", units: 8 },
    { name: "Villa Adidogomé", city: "Lomé", units: 3 },
    { name: "Immeuble Kodjoviakopé", city: "Lomé", units: 12 },
  ];
  return (
    <div className={`w-[236px] rounded-2xl border border-line bg-white p-3.5 shadow-xl ${className ?? ""}`}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[12.5px] font-bold text-ink">{dict.listTitle}</span>
        <span className="text-[11px] font-semibold text-brand">3</span>
      </div>
      <div className="space-y-1">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center gap-2.5 rounded-xl bg-soft/70 px-2 py-1.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-mint/70 text-brand">
              <Building className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[12px] font-semibold text-ink">{r.name}</div>
              <div className="text-[10.5px] text-muted">
                {r.city} · {r.units} {dict.unitsWord}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Création d'un logement (formulaire réel de l'app). */
function CreateUnitCard({ dict, className }: { dict: Dict["banner"]; className?: string }) {
  return (
    <div className={`w-[214px] rounded-2xl border border-line bg-white p-4 shadow-xl ${className ?? ""}`}>
      <div className="mb-3 text-[12.5px] font-bold text-ink">{dict.createTitle}</div>
      <Field label={dict.fieldNumber} value="Apt 102" />
      <Field label={dict.fieldType} value={dict.typeExample} select className="mt-2.5" />
      <Field label={dict.fieldRent} value="150 000 FCFA" className="mt-2.5" />
      <button className="mt-4 w-full rounded-full bg-brand py-2 text-[12.5px] font-semibold text-white">
        {dict.saveLabel}
      </button>
    </div>
  );
}

function Field({
  label,
  value,
  className,
  select = false,
}: {
  label: string;
  value: string;
  className?: string;
  select?: boolean;
}) {
  return (
    <div className={className}>
      <div className="mb-1 text-[10px] font-medium text-muted">{label}</div>
      <div className="flex items-center justify-between gap-1 rounded-lg border border-line px-2.5 py-1.5 text-[12px] font-semibold text-ink">
        <span className="truncate">{value}</span>
        {select && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-muted">
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
      </div>
    </div>
  );
}
