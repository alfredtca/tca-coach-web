import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const ITEMS = [
  { label: "Sky News Australia", note: "Featured guest" },
  { label: "Columbia Business School", note: "Founder education" },
  { label: "Agency X Talent", note: "Sister agency" },
  { label: "Sport Australia Hall of Fame", note: "Workshop delivered" }
];

export function PressBar() {
  return (
    <Section tone="bone" pad="default" className="border-y border-ink/10">
      <Reveal>
        <p className="eyebrow text-ink/55">As featured in</p>
      </Reveal>
      <Reveal delay={120}>
        <ul className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <li
              key={item.label}
              className="flex flex-col gap-1.5 border-l border-ink/15 pl-5"
            >
              <span className="t-h3 text-h3 leading-[1.2] text-ink">
                {item.label}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-ink/55 tabular">
                {item.note}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
