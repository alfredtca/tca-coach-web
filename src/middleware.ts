import { NextResponse, type NextRequest } from "next/server";

/**
 * Preview-phase access gate.
 *
 * The product is in private preview while Carlie reviews the agents.
 * To stop random traffic running up Anthropic costs, every request to
 * /coach, /onboarding, or /api/chat/* must carry the `tca_access` cookie
 * — granted only after entering the access code at /access.
 *
 * The actual cost-bearing route (/api/chat/*) is the critical one. Even
 * if someone bypasses the UI redirect, the middleware returns 401 here
 * with no body, so the Anthropic client never even gets constructed.
 *
 * Remove this file once we want the coach room to be publicly signup-able.
 */
const ACCESS_COOKIE = "tca_access";
const ACCESS_VALUE = "granted";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const granted = req.cookies.get(ACCESS_COOKIE)?.value === ACCESS_VALUE;

  if (granted) return NextResponse.next();

  // API: return JSON 401 so the fetch on the client surfaces a clean
  // error message instead of a redirect-followed HTML response.
  if (pathname.startsWith("/api/chat/")) {
    return NextResponse.json(
      { error: "Access locked. Enter the access code at /access." },
      { status: 401 }
    );
  }

  // Pages: bounce to /access with ?next= so we can return them after.
  const url = req.nextUrl.clone();
  url.pathname = "/access";
  url.search = `?next=${encodeURIComponent(pathname + req.nextUrl.search)}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Match the protected paths only. Auth APIs, marketing pages, /access
  // itself, /login and /signup all stay public so the live-product flow
  // remains testable. The cost surface (/api/chat) and the personalised
  // areas (/coach, /onboarding) are what we lock down.
  matcher: ["/coach", "/coach/:path+", "/onboarding", "/api/chat/:path+"]
};
