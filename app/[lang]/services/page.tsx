import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { isLocale, t, type Localized } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export const metadata = {
  title: "Services — Limiar Core",
};

type ServiceSource = {
  id: string;
  name: Localized;
  description: Localized;
  tags: string[];
  deliverable: Localized;
};

const services: ServiceSource[] = [
  {
    id: "SV-01",
    name: { "en-us": "Product Engineering", "pt-br": "Engenharia de Produto" },
    description: {
      "en-us": "Full-cycle development from architecture to deployment. Web, mobile, APIs — built to last and easy to hand off.",
      "pt-br": "Desenvolvimento de ponta a ponta, da arquitetura ao deploy. Web, mobile, APIs — feitos para durar e fáceis de manter.",
    },
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
    deliverable: { "en-us": "Working software", "pt-br": "Software funcionando" },
  },
  {
    id: "SV-02",
    name: { "en-us": "Quality Assurance", "pt-br": "Garantia de Qualidade" },
    description: {
      "en-us": "Systematic testing that catches what slips through. Manual, automated, regression — nothing ships unverified.",
      "pt-br": "Testes sistemáticos que pegam o que passa batido. Manual, automatizado, regressão — nada vai para produção sem verificação.",
    },
    tags: ["Test Strategy", "Automation", "CI/CD", "Coverage"],
    deliverable: { "en-us": "Confidence to ship", "pt-br": "Confiança para entregar" },
  },
  {
    id: "SV-03",
    name: { "en-us": "System Architecture", "pt-br": "Arquitetura de Sistemas" },
    description: {
      "en-us": "Scalable backend design built for the traffic you don't have yet. Database modelling, infra planning, API design.",
      "pt-br": "Backend escalável projetado para o tráfego que você ainda não tem. Modelagem de dados, planejamento de infra, design de APIs.",
    },
    tags: ["Architecture", "Databases", "Cloud", "APIs"],
    deliverable: { "en-us": "Systems that scale", "pt-br": "Sistemas que escalam" },
  },
  {
    id: "SV-04",
    name: { "en-us": "Technical Consulting", "pt-br": "Consultoria Técnica" },
    description: {
      "en-us": "Stack audits, code reviews, team acceleration. We come in, assess what's broken, and tell you plainly how to fix it.",
      "pt-br": "Auditoria de stack, code reviews, aceleração de times. Entramos, avaliamos o que está quebrado e dizemos claramente como resolver.",
    },
    tags: ["Audit", "Code Review", "Strategy", "Advisory"],
    deliverable: { "en-us": "Clear direction", "pt-br": "Direção clara" },
  },
  {
    id: "SV-05",
    name: { "en-us": "Business & Product Strategy", "pt-br": "Estratégia de Negócio e Produto" },
    description: {
      "en-us": "Positioning, roadmapping, GTM. We help you figure out what to build before you spend time building the wrong thing.",
      "pt-br": "Posicionamento, roadmap, GTM. Ajudamos você a definir o que construir antes de gastar tempo construindo a coisa errada.",
    },
    tags: ["Roadmap", "GTM", "Positioning", "Growth"],
    deliverable: { "en-us": "Product-market clarity", "pt-br": "Clareza de produto e mercado" },
  },
];

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main className="h-screen bg-[#080808] text-[#F0EEE9] flex flex-col overflow-hidden">

      <SiteHeader lang={lang} dict={dict} active="services" />

      {/* ── TITLE SECTION ── */}
      <section className="px-8 md:px-14 pt-2 pb-0 border-b border-white/[0.06] relative overflow-hidden">
        <span
          className="absolute top-0 right-0 leading-none font-black text-white/[0.015] select-none pointer-events-none"
          style={{ fontSize: "38vw", lineHeight: 0.8, fontFamily: "var(--font-geist-sans)" }}
        >
          S
        </span>

        <div className="flex items-center gap-4 mb-1 relative z-10">
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">05</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">{dict.services.eyebrow}</span>
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
            {dict.titles.services[0]}
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
            {dict.titles.services[1]}
          </h1>
        </div>
      </section>

      {/* ── SERVICE ROWS ── */}
      <section className="flex-1 flex flex-col px-8 md:px-14 min-h-0">

        <div className="grid grid-cols-12 gap-6 py-1.5 border-b border-white/[0.06] text-[9px] font-mono tracking-[0.3em] text-white/45 uppercase mt-2 shrink-0">
          <span className="col-span-1">{dict.cols.id}</span>
          <span className="col-span-3">{dict.cols.service}</span>
          <span className="col-span-5">{dict.cols.description}</span>
          <span className="col-span-2">{dict.cols.stackFocus}</span>
          <span className="col-span-1 text-right">{dict.cols.output}</span>
        </div>

        <div className="flex-1 flex flex-col min-h-0">
          {services.map((s) => (
            <div
              key={s.id}
              className="flex-1 grid grid-cols-12 gap-6 border-b border-white/[0.04] items-center group hover:bg-white/[0.012] transition-colors"
            >
              <span className="col-span-1 text-[9px] font-mono text-[#CAFF00]/50 tracking-widest">{s.id}</span>

              <div className="col-span-3">
                <p
                  className="font-black tracking-tight leading-none text-[#F0EEE9] mb-1 group-hover:text-[#CAFF00] transition-colors"
                  style={{ fontSize: "clamp(0.85rem, 1.3vw, 1.4rem)", fontFamily: "var(--font-geist-sans)" }}
                >
                  {t(s.name, lang)}
                </p>
              </div>

              <div className="col-span-5">
                <p className="text-white/65 text-sm leading-relaxed">{t(s.description, lang)}</p>
              </div>

              <div className="col-span-2 flex flex-wrap gap-1">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[8px] font-mono tracking-widest text-white/45 border border-white/[0.08] px-1.5 py-0.5 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="col-span-1 text-right">
                <span className="text-[8px] font-mono text-white/45 tracking-widest leading-tight block">{t(s.deliverable, lang)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] px-8 md:px-14 py-3 flex items-center justify-between shrink-0">
        <Link href={`/${lang}`} className="group flex items-center gap-2 text-[9px] font-mono text-white/45 hover:text-white/80 tracking-widest uppercase transition-colors">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          {dict.common.backToIndex}
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-[9px] font-mono text-white/40 tracking-widest">{dict.services.footerNote}</span>
          <Link
            href={`/${lang}/contact`}
            className="flex items-center gap-2 px-4 py-1.5 bg-[#CAFF00] text-black text-[9px] font-black tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            {dict.services.startProject}
          </Link>
        </div>
        <span className="text-[9px] font-mono text-white/40 tracking-widest">© 2026 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
