import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { home, pricingTiers } from "@/lib/content";

export function PricingTeaser() {
  const { pricingTeaser } = home;
  return (
    <Section tone="paper" pad="default">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <header className="lg:col-span-5">
          <Reveal>
            <Eyebrow number="07" tone="ink">{pricingTeaser.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display-section mt-6 text-h2Lg text-ink balance">
              {pricingTeaser.title}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-prose2 text-bodyLg text-ink/70 pretty">
              {pricingTeaser.sub}
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-10">
              <Button href={pricingTeaser.cta.href} variant="ghost-dark" size="lg" withArrow>
                {pricingTeaser.cta.label}
              </Button>
            </div>
          </Reveal>
        </header>

        <ul className="lg:col-span-7 grid gap-4 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal as="li" key={tier.id} delay={i * 100}>
              <Card
                tone="paper"
                highlight={tier.highlight}
                className="h-full p-7 lg:p-8 tier-grid shadow-card"
              >
                <div className="flex items-baseline justify-between">
                  <p className="display-section text-h3 text-ink">
                    {tier.name}
                  </p>
                  {tier.badge && (
                    <span className="border border-teal px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-teal-deep">
                      {tier.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="display tabular text-h1 leading-none text-ink">
                    {tier.price}
                  </span>
                  <span className="text-caption text-ink/55">{tier.cadence}</span>
                </div>
                <p className="text-ui text-ink/70 pretty">{tier.blurb}</p>
                <ul className="text-ui text-ink/65 self-start space-y-2">
                  {tier.features.slice(0, 2).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span aria-hidden className="mt-[7px] h-px w-3 bg-teal shrink-0" />
                      <span className="pretty">{f}</span>
                    </li>
                  ))}
                </ul>
                <span aria-hidden className="self-stretch" />
                <div className="self-end">
                  <Button
                    href={tier.cta.href}
                    variant={tier.highlight ? "primary" : "ghost-dark"}
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
      </div>
    </Section>
  );
}
