import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BioSection } from "@/components/sections/BioSection";
import { FrameworkDeepDive } from "@/components/sections/FrameworkDeepDive";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by an operator, not a consultant. The Commercial Athlete Coach is the platform Carlie Green-Medina wishes had existed when she started representing athletes."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        sub={about.hero.sub}
        number="01"
      />
      <BioSection />
      <FrameworkDeepDive />
      <Ecosystem />

      <Section tone="ink" pad="default">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="display text-h1 text-white md:text-h1Lg balance max-w-[24ch]">
              {about.closing.title}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Button href={about.closing.cta.href} variant="primary" size="lg" withArrow>
              {about.closing.cta.label}
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
