import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { home } from "@/lib/content";

const PILLARS = [
  {
    number: "01",
    name: "Identity",
    body: "Who you are commercially. Values, positioning, narrative.",
    example: "Positioning statement, three-bio set, voice rules"
  },
  {
    number: "02",
    name: "Strategy",
    body: "The plan that turns identity into income, ranked by realistic effort vs return.",
    example: "Income-stream map, partnership shortlist, fee benchmarks"
  },
  {
    number: "03",
    name: "Execute",
    body: "The daily and weekly work that compounds — outreach, content, proposals.",
    example: "12-week content calendar, outreach scripts, pitch decks"
  },
  {
    number: "04",
    name: "Commercialise",
    body: "Signed deals, longer careers, and equity that outlasts the sport.",
    example: "Deal terms checklist, post-career business plan, equity playbook"
  }
] as const;

export function TCAFramework() {
  const { framework } = home;
  return (
    <Section tone="paper" pad="default">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <header className="lg:col-span-5">
          <Reveal>
            <Eyebrow number="04" tone="ink">{framework.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display-section mt-6 text-h2Lg text-ink balance">
              {framework.title}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-prose2 text-bodyLg text-ink/70 pretty">
              {framework.body}
            </p>
          </Reveal>
        </header>

        <ol className="lg:col-span-7 relative">
          <span
            aria-hidden
            className="absolute left-[28px] top-2 bottom-2 w-px bg-ink/15"
          />
          {PILLARS.map((p, i) => (
            <Reveal as="li" key={p.number} delay={i * 110} className="relative pl-20 pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center border border-ink/20 bg-paper-soft"
              >
                <span className="display tabular text-[20px] text-ink/65">{p.number}</span>
              </span>
              <h3 className="t-h3 text-h3Lg leading-[1.1] text-ink">
                {p.name}
              </h3>
              <p className="mt-3 max-w-prose2 text-body text-ink/65 pretty">
                {p.body}
              </p>
              {/* Concrete example outputs — anchors abstract pillar in real artefacts */}
              <div className="mt-5 flex items-start gap-4 border-l border-teal/45 pl-4">
                <span className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-teal-deep pt-[3px]">
                  Outputs
                </span>
                <span className="text-ui text-ink/75 max-w-prose2 pretty">
                  {p.example}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
