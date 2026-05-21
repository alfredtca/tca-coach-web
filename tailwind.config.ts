import type { Config } from "tailwindcss";

/**
 * The Commercial Athlete Coach — design system.
 *
 * Palette matches the parent brand at thecommercialathlete.com so the two
 * properties read as one family. Light-mode-first: white surfaces, true
 * black text, teal #00C49A as the single accent.
 *
 * Parent brand tokens (extracted from live CSS variables on
 * thecommercialathlete.com Wix theme):
 *   --color_15 = 0,0,0          (ink — primary text)
 *   --color_0  = 255,255,255    (paper — primary surface)
 *   --color_14 = 0,196,154      (teal accent — #00C49A)
 *   --color_12 = 241,243,245    (paper-soft — secondary surface)
 *   --color_13 = 194,194,194    (rule — hairline divider)
 *   --color_18 = 94,98,95       (mid-grey — body alt)
 *   --color_10 = 176,176,176    (mute — caption text)
 *   --font_0/2 = barlow-v2 700  (display + section headings, uppercase)
 *   --font_7   = dm-sans 400    (body)
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ─── Brand surfaces ──────────────────────────────────────
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#F1F3F5",
          deep: "#E2E2E2"
        },
        ink: {
          DEFAULT: "#000000",
          soft: "#111214",
          mid: "#282A28"
        },
        // Coach-room dark surfaces — kept for the app shell so the
        // chat interface has the contrast it needs. Same family, not
        // used on marketing pages.
        charcoal: "#111214",
        obsidian: "#0F1112",
        surface: "#1A1C1E",

        // ─── Accent (one only — discipline matters) ─────────────
        teal: {
          DEFAULT: "#00C49A",
          deep: "#00A483",
          glow: "rgba(0,196,154,0.18)"
        },

        // ─── Neutral scale (matches parent) ─────────────────────
        rule: "#C2C2C2",
        coolGrey: {
          DEFAULT: "#8F8F8F",
          deep: "#5E625F",
          soft: "#B0B0B0",
          warm: "#757575"
        },
        bone: "#F1F3F5",
        boneDeep: "#E2E2E2",

        // ─── Agent-specific desaturated accents ─────────────────
        // Used only as 1px tints on icon containers / hairlines, never
        // as primary fills. Kept for the per-agent identification in
        // the coach room.
        agent: {
          architect: "#9FB7A6",
          strategist: "#B6B294",
          authority: "#B5A795",
          dealroom: "#A0A8AE",
          shield: "#9CA8A8",
          confidence: "#C9BEA8"
        }
      },
      fontFamily: {
        // Headings use Barlow (not Condensed) to match parent's --font_0
        // through --font_3. Uppercase styling lives in .display / .display-section
        // classes, not in the font itself.
        display: ["var(--font-barlow)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"]
      },
      letterSpacing: {
        eyebrow: "0.18em",
        display: "0.02em",
        displayWide: "0.04em",
        displayTight: "-0.01em",
        ui: "-0.005em"
      },
      fontSize: {
        // ─── Brand typography scale (parent-matched) ────────────
        // Caption — DM Sans, 12–13px
        caption: ["clamp(12px, 1.05vw, 13px)", { lineHeight: "1.5", letterSpacing: "0em" }],
        microNum: ["10px", { lineHeight: "1.0", letterSpacing: "0.16em" }],
        eyebrow: ["11px", { lineHeight: "1.1", letterSpacing: "0.18em" }],
        // UI / Button — DM Sans Medium, 14–15px
        ui: ["clamp(14px, 1.1vw, 15px)", { lineHeight: "1.45", letterSpacing: "-0.005em" }],
        // Body — DM Sans Regular, 16–17px
        body: ["clamp(15.5px, 1.2vw, 17px)", { lineHeight: "1.65" }],
        // Intro — DM Sans Regular, 18–20px
        bodyLg: ["clamp(17px, 1.45vw, 20px)", { lineHeight: "1.55" }],
        // H3 — DM Sans Medium, 20–24px
        h3: ["clamp(18px, 1.55vw, 21px)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
        h3Lg: ["clamp(21px, 1.85vw, 24px)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
        // H2 — Barlow 700 uppercase, 30–36px (parent font_2 is 32px)
        h2: ["clamp(26px, 2.6vw, 30px)", { lineHeight: "1.1", letterSpacing: "0.02em" }],
        h2Lg: ["clamp(30px, 3.1vw, 36px)", { lineHeight: "1.05", letterSpacing: "0.02em" }],
        // H1 — Barlow 700 uppercase, 44–56px (parent font_0 is 34px scaled)
        h1: ["clamp(32px, 3.6vw, 44px)", { lineHeight: "1.0", letterSpacing: "0.02em" }],
        h1Lg: ["clamp(38px, 4.4vw, 56px)", { lineHeight: "0.98", letterSpacing: "0.02em" }],
        // Hero display — bumped largest size
        display: ["clamp(34px, 4.8vw, 56px)", { lineHeight: "0.96", letterSpacing: "0.02em" }],
        displayLg: ["clamp(42px, 6vw, 72px)", { lineHeight: "0.94", letterSpacing: "0.02em" }]
      },
      spacing: {
        gutter: "1.25rem",
        section: "6rem",
        sectionLg: "9rem"
      },
      maxWidth: {
        prose2: "62ch",
        wide: "1440px"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        precise: "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
        450: "450ms",
        650: "650ms"
      },
      boxShadow: {
        // Subtle shadows tuned for light surfaces — never pure black.
        "teal-glow": "0 0 0 1px rgba(0,196,154,0.35), 0 12px 40px -8px rgba(0,196,154,0.30)",
        "teal-soft": "0 8px 32px -12px rgba(0,196,154,0.25)",
        "ink-deep": "0 24px 60px -20px rgba(0,0,0,0.12)",
        "card": "0 1px 2px rgba(0,0,0,0.04), 0 18px 40px -24px rgba(0,0,0,0.10)",
        "card-lift": "0 1px 2px rgba(0,0,0,0.04), 0 28px 60px -24px rgba(0,0,0,0.14)"
      },
      animation: {
        "fade-up": "fadeUp 650ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "marquee": "marquee 38s linear infinite",
        "marquee-slow": "marquee 56s linear infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translate3d(0,18px,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,0,0)" }
        },
        marquee: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
