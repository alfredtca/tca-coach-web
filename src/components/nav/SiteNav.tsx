"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { List, SignOut, User, X } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";
import { navigation } from "@/lib/content";
import { Wordmark } from "./Wordmark";
import { Button } from "@/components/ui/Button";

type SessionShape = {
  email: string;
  name: string;
  sport?: string;
  tier: "starter" | "pro" | "annual";
};

export function SiteNav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [session, setSession] = useState<SessionShape | null>(null);
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    let alive = true;
    fetch("/api/auth/session", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: { session: SessionShape | null }) => {
        if (!alive) return;
        setSession(data.session);
        setSessionLoaded(true);
      })
      .catch(() => {
        if (!alive) return;
        setSessionLoaded(true);
      });
    return () => {
      alive = false;
    };
  }, [pathname]);

  async function logout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      /* ignore */
    }
    setSession(null);
    router.push("/");
    router.refresh();
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-350 ease-editorial",
        scrolled
          ? "border-b border-rule/60 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-paper/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-wide items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <Wordmark />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navigation.primary.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative text-[12.5px] font-medium uppercase tracking-[0.16em] transition-colors duration-250 ease-editorial",
                      active
                        ? "text-teal-deep"
                        : "text-ink/70 hover:text-ink"
                    )}
                  >
                    {link.label}
                    {active && (
                      <span
                        aria-hidden
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-teal"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {!sessionLoaded ? (
            <div aria-hidden className="h-5 w-32 animate-pulse bg-ink/5" />
          ) : session ? (
            <>
              <Link
                href="/coach"
                className={cn(
                  "inline-flex items-center gap-2 text-[12.5px] font-medium uppercase tracking-[0.16em] transition-colors duration-250 ease-editorial",
                  pathname.startsWith("/coach")
                    ? "text-teal-deep"
                    : "text-ink/70 hover:text-ink"
                )}
              >
                <User size={14} weight="bold" />
                Coach room
              </Link>
              <span className="text-[11px] uppercase tracking-[0.16em] text-ink/45">
                {session.name?.split(" ")[0] || session.email}
              </span>
              <button
                type="button"
                onClick={logout}
                className="inline-flex items-center gap-1.5 text-[12.5px] font-medium uppercase tracking-[0.16em] text-ink/70 transition-colors duration-250 ease-editorial hover:text-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                <SignOut size={13} weight="bold" />
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                href={navigation.login.href}
                className="text-[12.5px] font-medium uppercase tracking-[0.16em] text-ink/70 transition-colors duration-250 ease-editorial hover:text-ink"
              >
                {navigation.login.label}
              </Link>
              <Button href={navigation.cta.href} size="sm" variant="primary" withArrow>
                {navigation.cta.label}
              </Button>
            </>
          )}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-ink"
        >
          {open ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        hidden={!open}
        className="lg:hidden border-t border-rule/60 bg-paper"
      >
        <ul className="flex flex-col px-6 py-6">
          {navigation.primary.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href} className="border-b border-rule/40">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between py-4 text-[14px] uppercase tracking-[0.14em] transition-colors",
                    active ? "text-teal-deep" : "text-ink"
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      "tabular text-[10px]",
                      active ? "text-teal" : "text-ink/40"
                    )}
                  >
                    /
                  </span>
                </Link>
              </li>
            );
          })}
          {session && (
            <li className="border-b border-rule/40">
              <Link
                href="/coach"
                className={cn(
                  "flex items-center justify-between py-4 text-[14px] uppercase tracking-[0.14em] transition-colors",
                  pathname.startsWith("/coach") ? "text-teal-deep" : "text-ink"
                )}
              >
                Coach room
                <span aria-hidden className="tabular text-[10px] text-ink/40">
                  /
                </span>
              </Link>
            </li>
          )}
        </ul>
        <div className="grid grid-cols-2 gap-3 px-6 pb-8">
          {session ? (
            <>
              <Button href="/coach" variant="ghost-dark" size="md" fullWidth>
                Coach room
              </Button>
              <Button onClick={logout} variant="primary" size="md" fullWidth>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button href={navigation.login.href} variant="ghost-dark" size="md" fullWidth>
                {navigation.login.label}
              </Button>
              <Button href={navigation.cta.href} variant="primary" size="md" fullWidth>
                {navigation.cta.label}
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
