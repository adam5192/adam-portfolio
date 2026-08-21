type TagsProps = {
  tags: readonly string[];
  limit?: number; // cards truncate, modal doesnt
};

export function Tags({ tags, limit }: TagsProps) {
  const shown = tags.slice(0, limit);

  return (
    <div className="flex flex-wrap gap-1.25">
      {shown.map((tag) => (
        <span
          key={tag}
          className="border-ink text-ink font-mono rounded-sm border px-1.75 py-0.5 text-[10.5px]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
