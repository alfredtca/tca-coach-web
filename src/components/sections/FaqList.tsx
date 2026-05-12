import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { faq } from "@/lib/content";

export function FaqList() {
  return (
    <Section tone="ink" pad="default" grain>
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <header className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow>{faq.hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display mt-6 text-h1Lg text-bone balance">
              {faq.hero.title}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-prose2 text-bodyLg text-coolGrey-soft pretty">
              {faq.hero.sub}
            </p>
          </Reveal>
        </header>

        <Reveal delay={200} className="lg:col-span-7">
          <Accordion items={faq.items} tone="ink" defaultOpenIndex={0} />
        </Reveal>
      </div>
    </Section>
  );
}
