"use client";

import { useEffect, useRef, useState } from "react";

export function useModal() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const isOpen = openSlug !== null;

  // useRef holds a value across renders without triggering a re-render
  // which is what you want for remembering the last focused element
  const lastFocused = useRef<HTMLElement | null>(null);

  function open(slug: string) {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setOpenSlug(slug);
  }

  function close() {
    setOpenSlug(null);
    // hand focus back or keyboard users get dumped at the top of the page
    lastFocused.current?.focus();
  }

  // scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // cleanup runs when the effect re-runs or unmounts
    // skip it and the page stays permanently unscrollable
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // escape to close
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    // always remove what you added or you stack a new listener every open
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return { openSlug, isOpen, open, close };
}
