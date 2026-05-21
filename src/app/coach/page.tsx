import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, LockKey } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { agents } from "@/lib/content";
import { agentTone } from "@/lib/agentIcons";
import { canAccess, type AgentSlug } from "@/lib/agents/registry";
import { getSession, hasCompletedProfile } from "@/lib/session";

export const metadata: Metadata = {
  title: "Coach room",
  robots: { index: false, follow: false }
};

export default function CoachIndexPage() {
  const session = getSession();
  if (!session) redirect("/login?next=/coach");
  const profileComplete = hasCompletedProfile(session);

  return (
    <Section
      tone="paper"
      pad="none"
      grain
      className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-[80vh]"
    >
      <header className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Eyebrow tone="muted">G&apos;day, {session.name}</Eyebrow>
          <h1 className="display mt-6 text-h1Lg text-ink balance">
            What would you like to work on today?
          </h1>
          <p className="t-intro mt-8 max-w-prose2 text-bodyLg text-ink/65 pretty">
            Pick a specialist. Each one stays inside their lane — ask a question
            outside their charter and they&apos;ll point you to the specialist who
            covers it.
          </p>
        </div>
        <aside className="lg:col-span-4">
          <div className="border border-rule/60 bg-paper-soft p-7">
            <p className="eyebrow text-ink/60">Plan</p>
            <p className="display-section mt-3 text-h2 text-ink capitalize">
              {session.tier}
            </p>
            <p className="mt-3 text-ui text-ink/65 pretty">
              {session.tier === "starter"
                ? "Three specialists that put dollars on the board."
                : "All five specialists, full coach room."}
            </p>
          </div>
        </aside>
      </header>

      {/* Profile completion nudge — only shown until the wizard is done */}
      {!profileComplete && (
        <div className="mt-10 flex flex-col gap-4 border border-teal/40 bg-teal/[0.06] p-6 md:flex-row md:items-center md:justify-between md:p-7">
          <div className="md:max-w-[60ch]">
            <p className="eyebrow text-teal">One thing left</p>
            <p className="mt-2 text-body text-ink pretty">
              Finish your Commercial Profile so each specialist can pre-fill
              prompts with your code, level, and goal. Takes ninety seconds.
            </p>
          </div>
          <Link
            href="/onboarding"
            className="inline-flex h-11 items-center gap-2 self-start bg-ink px-5 text-[12.5px] font-medium uppercase tracking-[0.18em] text-paper transition-all duration-250 ease-editorial hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:self-auto"
          >
            Complete profile
            <ArrowUpRight size={14} weight="bold" />
          </Link>
        </div>
      )}

      {/* Commercial Score — manual placeholder. Live scoring ships once the
          first plan output is saved. Keep this honest, not fake-data. */}
      <div className="mt-10 grid gap-px border border-rule/60 bg-paper-soft md:grid-cols-3">
        <div className="bg-paper p-6 md:p-7">
          <p className="eyebrow text-ink/60">Your Commercial Score</p>
          <p className="display tabular mt-4 text-displayLg leading-none text-ink">—</p>
          <p className="mt-3 text-caption text-ink/45">
            Live scoring lands once your first plan is saved.
          </p>
        </div>
        <div className="bg-paper p-6 md:p-7">
          <p className="eyebrow text-ink/60">Phase</p>
          <p className="display-section mt-4 text-h2 leading-none text-ink">
            Foundation
          </p>
          <p className="mt-3 text-caption text-ink/45">
            Start in Brand Architect — Pathway 02.
          </p>
        </div>
        <div className="bg-paper p-6 md:p-7">
          <p className="eyebrow text-ink/60">Saved outputs</p>
          <p className="display tabular mt-4 text-displayLg leading-none text-ink">—</p>
          <p className="mt-3 text-caption text-ink/45">
            Drafts, decks and plans land here once you save them.
          </p>
        </div>
      </div>

      <ul className="mt-16 grid gap-5 md:grid-cols-2">
        {agents.map((agent) => {
          const tone = agentTone[agent.icon];
          const Icon = tone.Icon;
          const accessible = canAccess(session.tier, agent.slug as AgentSlug);
          return (
            <li key={agent.slug}>
              {accessible ? (
                <Link
                  href={`/coach/${agent.slug}`}
                  className="group relative block border border-rule/60 bg-paper-soft p-7 transition-all duration-350 ease-editorial hover:-translate-y-[1px] hover:border-ink/25 md:p-9"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-12 w-px transition-all duration-450 ease-editorial group-hover:h-16"
                    style={{ backgroundColor: tone.hex }}
                  />
                  <div className="flex items-start gap-5">
                    <span
                      aria-hidden
                      className="flex h-12 w-12 shrink-0 items-center justify-center border border-rule/60 bg-paper text-ink"
                    >
                      <Icon size={22} weight="light" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink/55">
                        <span className="tabular">Pathway {agent.number}</span>
                        <span aria-hidden className="h-px w-3 bg-ink/30" />
                        <span>{agent.pathway}</span>
                        <span
                          aria-hidden
                          className="ml-1 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: tone.hex }}
                        />
                      </p>
                      <h2 className="display-section mt-2 text-h2 leading-[1.1] text-ink">
                        {agent.name}
                      </h2>
                      <p className="mt-2 text-caption text-ink/60">
                        {agent.tagline}
                      </p>
                      <p className="mt-4 text-ui text-ink/65 pretty">
                        {agent.role}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      weight="regular"
                      className="text-ink/55 transition-transform duration-350 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </Link>
              ) : (
                <div
                  aria-label={`${agent.name} — locked on your plan`}
                  className="relative block border border-rule/40 bg-paper-soft/40 p-7 md:p-9"
                >
                  <div className="flex items-start gap-5 opacity-55">
                    <span
                      aria-hidden
                      className="flex h-12 w-12 shrink-0 items-center justify-center border border-rule/60 bg-paper text-ink/45"
                    >
                      <LockKey size={20} weight="light" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink/45">
                        <span className="tabular">Pathway {agent.number}</span>
                        <span aria-hidden className="h-px w-3 bg-ink/20" />
                        <span>Locked on Starter</span>
                      </p>
                      <h2 className="display-section mt-2 text-h2 leading-[1.1] text-ink">
                        {agent.name}
                      </h2>
                      <p className="mt-2 text-caption text-ink/60">
                        {agent.tagline}
                      </p>
                      <p className="mt-4 text-ui text-ink/65 pretty">
                        {agent.role}
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/pricing"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-teal hover:text-teal-deep"
                  >
                    Upgrade to access
                    <ArrowUpRight size={12} weight="bold" />
                  </Link>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
