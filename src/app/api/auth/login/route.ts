import { NextResponse } from "next/server";
import { z } from "zod";
import { setSession } from "@/lib/session";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(80).optional(),
  sport: z.string().min(1).max(80).optional()
});

/**
 * Mock login — there is no password check in offline mode. Any valid email is
 * accepted and a Pro session is issued so all six agents are usable for
 * testing. Replace with Supabase / Clerk later.
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

  const { email, name, sport } = parsed.data;
  setSession({
    email,
    name: name ?? email.split("@")[0],
    sport,
    tier: "pro"
  });

  return NextResponse.json({ ok: true });
}
