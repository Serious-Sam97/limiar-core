"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Index" },
  { href: "/projects", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#080808]/90 backdrop-blur-md" : ""}`}>
      <div className="flex items-center justify-between px-6 md:px-10 h-14 border-b border-white/[0.06]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-5 h-5 acid-bg text-[9px] font-black flex items-center justify-center">SH</span>
          <span className="text-[11px] tracking-[0.25em] text-white/70 group-hover:text-white transition-colors font-mono uppercase">Software House</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`text-[11px] tracking-widest transition-colors relative ${pathname === href ? "acid" : "text-white/60 hover:text-white"}`}
            >
              {label}
              {pathname === href && <span className="absolute -bottom-[1px] left-0 right-0 h-px bg-[#CAFF00]" />}
            </Link>
          ))}
        </div>

        {/* Status pill */}
        <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] animate-pulse" />
          Available for projects
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-1 flex flex-col gap-1">
          <span className={`w-5 h-px bg-white transition-all ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`w-5 h-px bg-white transition-all ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-b border-white/[0.06] bg-[#080808] px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-sm tracking-widest text-white/70 hover:text-white transition-colors"
            >{label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
