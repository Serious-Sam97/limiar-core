"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

export default function ContactClient({
  c,
  title,
}: {
  c: Dictionary["contact"];
  title: string[];
}) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("hello@limiarcore.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 grid min-h-0" style={{ gridTemplateColumns: "1fr clamp(300px, 36vw, 560px)" }}>

      {/* LEFT — identity + title */}
      <div className="flex flex-col px-8 md:px-14 py-8 border-r border-white/[0.06] relative overflow-hidden">

        <span
          className="absolute bottom-0 left-0 leading-none font-black text-white/[0.02] select-none pointer-events-none"
          style={{ fontSize: "40vw", lineHeight: 0.85, fontFamily: "var(--font-geist-sans)" }}
        >
          C
        </span>

        <div className="flex items-center gap-4 mb-1 relative z-10">
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">06</span>
          <div className="h-px w-16 bg-white/[0.06]" />
          <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">{c.eyebrow}</span>
        </div>

        <div className="flex items-end gap-0 leading-none mb-8 relative z-10">
          <h1
            className="font-black tracking-tighter wipe-in"
            style={{
              fontSize: "clamp(3rem, 8vw, 9rem)",
              color: "transparent",
              WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) rgba(240,238,233,0.6)",
              fontFamily: "var(--font-geist-sans)",
              lineHeight: 0.85,
            }}
          >
            {title[0]}
          </h1>
          <h1
            className="font-black tracking-tighter"
            style={{
              fontSize: "clamp(3rem, 8vw, 9rem)",
              color: "#CAFF00",
              fontFamily: "var(--font-geist-sans)",
              lineHeight: 0.85,
            }}
          >
            {title[1]}
          </h1>
        </div>

        <div className="flex-1 flex flex-col justify-between relative z-10">
          <div className="flex flex-col gap-8">

            {/* Email */}
            <div>
              <p className="text-[9px] font-mono text-white/45 tracking-[0.3em] uppercase mb-2">{c.directLine}</p>
              <button onClick={copy} className="group flex items-center gap-3 text-left">
                <span className="text-[#F0EEE9] font-mono text-sm group-hover:text-[#CAFF00] transition-colors">
                  hello@limiarcore.dev
                </span>
                <span className="text-[8px] font-mono tracking-widest text-white/45 border border-white/[0.08] px-1.5 py-0.5 group-hover:border-[#CAFF00]/30 group-hover:text-[#CAFF00]/50 transition-colors">
                  {copied ? c.copied : c.copy}
                </span>
              </button>
            </div>

            {/* Status */}
            <div>
              <p className="text-[9px] font-mono text-white/45 tracking-[0.3em] uppercase mb-2">{c.availability}</p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse" />
                <span className="text-sm text-white/60 font-mono">{c.availabilityValue}</span>
              </div>
            </div>

            {/* Location */}
            <div>
              <p className="text-[9px] font-mono text-white/45 tracking-[0.3em] uppercase mb-2">{c.base}</p>
              <p className="text-sm text-white/60 font-mono">{c.baseValue}</p>
            </div>

            {/* Response time */}
            <div>
              <p className="text-[9px] font-mono text-white/45 tracking-[0.3em] uppercase mb-2">{c.responseTime}</p>
              <p className="text-sm text-white/60 font-mono">{c.responseValue}</p>
            </div>
          </div>

          <div>
            <div className="w-6 h-px bg-[#CAFF00] mb-3" />
            <p className="text-white/65 text-sm leading-snug">
              {c.tagline1}<br />
              {c.tagline2}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT — brief form */}
      <div className="flex flex-col px-10 py-8 justify-center gap-6">

        <div>
          <p className="text-[9px] font-mono text-white/45 tracking-[0.3em] uppercase mb-1">{c.sendBriefTitle}</p>
          <p className="text-white/60 text-xs">{c.sendBriefSub}</p>
        </div>

        <form action="mailto:hello@limiarcore.dev" method="get" encType="text/plain" className="flex flex-col gap-4">

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-white/50 tracking-[0.25em] uppercase">{c.form.name}</label>
              <input
                type="text"
                name="name"
                placeholder={c.form.namePh}
                className="bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white/80 font-mono placeholder:text-white/35 focus:outline-none focus:border-[#CAFF00]/40 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-white/50 tracking-[0.25em] uppercase">{c.form.company}</label>
              <input
                type="text"
                name="company"
                placeholder={c.form.companyPh}
                className="bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white/80 font-mono placeholder:text-white/35 focus:outline-none focus:border-[#CAFF00]/40 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-mono text-white/50 tracking-[0.25em] uppercase">{c.form.email}</label>
            <input
              type="email"
              name="email"
              placeholder={c.form.emailPh}
              className="bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white/80 font-mono placeholder:text-white/35 focus:outline-none focus:border-[#CAFF00]/40 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-mono text-white/50 tracking-[0.25em] uppercase">{c.form.need}</label>
            <select
              name="service"
              className="bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white/80 font-mono focus:outline-none focus:border-[#CAFF00]/40 transition-colors appearance-none"
              defaultValue=""
            >
              <option value="" disabled className="bg-[#080808]">{c.form.selectService}</option>
              <option value="Product Engineering" className="bg-[#080808]">{c.serviceOptions.product}</option>
              <option value="Quality Assurance" className="bg-[#080808]">{c.serviceOptions.qa}</option>
              <option value="System Architecture" className="bg-[#080808]">{c.serviceOptions.architecture}</option>
              <option value="Technical Consulting" className="bg-[#080808]">{c.serviceOptions.consulting}</option>
              <option value="Business & Product Strategy" className="bg-[#080808]">{c.serviceOptions.strategy}</option>
              <option value="Other" className="bg-[#080808]">{c.serviceOptions.other}</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-mono text-white/50 tracking-[0.25em] uppercase">{c.form.message}</label>
            <textarea
              name="body"
              rows={4}
              placeholder={c.form.messagePh}
              className="bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white/80 font-mono placeholder:text-white/35 focus:outline-none focus:border-[#CAFF00]/40 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-between px-5 py-3.5 bg-[#CAFF00] text-black text-[10px] font-black tracking-widest uppercase hover:opacity-90 transition-opacity group"
          >
            {c.form.submit}
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
