"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // themescript already set the attribute, this just syncs react state to it
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") setTheme(current);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="border-line text-ink hover:bg-ink hover:text-paper grid h-7 w-8 cursor-pointer place-items-center rounded-sm border text-[13px] transition-colors"
    >
      {theme === "dark" ? "◑" : "◐"}
    </button>
  );
}
