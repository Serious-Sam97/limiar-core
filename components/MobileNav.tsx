"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const NAV = [
  { key: "index", seg: "", n: "00" },
  { key: "work", seg: "/projects", n: "01" },
  { key: "lab", seg: "/experimental", n: "02" },
  { key: "people", seg: "/people", n: "03" },
  { key: "clients", seg: "/clients", n: "04" },
  { key: "services", seg: "/services", n: "05" },
  { key: "contact", seg: "/contact", n: "06" },
] as const;

// Small-screen navigation: a hamburger that opens a full-screen overlay menu.
// Only rendered below `md`; the desktop nav in SiteHeader stays untouched.
export default function MobileNav({
  lang,
  dict,
  active,
  accent = "#CAFF00",
}: {
  lang: Locale;
  dict: Dictionary;
  active: string;
  accent?: string;
}) {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the overlay is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden flex items-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex flex-col items-center justify-center gap-[5px] w-9 h-9 -mr-1.5"
      >
        <span className="block w-5 h-px" style={{ background: accent }} />
        <span className="block w-5 h-px" style={{ background: accent }} />
        <span className="block w-5 h-px" style={{ background: accent }} />
      </button>

      {open && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[200] flex flex-col bg-[#080808]">
          {/* Overlay header — mirrors the site bar so the close sits where the burger was */}
          <div className="border-b border-white/[0.06] px-6 py-4 flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/55 uppercase">
              Limiar Core
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-white/50 hover:text-white text-xl leading-none w-9 h-9 flex items-center justify-center -mr-2"
            >
              ✕
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 flex flex-col overflow-y-auto">
            {NAV.map(({ key, seg, n }) => {
              const isActive = key === active;
              return (
                <Link
                  key={key}
                  href={`/${lang}${seg}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06] group"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[9px] font-mono text-white/40">{n}</span>
                    <span
                      className="text-2xl font-black tracking-tight uppercase transition-colors"
                      style={{ color: isActive ? accent : "#F0EEE9" }}
                    >
                      {dict.nav[key as keyof typeof dict.nav]}
                    </span>
                  </div>
                  <span className="text-white/25 text-lg group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Footer status */}
          <div className="border-t border-white/[0.06] px-6 py-5 flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: accent }}
            />
            <span className="text-[9px] font-mono tracking-[0.25em] uppercase" style={{ color: `${accent}cc` }}>
              {dict.common.openForWork}
            </span>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
