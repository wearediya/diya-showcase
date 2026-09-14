import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import type { Dict } from "@/app/[lang]/dictionaries";

export function Footer({ dict }: { dict: Dict["footer"] }) {
  return (
    <footer className="relative overflow-hidden bg-night text-night-muted">
      <Container className="pt-16">
        <div className="grid gap-10 pb-12 md:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo dark />
            <p className="mt-4 text-[14.5px] leading-6 text-night-muted">
              {dict.tagline}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {dict.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[13px] font-bold uppercase tracking-wider text-white/90">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[14.5px] text-night-muted transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-night-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-night-muted">{dict.copyright}</p>
          <p className="text-[13px] font-medium text-white/70">{dict.madeBy}</p>
        </div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none select-none px-4 text-center font-extrabold leading-[0.8] tracking-tighter text-white/[0.05]"
        style={{ fontSize: "clamp(4rem, 20vw, 15rem)" }}
      >
        diya
      </div>
    </footer>
  );
}
