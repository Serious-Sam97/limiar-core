import Link from "next/link";
import ProjectRows from "@/components/ProjectRows";
import TrustedBy from "@/components/TrustedBy";
import { clients } from "@/lib/clients";

export const metadata = {
  title: "Clients — Limiar Core",
};

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#F0EEE9] flex flex-col">

      {/* ── TOP IDENTITY BAR ── */}
      <header className="border-b border-white/[0.06] px-8 md:px-14 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/">
            <span className="w-6 h-6 bg-[#CAFF00] text-black text-[9px] font-black flex items-center justify-center">LC</span>
          </Link>
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/55 uppercase">Limiar Core</span>
          <span className="text-white/20">·</span>
          <span className="text-[9px] font-mono tracking-[0.2em] text-white/40 border border-white/15 px-1.5 py-0.5">Software House</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {[["Index", "/"], ["Work", "/projects"], ["Lab", "/experimental"], ["People", "/people"], ["Clients", "/clients"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href}
              className={`text-[10px] tracking-widest font-mono transition-colors ${label === "Clients" ? "text-[#CAFF00]" : "text-white/55 hover:text-white"}`}
            >{label}</Link>
          ))}
        </nav>
        <span className="text-[9px] font-mono text-[#CAFF00]/50 tracking-widest flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse" />
          OPEN FOR WORK
        </span>
      </header>

      {/* ── MASSIVE TITLE ── */}
      <section className="px-8 md:px-14 pt-10 pb-0 border-b border-white/[0.06] relative overflow-hidden">
        {/* Background outlined ghost */}
        <span
          className="absolute top-0 right-0 leading-none font-black text-white/[0.015] select-none pointer-events-none"
          style={{ fontSize: "38vw", lineHeight: 0.8, fontFamily: "var(--font-geist-sans)" }}
        >
          C
        </span>

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">08</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">TRUSTED BY</span>
        </div>

        {/* "CLIENTS" — two-tone outline + solid */}
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
            CLI
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
            ENTS
          </h1>
        </div>
      </section>

      {/* ── TABLE ── */}
      <section className="flex-1 flex flex-col px-8 md:px-14">

        {/* Trusted-by logo strip */}
        <TrustedBy clients={clients} />

        {/* Column headers */}
        <div className="grid grid-cols-12 gap-4 py-3 border-b border-white/[0.06] text-[9px] font-mono tracking-[0.3em] text-white/45 uppercase mt-4 items-center">
          <span className="col-span-1">ID</span>
          <span className="col-span-2">Logo</span>
          <span className="col-span-3">Client</span>
          <span className="col-span-2">Industry</span>
          <span className="col-span-1">Since</span>
          <span className="col-span-1 text-right">Status</span>
          <span className="col-span-2 text-right">Access</span>
        </div>

        {/* Client rows + case-study modal (client) */}
        <ProjectRows projects={clients} />

        {/* Spacer — keeps the table top-aligned as entries grow */}
        <div className="flex-1" />
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] px-8 md:px-14 py-4 flex items-center justify-between shrink-0">
        <Link href="/" className="group flex items-center gap-2 text-[9px] font-mono text-white/45 hover:text-white/80 tracking-widest uppercase transition-colors">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          Back to Index
        </Link>
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse" />
          FIRST OF MANY
        </div>
        <span className="text-[9px] font-mono text-white/40 tracking-widest">© 2026 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
