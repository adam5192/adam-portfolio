"use client";

import { useEffect, type RefObject } from "react";

// everything that can take keyboard focus
// tabindex -1 means focusable by script but not by tab so its excluded
const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "video[controls]",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  active: boolean
) {
  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    // querySelectorAll gives a NodeList not an array
    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>(FOCUSABLE)
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      // wrap around at both ends so focus can never leave the modal
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }

    container.addEventListener("keydown", onKeyDown);
    return () => container.removeEventListener("keydown", onKeyDown);
  }, [containerRef, active]);
}
