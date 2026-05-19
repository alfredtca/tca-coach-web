import { NextResponse } from "next/server";
import { getSession, hasCompletedProfile } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = getSession();
  if (!session) {
    return NextResponse.json({ session: null, profileComplete: false });
  }
  return NextResponse.json({
    session: {
      email: session.email,
      name: session.name,
      sport: session.sport,
      tier: session.tier,
      profile: session.profile ?? null
    },
    profileComplete: hasCompletedProfile(session)
  });
}
