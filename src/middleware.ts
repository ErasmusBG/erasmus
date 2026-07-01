import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isValidLocale, locales } from "./i18n/locales";

function detectPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");

  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(",")
      .map((entry) => entry.split(";")[0]?.trim().toLowerCase())
      .find(Boolean);

    if (preferred?.startsWith("bg")) {
      return "bg";
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (!pathnameHasLocale) {
    const locale = detectPreferredLocale(request);
    const redirectPath =
      pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  const localeSegment = pathname.split("/")[1] ?? defaultLocale;
  const locale = isValidLocale(localeSegment) ? localeSegment : defaultLocale;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
