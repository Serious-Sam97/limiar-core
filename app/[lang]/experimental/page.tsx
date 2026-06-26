import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import ProjectRows, { type Project } from "@/components/ProjectRows";
import { isLocale, t, type Localized } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export const metadata = {
  title: "Experimental — Limiar Core",
};

const ACCENT = "#FF2D55";

// ── Edit experimental project details here ─────────────────
// blurb / category / details carry both languages via { "pt-br", "en-us" }.
type ExperimentSource = Omit<Project, "blurb" | "category" | "details"> & {
  blurb: Localized;
  category: Localized;
  details: Localized;
};

const experiments: ExperimentSource[] = [
  {
    id: "EX-001",
    name: "Sanctuary",
    blurb: {
      "en-us": "A Diablo fan-made site — lore, builds, and worldbuilding from the world of Sanctuary.",
      "pt-br": "Um site fan-made de Diablo — lore, builds e worldbuilding do universo de Santuário.",
    },
    category: { "en-us": "Web · Fan Project", "pt-br": "Web · Projeto Fã" },
    year: "2026",
    status: "LIVE",
    icon: "/sanctuary/logo.png",
    url: "https://diablo.serious-sam.dev",
    images: [
      "/sanctuary/home.png",
      "/sanctuary/history.png",
      "/sanctuary/demons.png",
      "/sanctuary/characters.png",
      "/sanctuary/book.png",
    ],
    details: {
      "en-us": "A Diablo fan-made site — lore, builds, and worldbuilding from the world of Sanctuary.",
      "pt-br": "Um site fan-made de Diablo — lore, builds e worldbuilding do universo de Santuário.",
    },
  },
  {
    id: "EX-002",
    name: "Vortex OS",
    blurb: {
      "en-us": "A real operating system that runs entirely in your browser.",
      "pt-br": "Um sistema operacional real que roda inteiramente no seu navegador.",
    },
    category: { "en-us": "Web · Operating System", "pt-br": "Web · Sistema Operacional" },
    year: "2024",
    status: "LIVE",
    icon: "/vortex/logo.png",
    url: "https://vortex.serious-sam.dev",
    images: [
      "/vortex/home.png",
      "/vortex/control-panel.png",
      "/vortex/terminal.png",
      "/vortex/manager.png",
      "/vortex/code.png",
    ],
    details: {
      "en-us": "A real operating system that runs entirely in your browser.",
      "pt-br": "Um sistema operacional real que roda inteiramente no seu navegador.",
    },
  },
];

export default async function ExperimentalPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const rows: Project[] = experiments.map((p) => ({
    ...p,
    blurb: t(p.blurb, lang),
    category: t(p.category, lang),
    details: t(p.details, lang),
  }));

  const labels = {
    visit: dict.common.visit,
    soon: dict.common.soon,
    visitSite: dict.common.visitSite,
    noPreview: dict.common.noPreview,
  };

  return (
    <main className="min-h-screen bg-[#080808] text-[#F0EEE9] flex flex-col">

      <SiteHeader lang={lang} dict={dict} active="lab" accent={ACCENT} />

      {/* ── MASSIVE TITLE ── */}
      <section className="px-8 md:px-14 pt-10 pb-0 border-b border-white/[0.06] relative overflow-hidden">
        <span
          className="absolute top-0 right-0 leading-none font-black text-white/[0.015] select-none pointer-events-none"
          style={{ fontSize: "38vw", lineHeight: 0.8, fontFamily: "var(--font-geist-sans)" }}
        >
          E
        </span>

        <div className="flex items-center gap-4 mb-4 relative z-10">
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">07</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">{dict.lab.eyebrow}</span>
        </div>

        <div className="relative z-10 flex items-end gap-0 leading-none -mb-2">
          <h1
            className="font-black tracking-tighter wipe-in"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 10rem)",
              color: "transparent",
              WebkitTextStroke: "clamp(2px, 0.25vw, 4px) rgba(240,238,233,0.6)",
              fontFamily: "var(--font-geist-sans)",
              lineHeight: 0.85,
            }}
          >
            {dict.titles.lab[0]}
          </h1>
          <h1
            className="font-black tracking-tighter"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 10rem)",
              color: ACCENT,
              fontFamily: "var(--font-geist-sans)",
              lineHeight: 0.85,
            }}
          >
            {dict.titles.lab[1]}
          </h1>
        </div>
      </section>

      {/* ── TABLE ── */}
      <section className="flex-1 flex flex-col px-8 md:px-14">

        <div className="grid grid-cols-12 gap-4 py-3 border-b border-white/[0.06] text-[9px] font-mono tracking-[0.3em] text-white/45 uppercase mt-6 items-center">
          <span className="col-span-1">{dict.cols.id}</span>
          <span className="col-span-2">{dict.cols.icon}</span>
          <span className="col-span-3">{dict.cols.project}</span>
          <span className="col-span-2">{dict.cols.category}</span>
          <span className="col-span-1">{dict.cols.year}</span>
          <span className="col-span-1 text-right">{dict.cols.status}</span>
          <span className="col-span-2 text-right">{dict.cols.access}</span>
        </div>

        <ProjectRows projects={rows} accent={ACCENT} labels={labels} statusLabels={dict.statuses} />

        <div className="flex-1" />
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] px-8 md:px-14 py-4 flex items-center justify-between shrink-0">
        <Link href={`/${lang}`} className="group flex items-center gap-2 text-[9px] font-mono text-white/45 hover:text-white/80 tracking-widest uppercase transition-colors">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          {dict.common.backToIndex}
        </Link>
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/40">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
          {dict.lab.footer}
        </div>
        <span className="text-[9px] font-mono text-white/40 tracking-widest">© 2026 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
