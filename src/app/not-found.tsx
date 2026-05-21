import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Section
      tone="paper"
      pad="none"
      grain
      className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-[78vh]"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Eyebrow number="404" tone="muted">
            Off-piste
          </Eyebrow>
          <h1 className="display mt-8 text-displayLg text-ink balance">
            Page not found.
          </h1>
          <p className="t-intro mt-8 max-w-prose2 text-bodyLg text-ink/70 pretty">
            The page you&apos;re after has moved or never existed. Head back to the home page, or jump to the part of the site you were after.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button href="/" variant="primary" size="lg" withArrow>
              Back to home
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Contact us
            </Button>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <ul className="border-t border-rule/60">
            {[
              { label: "How it works", href: "/how-it-works" },
              { label: "Pricing", href: "/pricing" },
              { label: "FAQ", href: "/faq" },
              { label: "About", href: "/about" }
            ].map((link, i) => (
              <li key={link.href} className="border-b border-rule/60">
                <a
                  href={link.href}
                  className="group flex items-center justify-between py-5 text-bodyLg text-ink/80 transition-colors duration-250 ease-editorial hover:text-teal"
                >
                  <span className="flex items-center gap-4">
                    <span className="display tabular text-[14px] tracking-[0.16em] text-ink/60">
                      {`0${i + 1}`}
                    </span>
                    <span>{link.label}</span>
                  </span>
                  <span aria-hidden className="text-ink/60 group-hover:text-teal">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
