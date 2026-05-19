import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const Body = z.object({ password: z.string().min(1) });

const COOKIE_NAME = "tca_access";
const COOKIE_VALUE = "granted";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

/**
 * Preview-phase access gate verifier.
 *
 * Compares the submitted code to COACH_ACCESS_PASSWORD (defaulted to
 * "173501" in dev/preview). On match, sets a long-lived HttpOnly cookie
 * that the middleware reads on every protected request.
 *
 * NOTE: This is intentionally a thin gate — the threat model is "stop
 * random crawlers and link-shares from running up Anthropic spend during
 * private preview", not "secure against motivated attackers". Real auth
 * still happens at /login and /signup behind this gate.
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = Body.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const expected = process.env.COACH_ACCESS_PASSWORD ?? "173501";
  if (parsed.data.password.trim() !== expected) {
    return NextResponse.json(
      { error: "That code didn't work. Try again." },
      { status: 401 }
    );
  }

  cookies().set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE_SECONDS
  });

  return NextResponse.json({ ok: true });
}
