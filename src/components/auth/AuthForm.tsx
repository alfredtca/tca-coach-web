"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

type Mode = "login" | "signup";

type Props = {
  mode: Mode;
};

export function AuthForm({ mode }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/coach";
  const prefilledEmail = params.get("email") || "";

  const [email, setEmail] = useState(prefilledEmail);
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [tier, setTier] = useState<"starter" | "pro" | "annual">("pro");
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setError(null);

    const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/signup";
    const body =
      mode === "login"
        ? { email, name: name || undefined }
        : { email, name, sport, tier };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `Request failed (${res.status})`);
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
      className="border border-white/10 bg-charcoal p-8 lg:p-10"
      noValidate
    >
      <p className="eyebrow text-coolGrey">
        {mode === "login" ? "Sign in" : "Create your account"}
      </p>

      <p className="mt-4 max-w-prose2 text-caption text-coolGrey-soft pretty">
        Offline build — no password yet. Real auth ships with Supabase. Any
        valid email opens a {mode === "login" ? "Pro" : "selected-tier"} session
        for testing.
      </p>

      <div className="mt-8 grid gap-5">
        <Field
          id="auth-email"
          label="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={setEmail}
          placeholder="you@email.com.au"
          required
        />

        {mode === "signup" && (
          <>
            <Field
              id="auth-name"
              label="First name"
              autoComplete="given-name"
              value={name}
              onChange={setName}
              placeholder="Your first name"
              required
            />
            <Field
              id="auth-sport"
              label="Sport / code"
              value={sport}
              onChange={setSport}
              placeholder="e.g. NRL, AFLW, Hockeyroos"
              required
            />
            <div>
              <label
                htmlFor="auth-tier"
                className="eyebrow text-coolGrey"
              >
                Plan (mock — pick to test agent gating)
              </label>
              <select
                id="auth-tier"
                value={tier}
                onChange={(e) =>
                  setTier(e.target.value as "starter" | "pro" | "annual")
                }
                className="mt-2 w-full bg-transparent border border-white/15 px-4 py-3.5 text-ui text-white focus:outline-none focus:border-teal transition-colors"
              >
                <option value="starter" className="bg-ink text-white">
                  Starter — 3 specialists
                </option>
                <option value="pro" className="bg-ink text-white">
                  Pro — all 6 specialists
                </option>
                <option value="annual" className="bg-ink text-white">
                  Annual Pro — all 6 specialists
                </option>
              </select>
            </div>
          </>
        )}

        {mode === "login" && (
          <Field
            id="auth-name-opt"
            label="First name (optional)"
            autoComplete="given-name"
            value={name}
            onChange={setName}
            placeholder="Used to personalise the coach room"
          />
        )}

        <button
          type="submit"
          disabled={state === "loading"}
          className={cn(
            "mt-3 inline-flex h-12 items-center justify-center gap-2 px-7 text-[13px] font-medium uppercase tracking-[0.16em]",
            "transition-all duration-250 ease-editorial",
            "active:translate-y-[1px] active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
            "disabled:opacity-50",
            "bg-teal text-ink hover:bg-teal-deep"
          )}
        >
          {state === "loading"
            ? "Signing in…"
            : mode === "login"
            ? "Sign in"
            : "Create account"}
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

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
};

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  value,
  onChange,
  placeholder,
  required
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-coolGrey">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full bg-transparent border border-white/15 px-4 py-3.5 text-ui text-white placeholder:text-white/40 focus:outline-none focus:border-teal transition-colors"
      />
    </div>
  );
}
