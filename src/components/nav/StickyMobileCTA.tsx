"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";
import { navigation } from "@/lib/content";

/**
 * Mobile-only sticky CTA bar — fades in once the user has scrolled past the hero.
 * Hidden on desktop (lg+) where the SiteNav already exposes the primary CTA.
 */
export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.6;
      setShow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 lg:hidden",
        "border-t border-white/10 bg-ink/[0.92] backdrop-blur-md",
        "transition-all duration-350 ease-editorial",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <div className="mx-auto flex max-w-wide items-center gap-4 px-5 py-3">
        <div className="flex min-w-0 flex-col">
          <span className="text-[10px] uppercase tracking-[0.18em] text-coolGrey-deep">
            2026 Foundation
          </span>
          <span className="text-ui text-bone leading-tight">
            Open the coach room
          </span>
        </div>
        <Link
          href={navigation.cta.href}
          className={cn(
            "ml-auto inline-flex h-11 shrink-0 items-center gap-2 bg-teal px-5 text-[12px] font-medium uppercase tracking-[0.16em] text-ink",
            "transition-all duration-250 ease-editorial active:translate-y-[1px] active:scale-[0.98]",
            "hover:bg-teal-deep",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          )}
        >
          {navigation.cta.label}
          <ArrowRight size={14} weight="bold" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
