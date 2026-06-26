import "server-only";
import type { Locale } from "@/lib/i18n";

const dictionaries = {
  "pt-br": () => import("@/lib/dictionaries/pt-br").then((m) => m.default),
  "en-us": () => import("@/lib/dictionaries/en-us").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en-us"]>>;

export const getDictionary = (locale: Locale) => dictionaries[locale]();
