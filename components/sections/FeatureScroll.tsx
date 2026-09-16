"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "@/components/icons";
import { FEATURE_MOCKS } from "./FeatureMockups";
import type { Dict } from "@/app/[lang]/dictionaries";

export function FeatureScroll({ dict }: { dict: Dict["featureScroll"] }) {
  const steps = dict.steps;
  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // Étape active : IntersectionObserver sur une fine bande au centre du viewport.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (!visible[0]) return;
        const idx = stepRefs.current.indexOf(visible[0].target as HTMLDivElement);
        if (idx >= 0) setActive(idx);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [steps.length]);

  // Transition GSAP des visuels quand l'étape active change.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    visualRefs.current.forEach((v, j) => {
      if (!v) return;
      if (reduce) {
        gsap.set(v, { autoAlpha: j === active ? 1 : 0, y: 0 });
        return;
      }
      gsap.to(v, {
        autoAlpha: j === active ? 1 : 0,
        y: j === active ? 0 : 26,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true,
      });
    });
    const cur = visualRefs.current[active];
    if (!reduce && cur) {
      gsap.fromTo(
        cur,
        { scale: 0.96 },
        { scale: 1, duration: 0.55, ease: "power2.out", overwrite: "auto" },
      );
    }
  }, [active]);

  return (
    <section id="features" className="scroll-mt-20 bg-bg py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Diya"
          title={dict.title}
          subtitle={dict.subtitle}
        />

        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Visuel collant (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 flex h-[78vh] items-center justify-center">
              <div className="relative flex h-full w-full items-center justify-center">
                {FEATURE_MOCKS.map((Mock, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      visualRefs.current[i] = el;
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ opacity: i === 0 ? 1 : 0 }}
                  >
                    <Mock />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Étapes qui défilent */}
          <div>
            {steps.map((s, i) => {
              const Mock = FEATURE_MOCKS[i];
              return (
                <div
                  key={s.title}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="border-t border-line py-12 first:border-0 first:pt-0 lg:flex lg:min-h-[72vh] lg:flex-col lg:justify-center lg:border-0 lg:py-0"
                >
                  {/* Visuel inline (mobile) */}
                  <div className="mb-7 flex justify-center lg:hidden">
                    {Mock ? <Mock /> : null}
                  </div>

                  <div
                    className={`transition-opacity duration-500 ${
                      active === i ? "lg:opacity-100" : "lg:opacity-40"
                    }`}
                  >
                    <span className="inline-flex items-center rounded-full bg-mint/60 px-3 py-1 text-[12px] font-bold tabular-nums text-brand-ink">
                      {String(i + 1).padStart(2, "0")} / {steps.length}
                    </span>
                    <h3 className="mt-3 text-[26px] font-extrabold tracking-tight text-ink sm:text-[30px]">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-[16px] leading-7 text-muted">
                      {s.desc}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2.5 text-[14.5px] text-ink/80"
                        >
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                            <Check className="h-3 w-3" />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
