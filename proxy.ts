import { NextResponse, type NextRequest } from "next/server";

// Gardé indépendant du dictionnaire (server-only) : le proxy tourne côté edge.
const locales = ["fr", "en"] as const;
const defaultLocale = "fr";

function preferredLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const first = header.split(",")[0]?.trim() ?? "";
  return first.startsWith("en") ? "en" : defaultLocale;
}

/**
 * Redirige toute URL sans préfixe de langue vers `/fr` ou `/en`
 * (selon l'en-tête Accept-Language). Ex. `/` → `/fr`, `/tarifs` → `/fr/tarifs`.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = preferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Ignore les assets, _next et les fichiers (avec extension).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
