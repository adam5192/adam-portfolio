import { Button } from "./Button";

// swap these for your real handles
const LINKS = [
  { label: "Email ↗", href: "mailto:adammokdad2003@gmail.com", fill: true },
  { label: "GitHub ↗", href: "https://github.com/adam5192", fill: false },
  {
    label: "LinkedIn ↗",
    href: "https://www.linkedin.com/in/adam-mokdad-a14b12261/",
    fill: false,
  },
  { label: "itch.io ↗", href: "https://adam5192.itch.io", fill: false },
];

export function Contact() {
  return (
    <div className="group/hero">
      <h2 className="font-display mb-6 text-[clamp(34px,6.5vw,72px)] leading-[0.9] font-extrabold tracking-[-0.035em] uppercase">
        <span className="ink-offset" data-ink="Say hello.">
          Say hello.
        </span>
      </h2>

      <p className="text-body mb-6 max-w-[480px] text-base leading-[1.68]">
        Open to full-time software engineering roles - web, backend, or anything
        adjacent. Fastest way to reach me is email.
      </p>

      <div className="flex flex-wrap gap-2.5">
        {LINKS.map((link) => (
          <Button
            key={link.href}
            href={link.href}
            variant={link.fill ? "fill" : "outline"}
          >
            {link.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
