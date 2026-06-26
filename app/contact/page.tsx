"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("hello@limiarcore.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          {[["Index", "/"], ["Work", "/projects"], ["Lab", "/experimental"], ["People", "/people"], ["Clients", "/clients"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href}
              className={`text-[10px] tracking-widest font-mono transition-colors ${label === "Contact" ? "text-[#CAFF00]" : "text-white/55 hover:text-white"}`}
            >{label}</Link>
          ))}
        </nav>
        <span className="text-[9px] font-mono text-[#CAFF00]/50 tracking-widest flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse" />
          OPEN FOR WORK
        </span>
      </header>

      {/* ── BODY — split layout ── */}
      <div className="flex-1 grid min-h-0" style={{ gridTemplateColumns: "1fr clamp(300px, 36vw, 560px)" }}>

        {/* LEFT — identity + title */}
        <div className="flex flex-col px-8 md:px-14 py-8 border-r border-white/[0.06] relative overflow-hidden">

          {/* Ghost letter */}
          <span
            className="absolute bottom-0 left-0 leading-none font-black text-white/[0.02] select-none pointer-events-none"
            style={{ fontSize: "40vw", lineHeight: 0.85, fontFamily: "var(--font-geist-sans)" }}
          >
            C
          </span>

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-1 relative z-10">
            <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">06</span>
            <div className="h-px w-16 bg-white/[0.06]" />
            <span className="text-[9px] font-mono text-white/45 tracking-[0.4em]">GET IN TOUCH</span>
          </div>

          {/* Title */}
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
              CON
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
              TACT
            </h1>
          </div>

          {/* Info blocks */}
          <div className="flex-1 flex flex-col justify-between relative z-10">
            <div className="flex flex-col gap-8">

              {/* Email */}
              <div>
                <p className="text-[9px] font-mono text-white/45 tracking-[0.3em] uppercase mb-2">Direct line</p>
                <button
                  onClick={copy}
                  className="group flex items-center gap-3 text-left"
                >
                  <span className="text-[#F0EEE9] font-mono text-sm group-hover:text-[#CAFF00] transition-colors">
                    hello@limiarcore.dev
                  </span>
                  <span className="text-[8px] font-mono tracking-widest text-white/45 border border-white/[0.08] px-1.5 py-0.5 group-hover:border-[#CAFF00]/30 group-hover:text-[#CAFF00]/50 transition-colors">
                    {copied ? "COPIED ✓" : "COPY"}
                  </span>
                </button>
              </div>

              {/* Status */}
              <div>
                <p className="text-[9px] font-mono text-white/45 tracking-[0.3em] uppercase mb-2">Availability</p>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse" />
                  <span className="text-sm text-white/60 font-mono">Open for new projects</span>
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="text-[9px] font-mono text-white/45 tracking-[0.3em] uppercase mb-2">Base</p>
                <p className="text-sm text-white/60 font-mono">Brazil — Remote-first</p>
              </div>

              {/* Response time */}
              <div>
                <p className="text-[9px] font-mono text-white/45 tracking-[0.3em] uppercase mb-2">Response time</p>
                <p className="text-sm text-white/60 font-mono">Within 24h</p>
              </div>
            </div>

            {/* Bottom tagline */}
            <div>
              <div className="w-6 h-px bg-[#CAFF00] mb-3" />
              <p className="text-white/65 text-sm leading-snug">
                No discovery calls for the sake of it.<br />
                Come with a real problem.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — brief form */}
        <div className="flex flex-col px-10 py-8 justify-center gap-6">

          <div>
            <p className="text-[9px] font-mono text-white/45 tracking-[0.3em] uppercase mb-1">Send a brief</p>
            <p className="text-white/60 text-xs">Tell us what you're building. We'll respond with honesty.</p>
          </div>

          <form
            action="mailto:hello@limiarcore.dev"
            method="get"
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            {/* Name + Company row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-mono text-white/50 tracking-[0.25em] uppercase">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white/80 font-mono placeholder:text-white/35 focus:outline-none focus:border-[#CAFF00]/40 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-mono text-white/50 tracking-[0.25em] uppercase">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Optional"
                  className="bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white/80 font-mono placeholder:text-white/35 focus:outline-none focus:border-[#CAFF00]/40 transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-white/50 tracking-[0.25em] uppercase">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white/80 font-mono placeholder:text-white/35 focus:outline-none focus:border-[#CAFF00]/40 transition-colors"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-white/50 tracking-[0.25em] uppercase">What do you need?</label>
              <select
                name="service"
                className="bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white/80 font-mono focus:outline-none focus:border-[#CAFF00]/40 transition-colors appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="bg-[#080808]">Select a service</option>
                <option value="Product Engineering" className="bg-[#080808]">Product Engineering</option>
                <option value="Quality Assurance" className="bg-[#080808]">Quality Assurance</option>
                <option value="System Architecture" className="bg-[#080808]">System Architecture</option>
                <option value="Technical Consulting" className="bg-[#080808]">Technical Consulting</option>
                <option value="Business & Product Strategy" className="bg-[#080808]">Business & Product Strategy</option>
                <option value="Other" className="bg-[#080808]">Something else</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-white/50 tracking-[0.25em] uppercase">The brief</label>
              <textarea
                name="body"
                rows={4}
                placeholder="What are you building? What's the problem? What does done look like?"
                className="bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white/80 font-mono placeholder:text-white/35 focus:outline-none focus:border-[#CAFF00]/40 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex items-center justify-between px-5 py-3.5 bg-[#CAFF00] text-black text-[10px] font-black tracking-widest uppercase hover:opacity-90 transition-opacity group"
            >
              Send brief
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </form>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] px-8 md:px-14 py-3 flex items-center justify-between shrink-0">
        <Link href="/" className="group flex items-center gap-2 text-[9px] font-mono text-white/45 hover:text-white/80 tracking-widest uppercase transition-colors">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          Back to Index
        </Link>
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse" />
          ALL SYSTEMS GO
        </div>
        <span className="text-[9px] font-mono text-white/40 tracking-widest">© 2026 LIMIAR CORE</span>
      </footer>
    </main>
  );
}
