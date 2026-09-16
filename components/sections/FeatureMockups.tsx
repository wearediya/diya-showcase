import type { ReactNode } from "react";

import {
  Building,
  User,
  Wallet,
  Receipt,
  Coins,
  Calendar,
  WifiOff,
  Lock,
  Cloud,
  Check,
  TrendingUp,
  Stairs,
  DoorRooms,
  Bed,
} from "@/components/icons";

/* ------------------------------------------------------------------ *
 * Visuels « façon app Diya » — reproduisent les écrans réels de
 * l'application (cartes blanches, vert #099664, accents menthe).
 * Un visuel par étape du sticky scroll.
 * ------------------------------------------------------------------ */

const CURRENCY = "FCFA";

/** Cadre commun : carte blanche façon écran d'app. */
function Screen({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-[350px] max-w-full rounded-[26px] border border-line bg-white p-4 shadow-[0_30px_80px_-40px_rgba(11,21,18,0.5)] ${className}`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-mint/60 text-brand">
        {icon}
      </span>
      <span className="text-[14px] font-extrabold text-ink">{children}</span>
    </div>
  );
}

/* 1. Patrimoine — liste des biens */
export function BiensMock() {
  const rows = [
    { name: "Résidence Akwaba", units: "8 logements", occ: "92%" },
    { name: "Villa Adidogomé", units: "3 logements", occ: "100%" },
    { name: "Immeuble Kodjoviakopé", units: "12 logements", occ: "83%" },
  ];
  return (
    <Screen>
      <Eyebrow icon={<Building className="h-[18px] w-[18px]" />}>Mes biens</Eyebrow>
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-3 rounded-2xl bg-soft/70 p-2.5"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand shadow-sm">
              <Building className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13.5px] font-bold text-ink">
                {r.name}
              </div>
              <div className="text-[11.5px] text-muted">{r.units}</div>
            </div>
            <span className="shrink-0 rounded-full bg-mint/70 px-2 py-0.5 text-[11px] font-bold text-brand-ink">
              {r.occ}
            </span>
          </div>
        ))}
      </div>
    </Screen>
  );
}

/* 2. Locataires & baux — fiche locataire */
export function TenantMock() {
  const specs = [
    { icon: <Stairs className="h-4 w-4" />, v: "0", l: "Étage" },
    { icon: <DoorRooms className="h-4 w-4" />, v: "2", l: "Pièces" },
    { icon: <Bed className="h-4 w-4" />, v: "1", l: "Chambre" },
  ];
  return (
    <Screen>
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-[15px] font-extrabold text-white">
          AK
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[15px] font-extrabold text-ink">Ama Koffi</div>
          <div className="text-[12px] text-muted">Appartement B2</div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-mint/70 px-2.5 py-1 text-[11px] font-bold text-brand-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Bail actif
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {specs.map((s) => (
          <div
            key={s.l}
            className="flex flex-col items-center rounded-xl bg-soft/80 px-1 py-2 text-center text-brand"
          >
            {s.icon}
            <span className="mt-1 text-[13px] font-extrabold leading-none text-ink">
              {s.v}
            </span>
            <span className="mt-0.5 text-[9px] text-muted">{s.l}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between rounded-2xl bg-soft/70 p-3">
        <div className="flex items-center gap-2 text-[12.5px] text-muted">
          <Calendar className="h-4 w-4 text-brand" /> Loyer mensuel
        </div>
        <div className="text-[14px] font-extrabold text-ink">
          150 000 <span className="text-[11px] font-bold text-muted">{CURRENCY}</span>
        </div>
      </div>
    </Screen>
  );
}

/* 3. Loyers encaissés — encaissement + rappel */
export function PaymentMock() {
  const methods = ["Espèces", "Mobile money", "Virement", "Carte"];
  return (
    <Screen>
      <Eyebrow icon={<Wallet className="h-[18px] w-[18px]" />}>
        Encaisser un loyer
      </Eyebrow>

      <div className="rounded-2xl bg-brand-ink p-4 text-white">
        <div className="text-[11.5px] text-mint">Montant reçu</div>
        <div className="mt-0.5 text-[26px] font-extrabold leading-none">
          150 000 <span className="text-[13px] font-bold text-mint">{CURRENCY}</span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {methods.map((m, i) => (
          <div
            key={m}
            className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-[12.5px] font-semibold ${
              i === 0
                ? "border-brand bg-mint/50 text-brand-ink"
                : "border-line bg-soft/60 text-muted"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${i === 0 ? "bg-brand" : "bg-line"}`}
            />
            {m}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl bg-warn-bg px-3 py-2.5 text-[12px] font-semibold text-warn">
        <Calendar className="h-4 w-4" /> 2 loyers en retard à relancer
      </div>
    </Screen>
  );
}

