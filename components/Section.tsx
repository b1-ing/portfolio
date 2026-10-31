type SectionProps = {
  id: string;
  title: string;
  number?: string;
  /** Tailwind classes for vertical padding and gap between children. */
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, number, className = "gap-6 py-12", children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`reveal flex flex-col border-t border-border ${className}`}>
      {number ? (
        <div className="flex items-baseline gap-4">
          <span className="text-[13px] text-muted">{number}</span>
          <h2 id={`${id}-heading`} className="m-0 text-[26px] font-bold tracking-[-0.02em]">
            {title}
          </h2>
        </div>
      ) : (
        <h2 id={`${id}-heading`} className="sr-only">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
