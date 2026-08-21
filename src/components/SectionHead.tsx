type SectionHeadProps = {
  title: string;
  meta?: string;
};

export function SectionHead({ title, meta }: SectionHeadProps) {
  return (
    <div className="border-ink mb-5.5 flex flex-wrap items-baseline gap-3.5 border-b-2 pb-2.25">
      <h2 className="font-display m-0 text-[19px] font-extrabold tracking-[-0.01em] uppercase">
        {title}
      </h2>

      {/* Short-circuit rendering: if `meta` is undefined the whole expression evaluates to undefined and React renders nothing.
       */}
      {meta && (
        <span className="font-mono text-faint ml-auto text-[11.5px]">
          {meta}
        </span>
      )}
    </div>
  );
}
