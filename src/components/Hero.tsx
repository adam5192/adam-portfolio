const LINES = ["Adam.", "Hello."];

export function Hero() {
  return (
    <section className="group/hero mb-11.5">
      <h1
        className={[
          "font-display font-extrabold uppercase",
          "text-[clamp(40px,8.2vw,94px)]",
          "leading-[0.9]",
          "tracking-[0.035em]",
          "mb-6",
        ].join(" ")}
      >
        {LINES.map((line, i) => (
          // Fragment shorthand <>...</> groups siblings without adding
          // a wrapper element to the DOM. It needs the `key`, so we use
          // the long form <Fragment key=> ... except here we can just
          // put the key on the span and handle the <br> separately.
          <span key={line}>
            <span
              className="ink-offset"
              // Same string in two places: as content, and as the
              // attribute the pseudo-elements read.
              data-ink={line}
            >
              {line}
            </span>
            {/* Only break between lines, not after the last one */}
            {i < LINES.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <p className="text-body max-w-130 text-base leading-[1.68]">
        Full-stack developer and game dev in Toronto. Blah blah blah. I like to
        code. I like video games. Blah blah blah blah. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Repellendus atque omnis dolore
        eveniet accusamus. Nesciunt iste quisquam explicabo recusandae optio! Ea
        tenetur neque molestiae libero, ducimus incidunt explicabo rem fugiat!
      </p>
    </section>
  );
}
