import type { ReactNode } from "react";

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
      <div className="rounded-[2.7rem] border border-black/10 bg-ink p-2.5 shadow-[0_30px_70px_-24px_rgba(11,21,18,0.5)]">
        <div className="relative overflow-hidden rounded-[2.15rem] bg-white">
          <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-[14px] bg-ink" />
          {children}
        </div>
      </div>
    </div>
  );
}
