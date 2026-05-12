import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "ghost-dark" | "link";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  withArrow?: boolean;
  children: React.ReactNode;
};

type AsLink = CommonProps & { href: string; type?: never; onClick?: never };
type AsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const sizeMap: Record<Size, string> = {
  sm: "h-9 px-4 text-[12px] tracking-[0.16em]",
  md: "h-11 px-5 text-[12.5px] tracking-[0.16em]",
  lg: "h-12 px-7 text-[13px] tracking-[0.16em]"
};

const variantMap: Record<Variant, string> = {
  primary:
    "bg-teal text-ink hover:bg-teal-deep border border-teal hover:border-teal-deep " +
    "shadow-[0_0_0_0_rgba(61,191,160,0)] hover:shadow-teal-soft",
  ghost:
    "bg-transparent text-white border border-white/25 hover:border-teal hover:text-teal",
  "ghost-dark":
    "bg-transparent text-ink border border-ink/25 hover:border-teal hover:text-teal-deep",
  link: "p-0 h-auto bg-transparent border-0 text-teal hover:text-teal-deep underline underline-offset-4"
};

export function Button(props: AsLink | AsButton) {
  const {
    variant = "primary",
    size = "md",
    fullWidth,
    className,
    withArrow,
    children
  } = props;

  const base =
    "inline-flex items-center justify-center gap-2 font-medium uppercase " +
    "transition-all duration-250 ease-editorial " +
    "active:translate-y-[1px] active:scale-[0.98] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

  const cls = cn(
    base,
    variant !== "link" && sizeMap[size],
    variantMap[variant],
    fullWidth && "w-full",
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight size={14} weight="bold" aria-hidden />}
    </>
  );

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http");
    if (isExternal) {
      return (
        <a className={cls} href={props.href} target="_blank" rel="noreferrer noopener">
          {inner}
        </a>
      );
    }
    return (
      <Link className={cls} href={props.href}>
        {inner}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as AsButton;
  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
}
