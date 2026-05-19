import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SignupNudge } from "@/components/auth/SignupNudge";
import { home, agents } from "@/lib/content";

export function Hero() {
  const { hero } = home;
  return (
    <Section
      tone="ink"
      pad="none"
      grain
      className="relative overflow-hidden pt-32 pb-24 md:pt-36 md:pb-28 lg:pt-44 lg:pb-32"
    >
      {/* Layer 1 — full-bleed athlete portrait. Pulled WAY back so the page reads
          text-first like the parent brand. Photography is a quiet anchor, not the act. */}
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[60%_25%] opacity-[0.18] duotone-ink"
        />
      </div>

      {/* Layer 2 — flat copy panel. Slightly heavier so type carries the section. */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 z-[1] w-full bg-ink/92 md:w-[72%] lg:w-[64%]"
      />

      {/* Layer 3 — single teal hairline on the seam. Brand signature device. */}
      <span
        aria-hidden
        className="absolute inset-y-12 z-[2] hidden w-px bg-teal/45 md:left-[72%] md:block lg:left-[64%]"
      />

      {/* Content */}
      <div className="relative z-[3] grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left rail: eyebrow + headline + sub + CTAs */}
        <div className="lg:col-span-8 lg:pr-8">
          <Reveal>
            <Eyebrow tone="muted">{hero.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={120}>
            <h1
              aria-label={hero.headline}
              className="display mt-10 text-displayLg text-bone balance"
            >
              <span className="block">Build the career</span>
              <span className="relative inline-block">
                <span className="text-teal">your sport</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-teal/60 md:h-[3px]"
                />
              </span>{" "}
              <span className="block">won&apos;t.</span>
            </h1>
          </Reveal>

          <Reveal delay={260}>
            <p className="t-intro mt-10 max-w-[58ch] text-bodyLg text-coolGrey-soft pretty">
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
                className="group inline-flex items-center gap-2 text-[12.5px] font-medium uppercase tracking-[0.18em] text-bone/85 transition-colors duration-250 ease-editorial hover:text-teal"
              >
                <span className="border-b border-white/30 pb-0.5 transition-colors group-hover:border-teal">
                  {hero.secondaryCta.label}
                </span>
                <span aria-hidden className="transition-transform duration-250 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Reveal>

          {/* Inline meta — credibility line under CTAs */}
          <Reveal delay={500}>
            <dl className="mt-14 grid grid-cols-3 gap-x-6 gap-y-2 max-w-[640px] text-[11px] uppercase tracking-[0.18em] text-coolGrey-deep">
              <div>
                <dt className="text-coolGrey-deep/70">Cohort</dt>
                <dd className="mt-1 tabular text-coolGrey-warm">2026 Foundation</dd>
              </div>
              <div>
                <dt className="text-coolGrey-deep/70">Based</dt>
                <dd className="mt-1 text-coolGrey-warm">Brisbane</dd>
              </div>
              <div>
                <dt className="text-coolGrey-deep/70">Built for</dt>
                <dd className="mt-1 text-coolGrey-warm">Pro athletes</dd>
              </div>
            </dl>
          </Reveal>

          {/* Inline sign-up — single-field email capture under credibility row.
              Lower-friction alternative to the primary CTA. Routes to /signup
              with email pre-filled. */}
          <Reveal delay={620}>
            <div className="mt-10 max-w-[560px] border-t border-white/10 pt-7">
              <p className="eyebrow text-coolGrey-warm">Open the coach room</p>
              <div className="mt-4">
                <SignupNudge variant="inline" tone="dark" cta="Start free" />
              </div>
              <p className="mt-3 text-caption text-coolGrey-deep/80">
                No card. Five specialists, one tap away.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right rail: typographic placard — count + framework markers.
            Sits on top of the photo on desktop. */}
        <aside className="lg:col-span-4 lg:flex lg:flex-col lg:justify-end">
          <Reveal delay={500}>
            <div className="relative border-l border-white/15 pl-6 lg:pl-8">
              <span
                aria-hidden
                className="absolute -left-px top-0 h-12 w-px bg-teal"
              />
              <p className="eyebrow text-coolGrey-warm">Specialists</p>
              <p className="display tabular mt-4 text-displayLg leading-[0.85] text-bone">
                {String(agents.length).padStart(2, "0")}
              </p>
              <p className="mt-3 text-ui text-coolGrey-soft max-w-[24ch] pretty">
                Five AI specialists, each focused on one part of the commercial career.
              </p>
              <ul className="mt-8 flex flex-col gap-2.5 text-[12px] uppercase tracking-[0.16em] text-coolGrey-warm">
                {["Identity", "Strategy", "Execute", "Commercialise"].map((p) => (
                  <li key={p} className="tabular">{p}</li>
                ))}
              </ul>

              <div className="mt-10 border-t border-white/15 pt-5">
                <p className="display tabular text-h2 leading-none text-teal">600+</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-coolGrey-deep">
                  Athletes delivered
                </p>
              </div>
            </div>
          </Reveal>
        </aside>
      </div>
    </Section>
  );
}
