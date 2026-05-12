import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/lib/content";

export function FrameworkDeepDive() {
  const { framework } = about;
  return (
    <Section tone="ink" pad="default" grain>
      <header className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>{framework.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display mt-6 text-h1Lg text-bone balance">
              {framework.title}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={240} className="md:col-span-5">
          <p className="text-bodyLg text-coolGrey-soft max-w-prose2 pretty">
            {framework.sub}
          </p>
        </Reveal>
      </header>

      <ol className="mt-16 grid grid-cols-1 gap-px border border-white/8 bg-white/5 md:grid-cols-2">
        {framework.pillars.map((p, i) => (
          <Reveal as="li" key={p.number} delay={i * 110}>
            <article className="flex h-full flex-col bg-charcoal p-9 lg:p-11">
              <div className="flex items-start justify-between">
                <span className="display tabular text-[80px] leading-none text-coolGrey-deep">
                  {p.number}
                </span>
                <span className="eyebrow text-coolGrey self-end">Pillar</span>
              </div>
              <h3 className="display-section mt-10 text-h2 leading-[1.05] text-bone">
                {p.name}
              </h3>
              <p className="mt-6 text-body text-coolGrey-soft pretty">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
