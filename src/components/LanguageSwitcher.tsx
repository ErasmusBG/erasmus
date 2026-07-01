"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, type Locale } from "@/i18n/locales";

type LanguageSwitcherProps = {
  lang: Locale;
  label: string;
};

function buildLocalizedPath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  if (locales.includes(segments[0] as Locale)) {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }

  return `/${segments.join("/")}`;
}

export default function LanguageSwitcher({
  lang,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      className="flex items-center rounded-full border border-white/10 bg-white/5 p-1"
      role="group"
      aria-label={label}
    >
      {locales.map((locale) => {
        const isActive = locale === lang;

        return (
          <Link
            key={locale}
            href={buildLocalizedPath(pathname, locale)}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 sm:min-h-9 sm:min-w-9 ${
              isActive
                ? "bg-brand-gold text-navy shadow-gold-glow"
                : "text-brand-silver hover:bg-white/10 hover:text-white"
            }`}
            aria-current={isActive ? "page" : undefined}
            lang={locale}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
