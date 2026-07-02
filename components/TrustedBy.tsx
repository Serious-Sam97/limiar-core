import Image from "next/image";

// Compact "trusted by" logo strip. Only needs id/name/icon, so it accepts
// both resolved Projects and localized ClientSource entries.
type LogoEntry = { id: string; name: string; icon: string };

export default function TrustedBy({
  clients,
  accent = "#CAFF00",
  label = "Trusted by",
}: {
  clients: LogoEntry[];
  accent?: string;
  label?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-y-4 gap-x-8 md:flex-wrap py-5 border-b border-white/[0.06]">
      <span className="text-[9px] font-mono tracking-[0.4em] uppercase shrink-0" style={{ color: accent }}>
        {label}
      </span>
      <div className="flex items-center gap-6 flex-wrap">
        {clients.map((c) => (
          <div
            key={c.id}
            className="flex items-center gap-2.5 opacity-75 hover:opacity-100 transition-opacity"
          >
            <div className="relative w-7 h-7 border border-white/[0.1] bg-white/[0.03] flex items-center justify-center overflow-hidden shrink-0">
              {c.icon ? (
                <Image src={c.icon} alt={c.name} fill className="object-cover" />
              ) : (
                <span
                  className="font-black text-white/40 text-[11px]"
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  {c.name.charAt(0)}
                </span>
              )}
            </div>
            <span className="text-sm font-bold tracking-tight text-white/80">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
