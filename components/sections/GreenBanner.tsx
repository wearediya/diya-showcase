import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { Check, Receipt, Wallet } from "@/components/icons";
import type { Dict } from "@/app/[lang]/dictionaries";

export function GreenBanner({ dict }: { dict: Dict["banner"] }) {
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
          <Tag className="animate-floaty absolute left-0 top-8 hidden sm:flex" icon={<Check className="h-4 w-4" />}>
            {dict.tag1}
          </Tag>
          <Tag className="animate-floaty-slow absolute right-0 top-24 hidden sm:flex" icon={<Receipt className="h-4 w-4" />}>
            {dict.tag2}
          </Tag>
          <Tag className="animate-floaty absolute bottom-6 left-8 hidden sm:flex" icon={<Wallet className="h-4 w-4" />}>
            {dict.tag3}
          </Tag>

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

function Tag({
  children,
  icon,
  className = "",
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`z-20 items-center gap-2 rounded-full border border-white/70 bg-white/95 px-4 py-2 text-[13px] font-semibold text-ink shadow-lg ${className}`}
    >
      <span className="text-brand">{icon}</span>
      {children}
    </div>
  );
}
