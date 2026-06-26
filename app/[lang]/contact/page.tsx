import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import ContactClient from "@/components/ContactClient";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export const metadata = {
  title: "Contact — Limiar Core",
};

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main className="h-screen bg-[#080808] text-[#F0EEE9] flex flex-col overflow-hidden">

      <SiteHeader lang={lang} dict={dict} active="contact" />

      <ContactClient c={dict.contact} title={dict.titles.contact} />

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] px-8 md:px-14 py-3 flex items-center justify-between shrink-0">
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
