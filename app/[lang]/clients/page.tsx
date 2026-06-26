import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import ProjectRows, { type Project } from "@/components/ProjectRows";
import TrustedBy from "@/components/TrustedBy";
import { clients } from "@/lib/clients";
import { isLocale, t } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export const metadata = {
  title: "Clients — Limiar Core",
};

export default async function ClientsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const rows: Project[] = clients.map((c) => ({
    ...c,
    blurb: t(c.blurb, lang),
    category: t(c.category, lang),
    details: t(c.details, lang),
  }));

  const labels = {
    visit: dict.common.visit,
    soon: dict.common.soon,
    visitSite: dict.common.visitSite,
    noPreview: dict.common.noPreview,
  };

  return (
    <main className="min-h-screen bg-[#080808] text-[#F0EEE9] flex flex-col">

      <SiteHeader lang={lang} dict={dict} active="clients" />

      {/* ── MASSIVE TITLE ── */}
      <section className="px-8 md:px-14 pt-10 pb-0 border-b border-white/[0.06] relative overflow-hidden">
        <span
          className="absolute top-0 right-0 leading-none font-black text-white/[0.015] select-none pointer-events-none"
          style={{ fontSize: "38vw", lineHeight: 0.8, fontFamily: "var(--font-geist-sans)" }}
        >
          C
        </span>

        <div className="flex items-center gap-4 mb-4 relative z-10">
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">08</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">{dict.clients.eyebrow}</span>
        </div>

        <div className="relative z-10 flex items-end gap-0 leading-none -mb-2">
          <h1
            className="font-black tracking-tighter wipe-in"
            style={{
              fontSize: "clamp(3rem, 11vw, 12rem)",
              color: "transparent",
              WebkitTextStroke: "clamp(2px, 0.25vw, 4px) rgba(240,238,233,0.6)",
              fontFamily: "var(--font-geist-sans)",
              lineHeight: 0.85,
            }}
          >
            {dict.titles.clients[0]}
          </h1>
          <h1
            className="font-black tracking-tighter"
            style={{
              fontSize: "clamp(3rem, 11vw, 12rem)",
              color: "#CAFF00",
              fontFamily: "var(--font-geist-sans)",
              lineHeight: 0.85,
            }}
          >
            {dict.titles.clients[1]}
          </h1>
        </div>
      </section>

      {/* ── TABLE ── */}
      <section className="flex-1 flex flex-col px-8 md:px-14">

        <TrustedBy clients={clients} label={dict.common.trustedBy} />

        <div className="grid grid-cols-12 gap-4 py-3 border-b border-white/[0.06] text-[9px] font-mono tracking-[0.3em] text-white/45 uppercase mt-4 items-center">
          <span className="col-span-1">{dict.cols.id}</span>
          <span className="col-span-2">{dict.cols.logo}</span>
          <span className="col-span-3">{dict.cols.client}</span>
          <span className="col-span-2">{dict.cols.industry}</span>
          <span className="col-span-1">{dict.cols.since}</span>
          <span className="col-span-1 text-right">{dict.cols.status}</span>
          <span className="col-span-2 text-right">{dict.cols.access}</span>
        </div>

        <ProjectRows projects={rows} labels={labels} statusLabels={dict.statuses} />

        <div className="flex-1" />
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] px-8 md:px-14 py-4 flex items-center justify-between shrink-0">
        <Link href={`/${lang}`} className="group flex items-center gap-2 text-[9px] font-mono text-white/45 hover:text-white/80 tracking-widest uppercase transition-colors">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          {dict.common.backToIndex}
        </Link>
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse" />
          {dict.clients.footer}
        </div>
        <span className="text-[9px] font-mono text-white/40 tracking-widest">© 2026 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
