import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SignupNudge } from "@/components/auth/SignupNudge";
import { home, agents } from "@/lib/content";

/**
 * Hero — parent-brand structure.
 *
 * White paper surface, black uppercase Barlow headline, single teal accent
 * word with a teal underline rule. Photography sits as a quiet right-rail
 * block (not full-bleed) so the type carries the page — mirroring how the
 * parent site at thecommercialathlete.com leads with text + a single image
 * card alongside, not with a heroic photographic poster.
 */
export function Hero() {
  const { hero } = home;
  return (
    <Section
      tone="paper"
      pad="none"
      className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-32"
    >
      {/* Top hairline rule — parent-brand divider device */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-rule/60" />

      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        {/* LEFT — eyebrow + headline + sub + CTA */}
        <div className="lg:col-span-7 lg:pr-8">
          <Reveal>
            <Eyebrow tone="ink">{hero.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={120}>
            <h1
              aria-label={hero.headline}
              className="display mt-8 text-displayLg text-ink balance"
            >
              <span className="block">Build the career</span>
              <span className="relative inline-block">
                <span className="text-teal-deep">your sport</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-teal md:h-[3px]"
                />
              </span>{" "}
              <span className="block">won&apos;t.</span>
            </h1>
          </Reveal>

          <Reveal delay={260}>
            <p className="t-intro mt-10 max-w-[60ch] text-bodyLg text-ink/70 pretty">
              {hero.sub}
            </p>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <Button href={hero.primaryCta.href} variant="primary" size="lg" withArrow>
                {hero.primaryCta.label}
              </Button>
              <a
                href={hero.secondaryCta.href}
                className="group inline-flex items-center gap-2 text-[12.5px] font-medium uppercase tracking-[0.18em] text-ink/75 transition-colors duration-250 ease-editorial hover:text-teal-deep"
              >
                <span className="border-b border-ink/25 pb-0.5 transition-colors group-hover:border-teal-deep">
                  {hero.secondaryCta.label}
                </span>
                <span aria-hidden className="transition-transform duration-250 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Reveal>

          {/* Credibility row */}
          <Reveal delay={500}>
            <dl className="mt-14 grid grid-cols-3 gap-x-6 gap-y-2 max-w-[640px] text-[11px] uppercase tracking-[0.18em] text-ink/55">
              <div>
                <dt className="text-ink/40">Cohort</dt>
                <dd className="mt-1 tabular text-ink/75">2026 Foundation</dd>
              </div>
              <div>
                <dt className="text-ink/40">Based</dt>
                <dd className="mt-1 text-ink/75">Brisbane</dd>
              </div>
              <div>
                <dt className="text-ink/40">Built for</dt>
                <dd className="mt-1 text-ink/75">Pro athletes</dd>
              </div>
            </dl>
          </Reveal>

          {/* Inline email capture */}
          <Reveal delay={620}>
            <div className="mt-12 max-w-[560px] border-t border-rule/60 pt-7">
              <p className="eyebrow text-ink/55">Open the coach room</p>
              <div className="mt-4">
                <SignupNudge variant="inline" tone="light" cta="Start free" />
              </div>
              <p className="mt-3 text-caption text-ink/45">
                No card. Five specialists, one tap away.
              </p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — specialists count placard + athlete photo card */}
        <aside className="lg:col-span-5 lg:flex lg:flex-col lg:gap-8">
          <Reveal delay={400}>
            {/* Photo card — sized like the parent's hero image block */}
            <div className="photo-card relative aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1400&q=80"
                alt="Australian athlete training"
                className="absolute inset-0 h-full w-full object-cover object-[60%_25%] photo-warm"
              />
              {/* Teal corner mark — brand signature */}
              <span aria-hidden className="absolute left-4 top-4 h-12 w-px bg-teal z-10" />
              <span aria-hidden className="absolute left-4 top-4 h-px w-12 bg-teal z-10" />
            </div>
          </Reveal>

          <Reveal delay={560}>
            <div className="relative border-l border-rule pl-6">
              <span aria-hidden className="absolute -left-px top-0 h-12 w-px bg-teal" />
              <p className="eyebrow text-ink/55">Specialists</p>
              <p className="display tabular mt-4 text-displayLg leading-[0.85] text-ink">
                {String(agents.length).padStart(2, "0")}
              </p>
              <p className="mt-3 text-ui text-ink/65 max-w-[28ch] pretty">
                Five AI specialists, each focused on one part of the commercial career.
              </p>
            </div>
          </Reveal>
        </aside>
      </div>
    </Section>
  );
}
