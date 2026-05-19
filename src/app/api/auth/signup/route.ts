import { NextResponse } from "next/server";
import { z } from "zod";
import { setSession } from "@/lib/session";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1, "Name is required").max(80),
  /** Sport is collected at signup for personalisation in the coach room.
      The fuller Commercial Profile lives in /onboarding. */
  sport: z.string().min(1, "Sport is required").max(80),
  tier: z.enum(["starter", "pro", "annual"]).default("pro")
});

/**
 * Mock signup — no password, no email verification. Issues the requested
 * tier so the chat is immediately usable. Profile completion happens in
 * the /onboarding wizard right after this.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }

  const { email, name, sport, tier } = parsed.data;
  setSession({ email, name, sport, tier });

  // The client redirects to /onboarding when `next` is unset. Surface this
  // in the response so the AuthForm can route there explicitly.
  return NextResponse.json({ ok: true, next: "/onboarding" });
}
