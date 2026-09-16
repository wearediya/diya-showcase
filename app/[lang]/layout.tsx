import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";
import { getDictionary, hasLocale, locales } from "./dictionaries";
import { SITE_URL } from "@/lib/seo";

const keywords: Record<string, string[]> = {
  fr: [
    "gestion locative",
    "application de gestion locative",
    "logiciel de gestion locative",
    "gestion des biens",
    "locataires",
    "loyers",
    "quittances de loyer",
    "reçus",
    "hors-ligne",
    "multi-devises",
    "Afrique de l'Ouest",
    "Togo",
    "propriétaire",
    "gestionnaire immobilier",
  ],
  en: [
    "rental management",
    "rental management app",
    "property management software",
    "landlord app",
    "tenants",
    "rent",
    "rent receipts",
    "offline",
    "multi-currency",
    "West Africa",
    "Togo",
    "property manager",
  ],
};

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#099664",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: "Diya",
    keywords: keywords[lang],
    authors: [{ name: "Diya" }],
    creator: "Diya",
    publisher: "Diya",
    category: "business",
    formatDetection: { telephone: false, address: false, email: false },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "Diya",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink font-sans">
        <script
          // Applique le thème mémorisé avant le rendu (évite le flash clair→sombre).
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('diya-theme')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
