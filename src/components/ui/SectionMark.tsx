import { cn } from "@/lib/cn";

type Props = {
  number: string;
  label?: string;
  tone?: "teal" | "ink" | "muted";
  className?: string;
};

export function SectionMark({ number, label, tone = "muted", className }: Props) {
  const toneCls =
    tone === "teal" ? "text-teal" : tone === "ink" ? "text-ink/70" : "text-coolGrey";

  return (
    <div className={cn("flex items-center gap-4", toneCls, className)}>
      <span
        className="display tabular text-[14px] tracking-[0.18em] opacity-90"
        aria-hidden
      >
        {number}
      </span>
      <span aria-hidden className="h-px w-12 bg-current opacity-40" />
      {label && (
        <span className="eyebrow opacity-90">
          {label}
        </span>
      )}
    </div>
  );
}
