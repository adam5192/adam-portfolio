"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(current);
    }
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";

    // update the DOM directly, acctually changes the colours
    document.documentElement.setAttribute("data-theme", next);

    // so it survives a reload
    localStorage.setItem("theme", next);

    // update react state so this component re-renders with the right icon
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="border-ink text-ink hover:bg-ink hover:text-paper grid h-7 w-8 cursor-pointer place-items-center border-[1.5px] text-[13px] transition-colors"
    >
      {theme === "dark" ? "◑" : "◐"}
    </button>
  );
}
