import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { home } from "@/lib/content";

const TICKER_TERMS = [
  "Brand Architect",
  "Revenue Strategist",
  "Authority Builder",
  "Deal Room",
  "Reputation Shield",
  "Identity",
  "Strategy",
  "Execute",
  "Commercialise"
];

export function LogoBar() {
  const { logoBar } = home;
  const logos = [...logoBar.placeholders, ...logoBar.placeholders];
  const terms = [...TICKER_TERMS, ...TICKER_TERMS];

  return (
    <Section tone="bone" pad="lg" className="relative overflow-hidden">
      <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
        <header className="lg:col-span-5">
          <Reveal>
            <Eyebrow number="05" tone="ink">{logoBar.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display-section mt-6 text-h2Lg text-ink balance">
              {logoBar.caption}
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-prose2 text-body text-ink/65 pretty md:text-bodyLg">
              Workshop clients, brand partners, and the rooms our framework has been
              tested in.
            </p>
          </Reveal>
        </header>

        <Reveal delay={300} className="lg:col-span-7">
          {/* Row 1 — workshop client orgs, scrolling left → right */}
          <div className="marquee-reverse">
            <Marquee>
              {logos.map((label, i) => (
                <div
                  key={`${label}-${i}`}
                  className="group relative mx-2 flex h-24 min-w-[260px] items-center justify-center overflow-hidden border border-ink/15 bg-white/55 px-8 shadow-bone-soft transition-all duration-350 ease-editorial hover:-translate-y-[1px] hover:border-teal/55 hover:bg-white/80 hover:shadow-bone-deep"
                >
                  <span aria-hidden className="absolute left-0 top-0 h-px w-8 bg-teal transition-all duration-350 ease-editorial group-hover:w-full" />
                  <span className="display whitespace-nowrap text-[15px] tracking-[0.16em] text-ink/85 transition-colors duration-250 group-hover:text-ink">
                    {label}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Row 2 — framework + agent terms, scrolling right → left */}
          <div className="mt-3">
            <Marquee speed="slow">
              {terms.map((term, i) => (
                <span
                  key={`${term}-${i}`}
                  className="mx-6 inline-flex items-center gap-4 whitespace-nowrap"
                >
                  <span className="display text-h1 leading-none text-ink/55">
                    {term}
                  </span>
                  <span aria-hidden className="h-1 w-1 rounded-full bg-teal" />
                </span>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>

      {/* Credibility stat row — three direct facts, no decoration */}
      <Reveal delay={500}>
        <dl className="mt-16 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-3 md:gap-6">
          <div>
            <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Athletes coached</dt>
            <dd className="display tabular mt-3 text-h1 leading-none text-ink">600+</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Brand partners</dt>
            <dd className="display tabular mt-3 text-h1 leading-none text-ink">20+</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Years in practice</dt>
            <dd className="display tabular mt-3 text-h1 leading-none text-ink">20</dd>
          </div>
        </dl>
      </Reveal>
    </Section>
  );
}
