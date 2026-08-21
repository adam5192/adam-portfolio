"use client";

import { useEffect, useRef } from "react";

// fades things in as they scroll into view
// intersectionobserver instead of a scroll listener because the browser
// batches it off the main thread
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          // stop watching once its shown, no need to keep firing
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
