import { ImageResponse } from "next/og";

export const alt = "Diya — La gestion locative simple, même hors-ligne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const taglines: Record<string, string> = {
  fr: "La gestion locative, simple et même hors-ligne.",
  en: "Rental management, simple and even offline.",
};

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const tagline = taglines[lang] ?? taglines.fr;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #053725 0%, #076f4b 45%, #099664 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marque + pastille */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
            {/* Marque Diya (feuille) */}
            <svg width="72" height="63" viewBox="0 0 90.43 79.12">
              <path
                fill="#ffffff"
                d="M89.95,0l-45.68,17.9h-22.37C9.81,17.9,0,27.7,0,39.8v17.43c0,12.09,9.81,21.9,21.9,21.9h46.63c12.09,0,21.9-9.81,21.9-21.9V17.9l-.47-17.9ZM77.57,53.7c0,6.64-6.89,12.02-15.38,12.02H29.45c-8.49,0-15.38-5.38-15.38-12.02v-9.57c0-6.64,6.89-12.02,15.38-12.02h15.71l32.27-13.59.14,13.59v21.59Z"
              />
            </svg>
            <span style={{ fontSize: 64, fontWeight: 800, letterSpacing: "-2px" }}>
              Diya
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 22px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.28)",
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "999px",
                background: "#7fe3ac",
                display: "flex",
              }}
            />
            {lang === "fr" ? "100 % hors-ligne" : "100% offline"}
          </div>
        </div>

        {/* Accroche */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "900px",
            }}
          >
            {tagline}
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.85)" }}>
            diya.wearekarfi.dev
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
