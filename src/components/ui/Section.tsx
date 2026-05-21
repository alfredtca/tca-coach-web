import { cn } from "@/lib/cn";

type Tone =
  | "paper"     // default — white, parent-brand surface
  | "paperSoft" // light grey #F1F3F5 for contrast bands
  | "ink"       // black with white text — used sparingly (coach room shell, hero scrim)
  | "teal"      // accent surface — CTAs only
  | "charcoal"  // app-shell dark
  | "obsidian"  // app-shell darker
  | "surface"   // app-shell mid
  | "bone";     // legacy alias for paperSoft

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
  paper: "bg-paper text-ink",
  paperSoft: "bg-paper-soft text-ink",
  ink: "bg-ink text-paper",
  teal: "bg-teal text-ink",
  charcoal: "bg-charcoal text-paper",
  obsidian: "bg-obsidian text-paper",
  surface: "bg-surface text-paper",
  bone: "bg-paper-soft text-ink"
};

const padMap: Record<Pad, string> = {
  none: "",
  sm: "py-12 md:py-16",
  default: "py-20 md:py-28 lg:py-32",
  lg: "py-28 md:py-36 lg:py-44"
};

export function Section({
  id,
  tone = "paper",
  pad = "default",
  grain = false,
  className,
  children,
  as: Tag = "section"
}: Props) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative overflow-hidden",
        toneMap[tone],
        padMap[pad],
        grain && "grain",
        className
      )}
    >
      <div className="mx-auto w-full max-w-wide px-6 md:px-10 lg:px-14">
        {children}
      </div>
    </Tag>
  );
}
