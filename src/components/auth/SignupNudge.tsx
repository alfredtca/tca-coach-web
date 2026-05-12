"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

type Props = {
  variant?: "stacked" | "inline";
  tone?: "dark" | "light";
  cta?: string;
};

/**
 * Lightweight email-only handoff. Captures email, then bounces to /signup
 * with the value pre-filled so the user lands two fields away from a session.
 *
 * Lives next to the chat product, not behind a waitlist — the AI agents
 * are already shipping in offline mode.
 */
export function SignupNudge({
  variant = "inline",
  tone = "dark",
  cta = "Start free"
}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const dark = tone === "dark";
  const fieldBase = cn(
    "w-full bg-transparent border px-4 py-3.5 text-ui transition-colors duration-250 ease-editorial",
    "focus:outline-none focus:border-teal",
    dark
      ? "border-white/15 text-white placeholder:text-white/40"
      : "border-ink/15 text-ink placeholder:text-ink/40"
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Drop in a valid email.");
      return;
    }
    setError(null);
    router.push(`/signup?email=${encodeURIComponent(value)}`);
  }

  if (variant === "stacked") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <div>
          <label
            htmlFor="signup-nudge-email"
            className={cn("eyebrow", dark ? "text-coolGrey" : "text-ink/55")}
          >
            Email
          </label>
          <input
            id="signup-nudge-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com.au"
            aria-invalid={!!error}
            className={cn(fieldBase, "mt-2")}
            required
          />
          {error && (
            <p
              className={cn(
                "mt-2 text-caption",
                dark ? "text-coolGrey" : "text-ink/70"
              )}
              role="alert"
            >
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={cn(
            "mt-1 inline-flex h-12 items-center justify-center gap-2 px-7 text-[13px] font-medium uppercase tracking-[0.16em] transition-all duration-250 ease-editorial",
            "active:translate-y-[1px] active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
            dark
              ? "bg-teal text-ink hover:bg-teal-deep"
              : "bg-ink text-bone hover:bg-charcoal"
          )}
        >
          <span>{cta}</span>
          <ArrowRight size={14} weight="bold" aria-hidden />
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch"
      noValidate
    >
      <label htmlFor="signup-nudge-email-i" className="sr-only">
        Email
      </label>
      <input
        id="signup-nudge-email-i"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com.au"
        aria-invalid={!!error}
        className={cn(fieldBase, "flex-1")}
        required
      />
      <button
        type="submit"
        className={cn(
          "inline-flex items-center justify-center gap-2 px-7 text-[12.5px] font-medium uppercase tracking-[0.16em] transition-all duration-250 ease-editorial",
          "active:translate-y-[1px] active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
          dark
            ? "bg-teal text-ink hover:bg-teal-deep"
            : "bg-ink text-bone hover:bg-charcoal"
        )}
      >
        <span>{cta}</span>
        <ArrowRight size={14} weight="bold" aria-hidden />
      </button>
      {error && (
        <p
          className={cn(
            "sm:absolute sm:translate-y-14 text-caption",
            dark ? "text-coolGrey" : "text-ink/70"
          )}
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
