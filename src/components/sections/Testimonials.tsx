import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { home } from "@/lib/content";

export function Testimonials() {
  const { testimonials } = home;

  return (
    <Section tone="paperSoft" pad="default" className="relative">
      <header className="relative grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow tone="ink" number="06">{testimonials.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display-section mt-6 text-h2Lg text-ink balance">
              {testimonials.title}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={240} className="md:col-span-5">
          <p className="text-body text-ink/65 max-w-prose2 pretty md:text-bodyLg">
            {testimonials.sub}
          </p>
        </Reveal>
      </header>

      {/* Editorial broken grid: featured large card + two stacked smaller */}
      <div className="relative mt-16 grid gap-px border border-rule/70 bg-rule/40 lg:grid-cols-12">
        {/* Large feature card — first testimonial */}
        <article className="relative col-span-12 flex flex-col bg-paper p-8 md:p-12 lg:col-span-7">
          <span aria-hidden className="absolute left-0 top-0 h-px w-20 bg-teal" />
          <Reveal>
            <span
              aria-hidden
              className="display text-[120px] leading-[0.8] text-teal/50 md:text-[160px]"
            >
              &ldquo;
            </span>
          </Reveal>
          <Reveal delay={120}>
            <blockquote className="mt-2 max-w-[28ch] text-ink">
              <p className="t-intro text-h3Lg leading-[1.35] text-ink balance">
                {testimonials.items[0].quote}
              </p>
            </blockquote>
          </Reveal>
          <Reveal delay={260}>
            <footer className="mt-10 flex items-center gap-4 border-t border-rule/70 pt-7">
              <div className="flex h-12 w-12 items-center justify-center border border-teal/35 bg-teal/[0.05]">
                <span className="display tabular text-[12px] tracking-[0.04em] text-teal-deep">
                  {initialsOf(testimonials.items[0].name)}
                </span>
              </div>
              <div>
                <p className="t-ui text-ui text-ink">
                  {testimonials.items[0].name}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink/55">
                  {testimonials.items[0].role}
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/40">
                  {testimonials.items[0].league}
                </p>
              </div>
            </footer>
          </Reveal>
        </article>

        {/* Two stacked smaller cards on the right */}
        <div className="col-span-12 grid gap-px bg-rule/40 lg:col-span-5">
          {testimonials.items.slice(1).map((item, i) => (
            <Reveal key={item.name} delay={140 + i * 120} as="article" className="bg-paper">
              <div className="relative flex h-full flex-col p-8 md:p-10">
                <span aria-hidden className="absolute left-0 top-0 h-px w-12 bg-teal/60" />
                <span className="text-teal/50 display text-[56px] leading-none">&ldquo;</span>
                <blockquote className="mt-2 text-ink/75">
                  <p className="text-body pretty md:text-bodyLg">{item.quote}</p>
                </blockquote>
                <footer className="mt-7 flex items-center gap-4 border-t border-rule/70 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center border border-ink/15 bg-paper-soft">
                    <span className="display tabular text-[10px] tracking-[0.04em] text-ink/65">
                      {initialsOf(item.name)}
                    </span>
                  </div>
                  <div>
                    <p className="t-ui text-ui text-ink">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-ink/55">
                      {item.role}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-ink/40">
                      {item.league}
                    </p>
                  </div>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function initialsOf(name: string): string {
  const words = name.replace(/&/g, "and").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}
