import Link from "next/link";

export const metadata = {
  title: "Services — Limiar Core",
};

const services = [
  {
    id: "SV-01",
    name: "Product Engineering",
    description:
      "Full-cycle development from architecture to deployment. Web, mobile, APIs — built to last and easy to hand off.",
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
    deliverable: "Working software",
  },
  {
    id: "SV-02",
    name: "Quality Assurance",
    description:
      "Systematic testing that catches what slips through. Manual, automated, regression — nothing ships unverified.",
    tags: ["Test Strategy", "Automation", "CI/CD", "Coverage"],
    deliverable: "Confidence to ship",
  },
  {
    id: "SV-03",
    name: "System Architecture",
    description:
      "Scalable backend design built for the traffic you don't have yet. Database modelling, infra planning, API design.",
    tags: ["Architecture", "Databases", "Cloud", "APIs"],
    deliverable: "Systems that scale",
  },
  {
    id: "SV-04",
    name: "Technical Consulting",
    description:
      "Stack audits, code reviews, team acceleration. We come in, assess what's broken, and tell you plainly how to fix it.",
    tags: ["Audit", "Code Review", "Strategy", "Advisory"],
    deliverable: "Clear direction",
  },
  {
    id: "SV-05",
    name: "Business & Product Strategy",
    description:
      "Positioning, roadmapping, GTM. We help you figure out what to build before you spend time building the wrong thing.",
    tags: ["Roadmap", "GTM", "Positioning", "Growth"],
    deliverable: "Product-market clarity",
  },
];

export default function ServicesPage() {
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
              className={`text-[10px] tracking-widest font-mono transition-colors ${label === "Services" ? "text-[#CAFF00]" : "text-white/30 hover:text-white"}`}
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
        <span
          className="absolute top-0 right-0 leading-none font-black text-white/[0.015] select-none pointer-events-none"
          style={{ fontSize: "38vw", lineHeight: 0.8, fontFamily: "var(--font-geist-sans)" }}
        >
          S
        </span>

        <div className="flex items-center gap-4 mb-1 relative z-10">
          <span className="text-[9px] font-mono text-white/20 tracking-[0.4em]">05</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[9px] font-mono text-white/20 tracking-[0.4em]">WHAT WE DO</span>
        </div>

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
            SERVI
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
            CES
          </h1>
        </div>
      </section>

      {/* ── SERVICE ROWS ── */}
      <section className="flex-1 flex flex-col px-8 md:px-14 min-h-0">

        <div className="grid grid-cols-12 gap-6 py-1.5 border-b border-white/[0.06] text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase mt-2 shrink-0">
          <span className="col-span-1">ID</span>
          <span className="col-span-3">Service</span>
          <span className="col-span-5">Description</span>
          <span className="col-span-2">Stack / Focus</span>
          <span className="col-span-1 text-right">Output</span>
        </div>

        <div className="flex-1 flex flex-col min-h-0">
          {services.map(({ id, name, description, tags, deliverable }) => (
            <div
              key={id}
              className="flex-1 grid grid-cols-12 gap-6 border-b border-white/[0.04] items-center group hover:bg-white/[0.012] transition-colors"
            >
              <span className="col-span-1 text-[9px] font-mono text-[#CAFF00]/25 tracking-widest">{id}</span>

              <div className="col-span-3">
                <p
                  className="font-black tracking-tight leading-none text-[#F0EEE9] mb-1 group-hover:text-[#CAFF00] transition-colors"
                  style={{ fontSize: "clamp(0.85rem, 1.3vw, 1.4rem)", fontFamily: "var(--font-geist-sans)" }}
                >
                  {name}
                </p>
              </div>

              <div className="col-span-5">
                <p className="text-white/40 text-sm leading-relaxed">{description}</p>
              </div>

              <div className="col-span-2 flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[8px] font-mono tracking-widest text-white/25 border border-white/[0.08] px-1.5 py-0.5 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="col-span-1 text-right">
                <span className="text-[8px] font-mono text-white/20 tracking-widest leading-tight block">{deliverable}</span>
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
          <span className="text-[9px] font-mono text-white/15 tracking-widest">TAILORED TO YOUR PROBLEM</span>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-1.5 bg-[#CAFF00] text-black text-[9px] font-black tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Start a project →
          </Link>
        </div>
        <span className="text-[9px] font-mono text-white/15 tracking-widest">© 2025 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
