import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Download = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
  </svg>
);

export const Wallet = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 7a2 2 0 0 1 2-2h12v4" />
    <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5a2 2 0 0 1-2-2Z" />
    <circle cx="16.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const Receipt = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 3v18l2-1 2 1 2-1 2 1 2-1 2 1V3l-2 1-2-1-2 1-2-1-2 1-2-1Z" />
    <path d="M9 8h6M9 12h6" />
  </svg>
);

export const Calendar = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
    <path d="M3 9h18M8 3v3M16 3v3" />
  </svg>
);

export const WifiOff = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 3l20 20M8.5 16.5a5 5 0 0 1 7 0M5 12.9a10 10 0 0 1 3-2M19 12.9a10 10 0 0 0-6.6-2.8M2.5 8.5a15 15 0 0 1 4-2.6M21.5 8.5a15 15 0 0 0-7-3.4" />
    <path d="M12 20h.01" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const Cloud = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 8H7Z" />
    <path d="M12 20v-6m0 0-2 2m2-2 2 2" />
  </svg>
);

export const Chart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20V4M4 20h16" />
    <path d="M8 16v-3M12 16v-6M16 16v-4M20 16V8" />
  </svg>
);

export const TrendingUp = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M17 7h4v4" />
  </svg>
);

export const Building = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
    <path d="M14 9h4a2 2 0 0 1 2 2v10M3 21h18" />
    <path d="M8 7h2M8 11h2M8 15h2" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.5 3h11a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3Z" />
    <path d="M10 18h4" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 2.5Z" />
  </svg>
);

export const Stairs = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20h4v-4h4v-4h4v-4h4" />
  </svg>
);

export const DoorRooms = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M3 21h16M13 12h.5" />
  </svg>
);

export const Bed = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 18V9m0 9h18m0 0v-5a3 3 0 0 0-3-3H8V9" />
    <path d="M3 13h5M6 9.5A1.5 1.5 0 0 1 7.5 8h0" />
  </svg>
);

export const Bath = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12h16v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-3Z" />
    <path d="M6 12V6.5A1.5 1.5 0 0 1 7.5 5c.9 0 1.5.6 1.6 1.4M7 18l-1 2m11-2 1 2" />
  </svg>
);

export const Wifi = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0" />
    <path d="M12 19h.01" />
  </svg>
);

export const Sofa = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
    <path d="M2 14a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v4H2v-4Z" />
    <path d="M6 20v1M18 20v1" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const MapPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Sun = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const Moon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Quote = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M7.5 6C5 6 3 8 3 10.5S5 15 7.5 15c.3 0 .6 0 .9-.1C7.9 16.7 6.4 18 4.5 18.4c-.4.1-.6.5-.5.9.1.4.5.6.9.5C8.8 19 11 15.9 11 11.5 11 8 9.4 6 7.5 6Zm9 0C14 6 12 8 12 10.5S14 15 16.5 15c.3 0 .6 0 .9-.1-.5 1.8-2 3.1-3.9 3.5-.4.1-.6.5-.5.9.1.4.5.6.9.5C17.8 19 20 15.9 20 11.5 20 8 18.4 6 16.5 6Z" />
  </svg>
);

export const WhatsApp = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
  </svg>
);

export const AppStore = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M16.4 12.9c0-2 1.6-3 1.7-3.05a3.7 3.7 0 0 0-2.9-1.57c-1.23-.13-2.4.72-3.03.72-.62 0-1.59-.7-2.62-.68A3.87 3.87 0 0 0 6.3 10.3c-1.4 2.43-.36 6.03 1 8 .67.97 1.46 2.05 2.5 2.01 1-.04 1.38-.65 2.6-.65 1.2 0 1.55.65 2.6.63 1.08-.02 1.76-.98 2.42-1.95a8.2 8.2 0 0 0 1.1-2.24c-.03-.01-2.1-.81-2.12-3.21ZM14.5 6.3c.55-.67.92-1.6.82-2.53-.79.03-1.75.53-2.32 1.2-.51.58-.96 1.53-.84 2.43.88.07 1.78-.44 2.34-1.1Z" />
  </svg>
);