/* 4. Quittances signées + QR */
export function ReceiptMock() {
  return (
    <Screen>
      <div className="flex items-center justify-between">
        <Eyebrow icon={<Receipt className="h-[18px] w-[18px]" />}>Quittance</Eyebrow>
        <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-mint/70 px-2.5 py-1 text-[11px] font-bold text-brand-ink">
          <Check className="h-3 w-3" /> Payé
        </span>
      </div>

      <div className="space-y-2 text-[12.5px]">
        {[
          ["Locataire", "Ama Koffi"],
          ["Période", "Septembre 2026"],
          ["Logement", "Appartement B2"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between">
            <span className="text-muted">{k}</span>
            <span className="font-semibold text-ink">{v}</span>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-line pt-2">
          <span className="font-bold text-ink">Total</span>
          <span className="text-[15px] font-extrabold text-brand">
            150 000 {CURRENCY}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3 rounded-2xl bg-soft/70 p-3">
        <FauxQr />
        <div>
          <div className="flex items-center gap-1 text-[12.5px] font-bold text-ink">
            <Lock className="h-3.5 w-3.5 text-brand" /> Quittance signée
          </div>
          <div className="text-[11px] leading-4 text-muted">
            Vérifiable par QR code — infalsifiable.
          </div>
        </div>
      </div>
    </Screen>
  );
}

function FauxQr() {
  // Motif type QR (décoratif, non fonctionnel).
  const cells = [
    1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0,
    1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1,
  ];
  return (
    <div className="grid grid-cols-7 gap-[2px] rounded-lg bg-white p-1.5 shadow-sm">
      {Array.from({ length: 49 }).map((_, i) => (
        <span
          key={i}
          className={`h-[5px] w-[5px] rounded-[1px] ${
            cells[i] ? "bg-brand-ink" : "bg-transparent"
          }`}
        />
      ))}
    </div>
  );
}

/* 5. Dépenses & trésorerie */
export function ExpensesMock() {
  const rows = [
    { label: "Plomberie — Villa", amount: "35 000" },
    { label: "Électricité", amount: "18 500" },
    { label: "Entretien commun", amount: "12 000" },
  ];
  return (
    <Screen>
      <Eyebrow icon={<Coins className="h-[18px] w-[18px]" />}>
        Dépenses & trésorerie
      </Eyebrow>

      <div className="mb-3 flex items-center justify-between rounded-2xl bg-soft/70 p-3">
        <span className="text-[12.5px] text-muted">Solde de caisse</span>
        <span className="text-[16px] font-extrabold text-brand">
          1 184 500 {CURRENCY}
        </span>
      </div>

      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-mint/50 text-brand">
              <Wallet className="h-[18px] w-[18px]" />
            </span>
            <span className="flex-1 truncate text-[13px] font-semibold text-ink">
              {r.label}
            </span>
            <span className="shrink-0 text-[13px] font-bold text-ink">
              −{r.amount}
            </span>
          </div>
        ))}
      </div>
    </Screen>
  );
}

/* 6. Pilotage — statistiques + garanties */
export function StatsMock() {
  const bars = [46, 62, 54, 78, 66, 90];
  return (
    <Screen>
      <Eyebrow icon={<TrendingUp className="h-[18px] w-[18px]" />}>
        Pilotage
      </Eyebrow>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-soft/70 p-3">
          <div className="flex items-center gap-1.5 text-[11px] text-muted">
            <Wallet className="h-3.5 w-3.5 text-brand" /> CA du mois
          </div>
          <div className="mt-1 text-[17px] font-extrabold leading-none text-ink">
            1,25 M
          </div>
          <div className="text-[10px] text-muted">{CURRENCY}</div>
        </div>
        <div className="rounded-2xl bg-soft/70 p-3">
          <div className="flex items-center gap-1.5 text-[11px] text-muted">
            <Building className="h-3.5 w-3.5 text-brand" /> Occupation
          </div>
          <div className="mt-1 text-[17px] font-extrabold leading-none text-ink">
            92%
          </div>
          <div className="text-[10px] text-muted">37 / 40 logements</div>
        </div>
      </div>

      <div className="mt-2 flex h-16 items-end gap-1.5 rounded-2xl bg-soft/70 p-3">
        {bars.map((b, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-[3px]"
            style={{
              height: `${b}%`,
              background: i === bars.length - 1 ? "#099664" : "#a9edcb",
            }}
          />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {[
          { icon: <WifiOff className="h-3.5 w-3.5" />, l: "Hors-ligne" },
          { icon: <Lock className="h-3.5 w-3.5" />, l: "Chiffré" },
          { icon: <Cloud className="h-3.5 w-3.5" />, l: "Sauvegarde Drive" },
        ].map((b) => (
          <span
            key={b.l}
            className="inline-flex items-center gap-1 rounded-full bg-mint/50 px-2.5 py-1 text-[11px] font-bold text-brand-ink"
          >
            {b.icon}
            {b.l}
          </span>
        ))}
      </div>
    </Screen>
  );
}

/** Ordre des visuels, aligné sur les 6 étapes. */
export const FEATURE_MOCKS = [
  BiensMock,
  TenantMock,
  PaymentMock,
  ReceiptMock,
  ExpensesMock,
  StatsMock,
];
