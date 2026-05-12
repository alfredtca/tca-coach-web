import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/lib/content";

export function BioSection() {
  const { bio } = about;
  return (
    <Section tone="paper" pad="default">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-5">
          <Reveal>
            {/* Editorial portrait frame — real founder photo */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/10 bg-bone">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/carlie-portrait.jpg"
                alt="Carlie Green-Medina, Founder of The Commercial Athlete"
                className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
              />
              {/* Hairline accent — top-left corner */}
              <span aria-hidden className="absolute left-0 top-0 h-px w-16 bg-teal" />
              <span aria-hidden className="absolute left-0 top-0 h-16 w-px bg-teal" />
              {/* Bottom plate — name + role on flat dark panel */}
              <div className="absolute inset-x-0 bottom-0 bg-ink/85 p-7">
                <p className="eyebrow text-teal">Founder</p>
                <p className="display mt-3 text-h2 leading-[1.05] text-bone">
                  Carlie Green-Medina
                </p>
                <p className="mt-3 text-caption text-coolGrey-soft">Brisbane, Australia</p>
              </div>
            </div>

            {/* Credentials strip — pulled out from buried bio paragraph */}
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-ink/15 pt-6">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Education</dt>
                <dd className="mt-2 text-ui text-ink/85">Columbia Business School</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Featured</dt>
                <dd className="mt-2 text-ui text-ink/85">Sky News Australia</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Built</dt>
                <dd className="mt-2 text-ui text-ink/85">Agency X Talent (2017)</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Coached</dt>
                <dd className="mt-2 text-ui text-ink/85">600+ athletes</dd>
              </div>
            </dl>
          </Reveal>
        </aside>

        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow tone="ink">{bio.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display mt-6 text-h1Lg text-ink balance">
              {bio.title}
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 text-ui uppercase tracking-[0.16em] text-ink/55">
              {bio.role}
            </p>
          </Reveal>
          <div className="mt-10 space-y-6">
            {bio.paragraphs.map((p, i) => (
              <Reveal key={i} delay={300 + i * 100}>
                <p className="max-w-prose2 text-bodyLg text-ink/75 pretty">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
