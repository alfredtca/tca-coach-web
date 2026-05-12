import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { home } from "@/lib/content";

export function ThreeUp() {
  const { threeUp } = home;
  return (
    <Section tone="paper" pad="lg" className="relative overflow-hidden">
      {/* Header — left rail */}
      <header className="relative grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow number="02" tone="ink">{threeUp.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display-section mt-6 text-h2Lg text-ink balance">
              {threeUp.title}
            </h2>
          </Reveal>
        </div>
        {threeUp.sub ? (
          <Reveal delay={220} className="md:col-span-5">
            <p className="text-body text-ink/70 max-w-prose2 pretty md:text-bodyLg">
              {threeUp.sub}
            </p>
          </Reveal>
        ) : null}
      </header>

      {/* Editorial layout — staggered rows + asymmetric athlete portrait anchor.
          Replaces the 3-up uniform grid. */}
      <div className="relative mt-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* LEFT: numbered outcomes, each in its own staggered row */}
        <ol className="lg:col-span-7 flex flex-col">
          {threeUp.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 130}>
              <article
                className={[
                  "relative grid grid-cols-12 gap-5 py-12 first:pt-0",
                  i > 0 ? "border-t border-ink/10" : ""
                ].join(" ")}
              >
                {/* Display number — oversized, sits in left rail */}
                <div className="col-span-3 md:col-span-2">
                  <span className="display tabular text-displayLg leading-[0.9] text-ink/15">
                    {`0${i + 1}`}
                  </span>
                </div>

                {/* Title + body — main column */}
                <div className="col-span-9 md:col-span-10">
                  <h3 className="display-section text-h2Lg text-ink balance">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-[58ch] text-body text-ink/70 pretty md:text-bodyLg">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        {/* RIGHT: floating athlete portrait — broken-grid anchor.
            Sticky on desktop so it travels with the outcomes. */}
        <Reveal as="aside" className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <div className="photo-card relative aspect-[3/4] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-[50%_30%] photo-warm"
              />
              {/* Top hairline corner mark */}
              <span
                aria-hidden
                className="absolute left-6 top-6 z-[3] h-px w-12 bg-teal"
              />
              <span
                aria-hidden
                className="absolute left-6 top-6 z-[3] h-12 w-px bg-teal"
              />
              {/* Bottom plate — dark background sized to text content */}
              <div className="absolute inset-x-0 bottom-0 z-[3] bg-ink/85 p-7 md:p-9">
                <p className="eyebrow text-bone/65">The Commercial Athlete</p>
                <p className="display-section mt-3 text-h2 leading-[1.05] text-bone balance">
                  Built for athletes who refuse to wait.
                </p>
              </div>
            </div>

            {/* Caption pull — sits under the photo, editorial print feel */}
            <p className="mt-6 max-w-[40ch] text-ui text-ink/60 pretty">
              Three outcomes. One framework. The work that turns a sporting
              profile into a commercial career.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
