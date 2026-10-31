import type { StatPart } from "@/content/experience";

/** Concatenates parts, highlighting each `value` in the accent colour. Separators live in the data. */
export function StatRow({ parts, className = "" }: { parts: StatPart[]; className?: string }) {
  return (
    <p className={`m-0 ${className}`}>
      {parts.map((p, i) => (
        <span key={i}>
          {p.before}
          <span className="text-accent">{p.value}</span>
          {p.after}
        </span>
      ))}
    </p>
  );
}
