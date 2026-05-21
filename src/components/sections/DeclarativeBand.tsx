import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  /** Each line renders as a separate statement. Keep them short. */
  lines: string[];
  /** Optional kicker shown small above the lines. */
  kicker?: string;
};

/**
 * Brand-voice band — a single declarative statement (or short staccato pair)
 * rendered at hero scale. Light surface to match the parent brand's clean
 * editorial cadence.
 */
export function DeclarativeBand({ lines, kicker }: Props) {
  return (
    <Section
      tone="paper"
      pad="lg"
      className="relative border-y border-rule/60"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-8">
          {kicker && (
            <Reveal>
              <p className="eyebrow text-ink/55">{kicker}</p>
            </Reveal>
          )}
          <Reveal delay={120}>
            <p className="display mt-6 text-h1Lg text-ink balance">
              {lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        <Reveal delay={260} className="lg:col-span-4 lg:pb-3">
          <div className="relative border-l border-rule pl-6">
            <span
              aria-hidden
              className="absolute -left-px top-0 h-10 w-px bg-teal"
            />
            <p className="text-ui text-ink/65 pretty">
              The framework that powers The Commercial Athlete Coach is the same one
              applied inside Agency X Talent. Built from the work, not the theory.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
