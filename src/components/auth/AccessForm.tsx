"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

export function AccessForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/coach";

  const [password, setPassword] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setError(null);

    try {
      const res = await fetch("/api/auth/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Incorrect code");
      }
      router.push(next);
      router.refresh();
    } catch (err) {
      setState("error");
      setError((err as Error).message);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-rule/60 bg-paper-soft p-8 lg:p-10"
      noValidate
    >
      <p className="eyebrow text-ink/60">Preview access</p>
      <p className="mt-4 max-w-prose2 text-caption text-ink/65 pretty">
        Six-digit code shared with reviewers during private preview. Carlie or
        Alfred will have given this to you. If you don&apos;t have it, the
        coach room isn&apos;t open to you yet.
      </p>

      <div className="mt-8 grid gap-5">
        <div>
          <label htmlFor="access-code" className="eyebrow text-ink/60">
            Access code
          </label>
          <input
            id="access-code"
            type="password"
            inputMode="numeric"
            autoComplete="one-time-code"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="6-digit code"
            required
            className="mt-2 w-full bg-transparent border border-rule/70 px-4 py-3.5 text-ui text-ink placeholder:text-ink/40 tracking-[0.18em] focus:outline-none focus:border-teal transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={state === "loading" || !password.trim()}
          className={cn(
            "mt-3 inline-flex h-12 items-center justify-center gap-2 px-7 text-[13px] font-medium uppercase tracking-[0.16em]",
            "transition-all duration-250 ease-editorial",
            "active:translate-y-[1px] active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "bg-ink text-paper hover:bg-ink-soft"
          )}
        >
          {state === "loading" ? "Checking…" : "Enter"}
          <ArrowRight size={14} weight="bold" />
        </button>

        {error && (
          <p className="text-caption text-teal" role="alert">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
