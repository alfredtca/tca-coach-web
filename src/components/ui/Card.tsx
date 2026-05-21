import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /**
   * paper   — default white card with rule border, parent-brand surface
   * paperSoft — F1F3F5 soft surface for subtle visual rest
   * ink     — solid black card for selective contrast (dark accent only)
   * outline — transparent with hairline border
   * surface — legacy alias, maps to paper
   * bone    — legacy alias, maps to paperSoft
   */
  tone?: "paper" | "paperSoft" | "ink" | "outline" | "surface" | "bone";
  as?: "div" | "article" | "li";
  highlight?: boolean;
};

const toneMap = {
  paper: "bg-paper border border-rule/70 text-ink",
  paperSoft: "bg-paper-soft border border-rule/70 text-ink",
  ink: "bg-ink border border-ink text-paper",
  outline: "bg-transparent border border-ink/15 text-ink",
  // legacy aliases — kept so existing callers don't break visually
  surface: "bg-paper border border-rule/70 text-ink",
  bone: "bg-paper-soft border border-rule/70 text-ink"
} as const;

export function Card({
  children,
  className,
  tone = "paper",
  as: Tag = "div",
  highlight
}: Props) {
  return (
    <Tag
      className={cn(
        "relative flex flex-col",
        "transition-[border-color,transform,background-color] duration-350 ease-editorial",
        "hover:-translate-y-[2px]",
        toneMap[tone],
        highlight && "border-teal shadow-teal-soft",
        className
      )}
    >
      {children}
    </Tag>
  );
}
