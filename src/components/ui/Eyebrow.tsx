import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  tone?: "teal" | "ink" | "muted";
  number?: string;
  className?: string;
};

export function Eyebrow({ children, tone = "muted", className }: Props) {
  const toneCls =
    tone === "teal"
      ? "text-teal"
      : tone === "ink"
        ? "text-ink/70"
        : "text-coolGrey";

  return (
    <span className={cn("eyebrow inline-block", toneCls, className)}>
      {children}
    </span>
  );
}
