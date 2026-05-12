import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
  number?: string;
  align?: "left" | "split";
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  sub,
  number,
  align = "split",
  children,
  className
}: Props) {
  return (
    <Section
      tone="ink"
      pad="none"
      grain
      className={cn("pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-28", className)}
    >
      <div
        className={cn(
          "grid gap-10",
          align === "split" ? "lg:grid-cols-12 lg:gap-16" : ""
        )}
      >
        <div className={align === "split" ? "lg:col-span-8" : ""}>
          <Reveal>
            <Eyebrow number={number} tone="muted">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mt-8 text-h1Lg text-bone balance">
              {title}
            </h1>
          </Reveal>
        </div>
        {sub && (
          <Reveal delay={240} className={align === "split" ? "lg:col-span-4 lg:pt-12" : ""}>
            <p className="t-intro max-w-prose2 text-bodyLg text-coolGrey-soft pretty">
              {sub}
            </p>
            {children}
          </Reveal>
        )}
        {!sub && children && (
          <Reveal delay={240} className={align === "split" ? "lg:col-span-4 lg:pt-12" : ""}>
            {children}
          </Reveal>
        )}
      </div>
    </Section>
  );
}
