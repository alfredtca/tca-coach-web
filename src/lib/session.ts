import { cookies } from "next/headers";
import type { SubscriptionTier } from "./agents/registry";

/**
 * Mock session for the offline build. Real auth (Supabase/Clerk/NextAuth) will
 * replace this. The contract is: ANY consumer of session data goes through
 * `getSession()` / `setSession()` so the swap is a single-file change later.
 */
export type Session = {
  email: string;
  name: string;
  sport?: string;
  tier: SubscriptionTier;
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
