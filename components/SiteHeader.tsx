import Link from "next/link";
import LangSwitcher from "@/components/LangSwitcher";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const NAV = [
  { key: "index", seg: "" },
  { key: "work", seg: "/projects" },
  { key: "lab", seg: "/experimental" },
  { key: "people", seg: "/people" },
  { key: "clients", seg: "/clients" },
  { key: "services", seg: "/services" },
  { key: "contact", seg: "/contact" },
] as const;

// Shared top identity bar for the inner pages. `accent` lets the Lab page
// render in red while the rest stay green.
export default function SiteHeader({
  lang,
  dict,
  active,
  accent = "#CAFF00",
}: {
  lang: Locale;
  dict: Dictionary;
  active: (typeof NAV)[number]["key"];
  accent?: string;
}) {
  return (
    <header className="border-b border-white/[0.06] px-8 md:px-14 py-4 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
        <Link href={`/${lang}`}>
          <span
            className="w-6 h-6 text-black text-[9px] font-black flex items-center justify-center"
            style={{ background: accent }}
          >
            LC
          </span>
        </Link>
        <span className="text-[10px] font-mono tracking-[0.3em] text-white/55 uppercase">Limiar Core</span>
        <span className="text-white/20">·</span>
        <span className="text-[9px] font-mono tracking-[0.2em] text-white/40 border border-white/15 px-1.5 py-0.5">Software House</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {NAV.map(({ key, seg }) => (
          <Link
            key={key}
            href={`/${lang}${seg}`}
            className={`text-[10px] tracking-widest font-mono transition-colors ${
              key === active ? "" : "text-white/55 hover:text-white"
            }`}
            style={key === active ? { color: accent } : undefined}
          >
            {dict.nav[key]}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <LangSwitcher current={lang} accent={accent} />
        <span
          className="hidden md:flex text-[9px] font-mono tracking-widest items-center gap-1.5"
          style={{ color: `${accent}80` }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
          {dict.common.openForWork}
        </span>
      </div>
    </header>
  );
}
