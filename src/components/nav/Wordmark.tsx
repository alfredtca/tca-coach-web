import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  variant?: "stacked" | "inline";
  tone?: "white" | "ink";
  className?: string;
};

export function Wordmark({
  href = "/",
  variant = "inline",
  tone = "white",
  className
}: Props) {
  const baseColor = tone === "white" ? "text-white" : "text-ink";
  const subColor = tone === "white" ? "text-white/55" : "text-ink/55";
  const accentColor = "text-teal";

  const inner =
    variant === "stacked" ? (
      <span className="flex flex-col leading-none">
        <span className={cn("display text-[18px] tracking-[0.04em]", baseColor)}>
          The Commercial Athlete
        </span>
        <span className="mt-1 text-[10px] tracking-[0.32em] uppercase font-medium">
          <span className={accentColor}>/</span>{" "}
          <span className={subColor}>Coach</span>
        </span>
      </span>
    ) : (
      <span className="flex items-baseline gap-2 leading-none">
        <span
          className={cn(
            "display text-[15px] md:text-[16px] tracking-[0.04em] whitespace-nowrap",
            baseColor
          )}
        >
          The Commercial Athlete
        </span>
        <span
          aria-hidden
          className={cn("text-[14px] font-light", accentColor)}
        >
          /
        </span>
        <span
          className={cn(
            "display text-[14px] md:text-[15px] tracking-[0.16em] whitespace-nowrap",
            subColor
          )}
        >
          Coach
        </span>
      </span>
    );

  return (
    <Link
      href={href}
      aria-label="The Commercial Athlete — Coach"
      className={cn(
        "group inline-flex items-center transition-opacity duration-250 ease-editorial",
        "hover:opacity-85",
        className
      )}
    >
      {inner}
    </Link>
  );
}
