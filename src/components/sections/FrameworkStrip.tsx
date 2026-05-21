import { Section } from "@/components/ui/Section";

const PILLARS = [
  { number: "01", label: "Identity" },
  { number: "02", label: "Strategy" },
  { number: "03", label: "Execute" },
  { number: "04", label: "Commercialise" }
] as const;

/**
 * Brand signature strip — repeats the parent-brand framework as a single
 * monumental band of typography. Light surface to match the parent.
 */
export function FrameworkStrip() {
  return (
    <Section
      tone="paperSoft"
      pad="none"
      className="relative border-y border-rule/60"
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {PILLARS.map((p, i) => (
          <div
            key={p.number}
            className={[
              "flex items-center gap-4 px-6 py-7 md:px-8 md:py-9",
              i > 0 ? "md:border-l border-rule/60" : "",
              i === 1 ? "border-l border-rule/60" : "",
              i >= 2 ? "border-t border-rule/60 md:border-t-0" : ""
            ].join(" ")}
          >
            <span className="display tabular text-h3 leading-none text-ink/40">
              {p.number}
            </span>
            <span className="display-section text-h3Lg text-ink leading-none">
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
