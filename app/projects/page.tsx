import Link from "next/link";

export const metadata = {
  title: "Work — Limiar Core",
};

const slots = [
  { id: "LC-001", w: "55%" },
  { id: "LC-002", w: "72%" },
  { id: "LC-003", w: "48%" },
  { id: "LC-004", w: "63%" },
  { id: "LC-005", w: "58%" },
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
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/25 uppercase">Limiar Core</span>
          <span className="text-white/10">·</span>
          <span className="text-[9px] font-mono tracking-[0.2em] text-white/15 border border-white/10 px-1.5 py-0.5">Software House</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {[["Index", "/"], ["Work", "/projects"], ["People", "/people"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href}
              className={`text-[10px] tracking-widest font-mono transition-colors ${label === "Work" ? "text-[#CAFF00]" : "text-white/30 hover:text-white"}`}
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
          <span className="text-[9px] font-mono text-white/20 tracking-[0.4em]">03</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[9px] font-mono text-white/20 tracking-[0.4em]">SELECTED WORK</span>
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
        <div className="grid grid-cols-12 gap-4 py-3 border-b border-white/[0.06] text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase mt-6">
          <span className="col-span-1">ID</span>
          <span className="col-span-5">Project</span>
          <span className="col-span-3">Category</span>
          <span className="col-span-2">Year</span>
          <span className="col-span-1 text-right">Status</span>
        </div>

        {/* Redacted skeleton rows */}
        {slots.map(({ id, w }, i) => (
          <div key={i} className="grid grid-cols-12 gap-4 py-6 border-b border-white/[0.03] items-center group">
            <span className="col-span-1 text-[9px] font-mono text-[#CAFF00]/20 tracking-widest">{id}</span>
            <div className="col-span-5 flex items-center gap-2">
              {/* Redacted bar */}
              <div className="h-3 bg-white/[0.07]" style={{ width: w }} />
            </div>
            <div className="col-span-3">
              <div className="h-2.5 bg-white/[0.04]" style={{ width: "60%" }} />
            </div>
            <div className="col-span-2">
              <div className="h-2.5 bg-white/[0.04] w-10" />
            </div>
            <div className="col-span-1 flex justify-end">
              <span className="text-[8px] font-mono tracking-widest text-white/15 border border-white/[0.08] px-1.5 py-0.5">
                VACANT
              </span>
            </div>
          </div>
        ))}

        {/* ── EMPTY STATE — stark, full-width ── */}
        <div className="flex-1 flex flex-col items-center justify-center py-20 relative">

          {/* Giant crosshair */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
            <div className="relative w-64 h-64">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#CAFF00]" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#CAFF00]" />
              <div className="absolute inset-0 rounded-full border border-[#CAFF00]" />
              <div className="absolute inset-8 rounded-full border border-[#CAFF00]" />
            </div>
          </div>

          <div className="relative text-center flex flex-col items-center gap-6">
            <p
              className="font-black tracking-tighter text-white/10 leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)", fontFamily: "var(--font-geist-sans)" }}
            >
              NO SIGNAL.
            </p>

            <div className="flex flex-col items-center gap-2">
              <p className="text-white/25 text-sm">The list is empty. Projects ship here as they go live.</p>
              <p className="text-white/15 text-xs font-mono tracking-widest">
                PIPELINE: OPEN &nbsp;·&nbsp; ENTRIES: 0 &nbsp;·&nbsp; AWAITING FIRST COMMIT
              </p>
            </div>

            <a
              href="mailto:hello@limiarcore.dev"
              className="flex items-center gap-3 px-8 py-3.5 bg-[#CAFF00] text-black text-[10px] font-black tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Be the first entry →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] px-8 md:px-14 py-4 flex items-center justify-between shrink-0">
        <Link href="/" className="group flex items-center gap-2 text-[9px] font-mono text-white/20 hover:text-white/60 tracking-widest uppercase transition-colors">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          Back to Index
        </Link>
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/15">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse" />
          ALL SYSTEMS GO
        </div>
        <span className="text-[9px] font-mono text-white/15 tracking-widest">© 2025 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
