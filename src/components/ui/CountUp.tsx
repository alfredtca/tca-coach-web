"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  /** Render width — defaults to length of `end` to avoid layout jank during count */
  pad?: number;
  duration?: number;
  className?: string;
};

/**
 * Editorial count-up — only fires once per element when scrolled into view.
 * Uses requestAnimationFrame with an ease-out curve so the value settles
 * gracefully instead of stopping abruptly.
 */
export function CountUp({ end, pad, duration = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (!ref.current || hasRun) return;
    const node = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasRun(true);
            const start = performance.now();
            const tick = (now: number) => {
              const elapsed = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - elapsed, 3);
              setValue(Math.round(eased * end));
              if (elapsed < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(node);
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration, hasRun]);

  const padded = pad ? String(value).padStart(pad, "0") : String(value);

  return (
    <span ref={ref} className={className} aria-label={String(end)}>
      {padded}
    </span>
  );
}
