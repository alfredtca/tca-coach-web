import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/lib/content";

export function Ecosystem() {
  const { ecosystem } = about;
  return (
    <Section tone="paper" pad="default">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <header className="lg:col-span-5">
          <Reveal>
            <Eyebrow tone="ink">{ecosystem.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display-section mt-6 text-h2Lg text-ink balance">
              {ecosystem.title}
            </h2>
          </Reveal>
        </header>
        <div className="lg:col-span-7">
          <Reveal delay={200}>
            <p className="text-bodyLg text-ink/70 max-w-prose2 pretty">
              {ecosystem.body}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 grid gap-px border border-ink/15 bg-paper/10 md:grid-cols-2">
              <div className="bg-paper p-8">
                <p className="eyebrow text-ink/60">Teaches</p>
                <p className="display mt-5 text-h2 tracking-[0.02em] text-ink">
                  The Commercial Athlete
                </p>
                <p className="mt-3 text-ui text-ink/65 pretty">
                  Framework, education, and the Coach platform. Open to any Australian athlete.
                </p>
              </div>
              <div className="bg-paper p-8">
                <p className="eyebrow text-ink/60">Represents</p>
                <p className="display mt-5 text-h2 tracking-[0.02em] text-ink">
                  Agency X Talent
                </p>
                <p className="mt-3 text-ui text-ink/65 pretty">
                  Active commercial management for the careers that warrant representation.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10">
              <Button href={ecosystem.cta.href} variant="ghost" size="md" withArrow>
                {ecosystem.cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
