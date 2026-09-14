export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <span
          className={`text-[13px] font-bold uppercase tracking-wider ${
            dark ? "text-mint-400" : "text-brand"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-2 text-balance text-3xl font-extrabold tracking-tight sm:text-[40px] sm:leading-[1.1] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-pretty text-[17px] leading-7 ${
            dark ? "text-white/75" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
