type SectionHeadProps = {
  title: string;
  meta?: string;
};

export function SectionHead({ title, meta }: SectionHeadProps) {
  return (
    <div className="border-line mb-[22px] flex flex-wrap items-baseline gap-3.5 border-b-2 pb-[9px]">
      <h2 className="font-display m-0 text-[19px] font-extrabold tracking-[-0.01em] uppercase">
        {title}
      </h2>
      {/* ml-auto is the flex way of saying float right */}
      {meta && (
        <span className="font-mono text-faint ml-auto text-[11.5px]">
          {meta}
        </span>
      )}
    </div>
  );
}
