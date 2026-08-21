type TagsProps = {
  tags: readonly string[];
  limit?: number;
};

export function Tags({ tags, limit }: TagsProps) {
  // slice with undefined returns the whole array so no branching needed
  const shown = tags.slice(0, limit);

  return (
    <div className="flex flex-wrap gap-[5px]">
      {shown.map((tag) => (
        <span
          key={tag}
          className="border-line text-body font-mono rounded-sm border px-[7px] py-[2px] text-[10.5px]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
