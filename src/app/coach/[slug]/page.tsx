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

  return (
    <ChatRoom
      slug={slug}
      agentName={agent.name}
      agentRole={agent.role}
      agentDescription={agent.description}
      produces={agent.produces}
      toneHex={tone.hex}
      toneLabel={tone.label}
      iconKey={agent.icon}
      userName={session.name}
    />
  );
}
