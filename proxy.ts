import { NextResponse, type NextRequest } from "next/server";
import { locales, matchLocale } from "@/lib/i18n";

// Redirect any non-localized path to a locale-prefixed one, picking the
// locale from the visitor's Accept-Language header (fallback: pt-br).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  const locale = matchLocale(request.headers.get("accept-language"));
  request.nextUrl.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals and any path with a file extension (public assets
  // like /clients/client-01.jpg, /parliamo.png, favicon.ico, etc.).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
