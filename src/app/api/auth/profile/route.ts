import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession, setSession } from "@/lib/session";

const profileSchema = z.object({
  level: z.enum(["grassroots", "semi-pro", "national", "international", "household"]),
  followerCount: z.string().min(1).max(60),
  careerStage: z.enum(["emerging", "rising", "peak", "transitioning", "retired"]),
  incomeGoal: z.string().min(1).max(120),
  geography: z.string().min(1).max(120),
  brandInterests: z.string().min(1).max(240),
  confidence: z.enum(["low", "medium", "high"])
});

/**
 * Save (or update) the Commercial Profile. Requires an existing session —
 * the wizard sits behind /signup, so an unauthenticated POST is a 401.
 */
export async function POST(req: Request) {
  const session = getSession();
  if (!session) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = profileSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }

  setSession({
    ...session,
    profile: {
      ...parsed.data,
      completedAt: new Date().toISOString()
    }
  });

  return NextResponse.json({ ok: true });
}
