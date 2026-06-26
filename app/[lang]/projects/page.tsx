import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import ProjectRows, { type Project } from "@/components/ProjectRows";
import { isLocale, t, type Localized } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export const metadata = {
  title: "Work — Limiar Core",
};

// ── Edit project details here ──────────────────────────────
// blurb / category / details carry both languages via { "pt-br", "en-us" }.
type ProjectSource = Omit<Project, "blurb" | "category" | "details"> & {
  blurb: Localized;
  category: Localized;
  details: Localized;
};

const projects: ProjectSource[] = [
  {
    id: "LC-001",
    name: "Parliamo",
    blurb: {
      "en-us": "Corporate communication platform: workspaces, channels, real-time messaging, DMs, and voice/video calls.",
      "pt-br": "Plataforma de comunicação corporativa: workspaces, canais, mensagens em tempo real, DMs e chamadas de voz/vídeo.",
    },
    category: { "en-us": "Web · Product", "pt-br": "Web · Produto" },
    year: "2026",
    status: "IN BUILD",
    icon: "/parliamo.png",
    url: "https://www.parliamo.com.br",
    images: ["/parliamo01.png", "/parliamo02.png"],
    details: {
      "en-us": "Parliamo is the real-time collaboration platform that turns corporate conversations into real productivity. By combining topic-based channels, direct messaging, and smart integrations within a fluid, intuitive interface, Parliamo is designed to bring teams closer, align projects, and eliminate the noise of daily communication—because collaboration should be as natural as a good conversation.",
      "pt-br": "O Parliamo é a plataforma de colaboração em tempo real que transforma conversas corporativas em produtividade real. Combinando canais por tópico, mensagens diretas e integrações inteligentes em uma interface fluida e intuitiva, o Parliamo foi projetado para aproximar equipes, alinhar projetos e eliminar o ruído da comunicação diária — porque colaborar deveria ser tão natural quanto uma boa conversa.",
    },
  },
  {
    id: "LC-002",
    name: "Yondra",
    blurb: {
      "en-us": `Yondra is a streamlined project management platform built for modern dev teams — think Jira, without the bloat.
Track issues, plan sprints, and ship faster with an interface that gets out of your way. From backlog grooming to deployment, Yondra keeps your team aligned and your workflow moving.
Built for teams who actually ship.`,
      "pt-br": `O Yondra é uma plataforma enxuta de gestão de projetos feita para times de desenvolvimento modernos — como o Jira, sem o excesso.
Acompanhe tarefas, planeje sprints e entregue mais rápido com uma interface que sai do seu caminho. Do refinamento do backlog ao deploy, o Yondra mantém seu time alinhado e o fluxo em movimento.
Feito para times que realmente entregam.`,
    },
    category: { "en-us": "Web · Product", "pt-br": "Web · Produto" },
    year: "2026",
    status: "IN BUILD",
    icon: "/yondra.png",
    url: "https://www.yondra.net",
    images: ["/yondra01.png", "/yondra02.png", "/yondra03.png"],
    details: {
      "en-us": `Yondra is a streamlined project management platform built for modern dev teams — think Jira, without the bloat.
Track issues, plan sprints, and ship faster with an interface that gets out of your way. From backlog grooming to deployment, Yondra keeps your team aligned and your workflow moving.
Built for teams who actually ship.`,
      "pt-br": `O Yondra é uma plataforma enxuta de gestão de projetos feita para times de desenvolvimento modernos — como o Jira, sem o excesso.
Acompanhe tarefas, planeje sprints e entregue mais rápido com uma interface que sai do seu caminho. Do refinamento do backlog ao deploy, o Yondra mantém seu time alinhado e o fluxo em movimento.
Feito para times que realmente entregam.`,
    },
  },
];

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const rows: Project[] = projects.map((p) => ({
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

      <SiteHeader lang={lang} dict={dict} active="work" />

      {/* ── MASSIVE TITLE ── */}
      <section className="px-8 md:px-14 pt-10 pb-0 border-b border-white/[0.06] relative overflow-hidden">
        <span
          className="absolute top-0 right-0 leading-none font-black text-white/[0.015] select-none pointer-events-none"
          style={{ fontSize: "38vw", lineHeight: 0.8, fontFamily: "var(--font-geist-sans)" }}
        >
          W
        </span>

        <div className="flex items-center gap-4 mb-4 relative z-10">
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">03</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">{dict.work.eyebrow}</span>
        </div>

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
            {dict.titles.work[0]}
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
            {dict.titles.work[1]}
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
          {dict.common.allSystemsGo}
        </div>
        <span className="text-[9px] font-mono text-white/40 tracking-widest">© 2026 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
