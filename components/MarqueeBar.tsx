"use client";

const items = [
  "React", "Next.js", "Node.js", "PostgreSQL", "LLMs", "Agents",
  "React Native", "Figma", "AWS", "Docker", "GraphQL", "TypeScript",
  "React", "Next.js", "Node.js", "PostgreSQL", "LLMs", "Agents",
  "React Native", "Figma", "AWS", "Docker", "GraphQL", "TypeScript",
];

export default function MarqueeBar() {
  return (
    <div className="overflow-hidden border-y border-white/[0.06] py-2.5 select-none">
      <div className="flex gap-10 whitespace-nowrap" style={{ animation: "ticker 22s linear infinite" }}>
        {items.map((item, i) => (
          <span key={i} className="text-[10px] tracking-[0.3em] text-white/45 font-mono flex items-center gap-4">
            {item}
            <span className="text-[#CAFF00]/40">×</span>
          </span>
        ))}
      </div>
    </div>
  );
}
