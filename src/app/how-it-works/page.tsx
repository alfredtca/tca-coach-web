import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AgentDetail } from "@/components/sections/AgentDetail";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { agents, howItWorks } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Five specialists. One platform. Built on the TCA framework. Each agent owns a piece of the commercial career."
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow={howItWorks.hero.eyebrow}
        title={howItWorks.hero.title}
        sub={howItWorks.hero.sub}
        number="01"
      />

      {agents.map((agent, i) => (
        <AgentDetail key={agent.slug} agent={agent} index={i} />
      ))}

      <Section tone="paper" pad="lg" grain className="border-t border-rule/60">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow text-ink/60">{howItWorks.outro.eyebrow}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display mt-6 text-h1Lg text-ink balance">
                {howItWorks.outro.title}
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-prose2 text-bodyLg text-ink/70 pretty">
                {howItWorks.outro.body}
              </p>
            </Reveal>
          </div>
          <Reveal delay={340} className="lg:col-span-4 lg:flex lg:flex-col lg:gap-3 lg:justify-end">
            <Button href={howItWorks.outro.primaryCta.href} variant="primary" size="lg" withArrow>
              {howItWorks.outro.primaryCta.label}
            </Button>
            <Button href={howItWorks.outro.secondaryCta.href} variant="ghost" size="lg">
              {howItWorks.outro.secondaryCta.label}
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
