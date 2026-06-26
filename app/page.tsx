import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-[#080808] text-[#F0EEE9] overflow-hidden flex flex-col">

      {/* ── SINGLE VIEWPORT — split layout ── */}
      <div className="flex-1 grid" style={{ gridTemplateColumns: "1fr clamp(280px, 22vw, 420px)" }}>

        {/* ─────────────────────────────────────
            LEFT — identity
        ───────────────────────────────────── */}
        <div className="flex flex-col p-8 md:p-12 border-r border-white/[0.06] relative overflow-hidden">

          {/* Huge ghost letters — decorative */}
          <span
            className="absolute bottom-0 right-0 leading-none text-white/[0.025] font-black select-none pointer-events-none"
            style={{ fontSize: "28vw", fontFamily: "var(--font-geist-mono)", lineHeight: 0.85 }}
          >
            LC
          </span>

          {/* Top: logo mark */}
          <div className="flex items-center gap-2.5 relative z-10">
            <span className="w-6 h-6 bg-[#CAFF00] text-black text-[9px] font-black flex items-center justify-center shrink-0">LC</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-[0.3em] text-white/55 uppercase">Limiar Core</span>
              <span className="text-white/20 text-[10px]">·</span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-white/40 uppercase border border-white/15 px-1.5 py-0.5">Software House</span>
            </div>
          </div>

          {/* Center: title — outline vs solid, staggered */}
          <div className="flex-1 flex flex-col justify-center relative z-10">

            {/* "QUANTUM" — hollow outline, wipe-in reveal */}
            <h1
              className="font-black tracking-tighter leading-[0.85] block wipe-in"
              style={{
                fontSize: "clamp(3rem, 8.5vw, 9.5rem)",
                color: "transparent",
                WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #F0EEE9",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              LIMIAR
            </h1>

            {/* Thin rule — punctuates the space between words */}
            <div className="flex items-center gap-3 my-1">
              <div className="h-px bg-[#CAFF00]/40" style={{ width: "clamp(2rem, 5vw, 5rem)" }} />
              <span className="text-[8px] font-mono text-white/35 tracking-[0.3em]">EST.2025</span>
            </div>

            {/* "TECH" — solid, larger, right-aligned within left panel */}
            <h1
              className="font-black tracking-tighter leading-[0.85] text-[#CAFF00] self-end pr-6"
              style={{ fontSize: "clamp(4rem, 11vw, 12rem)" }}
            >
              CORE
            </h1>
          </div>

          {/* Bottom: tagline + year */}
          <div className="flex items-end justify-between relative z-10">
            <div>
              <div className="w-6 h-px bg-[#CAFF00] mb-3" />
              <p className="text-white/65 text-sm leading-snug">
                Hard problems.<br />Shipped clean.
              </p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-mono text-white/40 tracking-widest">EST. 2025</p>
              <p className="text-[9px] font-mono text-white/40 tracking-widest">DIGITAL</p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────
            RIGHT — navigation + CTA
        ───────────────────────────────────── */}
        <div className="flex flex-col">

          {/* Nav items — each takes equal flex space */}
          {[
            { label: "WORK",     href: "/projects",  n: "01" },
            { label: "PEOPLE",   href: "/people",    n: "02" },
            { label: "SERVICES", href: "/services",  n: "03" },
            { label: "CONTACT",  href: "/contact",   n: "04" },
          ].map(({ label, href, n }) => (
            <Link
              key={label}
              href={href}
              className="flex-1 border-b border-white/[0.06] flex items-center justify-between px-7 group hover:bg-white/[0.025] transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-[9px] font-mono text-white/45">{n}</span>
                <span className="text-2xl md:text-3xl font-black text-white group-hover:text-[#CAFF00] transition-colors tracking-tight">
                  {label}
                </span>
              </div>
              <span className="text-white/20 text-lg group-hover:text-[#CAFF00] group-hover:translate-x-1 transition-all">→</span>
            </Link>
          ))}

          {/* Status */}
          <div className="border-b border-white/[0.06] px-7 py-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse shrink-0" />
            <span className="text-[9px] font-mono text-white/45 tracking-[0.25em]">OPEN FOR WORK</span>
          </div>

          {/* CTA block */}
          <div className="flex-1 px-7 py-6 flex flex-col justify-between min-h-0">
            <div>
              <p className="text-[9px] font-mono text-white/45 tracking-widest mb-2">START A PROJECT</p>
              <a
                href="mailto:hello@limiarcore.dev"
                className="text-xs text-white/65 hover:text-white transition-colors font-mono break-all"
              >
                hello@limiarcore.dev
              </a>
            </div>
            <a
              href="mailto:hello@limiarcore.dev"
              className="flex items-center justify-between px-5 py-3.5 bg-[#CAFF00] text-black text-[10px] font-black tracking-widest uppercase hover:opacity-90 transition-opacity group"
            >
              Send a Brief
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── THIN BOTTOM BAR ── */}
      <div className="border-t border-white/[0.06] px-8 md:px-12 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-6">
          <span className="text-[9px] font-mono text-white/40 tracking-widest">© 2025 LIMIAR CORE</span>
          <span className="text-white/20 text-[9px]">·</span>
          <span className="text-[9px] font-mono text-white/40 tracking-widest">SOFTWARE HOUSE</span>
        </div>
        <Link
          href="/projects"
          className="text-[9px] font-mono text-white/45 hover:text-[#CAFF00] tracking-widest transition-colors uppercase"
        >
          View Work →
        </Link>
      </div>

    </main>
  );
}
