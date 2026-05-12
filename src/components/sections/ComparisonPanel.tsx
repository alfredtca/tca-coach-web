import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { pricing } from "@/lib/content";

export function ComparisonPanel() {
  const { comparison } = pricing;
  return (
    <Section tone="bone" pad="default">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <header className="lg:col-span-5">
          <Reveal>
            <Eyebrow tone="ink">{comparison.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display-section mt-6 text-h2Lg text-ink balance">
              {comparison.title}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-prose2 text-bodyLg text-ink/70 pretty">
              {comparison.sub}
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-10 border border-ink/15 bg-ink p-7 lg:p-8 text-bone">
              <p className="eyebrow text-bone/55">{comparison.callout.label}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="display tabular text-displayLg leading-none">
                  {comparison.callout.price}
                </span>
                <span className="text-ui text-bone/65">{comparison.callout.cadence}</span>
              </div>
              <p className="mt-3 text-ui text-bone/70 pretty">{comparison.callout.tier}</p>
              <div className="mt-7">
                <Button
                  href={comparison.callout.cta.href}
                  variant="primary"
                  size="md"
                  withArrow
                >
                  {comparison.callout.cta.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </header>

        <Reveal delay={200} className="lg:col-span-7">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-ink/15">
                <th className="py-4 pr-4 eyebrow text-ink/55">Role</th>
                <th className="py-4 pr-4 eyebrow text-ink/55">Cadence</th>
                <th className="py-4 pr-4 eyebrow text-ink/55 text-right">Range (AUD)</th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.role} className="border-b border-ink/10">
                  <td className="py-5 pr-4 text-bodyLg text-ink font-medium">{row.role}</td>
                  <td className="py-5 pr-4 text-body text-ink/65">{row.cadence}</td>
                  <td className="py-5 pr-4 text-body text-ink text-right tabular">
                    {row.range}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 text-caption text-ink/55 pretty">
            Anchor against humans, not AI tools. The Coach replaces — or sharpens —
            a meaningful slice of this stack.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
