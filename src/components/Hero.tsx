// keeping the lines as data so the visible text and the data-ink attribute
// cant drift apart
const LINES = ["Adam Mokdad", "builds things."];

export function Hero() {
  return (
    <section className="group/hero mb-[46px]">
      <h1 className="font-display mb-6 text-[clamp(40px,8.2vw,94px)] leading-[0.9] font-extrabold tracking-[-0.035em] uppercase">
        {LINES.map((line, i) => (
          <span key={line}>
            <span className="ink-offset" data-ink={line}>
              {line}
            </span>
            {i < LINES.length - 1 && <br />}
          </span>
        ))}
      </h1>

      <p className="text-body max-w-[520px] text-base leading-[1.68]">
        Full-stack web apps and Unity games, out of Toronto. Currently looking
        for a team to build them with.
      </p>
    </section>
  );
}
