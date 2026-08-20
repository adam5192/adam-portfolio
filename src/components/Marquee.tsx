const ITEMS = [
  "Available for work",
  "Toronto",
  "Full-stack",
  "Unity",
  "Next.js",
  "TypeScript",
];

export function Marquee() {
  return (
    <div className="border-ink overflow-hidden border-t-2 border-b-2 py-1.75 whitespace-nowrap">
      <div className="animate-marquee inline-block">
        {/* duplication : render the list twice, animate translateX to -50%. The loop restart is invisible bc second copy sits where the first started */}
        {[0, 1].map((copy) => (
          <span key={copy}>
            {ITEMS.map((item) => (
              <span key={item}>
                <span className="font-display mx-3.75 text-[12.5px] font-bold tracking-widest uppercase">
                  {item}
                </span>
                <span aria-hidden="true" className="text-pink">
                  *
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
