import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "People — Limiar Core",
};

const team = [
  {
    id: "LC-P01",
    name: "Gabriel Luiz",
    role: "Founder & Senior QA",
    bio: "Finds what everyone else misses. Turns edge cases into confidence — nothing ships until it passes his eye.",
    tags: ["Quality", "Testing", "Precision"],
    since: "2025",
    photo: null,
    initials: "GL",
  },
  {
    id: "LC-P02",
    name: "Rafael Godoy",
    role: "Founder & Senior Software Engineer",
    bio: "Architects systems that scale and code that lasts. Turns complex requirements into clean, working software.",
    tags: ["Engineering", "Architecture", "Backend"],
    since: "2025",
    photo: null,
    initials: "RG",
  },
  {
    id: "LC-P03",
    name: "Rudney Forti",
    role: "Founder & Senior Business",
    bio: "Reads rooms, closes deals, and keeps the operation sharp. Bridges the gap between what clients need and what we build.",
    tags: ["Business", "Strategy", "Growth"],
    since: "2025",
    photo: null,
    initials: "RF",
  },
  {
    id: "LC-P04",
    name: "Samir Aniz",
    role: "Senior Founder & Senior Software Engineer",
    bio: "Writes code and sets direction in equal measure. Cares deeply about craft — from system design down to the last pixel.",
    tags: ["Engineering", "Product", "Leadership"],
    since: "2025",
    photo: null,
    initials: "SA",
  },
];

export default function PeoplePage() {
  return (
    <main className="h-screen bg-[#080808] text-[#F0EEE9] flex flex-col overflow-hidden">

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
              className={`text-[10px] tracking-widest font-mono transition-colors ${label === "People" ? "text-[#CAFF00]" : "text-white/30 hover:text-white"}`}
            >{label}</Link>
          ))}
        </nav>
        <span className="text-[9px] font-mono text-[#CAFF00]/50 tracking-widest flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse" />
          OPEN FOR WORK
        </span>
      </header>

      {/* ── TITLE SECTION ── */}
      <section className="px-8 md:px-14 pt-2 pb-0 border-b border-white/[0.06] relative overflow-hidden">

        {/* Ghost background letter */}
        <span
          className="absolute top-0 right-0 leading-none font-black text-white/[0.015] select-none pointer-events-none"
          style={{ fontSize: "38vw", lineHeight: 0.8, fontFamily: "var(--font-geist-sans)" }}
        >
          P
        </span>

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-1 relative z-10">
          <span className="text-[9px] font-mono text-white/20 tracking-[0.4em]">04</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[9px] font-mono text-white/20 tracking-[0.4em]">THE PEOPLE</span>
        </div>

        {/* "PEOPLE" — split PE + OPLE */}
        <div className="relative z-10 flex items-end gap-0 leading-none -mb-2">
          <h1
            className="font-black tracking-tighter wipe-in"
            style={{
              fontSize: "clamp(2rem, 6vw, 6rem)",
              color: "transparent",
              WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) rgba(240,238,233,0.6)",
              fontFamily: "var(--font-geist-sans)",
              lineHeight: 0.85,
            }}
          >
            PE
          </h1>
          <h1
            className="font-black tracking-tighter"
            style={{
              fontSize: "clamp(2rem, 6vw, 6rem)",
              color: "#CAFF00",
              fontFamily: "var(--font-geist-sans)",
              lineHeight: 0.85,
            }}
          >
            OPLE
          </h1>
        </div>
      </section>

      {/* ── TEAM ENTRIES ── */}
      <section className="flex-1 flex flex-col px-8 md:px-14 min-h-0">

        {/* Column headers */}
        <div className="grid grid-cols-12 gap-6 py-1.5 border-b border-white/[0.06] text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase mt-2 shrink-0">
          <span className="col-span-1">ID</span>
          <span className="col-span-2">Portrait</span>
          <span className="col-span-3">Identity</span>
          <span className="col-span-5">Bio</span>
          <span className="col-span-1 text-right">Since</span>
        </div>

        {/* Rows — each takes equal share of remaining height */}
        <div className="flex-1 flex flex-col min-h-0">
          {team.map(({ id, name, role, bio, tags, since, photo, initials }) => (
            <div
              key={id}
              className="flex-1 grid grid-cols-12 gap-6 border-b border-white/[0.04] items-center group hover:bg-white/[0.012] transition-colors px-0"
            >
              {/* ID */}
              <span className="col-span-1 text-[9px] font-mono text-[#CAFF00]/25 tracking-widest">{id}</span>

              {/* Portrait */}
              <div className="col-span-2 flex items-center">
                <div
                  className="relative overflow-hidden bg-white/[0.04] border border-white/[0.07] flex items-center justify-center"
                  style={{ width: "clamp(48px, 5vw, 80px)", height: "clamp(48px, 5vw, 80px)" }}
                >
                  {photo ? (
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      className="object-cover grayscale"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 pointer-events-none"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(202,255,0,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(202,255,0,0.05) 1px, transparent 1px)
                          `,
                          backgroundSize: "14px 14px"
                        }}
                      />
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-[#CAFF00]/10" />
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#CAFF00]/10" />
                      <span
                        className="relative font-black text-white/25 z-10"
                        style={{ fontSize: "clamp(0.7rem, 1.1vw, 1.1rem)", fontFamily: "var(--font-geist-sans)" }}
                      >
                        {initials}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Identity */}
              <div className="col-span-3 flex flex-col gap-2">
                <div>
                  <p
                    className="font-black tracking-tight leading-none text-[#F0EEE9] mb-1"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.75rem)", fontFamily: "var(--font-geist-sans)" }}
                  >
                    {name}
                  </p>
                  <p className="text-[9px] font-mono text-[#CAFF00]/60 tracking-[0.2em] uppercase">{role}</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] font-mono tracking-widest text-white/25 border border-white/[0.08] px-1.5 py-0.5 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="col-span-5">
                <p className="text-white/40 text-sm leading-relaxed">{bio}</p>
              </div>

              {/* Since */}
              <div className="col-span-1 text-right">
                <span className="text-[9px] font-mono text-white/20 tracking-widest">{since}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] px-8 md:px-14 py-3 flex items-center justify-between shrink-0">
        <Link href="/" className="group flex items-center gap-2 text-[9px] font-mono text-white/20 hover:text-white/60 tracking-widest uppercase transition-colors">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          Back to Index
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-[9px] font-mono text-white/15 tracking-widest">CAPACITY: SELECTIVE · REMOTE-FIRST</span>
          <a
            href="mailto:hello@limiarcore.dev"
            className="flex items-center gap-2 px-4 py-1.5 bg-[#CAFF00] text-black text-[9px] font-black tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Work with us →
          </a>
        </div>
        <span className="text-[9px] font-mono text-white/15 tracking-widest">© 2025 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
