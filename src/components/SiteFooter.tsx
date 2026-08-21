export function SiteFooter() {
  return (
    <footer className="border-line font-mono text-faint mt-20 flex flex-wrap items-center justify-between gap-3 border-t pt-6 text-[11.5px]">
      <span>
        © {new Date().getFullYear()} Adam Mokdad ·{" "}
        <a
          href="mailto:hello@adammokdad.com"
          className="hover:text-pink transition-colors"
        >
          adammokdad2003@gmail.com
        </a>
      </span>
      <span>Built with Next.js | Toronto, ON</span>
    </footer>
  );
}
