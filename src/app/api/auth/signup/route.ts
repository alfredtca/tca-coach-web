import { NextResponse } from "next/server";
import { z } from "zod";
import { setSession } from "@/lib/session";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1, "Name is required").max(80),
  sport: z.string().min(1, "Sport is required").max(80),
  tier: z.enum(["starter", "pro", "annual"]).default("pro")
});

/**
 * Mock signup — no password, no email verification. Issues the requested
 * tier so the chat is immediately usable. Real signup flow ships later.
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
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  const { email, name, sport, tier } = parsed.data;
  setSession({ email, name, sport, tier });

  return NextResponse.json({ ok: true });
}
