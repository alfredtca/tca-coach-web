"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

type Level = "grassroots" | "semi-pro" | "national" | "international" | "household";
type CareerStage = "emerging" | "rising" | "peak" | "transitioning" | "retired";
type Confidence = "low" | "medium" | "high";

const LEVELS: { value: Level; label: string }[] = [
  { value: "grassroots", label: "Grassroots / club level" },
  { value: "semi-pro", label: "Semi-pro / state representative" },
  { value: "national", label: "National team / professional contract" },
  { value: "international", label: "International / top-tier global" },
  { value: "household", label: "Household name / former international" }
];

const STAGES: { value: CareerStage; label: string }[] = [
  { value: "emerging", label: "Emerging — early in my career" },
  { value: "rising", label: "Rising — building momentum" },
  { value: "peak", label: "Peak — at the top of my game" },
  { value: "transitioning", label: "Transitioning — late career or post-sport" },
  { value: "retired", label: "Retired — full post-career mode" }
];

const CONFIDENCE: { value: Confidence; label: string }[] = [
  { value: "low", label: "Low — I haven't done many commercial deals" },
  { value: "medium", label: "Medium — I've done some but want to get sharper" },
  { value: "high", label: "High — I've done plenty and want to refine the edges" }
];

export function ProfileForm() {
  const router = useRouter();

  const [level, setLevel] = useState<Level>("semi-pro");
  const [followerCount, setFollowerCount] = useState("");
  const [careerStage, setCareerStage] = useState<CareerStage>("rising");
  const [incomeGoal, setIncomeGoal] = useState("");
  const [geography, setGeography] = useState("");
  const [brandInterests, setBrandInterests] = useState("");
  const [confidence, setConfidence] = useState<Confidence>("medium");

  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setError(null);

    try {
      const res = await fetch("/api/auth/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level,
          followerCount,
          careerStage,
          incomeGoal,
          geography,
          brandInterests,
          confidence
        })
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      router.push("/coach");
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
      <p className="eyebrow text-coolGrey">Your Commercial Profile</p>
      <p className="mt-4 max-w-prose2 text-caption text-coolGrey-soft pretty">
        The specialists use these details to pre-fill prompts and pitch you
        the right work. You can change any of this later from your dashboard.
      </p>

      <div className="mt-8 grid gap-7">
        <Select
          id="profile-level"
          label="What level are you competing at?"
          value={level}
          onChange={(v) => setLevel(v as Level)}
          options={LEVELS}
        />

        <Field
          id="profile-followers"
          label="Roughly how many followers do you have across your main channels?"
          value={followerCount}
          onChange={setFollowerCount}
          placeholder="e.g. 12,000 on IG · 4,500 on TikTok"
          required
        />

        <Select
          id="profile-stage"
          label="Where are you in your career?"
          value={careerStage}
          onChange={(v) => setCareerStage(v as CareerStage)}
          options={STAGES}
        />

        <Field
          id="profile-income-goal"
          label="What's your 12-month commercial income goal?"
          value={incomeGoal}
          onChange={setIncomeGoal}
          placeholder="e.g. $60k from sponsorship, appearances and content"
          required
        />

        <Field
          id="profile-geography"
          label="Where are you based?"
          value={geography}
          onChange={setGeography}
          placeholder="e.g. Brisbane, Australia"
          required
        />

        <Field
          id="profile-brands"
          label="What brand categories interest you?"
          value={brandInterests}
          onChange={setBrandInterests}
          placeholder="e.g. Performance apparel, recovery, fintech, automotive"
          required
        />

        <Select
          id="profile-confidence"
          label="How confident are you in commercial deals right now?"
          value={confidence}
          onChange={(v) => setConfidence(v as Confidence)}
          options={CONFIDENCE}
        />

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
          {state === "loading" ? "Saving…" : "Open the coach room"}
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
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
};

function Field({ id, label, value, onChange, placeholder, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-coolGrey">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full bg-transparent border border-white/15 px-4 py-3.5 text-ui text-white placeholder:text-white/40 focus:outline-none focus:border-teal transition-colors"
      />
    </div>
  );
}

type SelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
};

function Select({ id, label, value, onChange, options }: SelectProps) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-coolGrey">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-transparent border border-white/15 px-4 py-3.5 text-ui text-white focus:outline-none focus:border-teal transition-colors"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-ink text-white">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
