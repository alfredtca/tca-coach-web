import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { agents } from "@/lib/content";
import { agentTone } from "@/lib/agentIcons";
import { canAccess, type AgentSlug } from "@/lib/agents/registry";
import { getSession } from "@/lib/session";
import { ChatRoom } from "@/components/chat/ChatRoom";

type Params = { slug: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  const agent = agents.find((a) => a.slug === params.slug);
  return {
    title: agent ? `${agent.name} — Coach room` : "Coach room",
    robots: { index: false, follow: false }
  };
}

export default function CoachAgentPage({ params }: { params: Params }) {
  const agent = agents.find((a) => a.slug === params.slug);
  if (!agent) notFound();

  const session = getSession();
  if (!session) redirect(`/login?next=/coach/${params.slug}`);

  const slug = agent.slug as AgentSlug;
  if (!canAccess(session.tier, slug)) {
    redirect("/coach?reason=upgrade");
  }

  const tone = agentTone[agent.icon];

  // Substitute the user's Commercial Profile into each quick-start template
  // so chip clicks pre-fill the composer with real context, not placeholders.
  const profile = session.profile;
  const filledQuickStarts = agent.quickStarts.map((q) => ({
    label: q.label,
    template: q.template
      .replaceAll("{sport}", session.sport || "your code")
      .replaceAll("{level}", levelLabel(profile?.level) || "your current")
      .replaceAll("{goal}", profile?.incomeGoal || "[your 12-month income goal]")
  }));

  return (
    <ChatRoom
      slug={slug}
      agentName={agent.name}
      agentRole={agent.role}
      agentDescription={agent.description}
      produces={agent.produces}
      quickStarts={filledQuickStarts}
      toneHex={tone.hex}
      toneLabel={tone.label}
      pathwayLabel={agent.pathway}
      pathwayNumber={agent.number}
      iconKey={agent.icon}
      userName={session.name}
    />
  );
}

/** Map the structured Profile.level to the natural-language phrase used
    inside agent quick-start templates. Phrasing is intentionally short
    so it slots in after "at" without doubling words like "level". */
function levelLabel(level: string | undefined): string | null {
  switch (level) {
    case "grassroots":
      return "grassroots / club";
    case "semi-pro":
      return "semi-pro / state";
    case "national":
      return "national / pro-contract";
    case "international":
      return "international / top-tier";
    case "household":
      return "household-name / former international";
    default:
      return null;
  }
}
