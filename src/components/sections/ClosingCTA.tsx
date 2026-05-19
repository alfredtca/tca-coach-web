import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { home } from "@/lib/content";
import { SignupNudge } from "@/components/auth/SignupNudge";

export function ClosingCTA() {
  const { closingCta } = home;
  return (
    <Section
      id="signup"
      tone="ink"
      pad="lg"
      grain
      className="relative border-t border-white/[0.08] frame-top"
    >
      <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <header className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-coolGrey-warm">Open the coach room</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display mt-6 text-h1Lg text-bone balance">
              {closingCta.display}
            </h2>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-8 max-w-prose2 text-bodyLg text-coolGrey-soft pretty">
              {closingCta.finePrint}
            </p>
          </Reveal>
        </header>

        <Reveal delay={320} className="lg:col-span-5 lg:pt-2">
          <div className="relative border border-white/10 bg-white/[0.025] p-7 lg:p-9">
            <span
              aria-hidden
              className="absolute left-0 top-0 h-px w-16 bg-teal"
            />
            <p className="display-section text-h3Lg text-bone">
              Sign up to the Coach.
            </p>
            <p className="mt-3 max-w-prose2 text-ui text-coolGrey pretty">
              Foundation members keep launch pricing for the life of their subscription.
            </p>
            <div className="mt-7">
              <SignupNudge variant="stacked" tone="dark" cta={closingCta.button} />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
