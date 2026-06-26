import type { Project } from "@/components/ProjectRows";
import type { Localized } from "@/lib/i18n";

// Source shape: translatable prose carries both languages.
export type ClientSource = Omit<Project, "blurb" | "category" | "details"> & {
  blurb: Localized;
  category: Localized;
  details: Localized;
};

// ── Edit client details here ───────────────────────────────
// Shared by the Clients page (table + case-study modal) and the
// "Trusted by" strip on the landing page.
//
// name:     client / company name.
// blurb:    one-line summary (per language) of what we did for them.
// category: their industry or sector (per language).
// year:     "since" — when the engagement started.
// status:   "ACTIVE" | "ONGOING" | "DELIVERED" (use "LIVE" to tint it green).
// icon:     logo in /public (e.g. "/clients/acme.png"), or "" for a monogram.
// url:      their site — renders a "Visit" button; "" renders "Soon".
// images:   screenshots for the case-study modal carousel.
// details:  longer case-study text (per language); falls back to blurb.
export const clients: ClientSource[] = [
  {
    id: "CL-001",
    name: "Rodrigo Guedes",
    blurb: {
      "pt-br": "Desde 2009, a Rodrigo Guedes atua com o propósito de integrar pessoas e conectar ideias, superando barreiras linguísticas e culturais com precisão e eficiência. Fundada por Rodrigo Guedes, tradutor público e intérprete comercial devidamente concursado, a empresa consolidou-se como referência no mercado brasileiro de traduções oficiais e serviços linguísticos em inglês e português.",
      "en-us": "Since 2009, Rodrigo Guedes has worked to bring people together and connect ideas, overcoming language and cultural barriers with precision and efficiency. Founded by Rodrigo Guedes — a duly certified public sworn translator and commercial interpreter — the company has become a benchmark in the Brazilian market for official translations and English–Portuguese language services.",
    },
    category: { "pt-br": "Tradução", "en-us": "Translation" },
    year: "2026",
    status: "ACTIVE",
    icon: "/clients/client-01.jpg",
    url: "https://www.rodrigoguedes.com.br/quemsomos",
    images: ["/clients/client-01-img.png"],
    details: {
      "pt-br": "Desde 2009, a Rodrigo Guedes atua com o propósito de integrar pessoas e conectar ideias, superando barreiras linguísticas e culturais com precisão e eficiência. Fundada por Rodrigo Guedes, tradutor público e intérprete comercial devidamente concursado, a empresa consolidou-se como referência no mercado brasileiro de traduções oficiais e serviços linguísticos em inglês e português.",
      "en-us": "Since 2009, Rodrigo Guedes has worked to bring people together and connect ideas, overcoming language and cultural barriers with precision and efficiency. Founded by Rodrigo Guedes — a duly certified public sworn translator and commercial interpreter — the company has become a benchmark in the Brazilian market for official translations and English–Portuguese language services.",
    },
  },
];
