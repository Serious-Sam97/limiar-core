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
    icon: "/parliamo/parliamo.png",
    url: "https://www.parliamo.com.br",
    images: ["/parliamo/01.jpeg", "/parliamo/02.jpeg", "/parliamo/03.jpeg", "/parliamo/04.jpeg", "/parliamo/05.jpeg", "/parliamo/06.jpeg", "/parliamo/07.jpeg", "/parliamo/08.jpeg"],
    // images: ["/parliamo/parliamo01.png", "/parliamo/parliamo02.png"],
    details: {
      "en-us": `Parliamo is where your company's work happens — and stays on the record.

Channels, threads and direct messages for the everyday. Voice and video calls with live transcription, each person reading in their own language, and the minutes ready the moment the meeting ends.

Inside that same conversation you open the document the team writes together, the whiteboard with no edges, and the editor where the interface gets designed. None of them needs AI to work — it steps in when you call for it.

And the intelligence running through all of it has no privileges of its own: it reaches exactly what you could already open. Never one message more.

Web, desktop and mobile, on the same backend. Self-hosted, if that's what you want — your data stays where you put it.`,
      "pt-br": `O Parliamo é onde o trabalho da sua empresa acontece — e fica registrado.

Canais, threads e mensagens diretas para o dia a dia. Chamadas de voz e vídeo com transcrição ao vivo, cada pessoa lendo no próprio idioma, e a ata pronta quando a reunião acaba.

Dentro da mesma conversa abrem o documento que o time escreve junto, o quadro branco de superfície infinita e o editor onde a interface é desenhada. Nenhum deles depende de IA para funcionar: ela entra quando você chama.

E a inteligência que atravessa tudo isso não tem privilégio nenhum — ela alcança exatamente o que você já poderia abrir. Nunca uma mensagem a mais.

Web, computador e celular, sobre o mesmo servidor. E rodando na sua casa, se você quiser: o dado fica onde você mandar.`,
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
    icon: "/yondra/yondra.png",
    url: "https://www.yondra.net",
    images: ["/yondra/01.png", "/yondra/02.png", "/yondra/03.png", "/yondra/04.png", "/yondra/05.png"],
    details: {
      "en-us": `Yondra is a streamlined project management platform built for modern dev teams — think Jira, without the bloat.
Track issues, plan sprints, and ship faster with an interface that gets out of your way. From backlog grooming to deployment, Yondra keeps your team aligned and your workflow moving.
Built for teams who actually ship.`,
      "pt-br": `O Yondra é uma plataforma enxuta de gestão de projetos feita para times de desenvolvimento modernos — como o Jira, sem o excesso.
Acompanhe tarefas, planeje sprints e entregue mais rápido com uma interface que sai do seu caminho. Do refinamento do backlog ao deploy, o Yondra mantém seu time alinhado e o fluxo em movimento.
Feito para times que realmente entregam.`,
    },
  },
  {
    id: "LC-003",
    name: "Melea",
    blurb: {
      "en-us": `Melea is a management system for veterinary clinics, built after a year of listening to veterinarians, receptionists, and clinic owners.

The complaints were always the same: overly complicated systems, mandatory fields that no one uses, and the same data being entered in three different places. The result is familiar—notes are scribbled in a notebook during the week, with everything left to be entered into the system on Friday. Meanwhile, during consultations, the professional's attention shifts to the screen instead of focusing on the animal and the owner.

Melea was designed to solve these two problems.

It covers the entire workflow: scheduling, check-in, the daily queue, and voice-based calling on waiting room TVs; SOAP medical records with AI transcription, digital signatures, and immutable history; prescriptions, vaccination records, and test results; inventory and pharmacy management with tracking for batches, expiration dates, and weight-based dosing; hospitalization, surgery, and grooming services; billing, health plans, cash management, electronic invoice issuance, and direct card terminal integration; as well as broader management tools—staffing, scheduling and time tracking, commissions, approval workflows, performance metrics, and auditing.

Each clinic has its own database, isolated from the others. Access is role-based—reception, exam room, pharmacy, administration—and each device in the clinic can be configured as a specific station: reception, exam room, pharmacy, or display screen. Pet owners have their own portal, featuring their pet's history, scheduling options, and LGPD data privacy rights.

Created by people who know what its like to sit in the waiting room and look at the front desk.`,
      "pt-br": `O Melea é um sistema de gestão para clínicas veterinárias, construído a partir de um ano ouvindo veterinários, recepcionistas e donos de clínica.

A queixa era sempre a mesma: sistema complicado demais, campo obrigatório que ninguém usa, o mesmo dado digitado em três lugares. O resultado é conhecido — anota-se na caderneta durante a semana e deixa-se tudo para lançar na sexta-feira. E, no meio do atendimento, a atenção do profissional vai para a tela em vez de ir para o animal e para o tutor.

O Melea foi desenhado contra esses dois problemas.

Ele cobre o atendimento inteiro: agendamento, check-in, fila do dia e chamada por voz na TV da sala de espera; prontuário SOAP com transcrição por IA, assinatura e histórico que não pode ser alterado; receituário, carteira de vacinas e exames; estoque e farmácia com controle de lote, validade e dose por peso; internação, cirurgia e banho e tosa; faturamento, planos de saúde, caixa, emissão de NFS-e e cobrança direto na maquininha; e a gestão em volta — equipe, escala e ponto, comissões, aprovações, indicadores e auditoria.

Cada clínica tem seu próprio banco de dados, isolado dos demais. O acesso é por papel — recepção, consultório, farmácia, administração — e cada aparelho da clínica pode ser configurado como uma estação: recepção, sala, farmácia ou televisão. O tutor tem portal próprio, com histórico do pet, agendamento e os direitos de LGPD.

Feito por quem senta na cadeira da sala de espera e olha o balcão.`,
    },
    category: { "en-us": "Web · Product", "pt-br": "Web · Produto" },
    year: "2026",
    status: "IN BUILD",
    icon: "/melea/melea.png",
    url: "https://www.melea.com.br",
    images: ["/melea/01.jpeg", "/melea/02.jpeg", "/melea/03.jpeg", "/melea/04.jpeg", "/melea/05.jpeg", "/melea/06.jpeg", "/melea/07.jpeg", ],
    details: {
      "en-us": `Melea is a management system for veterinary clinics, built after a year of listening to veterinarians, receptionists, and clinic owners.

The complaints were always the same: overly complicated systems, mandatory fields that no one uses, and the same data being entered in three different places. The result is familiar—notes are scribbled in a notebook during the week, with everything left to be entered into the system on Friday. Meanwhile, during consultations, the professional's attention shifts to the screen instead of focusing on the animal and the owner.

Melea was designed to solve these two problems.

It covers the entire workflow: scheduling, check-in, the daily queue, and voice-based calling on waiting room TVs; SOAP medical records with AI transcription, digital signatures, and immutable history; prescriptions, vaccination records, and test results; inventory and pharmacy management with tracking for batches, expiration dates, and weight-based dosing; hospitalization, surgery, and grooming services; billing, health plans, cash management, electronic invoice issuance, and direct card terminal integration; as well as broader management tools—staffing, scheduling and time tracking, commissions, approval workflows, performance metrics, and auditing.

Each clinic has its own database, isolated from the others. Access is role-based—reception, exam room, pharmacy, administration—and each device in the clinic can be configured as a specific station: reception, exam room, pharmacy, or display screen. Pet owners have their own portal, featuring their pet's history, scheduling options, and LGPD data privacy rights.

Created by people who know what its like to sit in the waiting room and look at the front desk.`,
      "pt-br": `O Melea é um sistema de gestão para clínicas veterinárias, construído a partir de um ano ouvindo veterinários, recepcionistas e donos de clínica.

A queixa era sempre a mesma: sistema complicado demais, campo obrigatório que ninguém usa, o mesmo dado digitado em três lugares. O resultado é conhecido — anota-se na caderneta durante a semana e deixa-se tudo para lançar na sexta-feira. E, no meio do atendimento, a atenção do profissional vai para a tela em vez de ir para o animal e para o tutor.

O Melea foi desenhado contra esses dois problemas.

Ele cobre o atendimento inteiro: agendamento, check-in, fila do dia e chamada por voz na TV da sala de espera; prontuário SOAP com transcrição por IA, assinatura e histórico que não pode ser alterado; receituário, carteira de vacinas e exames; estoque e farmácia com controle de lote, validade e dose por peso; internação, cirurgia e banho e tosa; faturamento, planos de saúde, caixa, emissão de NFS-e e cobrança direto na maquininha; e a gestão em volta — equipe, escala e ponto, comissões, aprovações, indicadores e auditoria.

Cada clínica tem seu próprio banco de dados, isolado dos demais. O acesso é por papel — recepção, consultório, farmácia, administração — e cada aparelho da clínica pode ser configurado como uma estação: recepção, sala, farmácia ou televisão. O tutor tem portal próprio, com histórico do pet, agendamento e os direitos de LGPD.

Feito por quem senta na cadeira da sala de espera e olha o balcão.`,
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
    readMore: dict.common.readMore,
    readLess: dict.common.readLess,
  };

  return (
    <main className="min-h-screen bg-[#080808] text-[#F0EEE9] flex flex-col">

      <SiteHeader lang={lang} dict={dict} active="work" />

      {/* ── MASSIVE TITLE ── */}
      <section className="px-8 md:px-14 pt-10 pb-3 md:pb-0 border-b border-white/[0.06] relative overflow-hidden">
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

        <div className="relative z-10 flex items-end gap-0 leading-none mb-0 md:-mb-2">
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

        <div className="hidden md:grid grid-cols-12 gap-4 py-3 border-b border-white/[0.06] text-[9px] font-mono tracking-[0.3em] text-white/45 uppercase mt-6 items-center">
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
      <footer className="border-t border-white/[0.06] px-6 md:px-14 py-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 shrink-0">
        <Link href={`/${lang}`} className="group flex items-center gap-2 text-[9px] font-mono text-white/45 hover:text-white/80 tracking-widest uppercase transition-colors">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          {dict.common.backToIndex}
        </Link>
        <div className="hidden sm:flex items-center gap-1.5 text-[9px] font-mono text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse" />
          {dict.common.allSystemsGo}
        </div>
        <span className="text-[9px] font-mono text-white/40 tracking-widest">© 2026 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
