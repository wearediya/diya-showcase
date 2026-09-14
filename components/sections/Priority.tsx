import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dict } from "@/app/[lang]/dictionaries";

export function Priority({ dict }: { dict: Dict["priority"] }) {
  const charts = [<Donut key="0" />, <Bars key="1" />, <Area key="2" />];
  return (
    <section id="features" className="scroll-mt-20 bg-bg py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Diya"
          title={dict.title}
          subtitle={dict.subtitle}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {dict.cards.map((card, i) => (
            <div
              key={card.title}
              className="rounded-3xl border border-line bg-card p-6 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(11,21,18,0.4)]"
            >
              <div className="flex h-28 items-center justify-center rounded-2xl bg-soft/70">
                {charts[i]}
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{card.title}</h3>
              <p className="mt-1.5 text-[14.5px] leading-6 text-muted">{card.desc}</p>
              <div className="mt-4 flex items-baseline gap-1.5 border-t border-line pt-4">
                <span className="text-2xl font-extrabold tracking-tight text-brand">
                  {card.stat}
                </span>
                <span className="text-[13px] text-muted">{card.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Donut() {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <svg width="96" height="96" viewBox="0 0 96 96">
      <circle cx="48" cy="48" r={r} fill="none" stroke="var(--color-line)" strokeWidth="12" />
      <circle
        cx="48"
        cy="48"
        r={r}
        fill="none"
        stroke="#099664"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - 0.98)}
        transform="rotate(-90 48 48)"
      />
      <text
        x="48"
        y="53"
        textAnchor="middle"
        className="fill-ink"
        fontSize="18"
        fontWeight="800"
      >
        98%
      </text>
    </svg>
  );
}

function Bars() {
  const vals = [40, 62, 48, 78, 58, 88, 70];
  return (
    <svg width="150" height="80" viewBox="0 0 150 80">
      {vals.map((v, i) => (
        <rect
          key={i}
          x={i * 21 + 6}
          y={80 - v * 0.8}
          width="12"
          height={v * 0.8}
          rx="4"
          fill={i % 2 ? "#099664" : "#a9edcb"}
        />
      ))}
    </svg>
  );
}

function Area() {
  return (
    <svg width="150" height="80" viewBox="0 0 150 80">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#099664" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#099664" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M4 58 L28 46 L52 52 L76 30 L100 38 L124 20 L146 26 L146 76 L4 76 Z"
        fill="url(#areaGrad)"
      />
      <path
        d="M4 58 L28 46 L52 52 L76 30 L100 38 L124 20 L146 26"
        fill="none"
        stroke="#099664"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
