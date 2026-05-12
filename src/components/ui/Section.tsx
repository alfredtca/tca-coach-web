import { cn } from "@/lib/cn";

type Tone = "ink" | "charcoal" | "obsidian" | "surface" | "teal" | "bone" | "paper";
type Pad = "none" | "sm" | "default" | "lg";

type Props = {
  id?: string;
  tone?: Tone;
  pad?: Pad;
  grain?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div" | "main" | "header" | "footer";
};

const toneMap: Record<Tone, string> = {
  ink: "bg-ink text-white",
  charcoal: "bg-charcoal text-white",
  obsidian: "bg-obsidian text-white",
  surface: "bg-surface text-white",
  teal: "bg-teal text-ink",
  bone: "bg-bone text-ink",
  paper: "bg-paper text-ink"
};

const padMap: Record<Pad, string> = {
  none: "",
  sm: "py-12 md:py-16",
  default: "py-20 md:py-28 lg:py-32",
  lg: "py-28 md:py-36 lg:py-44"
};

export function Section({
  id,
  tone = "ink",
  pad = "default",
  grain = false,
  className,
  children,
  as: Tag = "section"
}: Props) {
  const isDark = tone === "ink" || tone === "charcoal" || tone === "surface" || tone === "obsidian";
  return (
    <Tag
      id={id}
      className={cn(
        "relative overflow-hidden",
        toneMap[tone],
        padMap[pad],
        grain && isDark && "grain",
        className
      )}
    >
      <div className="mx-auto w-full max-w-wide px-6 md:px-10 lg:px-14">
        {children}
      </div>
    </Tag>
  );
}
