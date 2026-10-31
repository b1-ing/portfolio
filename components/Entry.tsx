type EntryProps = {
  label: string;
  children: React.ReactNode;
  /** Applied to the outer row. */
  className?: string;
  /** Applied to the content column. */
  bodyClassName?: string;
  /** Applied to the 140px label column. */
  labelClassName?: string;
};

/** A 140px muted date/label column beside the content; the label stacks above on narrow screens. */
export function Entry({
  label,
  children,
  className = "gap-y-2",
  bodyClassName = "flex flex-col gap-2",
  labelClassName = "pt-[3px]",
}: EntryProps) {
  return (
    <div className={`flex flex-wrap gap-x-6 ${className}`}>
      <p className={`m-0 shrink-0 grow-0 basis-[140px] text-[13px] text-muted ${labelClassName}`}>{label}</p>
      <div className={`min-w-0 grow-[999] basis-[400px] ${bodyClassName}`}>{children}</div>
    </div>
  );
}
