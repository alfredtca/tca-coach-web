"use client";

import { useState, useId } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

export type AccordionItem = { q: string; a: string };

type Props = {
  items: AccordionItem[];
  /**
   * paper / bone / paperSoft — light surface (default for parent-brand pages).
   * ink — dark surface (legacy, kept for backwards compatibility).
   */
  tone?: "paper" | "paperSoft" | "bone" | "ink";
  defaultOpenIndex?: number;
};

export function Accordion({ items, tone = "paper", defaultOpenIndex }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(
    defaultOpenIndex ?? null
  );
  const baseId = useId();

  const isDark = tone === "ink";

  return (
    <ul className={cn("divide-y", isDark ? "divide-white/10" : "divide-ink/10")}>
      {items.map((item, idx) => {
        const open = openIdx === idx;
        const panelId = `${baseId}-panel-${idx}`;
        const buttonId = `${baseId}-button-${idx}`;
        return (
          <li key={item.q}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIdx(open ? null : idx)}
              className={cn(
                "group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-250 ease-editorial",
                isDark ? "hover:text-teal" : "hover:text-teal-deep"
              )}
            >
              <span className="text-bodyLg font-medium pretty">{item.q}</span>
              <span
                aria-hidden
                className={cn(
                  "shrink-0 transition-transform duration-350 ease-editorial",
                  open && "rotate-45"
                )}
              >
                {open ? (
                  <Minus
                    size={22}
                    weight="regular"
                    className={isDark ? "text-teal" : "text-ink/60"}
                  />
                ) : (
                  <Plus
                    size={22}
                    weight="regular"
                    className={isDark ? "text-coolGrey" : "text-ink/60"}
                  />
                )}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="pb-8 pr-12"
            >
              <p
                className={cn(
                  "max-w-prose2 text-body pretty",
                  isDark ? "text-coolGrey-soft" : "text-ink/80"
                )}
              >
                {item.a}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
