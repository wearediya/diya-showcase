import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "white" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-600 shadow-[0_6px_16px_-6px_rgba(9,150,100,0.6)]",
  dark: "bg-ink text-bg hover:bg-ink-2",
  outline: "border border-line bg-card text-ink hover:bg-soft",
  white: "bg-white text-ink hover:bg-white/90 shadow-sm",
  ghost: "text-ink hover:bg-soft",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-[52px] px-7 text-base",
};

export function Button({
  href = "#",
  variant = "primary",
  size = "md",
  className = "",
  children,
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
