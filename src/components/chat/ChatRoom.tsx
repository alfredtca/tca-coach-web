"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, ArrowsClockwise } from "@phosphor-icons/react";
import { agentTone } from "@/lib/agentIcons";
import type { AgentIcon } from "@/lib/content";
import type { AgentSlug } from "@/lib/agents/registry";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type QuickStart = { label: string; template: string };

type Props = {
  slug: AgentSlug;
  agentName: string;
  agentRole: string;
  agentDescription: string;
  produces: string[];
  quickStarts: QuickStart[];
  toneHex: string;
  toneLabel: string;
  pathwayLabel: string;
  pathwayNumber: string;
  iconKey: AgentIcon;
  userName: string;
};

const STORAGE_PREFIX = "tca-chat:";

export function ChatRoom({
  slug,
  agentName,
  agentRole,
  agentDescription,
  produces,
  quickStarts,
  toneHex,
  toneLabel,
  pathwayLabel,
  pathwayNumber,
  iconKey,
  userName
}: Props) {
  const Icon = agentTone[iconKey].Icon;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Restore conversation from localStorage so the room feels continuous.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_PREFIX + slug);
      if (raw) setMessages(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, [slug]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_PREFIX + slug, JSON.stringify(messages));
    } catch {
      /* ignore */
    }
  }, [messages, slug]);

  // Auto-scroll to the latest message as it streams in.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || streaming) return;

    const userMsg: Message = {
      id: cryptoId(),
      role: "user",
      content: text
    };
    const assistantMsg: Message = {
      id: cryptoId(),
      role: "assistant",
      content: ""
    };
    const next = [...messages, userMsg, assistantMsg];
    setMessages(next);
    setInput("");
    setError(null);
    setStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch(`/api/chat/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!res.ok || !res.body) {
        const err = await safeJson(res);
        throw new Error(err?.error || `Request failed (${res.status})`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsg.id ? { ...m, content: buffer } : m
          )
        );
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") {
        // User-initiated stop, leave content as-is.
      } else {
        setError((err as Error).message);
        setMessages((prev) => prev.filter((m) => m.id !== assistantMsg.id));
      }
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  }

  function reset() {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    try {
      window.localStorage.removeItem(STORAGE_PREFIX + slug);
    } catch {
      /* ignore */
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <Section
      tone="ink"
      pad="none"
      grain
      className="pt-28 pb-20 md:pt-32 md:pb-24 min-h-[100dvh]"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* LEFT — agent profile rail */}
        <aside className="lg:col-span-4 xl:col-span-3">
          <Link
            href="/coach"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-coolGrey-warm hover:text-bone"
          >
            <ArrowLeft size={12} weight="bold" />
            All specialists
          </Link>

          <div className="mt-8 border border-white/10 bg-white/[0.03]">
            <div
              className="relative px-7 py-8"
              style={{
                borderBottom: `1px solid ${toneHex}30`
              }}
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-12 w-px"
                style={{ backgroundColor: toneHex }}
              />
              <div
                className="flex h-14 w-14 items-center justify-center border bg-white/[0.04]"
                style={{ borderColor: `${toneHex}55`, color: toneHex }}
              >
                <Icon size={26} weight="light" />
              </div>
              <p className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-coolGrey-warm">
                <span className="tabular">Pathway {pathwayNumber}</span>
                <span aria-hidden className="h-px w-3 bg-coolGrey-deep" />
                <span>{pathwayLabel}</span>
                <span
                  aria-hidden
                  className="ml-1 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: toneHex }}
                  title={toneLabel}
                />
              </p>
              <h1 className="display-section mt-3 text-h2 leading-[1.05] text-bone balance">
                {agentName}
              </h1>
              <p className="mt-3 text-ui text-coolGrey-soft pretty">
                {agentRole}
              </p>
            </div>
            <div className="px-7 py-6">
              <p className="text-body text-coolGrey-soft pretty">
                {agentDescription}
              </p>
              <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-coolGrey-deep">
                Produces
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {produces.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-ui text-coolGrey-soft pretty"
                  >
                    <span
                      aria-hidden
                      className="mt-[8px] h-px w-3 shrink-0"
                      style={{ backgroundColor: `${toneHex}` }}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            type="button"
            onClick={reset}
            disabled={messages.length === 0}
            className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-coolGrey-warm hover:text-bone disabled:opacity-30 disabled:hover:text-coolGrey-warm"
          >
            <ArrowsClockwise size={12} weight="bold" />
            Reset conversation
          </button>
        </aside>

        {/* RIGHT — message stream */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
          <div
            ref={scrollRef}
            className="relative min-h-[60dvh] flex-1 overflow-y-auto border border-white/10 bg-ink/40 p-6 md:p-10"
          >
            {messages.length === 0 ? (
              <EmptyState
                agentName={agentName}
                userName={userName}
                toneHex={toneHex}
                quickStarts={quickStarts}
                onPick={(template) => {
                  setInput(template);
                  // Focus the textarea after the chip click so the user
                  // can edit before hitting send.
                  requestAnimationFrame(() => {
                    document.getElementById("composer")?.focus();
                  });
                }}
              />
            ) : (
              <ol className="flex flex-col gap-7">
                {messages.map((m) => (
                  <li key={m.id}>
                    {m.role === "user" ? (
                      <UserBubble content={m.content} userName={userName} />
                    ) : (
                      <AssistantBubble
                        content={m.content}
                        agentName={agentName}
                        toneHex={toneHex}
                        streaming={
                          streaming && m === messages[messages.length - 1]
                        }
                      />
                    )}
                  </li>
                ))}
              </ol>
            )}
          </div>

          {error && (
            <p className="mt-3 text-caption text-teal" role="alert">
              {error}
            </p>
          )}

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="mt-5 border border-white/15 bg-ink/60"
          >
            <label htmlFor="composer" className="sr-only">
              Message {agentName}
            </label>
            <textarea
              id="composer"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={`Message ${agentName}…`}
              rows={3}
              disabled={streaming}
              className="w-full resize-none bg-transparent px-5 py-4 text-bodyLg text-bone placeholder:text-coolGrey-deep focus:outline-none disabled:opacity-60"
            />
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
              <span className="text-[10px] uppercase tracking-[0.22em] text-coolGrey-deep">
                Enter to send · Shift+Enter for new line
              </span>
              <button
                type="submit"
                disabled={streaming || !input.trim()}
                className={cn(
                  "inline-flex h-10 items-center gap-2 px-5 text-[12px] font-medium uppercase tracking-[0.18em]",
                  "transition-all duration-250 ease-editorial",
                  "active:translate-y-[1px] active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
                  "disabled:cursor-not-allowed disabled:opacity-40",
                  "bg-teal text-ink hover:bg-teal-deep"
                )}
              >
                {streaming ? "Working" : "Send"}
                <ArrowUp size={14} weight="bold" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

function UserBubble({ content, userName }: { content: string; userName: string }) {
  return (
    <div className="flex flex-col items-end gap-2">
      <span className="text-[10px] uppercase tracking-[0.22em] text-coolGrey-deep">
        {userName}
      </span>
      <div className="max-w-[85%] border border-white/15 bg-white/[0.05] px-5 py-4">
        <p className="text-body text-bone pretty whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}

function AssistantBubble({
  content,
  agentName,
  toneHex,
  streaming
}: {
  content: string;
  agentName: string;
  toneHex: string;
  streaming: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="text-[10px] uppercase tracking-[0.22em]"
        style={{ color: toneHex }}
      >
        {agentName}
      </span>
      <div
        className="max-w-[88%] border bg-white/[0.02] px-5 py-4"
        style={{ borderColor: `${toneHex}40` }}
      >
        <p className="text-body text-coolGrey-soft pretty whitespace-pre-wrap">
          {content || (streaming ? "…" : "")}
          {streaming && content && (
            <span
              aria-hidden
              className="ml-[2px] inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse"
              style={{ backgroundColor: toneHex }}
            />
          )}
        </p>
      </div>
    </div>
  );
}

function EmptyState({
  agentName,
  userName,
  toneHex,
  quickStarts,
  onPick
}: {
  agentName: string;
  userName: string;
  toneHex: string;
  quickStarts: QuickStart[];
  onPick: (template: string) => void;
}) {
  return (
    <div className="flex h-full flex-col items-start justify-center py-10">
      <p
        className="text-[10px] uppercase tracking-[0.22em]"
        style={{ color: toneHex }}
      >
        Coach room
      </p>
      <p className="display mt-4 text-h1 text-bone balance">
        Start the conversation, {userName}.
      </p>
      <p className="t-intro mt-5 max-w-[52ch] text-bodyLg text-coolGrey-soft pretty">
        {agentName} stays inside their lane. Ask something outside their charter
        and they&apos;ll point you to the specialist who covers it.
      </p>

      {quickStarts.length > 0 && (
        <div className="mt-10 w-full max-w-[640px]">
          <p className="eyebrow text-coolGrey-warm">Quick start</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {quickStarts.map((q) => (
              <li key={q.label}>
                <button
                  type="button"
                  onClick={() => onPick(q.template)}
                  className="group relative flex h-full w-full items-start gap-3 border border-white/[0.12] bg-white/[0.03] p-4 text-left transition-all duration-250 ease-editorial hover:-translate-y-[1px] hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  <span
                    aria-hidden
                    className="mt-[7px] h-px w-3 shrink-0 transition-all group-hover:w-5"
                    style={{ backgroundColor: toneHex }}
                  />
                  <span className="text-ui text-bone leading-snug pretty">
                    {q.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-caption text-coolGrey-deep">
            Pick one to pre-fill the composer with your profile context.
            You can edit before sending.
          </p>
        </div>
      )}
    </div>
  );
}

async function safeJson(res: Response): Promise<{ error?: string } | null> {
  try {
    return (await res.json()) as { error?: string };
  } catch {
    return null;
  }
}

function cryptoId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2);
}
