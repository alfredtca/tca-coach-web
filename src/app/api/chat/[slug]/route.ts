import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { agentRegistry, canAccess, type AgentSlug } from "@/lib/agents/registry";
import { getSession } from "@/lib/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const VALID_SLUGS = new Set<AgentSlug>([
  "brand-architect",
  "revenue-strategist",
  "authority-builder",
  "deal-room-assistant",
  "reputation-media-shield",
  "commercial-confidence"
]);

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug as AgentSlug;
  if (!VALID_SLUGS.has(slug)) {
    return NextResponse.json({ error: "Unknown specialist" }, { status: 404 });
  }

  const session = getSession();
  if (!session) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
  if (!canAccess(session.tier, slug)) {
    return NextResponse.json(
      { error: "This specialist is not on your plan." },
      { status: 403 }
    );
  }

  const body = (await req.json()) as { messages?: ChatMessage[] };
  const messages = Array.isArray(body.messages) ? body.messages : [];

  const agent = agentRegistry[slug];

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return streamingResponse(offlineReply(slug, messages));
  }

  const client = new Anthropic({ apiKey });
  const stream = await client.messages.stream({
    model: agent.model,
    max_tokens: 1500,
    system: agent.systemPrompt,
    messages: messages.map((m) => ({ role: m.role, content: m.content }))
  });

  return streamingResponse(forwardAnthropic(stream));
}

/**
 * Wrap an async iterable of text chunks in a Response that streams as plain
 * text. The chat UI reads this with `response.body.getReader()` and appends
 * each chunk to the assistant message.
 */
function streamingResponse(source: AsyncIterable<string>): Response {
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of source) {
          controller.enqueue(encoder.encode(chunk));
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    }
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

async function* forwardAnthropic(
  stream: ReturnType<Anthropic["messages"]["stream"]>
): AsyncIterable<string> {
  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      yield event.delta.text;
    }
  }
}

/**
 * Deterministic offline reply — fires when ANTHROPIC_API_KEY is missing.
 * Lets the UI, scope-discipline copy, and chat plumbing all be tested without
 * an API key. The text reflects the agent's actual charter, so the user can
 * verify the right specialist is wired to the right slug.
 */
async function* offlineReply(
  slug: AgentSlug,
  messages: ChatMessage[]
): AsyncIterable<string> {
  const lastUser =
    [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
  const intro = OFFLINE_INTROS[slug];
  const ack = lastUser
    ? `Heard. You sent: "${truncate(lastUser, 140)}".`
    : `Ready when you are.`;

  const text = [
    intro,
    "",
    ack,
    "",
    "[Offline mode — Anthropic API key not configured. Add ANTHROPIC_API_KEY to .env.local and restart the dev server. Real specialist responses will replace this stub immediately.]"
  ].join("\n");

  for (const word of text.split(/(\s+)/)) {
    yield word;
    await sleep(15);
  }
}

const OFFLINE_INTROS: Record<AgentSlug, string> = {
  "brand-architect":
    "Brand Architect. I work on commercial identity — positioning, values, narrative, bio.",
  "revenue-strategist":
    "Revenue Strategist. I map your income streams and rank them by realistic effort vs return.",
  "authority-builder":
    "Authority Builder. I turn what you know into content that earns you the rooms you want to be in.",
  "deal-room-assistant":
    "Deal Room Assistant. I write pitches, proposals, and the prep that makes them land.",
  "reputation-media-shield":
    "Reputation & Media Shield. I work the moments where the wrong sentence in public costs a career.",
  "commercial-confidence":
    "Commercial Confidence. I work the fee, the script, and the meeting itself."
};

function truncate(s: string, n: number): string {
  return s.length > n ? `${s.slice(0, n - 1)}…` : s;
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
