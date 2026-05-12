import { Section } from "@/components/ui/Section";

const PILLARS = [
  { number: "01", label: "Identity" },
  { number: "02", label: "Strategy" },
  { number: "03", label: "Execute" },
  { number: "04", label: "Commercialise" }
] as const;

/**
 * Brand signature strip — repeats the parent-brand framework as a single
 * monumental band. Sits between hero and the rest of the page, the same
 * way the parent site uses "Identity → Strategy → Execute → Commercialise"
 * as its signature throughline. Pure typography, no decoration.
 */
export function FrameworkStrip() {
  return (
    <Section
      tone="ink"
      pad="none"
      className="relative border-y border-white/10"
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {PILLARS.map((p, i) => (
          <div
            key={p.number}
            className={[
              "flex items-center gap-4 px-6 py-7 md:px-8 md:py-9",
              i > 0 ? "md:border-l border-white/10" : "",
              i === 1 ? "border-l border-white/10" : "",
              i >= 2 ? "border-t border-white/10 md:border-t-0" : ""
            ].join(" ")}
          >
            <span className="display tabular text-h3 leading-none text-coolGrey-deep">
              {p.number}
            </span>
            <span className="display-section text-h3Lg text-bone leading-none">
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
