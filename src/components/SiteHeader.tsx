import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="mb-[14px] flex flex-wrap items-center justify-between gap-3">
      <a
        href="#top"
        className="font-display text-base font-extrabold tracking-[-0.01em]"
      >
        ADAM MOKDAD
      </a>

      <nav className="flex items-center gap-1.5">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            // no mix-blend-mode, it has text in it
            className="bg-blue text-onink hover:bg-pink rounded-sm px-3 py-1.5 text-[11.5px] font-medium tracking-[0.06em] uppercase transition-colors"
          >
            {item.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
