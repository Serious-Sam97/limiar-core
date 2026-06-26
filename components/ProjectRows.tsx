"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, type CSSProperties } from "react";

export type Project = {
  id: string;
  name: string;
  blurb: string;
  category: string;
  year: string;
  status: string;
  icon: string;
  url: string;
  images?: string[];
  details?: string;
};

export type RowLabels = {
  visit: string;
  soon: string;
  visitSite: string;
  noPreview: string;
};

const DEFAULT_LABELS: RowLabels = {
  visit: "Visit",
  soon: "Soon",
  visitSite: "Visit site →",
  noPreview: "No preview yet",
};

export default function ProjectRows({
  projects,
  accent = "#CAFF00",
  labels = DEFAULT_LABELS,
  statusLabels,
}: {
  projects: Project[];
  accent?: string;
  labels?: RowLabels;
  statusLabels?: Record<string, string>;
}) {
  const statusText = (s: string) => statusLabels?.[s] ?? s;
  const [active, setActive] = useState<Project | null>(null);
  const [slide, setSlide] = useState(0);

  const accentVars = { "--accent": accent } as CSSProperties;

  const open = (p: Project) => {
    setActive(p);
    setSlide(0);
  };
  const close = useCallback(() => setActive(null), []);

  const images = active?.images ?? [];
  const count = images.length;
  const next = useCallback(() => setSlide((s) => (count ? (s + 1) % count : 0)), [count]);
  const prev = useCallback(() => setSlide((s) => (count ? (s - 1 + count) % count : 0)), [count]);

  // Keyboard nav + body scroll lock while the modal is open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      {projects.map((p) => {
        const { id, name, blurb, category, year, status, icon, url } = p;
        const isLive = status === "LIVE";

        return (
          <div
            key={id}
            style={accentVars}
            className="grid grid-cols-12 gap-4 py-6 border-b border-white/[0.03] items-center group hover:bg-white/[0.012] transition-colors"
          >
            <span className="col-span-1 text-[9px] font-mono tracking-widest opacity-50" style={{ color: accent }}>
              {id}
            </span>

            {/* Icon — opens modal */}
            <div className="col-span-2">
              <button
                type="button"
                onClick={() => open(p)}
                aria-label={`Open ${name} details`}
                className="relative w-14 h-14 md:w-20 md:h-20 border border-white/[0.1] bg-white/[0.03] flex items-center justify-center overflow-hidden cursor-pointer hover:border-white/30 transition-colors"
              >
                {icon ? (
                  <Image src={icon} alt={`${name} icon`} fill className="object-cover" />
                ) : (
                  <span
                    className="font-black text-white/40 group-hover:text-[var(--accent)] transition-colors text-xl md:text-3xl"
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {name.charAt(0)}
                  </span>
                )}
              </button>
            </div>

            {/* Name — opens modal */}
            <div className="col-span-3 flex flex-col gap-1 items-start">
              <button
                type="button"
                onClick={() => open(p)}
                className="text-left text-xl md:text-2xl font-black tracking-tight leading-none text-[#F0EEE9] hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                {name}
              </button>
              <span className="text-white/55 text-xs leading-snug">{blurb}</span>
            </div>

            <div className="col-span-2">
              <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">{category}</span>
            </div>

            <div className="col-span-1">
              <span className="text-[10px] font-mono tracking-widest text-white/50">{year}</span>
            </div>

            <div className="col-span-1 flex justify-end">
              <span
                className="text-[8px] font-mono tracking-widest border px-1.5 py-0.5"
                style={
                  isLive
                    ? { color: accent, borderColor: `${accent}66` }
                    : { color: "rgba(240,238,233,0.55)", borderColor: "rgba(255,255,255,0.12)" }
                }
              >
                {statusText(status)}
              </span>
            </div>

            {/* Access button */}
            <div className="col-span-2 flex justify-end">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-black text-[9px] font-black tracking-widest uppercase hover:opacity-90 transition-opacity"
                  style={{ background: accent }}
                >
                  {labels.visit}
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              ) : (
                <span className="inline-flex items-center px-3 py-1.5 border border-white/[0.12] text-white/40 text-[9px] font-black tracking-widest uppercase cursor-not-allowed">
                  {labels.soon}
                </span>
              )}
            </div>
          </div>
        );
      })}

      {/* ── DETAIL MODAL ── */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} details`}
          style={accentVars}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={close} />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#0A0A0A] border border-white/[0.1] flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 md:px-8 py-5 border-b border-white/[0.06] shrink-0">
              <div className="flex items-center gap-3">
                {active.icon && (
                  <div className="relative w-10 h-10 border border-white/[0.1] overflow-hidden shrink-0">
                    <Image src={active.icon} alt="" fill className="object-cover" />
                  </div>
                )}
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-black tracking-tight leading-none"
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {active.name}
                  </h2>
                  <p className="text-[9px] font-mono tracking-[0.25em] text-white/45 uppercase mt-1.5">
                    {active.category} · {active.year}
                  </p>
                </div>
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="text-white/40 hover:text-white text-lg leading-none px-1 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Carousel */}
            <div className="relative bg-black w-full aspect-video overflow-hidden border-b border-white/[0.06] shrink-0">
              {count > 0 ? (
                <>
                  {images.map((src, i) => (
                    <Image
                      key={src + i}
                      src={src}
                      alt={`${active.name} screenshot ${i + 1}`}
                      fill
                      className={`object-contain transition-opacity duration-300 ${i === slide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    />
                  ))}

                  {count > 1 && (
                    <>
                      <button
                        onClick={prev}
                        aria-label="Previous image"
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 text-white text-xl transition-colors"
                      >
                        ‹
                      </button>
                      <button
                        onClick={next}
                        aria-label="Next image"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 text-white text-xl transition-colors"
                      >
                        ›
                      </button>
                      <span className="absolute top-3 right-3 text-[9px] font-mono tracking-widest text-white/70 bg-black/50 px-2 py-0.5">
                        {slide + 1} / {count}
                      </span>
                      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setSlide(i)}
                            aria-label={`Go to image ${i + 1}`}
                            className="w-1.5 h-1.5 rounded-full transition-colors"
                            style={{ background: i === slide ? accent : "rgba(255,255,255,0.25)" }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                  <span
                    className="font-black text-white/10 leading-none"
                    style={{ fontSize: "5rem", fontFamily: "var(--font-geist-sans)" }}
                  >
                    {active.name.charAt(0)}
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.3em] text-white/30 uppercase">{labels.noPreview}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="px-6 md:px-8 py-6 flex flex-col gap-5">
              <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                {active.details?.trim() ? active.details : active.blurb}
              </p>
              <div className="flex items-center gap-3 pt-1">
                {active.url && (
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-black text-[9px] font-black tracking-widest uppercase hover:opacity-90 transition-opacity"
                    style={{ background: accent }}
                  >
                    {labels.visitSite}
                  </a>
                )}
                <span
                  className="text-[8px] font-mono tracking-widest border px-1.5 py-0.5"
                  style={
                    active.status === "LIVE"
                      ? { color: accent, borderColor: `${accent}66` }
                      : { color: "rgba(240,238,233,0.55)", borderColor: "rgba(255,255,255,0.12)" }
                  }
                >
                  {statusText(active.status)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
