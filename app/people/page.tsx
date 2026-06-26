import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "People — Limiar Core",
};

const team = [
  {
    id: "LC-P01",
    name: "Gabriel Freitas",
    role: "Founder & Senior Quality Engineer",
    bio: `At LimiarCore, I believe that quality is not merely a final step, but the very foundation of any successful digital business. I bring the experience of having ensured the stability and security of high-impact systems (such as those at Serasa Experian) and apply a "Shift-Left Testing" culture—meaning we focus on preventing failures from the very first meeting where your idea is conceived.

I lead our automated testing strategy (UI, E2E, and API) and delivery pipelines (CI/CD) to ensure that every line of code our team delivers translates into a seamless experience for your end user. To me, good code is code that drives results without the headaches.`,
    tags: ["Quality", "Testing", "Precision"],
    since: "2026",
    photo: '/gabriel.jpeg',
    initials: "GL",
    linkedin: 'https://www.linkedin.com/in/freitasgabis/',
    github: 'https://github.com/Gabriellsf9',
  },
  {
    id: "LC-P02",
    name: "Rafael Godoy",
    role: "Founder & Senior Software Engineer",
    bio: "With 8 years of experience as a software engineer, I specialize in backend development while maintaining solid skills across web technologies, including PHP, Node.js, Golang, Vue.js, React, and React Native. My career has covered diverse domains such as ERP systems at EDUXE, marketplaces, chat platforms, and mobile development at Turno. I also gained experience in the lottery and prediction games industry with blockchain at Avem.",
    tags: ["Engineering", "Architecture", "Backend"],
    since: "2026",
    photo: '/rafael.jpg',
    initials: "RG",
    linkedin: 'https://www.linkedin.com/in/rafael-ls-godoy',
    github: 'https://github.com/Rarfael',
  },
  {
    id: "LC-P03",
    name: "Rudney Forti",
    role: "Founder & Senior Business",
    bio: `Technology specialist working in connectivity and the digital transformation of national industry, committed to closing the digital divide in rural areas.
Background in Networks, Internet Systems, and Computer Engineering, with national awards in integrated projects and computer networking.`,
    tags: ["Business", "Strategy", "Growth"],
    since: "2026",
    photo: '/rudney.jpg',
    initials: "RF",
    linkedin: 'https://www.linkedin.com/in/rudney-forti',
    github: 'https://github.com/RudneyForti',
  },
  {
    id: "LC-P04",
    name: "Samir Antoun Aniz",
    role: "Senior Founder & Senior Software Engineer",
    bio: `Fullstack Developer and Software Architect with over 8 years of experience delivering robust and scalable systems for companies in Brazil and abroad. Solid background in both backend (Java, PHP) and modern frontend (React, Vue.js), working across monolithic and microservices architectures. Experienced in cloud and on-premises projects, always focused on code quality, security, and performance. Skilled at translating business needs into clear technical solutions, managing the full development lifecycle from design to deployment.`,
    tags: ["Engineering", "Product", "Leadership"],
    since: "2026",
    photo: '/sam.jpg',
    initials: "SA",
    linkedin: 'https://www.linkedin.com/in/samir-antoun-freitas-aniz',
    github: 'https://github.com/Serious-Sam97',
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
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/55 uppercase">Limiar Core</span>
          <span className="text-white/20">·</span>
          <span className="text-[9px] font-mono tracking-[0.2em] text-white/40 border border-white/15 px-1.5 py-0.5">Software House</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {[["Index", "/"], ["Work", "/projects"], ["Lab", "/experimental"], ["People", "/people"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href}
              className={`text-[10px] tracking-widest font-mono transition-colors ${label === "People" ? "text-[#CAFF00]" : "text-white/55 hover:text-white"}`}
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
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">04</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">THE PEOPLE</span>
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
        <div className="grid grid-cols-12 gap-6 py-1.5 border-b border-white/[0.06] text-[9px] font-mono tracking-[0.3em] text-white/45 uppercase mt-2 shrink-0">
          <span className="col-span-1">ID</span>
          <span className="col-span-2">Portrait</span>
          <span className="col-span-3">Identity</span>
          <span className="col-span-5">Bio</span>
          <span className="col-span-1 text-right">Since</span>
        </div>

        {/* Rows — each takes equal share of remaining height */}
        <div className="flex-1 flex flex-col min-h-0">
          {team.map(({ id, name, role, bio, tags, since, photo, initials, linkedin, github }) => (
            <div
              key={id}
              className="flex-1 grid grid-cols-12 gap-6 border-b border-white/[0.04] items-center group hover:bg-white/[0.012] transition-colors px-0"
            >
              {/* ID */}
              <span className="col-span-1 text-[9px] font-mono text-[#CAFF00]/50 tracking-widest">{id}</span>

              {/* Portrait */}
              <div className="col-span-2 flex items-center">
                <div
                  className="relative overflow-hidden bg-white/[0.04] border border-white/[0.07] flex items-center justify-center"
                  style={{ width: "clamp(48px, 13vw, 230px)", height: "clamp(48px, 13vw, 230px)" }}
                >
                  {photo ? (
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      className="object-cover"
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
                        className="relative font-black text-white/50 z-10"
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
                  <div className="flex justify-start mb-1">
                    <p
                      className="font-black tracking-tight leading-none text-[#F0EEE9] pr-2"
                      style={{ fontSize: "clamp(1rem, 1.6vw, 1.75rem)", fontFamily: "var(--font-geist-sans)" }}
                    >
                      {name}
                    </p>
                    <div className="flex justify-start">
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="inline-flex items-center justify-center opacity-90 transition-opacity hover:opacity-100 pr-2"
                        style={{ color: "#0A66C2" }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                        </svg>
                      </a>
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="inline-flex items-center justify-center opacity-90 transition-opacity hover:opacity-100"
                        style={{ color: "#ffffff" }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="text-[9px] font-mono text-[#CAFF00]/80 tracking-[0.2em] uppercase">{role}</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] font-mono tracking-widest text-white/45 border border-white/[0.08] px-1.5 py-0.5 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="col-span-5">
                <p className="text-white/65 text-sm leading-relaxed">{bio}</p>
              </div>

              {/* Since */}
              <div className="col-span-1 text-right">
                <span className="text-[9px] font-mono text-white/50 tracking-widest">{since}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] px-8 md:px-14 py-3 flex items-center justify-between shrink-0">
        <Link href="/" className="group flex items-center gap-2 text-[9px] font-mono text-white/45 hover:text-white/80 tracking-widest uppercase transition-colors">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          Back to Index
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-[9px] font-mono text-white/40 tracking-widest">CAPACITY: SELECTIVE · REMOTE-FIRST</span>
          <a
            href="mailto:hello@limiarcore.dev"
            className="flex items-center gap-2 px-4 py-1.5 bg-[#CAFF00] text-black text-[9px] font-black tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Work with us →
          </a>
        </div>
        <span className="text-[9px] font-mono text-white/40 tracking-widest">© 2026 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
