"use client";

import { useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/app/get-dictionaries";
import type { Locale } from "@/i18n/locales";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type NavbarProps = {
  lang: Locale;
  dict: Dictionary["nav"];
};

export default function Navbar({ lang, dict }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-navy/60 backdrop-blur-md print:hidden">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
        aria-label={dict.ariaLabel}
      >
        <Link
          href={`/${lang}`}
          className="group flex min-w-0 shrink-0 items-center gap-1"
        >
          <span className="truncate text-lg font-bold tracking-tight text-white transition-opacity group-hover:opacity-90 sm:text-2xl">
            {dict.logoPrefix}
            <span className="text-brand-gold">{dict.logoSuffix}</span>
          </span>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
          {dict.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-brand-silver transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex lg:gap-4">
          <LanguageSwitcher lang={lang} label={dict.languageLabel} />
          <a
            href="#request-mobility"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-gold px-4 py-2.5 text-sm font-semibold text-navy shadow-gold-glow transition-all hover:bg-brand-gold-bright hover:shadow-gold-glow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold lg:px-5"
          >
            {dict.cta}
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <LanguageSwitcher lang={lang} label={dict.languageLabel} />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-brand-silver transition-colors hover:bg-white/10 hover:text-white"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? dict.closeMenu : dict.openMenu}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`glass-strong border-t border-white/10 md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {dict.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block min-h-11 rounded-lg px-3 py-3 text-base font-medium text-brand-silver transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#request-mobility"
              className="flex min-h-12 w-full items-center justify-center rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-navy shadow-gold-glow transition-all hover:bg-brand-gold-bright hover:shadow-gold-glow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.cta}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
