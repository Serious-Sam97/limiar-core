import Link from "next/link";

export const metadata = {
  title: "Work — Limiar Core",
};

// ── Edit project details here ──────────────────────────────
// status: "LIVE" (acid) | "IN BUILD" | "PROTOTYPE" (dim)
// url: external link, or "" to render a non-clickable row
const projects = [
  {
    id: "LC-001",
    name: "Parliamo",
    blurb: "A short one-line description of what Parliamo is.",
    category: "Web · Product",
    year: "2026",
    status: "LIVE",
    url: "",
  },
  {
    id: "LC-002",
    name: "Yondra",
    blurb: "A short one-line description of what Yondra is.",
    category: "Web · Product",
    year: "2026",
    status: "IN BUILD",
    url: "",
  },
];

export default function ProjectsPage() {
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
          {[["Index", "/"], ["Work", "/projects"], ["People", "/people"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href}
              className={`text-[10px] tracking-widest font-mono transition-colors ${label === "Work" ? "text-[#CAFF00]" : "text-white/55 hover:text-white"}`}
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
          W
        </span>

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">03</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">SELECTED WORK</span>
        </div>

        {/* "WORK" — two-tone outline + solid */}
        <div className="relative z-10 flex items-end gap-0 leading-none -mb-2">
          <h1
            className="font-black tracking-tighter wipe-in"
            style={{
              fontSize: "clamp(4rem, 13vw, 14rem)",
              color: "transparent",
              WebkitTextStroke: "clamp(2px, 0.25vw, 4px) rgba(240,238,233,0.6)",
              fontFamily: "var(--font-geist-sans)",
              lineHeight: 0.85,
            }}
          >
            WO
          </h1>
          <h1
            className="font-black tracking-tighter"
            style={{
              fontSize: "clamp(4rem, 13vw, 14rem)",
              color: "#CAFF00",
              fontFamily: "var(--font-geist-sans)",
              lineHeight: 0.85,
            }}
          >
            RK
          </h1>
        </div>
      </section>

      {/* ── TABLE ── */}
      <section className="flex-1 flex flex-col px-8 md:px-14">

        {/* Column headers */}
        <div className="grid grid-cols-12 gap-4 py-3 border-b border-white/[0.06] text-[9px] font-mono tracking-[0.3em] text-white/45 uppercase mt-6">
          <span className="col-span-1">ID</span>
          <span className="col-span-5">Project</span>
          <span className="col-span-3">Category</span>
          <span className="col-span-2">Year</span>
          <span className="col-span-1 text-right">Status</span>
        </div>

        {/* Project rows */}
        {projects.map(({ id, name, blurb, category, year, status, url }) => {
          const isLive = status === "LIVE";
          const clickable = url !== "";

          const Row = (
            <div className="grid grid-cols-12 gap-4 py-6 border-b border-white/[0.03] items-center group hover:bg-white/[0.012] transition-colors">
              <span className="col-span-1 text-[9px] font-mono text-[#CAFF00]/50 tracking-widest">{id}</span>

              <div className="col-span-5 flex flex-col gap-1">
                <span className="text-xl md:text-2xl font-black tracking-tight leading-none text-[#F0EEE9] group-hover:text-[#CAFF00] transition-colors">
                  {name}
                </span>
                <span className="text-white/55 text-xs leading-snug">{blurb}</span>
              </div>

              <div className="col-span-3">
                <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">{category}</span>
              </div>

              <div className="col-span-2">
                <span className="text-[10px] font-mono tracking-widest text-white/50">{year}</span>
              </div>

              <div className="col-span-1 flex justify-end">
                <span
                  className={`text-[8px] font-mono tracking-widest border px-1.5 py-0.5 ${
                    isLive
                      ? "text-[#CAFF00] border-[#CAFF00]/40"
                      : "text-white/55 border-white/[0.12]"
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
          );

          return clickable ? (
            <a key={id} href={url} target="_blank" rel="noopener noreferrer" className="block">
              {Row}
            </a>
          ) : (
            <div key={id}>{Row}</div>
          );
        })}

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
          ALL SYSTEMS GO
        </div>
        <span className="text-[9px] font-mono text-white/40 tracking-widest">© 2026 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
