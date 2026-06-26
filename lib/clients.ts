import type { Project } from "@/components/ProjectRows";

// ── Edit client details here ───────────────────────────────
// Shared by the Clients page (table + case-study modal) and the
// "Trusted by" strip on the landing page.
//
// name:     client / company name.
// blurb:    one-line summary of what we did for them.
// category: their industry or sector.
// year:     "since" — when the engagement started.
// status:   "ACTIVE" | "ONGOING" | "DELIVERED" (use "LIVE" to tint it green).
// icon:     logo in /public (e.g. "/clients/acme.png"), or "" for a monogram.
// url:      their site — renders a "Visit" button; "" renders "Soon".
// images:   screenshots for the case-study modal carousel.
// details:  longer case-study text in the modal; falls back to blurb.
export const clients: Project[] = [
  {
    id: "CL-001",
    name: "Rodrigo Guedes",
    blurb: "Desde 2009, a Rodrigo Guedes atua com o propósito de integrar pessoas e conectar ideias, superando barreiras linguísticas e culturais com precisão e eficiência. Fundada por Rodrigo Guedes, tradutor público e intérprete comercial devidamente concursado, a empresa consolidou-se como referência no mercado brasileiro de traduções oficiais e serviços linguísticos em inglês e português.",
    category: "Translation",
    year: "2026",
    status: "ACTIVE",
    icon: "/clients/client-01.jpg",
    url: "https://www.rodrigoguedes.com.br/quemsomos",
    images: [
      '/clients/client-01-img.png',
    ],
    details: "Desde 2009, a Rodrigo Guedes atua com o propósito de integrar pessoas e conectar ideias, superando barreiras linguísticas e culturais com precisão e eficiência. Fundada por Rodrigo Guedes, tradutor público e intérprete comercial devidamente concursado, a empresa consolidou-se como referência no mercado brasileiro de traduções oficiais e serviços linguísticos em inglês e português.",
  },
];
