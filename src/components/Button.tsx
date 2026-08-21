import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "outline" | "fill";
  disabled?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "outline",
  disabled = false,
}: ButtonProps) {
  const base = [
    "font-display inline-block rounded-sm border px-3 py-[7px]",
    "text-[11px] font-bold tracking-[0.08em] uppercase",
    "transition-all duration-150",
    "hover:-translate-x-[2px] hover:-translate-y-[2px]",
  ].join(" ");

  const styles =
    variant === "fill"
      ? "bg-pink text-onink border-pink hover:shadow-[3px_3px_0_var(--color-line-raw)]"
      : "bg-surface text-ink border-line hover:shadow-[3px_3px_0_var(--color-blue-raw)]";

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${base} ${styles} pointer-events-none opacity-50`}
      >
        {children}
      </span>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        // noopener stops the new tab reaching back through window.opener
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles} cursor-pointer`}>
      {children}
    </button>
  );
}
