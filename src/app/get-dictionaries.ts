import "server-only";
import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/locales";
import { defaultLocale } from "@/i18n/locales";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default as Dictionary),
  bg: () => import("@/dictionaries/bg.json").then((module) => module.default as Dictionary),
} satisfies Record<Locale, () => Promise<Dictionary>>;

export type { Dictionary };

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries[defaultLocale];
  return loader();
}
