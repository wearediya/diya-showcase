export function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-brand text-white shadow-sm">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4 11.5 12 4l8 7.5" />
          <path d="M6 10.5V20h12v-9.5" />
          <path d="M10.5 20v-4.5h3V20" />
        </svg>
      </span>
      <span
        className={`text-[19px] font-extrabold leading-none tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        Diya
      </span>
    </span>
  );
}
