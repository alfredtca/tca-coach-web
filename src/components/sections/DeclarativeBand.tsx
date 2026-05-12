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
 * rendered at hero scale on a flat ink panel. Mirrors the parent brand's
 * "Not theory. Not observation. The actual work." device.
 *
 * Use sparingly — one per page max — between content sections that need a
 * confident pause.
 */
export function DeclarativeBand({ lines, kicker }: Props) {
  return (
    <Section
      tone="ink"
      pad="lg"
      grain
      className="relative border-y border-white/10"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-8">
          {kicker && (
            <Reveal>
              <p className="eyebrow text-coolGrey-warm">{kicker}</p>
            </Reveal>
          )}
          <Reveal delay={120}>
            <p className="display mt-6 text-h1Lg text-bone balance">
              {lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        <Reveal delay={260} className="lg:col-span-4 lg:pb-3">
          <div className="relative border-l border-white/15 pl-6">
            <span
              aria-hidden
              className="absolute -left-px top-0 h-10 w-px bg-teal"
            />
            <p className="text-ui text-coolGrey-soft pretty">
              The framework that powers The Commercial Athlete Coach is the same one
              applied inside Agency X Talent. Built from the work, not the theory.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
