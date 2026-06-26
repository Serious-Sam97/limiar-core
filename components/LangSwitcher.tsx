"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

const SHORT: Record<Locale, string> = { "pt-br": "PT", "en-us": "EN" };

// Toggles the locale by swapping the leading /<locale> segment of the
// current path, keeping the visitor on the same page.
export default function LangSwitcher({
  current,
  accent = "#CAFF00",
}: {
  current: Locale;
  accent?: string;
}) {
  const pathname = usePathname() || "/";
  const rest = pathname.replace(/^\/[^/]+/, ""); // drop current locale segment

  return (
    <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest">
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-white/20">/</span>}
          <Link
            href={`/${loc}${rest}`}
            aria-current={loc === current ? "true" : undefined}
            className={loc === current ? "uppercase" : "uppercase text-white/40 hover:text-white transition-colors"}
            style={loc === current ? { color: accent } : undefined}
          >
            {SHORT[loc]}
          </Link>
        </span>
      ))}
    </div>
  );
}
