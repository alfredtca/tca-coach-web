# The Commercial Athlete Coach — Web

Marketing & product site for **coach.thecommercialathlete.com.au** — a pre-launch
AI subscription platform for Australian athletes. Sub-brand of
[The Commercial Athlete](https://thecommercialathlete.com.au); sister to
[Agency X Talent](https://agencyx.com.au).

This is the **v0.2 rebuild** — same content store, elevated visual execution.

---

## Tech stack

| Layer       | Choice                                                |
| ----------- | ----------------------------------------------------- |
| Framework   | Next.js 14 (App Router) · TypeScript strict          |
| Styling     | Tailwind CSS with TCA design tokens                   |
| Fonts       | Barlow Condensed · DM Sans · DM Mono via `next/font` |
| Forms       | React Hook Form + Zod                                 |
| Icons       | Phosphor Icons (`@phosphor-icons/react`)              |
| Hosting     | Vercel preview deploys (do not auto-promote)          |

---

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

| Script             | Purpose                       |
| ------------------ | ----------------------------- |
| `npm run dev`      | Start the dev server          |
| `npm run build`    | Production build              |
| `npm run start`    | Run the production build      |
| `npm run lint`     | ESLint via `next lint`        |
| `npm run typecheck`| `tsc --noEmit`                |

The waitlist endpoint (`POST /api/waitlist`) logs to the console **and** appends
to `data/waitlist.json` (gitignored). No database is wired yet.

---

## Project structure

```
tca-coach-web/
├── public/                                  # Favicon, photography placeholders
├── src/
│   ├── app/
│   │   ├── layout.tsx                       # Fonts, dark theme, nav, footer, skip link
│   │   ├── page.tsx                         # Home
│   │   ├── how-it-works/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── about/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── login/page.tsx                   # UI shell, no auth
│   │   ├── signup/page.tsx                  # UI shell, no auth
│   │   ├── dashboard/page.tsx               # Placeholder
│   │   ├── not-found.tsx                    # Custom 404
│   │   ├── sitemap.ts · robots.ts
│   │   └── api/waitlist/route.ts            # Console + JSON file
│   ├── components/
│   │   ├── nav/{SiteNav,Footer,Wordmark}.tsx
│   │   ├── sections/                        # Page sections (Hero, AgentShowcase, ...)
│   │   └── ui/                              # Primitives (Button, Card, Section, ...)
│   ├── lib/
│   │   ├── content.ts                       # All on-page copy in one place
│   │   └── cn.ts                            # className util
│   └── styles/globals.css                   # Tokens, grain overlay, spotlight, reveal
├── data/                                    # Local JSON store (gitignored)
├── tailwind.config.ts
├── .env.example
└── package.json
```

**All on-page copy lives in `src/lib/content.ts`.** Components import from there.
Anything marked `// TODO: review` is a copy decision that wants an operator's eye.

---

## Visual system

### Colours

| Token            | Hex / value      | Use                                    |
| ---------------- | ---------------- | -------------------------------------- |
| Ink              | `#0F1112`        | Primary background                     |
| Charcoal         | `#1A1C1E`        | Section alternation                    |
| Surface          | `#252829`        | Elevated panels, cards                 |
| Teal             | `#3DBFA0`        | CTAs, eyebrows, links, icon strokes    |
| Teal Deep        | `#2E9F85`        | Hover states                           |
| Bone             | `#F4F1EC`        | Light section backgrounds              |
| Cool Grey        | `#A0A8A5`        | Secondary text, captions               |

**Approved section combinations:** Ink (default), Charcoal (alternation), Surface
(elevated), Teal (full-bleed hero/closing), Bone (one breath of contrast).

**Banned colour families:** red, orange, collegiate blue, purple, gold, yellow.

### Type

- **Display / Headings:** Barlow Condensed (Bold 700, SemiBold 600), UPPERCASE
- **Body / UI:** DM Sans (400, 500, 600)
- **Numerics:** DM Mono — used for tabular figures
- Hierarchy comes from size, not stacked weights. Two weights per content block.
- `.balance` and `.pretty` utilities for `text-wrap` on headlines / body.

### Voice

Peer-to-peer, plain-spoken, commercially literate. Australian English.
Anchored to commercial outcomes (revenue, equity, longevity).

**Banned words:** game-changer, level up, next level, playbook (except literal
product name), crush it, rockstar, 10x, growth hack, side hustle, content
creator, influencer, unlock, leverage (verb), synergy.

### Motion / surface

- Subtle SVG grain overlay on dark sections (`grain` class)
- Cursor-tracked spotlight on cards (`spotlight` class, `Card` primitive)
- Scroll-triggered staggered reveals via `Reveal` (IntersectionObserver)
- 250–350ms transitions on `cubic-bezier(0.22, 1, 0.36, 1)` (editorial easing)
- Active press: `scale(0.98) + translateY(1px)`
- Tinted shadows (teal-glow / teal-soft) — never pure black

---

## Logo / branding asset notes

- The wordmark in the nav and footer renders **The Commercial Athlete / Coach**
  as text via [`Wordmark`](src/components/nav/Wordmark.tsx).
- The brand logo is **just "The Commercial Athlete"** — Coach is a sub-product
  label, separated by a `/` modifier in teal.
- When the real logo asset arrives (SVG preferred), drop it into `public/images/`
  and replace the text mark inside `Wordmark.tsx` with a `<Image>` component. The
  `/ Coach` modifier stays as text.

---

## Deployment

**Do not auto-deploy to production.** Vercel preview deployments only until sign-off.

```bash
npm i -g vercel
vercel link              # link to the project
vercel                   # preview
vercel --prod            # production — DO NOT RUN until sign-off
```

Or push a branch — Vercel auto-creates a preview per push when the GitHub
integration is enabled.

### Custom domain (production, post sign-off)

1. Vercel → Project → Settings → Domains, add `coach.thecommercialathlete.com.au`.
2. At the DNS provider for `thecommercialathlete.com.au`, add:
   ```
   Type: CNAME
   Host: coach
   Value: cname.vercel-dns.com
   TTL:  3600
   ```
3. SSL provisions automatically once DNS propagates.
4. Set `NEXT_PUBLIC_SITE_URL=https://coach.thecommercialathlete.com.au` in Vercel
   environment variables.

---

## Accessibility baseline

- Skip-to-content link in the root layout
- `:focus-visible` outlines using brand teal on every interactive element
- Mobile menu uses `aria-expanded` / `aria-controls` and locks body scroll
- Accordion uses `aria-expanded` / `aria-controls` with `<button>` semantics
- Decorative icons marked `aria-hidden`
- WCAG AA contrast on all combinations (Ink / Bone / Teal)
- `lang="en-AU"` on the root `<html>`
- `prefers-reduced-motion`: animations and reveals neutralised

For Lighthouse, deploy a preview and run from there — local dev mode inflates CLS
and bundle warnings.

---

## Out of scope (for now)

- The 6 AI agents (separate workstream — `tca-coach-agents/`)
- Real authentication (Supabase later)
- Stripe / payments (display pricing only)
- Database (waitlist hits a console + local JSON for now)
- Email automation
- Admin dashboards

The agent layer plugs into `/dashboard` later. The frontend is structured so
integration is straightforward — agent functionality is not pre-built here.
