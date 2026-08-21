"use client";

import { useReveal } from "@/hooks/useReveal";

const FACTS = [
  { label: "Languages", value: "TypeScript, JavaScript, C#, SQL" },
  { label: "Web", value: "Next.js, React, Node, Tailwind" },
  { label: "Favourite project", value: "Playloggd" },
  { label: "Data", value: "PostgreSQL, Drizzle, Supabase, MongoDB, Firebase" },
  { label: "Also", value: "Unity, C# · Two shipped games" },
  { label: "Based in", value: "Toronto, ON · Open to remote" },
];

export function About() {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal grid gap-10 md:grid-cols-[1.15fr_1fr]">
      <div className="max-w-[58ch]">
        <p className="text-body mb-4 text-[16.5px] leading-[1.72]">
          Hey, I&apos;m Adam. CS grad from York, based in Toronto.
        </p>

        <p className="text-body mb-4 text-[16.5px] leading-[1.72]">
          I build things I want to use. A backlog tracker because mine got out
          of hand. A trip planner because I was tired of doing it in six tabs. A
          couple of Unity games because making games is fun and I wanted to know
          if I could.
        </p>

        <p className="text-body mb-4 text-[16.5px] leading-[1.72]">
          The bits I like best are the ones nobody wrote a guide for. Two APIs
          that disagree, a service that goes down halfway through an import, an
          animation state machine behaving strangely. That&apos;s the good
          stuff.
        </p>

        <p className="text-body text-[16.5px] leading-[1.72]">
          Currently looking for a team who loves building.😊
        </p>
      </div>

      <dl className="grid content-start gap-0">
        {FACTS.map((fact) => (
          // border-b on all, last:border-b-0 kills the trailing rule
          <div
            key={fact.label}
            className="border-line border-b py-3 last:border-b-0"
          >
            <dt className="font-mono text-faint mb-1 text-[10.5px] tracking-[0.13em] uppercase">
              {fact.label}
            </dt>
            <dd className="text-body m-0 text-sm leading-[1.55]">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
