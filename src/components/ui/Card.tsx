import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "surface" | "ink" | "outline" | "bone";
  as?: "div" | "article" | "li";
  highlight?: boolean;
};

const toneMap = {
  surface: "bg-surface border border-white/[0.06] text-white",
  ink: "bg-ink border border-white/[0.06] text-white",
  outline: "bg-transparent border border-white/15 text-white",
  bone: "bg-bone border border-ink/10 text-ink"
} as const;

export function Card({
  children,
  className,
  tone = "surface",
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
