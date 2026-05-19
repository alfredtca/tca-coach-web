import { cookies } from "next/headers";
import type { SubscriptionTier } from "./agents/registry";

/**
 * Mock session for the offline build. Real auth (Supabase/Clerk/NextAuth)
 * will replace this. The contract is: ANY consumer of session data goes
 * through `getSession()` / `setSession()` so the swap is a single-file
 * change later.
 *
 * Profile fields match the Commercial Profile Form from the platform
 * blueprint — captured in the onboarding wizard after signup.
 */
export type AthleteLevel =
  | "grassroots"
  | "semi-pro"
  | "national"
  | "international"
  | "household";

export type CareerStage =
  | "emerging"
  | "rising"
  | "peak"
  | "transitioning"
  | "retired";

export type Confidence = "low" | "medium" | "high";

export type Profile = {
  level?: AthleteLevel;
  followerCount?: string;     // free-text band, e.g. "5k–25k"
  careerStage?: CareerStage;
  incomeGoal?: string;        // free-text, e.g. "$120k over 12 months"
  geography?: string;         // city / state / country
  brandInterests?: string;    // comma-separated categories
  confidence?: Confidence;
  /** ISO date string the user completed the profile wizard. Empty = not done. */
  completedAt?: string;
};

export type Session = {
  email: string;
  name: string;
  sport?: string;
  tier: SubscriptionTier;
  profile?: Profile;
};

const COOKIE_NAME = "tca_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function getSession(): Session | null {
  const raw = cookies().get(COOKIE_NAME)?.value;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw));
    if (typeof parsed?.email !== "string") return null;
    return parsed as Session;
  } catch {
    return null;
  }
}

export function setSession(session: Session): void {
  cookies().set(COOKIE_NAME, encodeURIComponent(JSON.stringify(session)), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE
  });
}

export function clearSession(): void {
  cookies().delete(COOKIE_NAME);
}

/** True if the user has finished the onboarding profile wizard. */
export function hasCompletedProfile(session: Session | null): boolean {
  return !!session?.profile?.completedAt;
}
