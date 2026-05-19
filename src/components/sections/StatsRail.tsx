import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

const STATS = [
  {
    end: 600,
    pad: 0,
    suffix: "+",
    label: "Athletes delivered",
    note: "Across emerging, semi-professional, and elite levels of Australian sport."
  },
  {
    end: 20,
    pad: 0,
    suffix: "+",
    label: "Brand partners",
    note: "Puma, Qantas, Nike, Adidas, Red Bull, Telstra, ASICS, Lululemon, and counting."
  },
  {
    end: 5,
    pad: 2,
    suffix: "",
    label: "Specialists",
    note: "One platform. One framework. Five focused experts on call."
  },
  {
    end: 1,
    pad: 2,
    suffix: "",
    label: "Framework",
    note: "Four pillars: Identity, Strategy, Execute, Commercialise."
  }
];

export function StatsRail() {
  return (
    <Section tone="paper" pad="default" className="border-y border-ink/10">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="relative pt-8 lg:px-6">
              <span
                aria-hidden
                className="absolute left-0 top-0 h-px w-12 bg-ink"
              />
              <div className="flex items-baseline gap-1">
                <CountUp
                  end={s.end}
                  pad={s.pad || undefined}
                  className="display tabular text-displayLg leading-[0.9] text-ink"
                />
                {s.suffix && (
                  <span className="display tabular text-h2 text-teal-deep">
                    {s.suffix}
                  </span>
                )}
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-ink/60">
                {s.label}
              </p>
              <p className="mt-3 text-ui text-ink/70 pretty max-w-[28ch]">
                {s.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
