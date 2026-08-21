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
    <div className="border-line overflow-hidden border-t border-b py-[7px] whitespace-nowrap">
      {/* the list renders twice on purpose
          animating to -50% lands copy two exactly where copy one started
          so the loop restart is invisible */}
      <div className="animate-marquee inline-block">
        {[0, 1].map((copy) => (
          <span key={copy}>
            {ITEMS.map((item) => (
              <span key={item}>
                <span className="font-display mx-[15px] text-[12.5px] font-bold tracking-[0.1em] uppercase">
                  {item}
                </span>
                <span aria-hidden="true" className="text-pink">
                  ✳
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
