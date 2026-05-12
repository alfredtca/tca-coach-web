import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { type Agent } from "@/lib/content";
import { agentTone } from "@/lib/agentIcons";
import { cn } from "@/lib/cn";

type Props = {
  agent: Agent;
  index: number;
};

export function AgentDetail({ agent, index }: Props) {
  const flipped = index % 2 === 1;
  const tone = index % 2 === 0 ? "ink" : "charcoal";
  const accent = agentTone[agent.icon];
  const Icon = accent.Icon;
  return (
    <Section
      id={agent.slug}
      tone={tone}
      pad="default"
      grain={tone === "ink"}
      className="border-t border-white/5"
    >
      <div
        className={cn(
          "grid gap-12 lg:grid-cols-12 lg:gap-16",
          flipped && "lg:[&>aside]:order-2"
        )}
      >
        {/* Specialist placard */}
        <aside className="lg:col-span-4">
          <Reveal>
            <div className="relative border border-white/10 bg-white/[0.02] p-8 lg:p-10">
              {/* Top accent hairline in agent tone */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-px w-16"
                style={{ backgroundColor: accent.hex }}
              />
              <div className="flex items-start justify-between">
                <span
                  aria-hidden
                  className="flex h-16 w-16 items-center justify-center rounded-sm border bg-white/[0.04]"
                  style={{ borderColor: `${accent.hex}55`, color: accent.hex }}
                >
                  <Icon size={30} weight="light" />
                </span>
                <span className="display tabular text-[14px] tracking-[0.18em] text-coolGrey-deep">
                  {agent.number}
                </span>
              </div>
              <p className="eyebrow text-coolGrey mt-12">Specialist</p>
              <p className="mt-4 display text-h2 leading-[1.05] text-bone">
                {agent.name}
              </p>
              <p
                className="mt-3 text-ui uppercase tracking-[0.04em]"
                style={{ color: accent.hex }}
              >
                {accent.label}
              </p>
              <p className="mt-3 text-ui text-coolGrey-soft pretty">{agent.role}</p>
            </div>
          </Reveal>
        </aside>

        {/* Body */}
        <div className="lg:col-span-8">
          <Reveal delay={100}>
            <h2 className="display-section text-h2Lg text-bone balance">
              {agent.role}
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-prose2 text-bodyLg text-coolGrey-soft pretty">
              {agent.description}
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-12">
              <p className="eyebrow text-coolGrey">What it produces</p>
              <ul className="mt-6 grid gap-px border border-white/10 bg-white/5 md:grid-cols-3">
                {agent.produces.map((p, i) => (
                  <li key={p} className="bg-charcoal p-6 lg:p-8">
                    <span className="display tabular text-[14px] tracking-[0.16em] text-coolGrey-deep">
                      {`0${i + 1}`}
                    </span>
                    <p className="mt-5 text-body text-coolGrey-soft pretty">{p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
