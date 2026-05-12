import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = getSession();
  if (!session) {
    return NextResponse.json({ session: null });
  }
  return NextResponse.json({
    session: {
      email: session.email,
      name: session.name,
      sport: session.sport,
      tier: session.tier
    }
  });
}
