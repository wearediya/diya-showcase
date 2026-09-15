"use client";

import { useState } from "react";

import type { BrandColor } from "@/app/[lang]/brand/content";
import { Check } from "@/components/icons";

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* on tente le repli ci-dessous */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export function BrandColors({
  colors,
  copyLabel,
  copiedLabel,
}: {
  colors: BrandColor[];
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (hex: string) => {
    if (await copyToClipboard(hex)) {
      setCopied(hex);
      setTimeout(() => setCopied((c) => (c === hex ? null : c)), 1300);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {colors.map((c) => {
        const isCopied = copied === c.hex;
        return (
          <button
            key={c.hex}
            type="button"
            onClick={() => copy(c.hex)}
            className="group overflow-hidden rounded-2xl border border-line bg-card text-left transition-colors hover:border-brand/40"
          >
            <div
              className="h-24 w-full"
              style={{
                background: c.hex,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
              }}
            />
            <div className="p-3.5">
              <div className="text-[14.5px] font-bold text-ink">{c.name}</div>
              <div className="mt-0.5 text-[12.5px] text-muted">{c.role}</div>
              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="font-mono text-[13px] font-semibold uppercase text-ink">
                  {c.hex}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-[11.5px] font-semibold ${
                    isCopied ? "text-brand" : "text-muted opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {isCopied && <Check className="h-3.5 w-3.5" />}
                  {isCopied ? copiedLabel : copyLabel}
                </span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
