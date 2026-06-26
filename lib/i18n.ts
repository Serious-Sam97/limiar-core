// Locale config — shared by server (dictionaries, proxy) and client
// (language switcher). Keep this module free of `server-only` so client
// components can import `locales`/`Locale`.

export const locales = ["pt-br", "en-us"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt-br";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// A string that carries one value per locale. Used inline in data files
// (projects, clients, team, services) so both languages live together.
export type Localized = Record<Locale, string>;

export function t(value: Localized, lang: Locale): string {
  return value[lang] ?? value[defaultLocale];
}

// Pick the best locale from an Accept-Language header.
// Portuguese → pt-br, English → en-us, anything else → pt-br (default).
export function matchLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return defaultLocale;
  const langs = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase());
  for (const l of langs) {
    if (l.startsWith("pt")) return "pt-br";
    if (l.startsWith("en")) return "en-us";
  }
  return defaultLocale;
}
