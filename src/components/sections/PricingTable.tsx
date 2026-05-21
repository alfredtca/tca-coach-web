import { Fragment } from "react";
import { Check, Minus } from "@phosphor-icons/react/dist/ssr";
import { pricing, pricingTiers } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function PricingTable() {
  return (
    <Section tone="paper" pad="default" grain>
      <ul className="grid gap-5 md:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <Reveal as="li" key={tier.id} delay={i * 100}>
            <Card
              tone="paper"
              highlight={tier.highlight}
              className="h-full p-8 lg:p-10 tier-grid"
            >
              <div className="flex items-baseline justify-between">
                <p className="display-section text-h3Lg text-ink">
                  {tier.name}
                </p>
                {tier.badge && (
                  <span className="border border-teal px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-teal">
                    {tier.badge}
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="display tabular text-h1Lg leading-none text-ink">
                  {tier.price}
                </span>
                <span className="text-caption text-ink/60">{tier.cadence}</span>
              </div>
              <p className="text-body text-ink/65 pretty">{tier.blurb}</p>
              <ul className="text-ui text-ink/65 self-start space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span aria-hidden className="mt-[7px] h-px w-3 bg-white/30 shrink-0" />
                    <span className="pretty">{f}</span>
                  </li>
                ))}
              </ul>
              <span aria-hidden className="self-stretch" />
              <div className="self-end pt-2">
                <Button
                  href={tier.cta.href}
                  variant={tier.highlight ? "primary" : "ghost"}
                  size="md"
                  fullWidth
                >
                  {tier.cta.label}
                </Button>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>

      {/* Comparison */}
      <div className="mt-24 lg:mt-32">
        <Reveal>
          <p className="eyebrow text-ink/60">Compare in detail</p>
          <h2 className="display-section mt-4 text-h2Lg text-ink balance">
            What&apos;s in each plan.
          </h2>
        </Reveal>

        {/* Mobile: per-tier stacked lists */}
        <div className="mt-10 space-y-8 lg:hidden">
          {pricingTiers.map((tier, tIdx) => (
            <div key={tier.id} className="border border-rule/60 bg-paper-soft p-6">
              <div className="flex items-baseline justify-between">
                <p className="display-section text-h3 text-ink">
                  {tier.name}
                </p>
                <span className="text-caption text-ink/60">
                  {tier.price} {tier.cadence}
                </span>
              </div>
              <div className="mt-6 space-y-7">
                {pricing.features.map((group) => (
                  <div key={group.group}>
                    <p className="eyebrow text-ink/60">{group.group}</p>
                    <ul className="mt-3 space-y-2.5">
                      {group.rows.map((row) => {
                        const v = row.values[tIdx];
                        return (
                          <li
                            key={row.label}
                            className="flex items-start gap-3 text-ui text-ink/65"
                          >
                            {typeof v === "boolean" ? (
                              v ? (
                                <Check
                                  size={16}
                                  weight="bold"
                                  className="mt-[3px] shrink-0 text-ink"
                                />
                              ) : (
                                <Minus
                                  size={16}
                                  weight="regular"
                                  className="mt-[3px] shrink-0 text-ink/60/40"
                                />
                              )
                            ) : (
                              <span className="mt-0 shrink-0 tabular text-ui text-ink">
                                {v}
                              </span>
                            )}
                            <span className="text-ink pretty">{row.label}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: comparison table */}
        <div className="mt-10 hidden lg:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-rule/60">
                <th className="py-5 pr-6 align-bottom">
                  <span className="eyebrow text-ink/60">Feature</span>
                </th>
                {pricingTiers.map((t) => (
                  <th key={t.id} className="py-5 pr-6 align-bottom">
                    <span className="display text-[22px] tracking-[0.04em] text-ink">
                      {t.name}
                    </span>
                    <span className="block text-caption font-normal text-ink/60 mt-1 tabular">
                      {t.price} {t.cadence}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricing.features.map((group) => (
                <Fragment key={group.group}>
                  <tr>
                    <td
                      colSpan={pricingTiers.length + 1}
                      className="border-b border-rule/40 pt-10 pb-3"
                    >
                      <span className="eyebrow text-ink/60">{group.group}</span>
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-b border-rule/40">
                      <td className="py-4 pr-6 text-body text-ink/65 pretty">
                        {row.label}
                      </td>
                      {row.values.map((v, i) => (
                        <td key={i} className="py-4 pr-6 text-body text-ink">
                          {typeof v === "boolean" ? (
                            v ? (
                              <Check
                                size={20}
                                weight="bold"
                                className="text-ink"
                                aria-label="Included"
                              />
                            ) : (
                              <Minus
                                size={20}
                                weight="regular"
                                className="text-ink/60/40"
                                aria-label="Not included"
                              />
                            )
                          ) : (
                            <span className="tabular text-ink">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {pricing.footnote && (
        <p className="mt-16 max-w-prose2 text-caption text-ink/60 pretty">
          {pricing.footnote}
        </p>
      )}
    </Section>
  );
}
