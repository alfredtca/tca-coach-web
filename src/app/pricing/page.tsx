import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PricingTable } from "@/components/sections/PricingTable";
import { ComparisonPanel } from "@/components/sections/ComparisonPanel";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three tiers. No lock-in. Tax-deductible as professional development. Pricing in Australian dollars."
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow={pricing.hero.eyebrow}
        title={pricing.hero.title}
        sub={pricing.hero.sub}
        number="01"
      />
      <PricingTable />
      <ComparisonPanel />

      <Section tone="charcoal" pad="default">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Eyebrow>Pricing FAQ</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display mt-6 text-h2 text-white md:text-h2Lg balance">
                Quick answers on pricing.
              </h2>
            </Reveal>
          </header>
          <Reveal delay={200} className="lg:col-span-7">
            <Accordion
              items={pricing.pricingFaqs}
              tone="ink"
              defaultOpenIndex={0}
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
