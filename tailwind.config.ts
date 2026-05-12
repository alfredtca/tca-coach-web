import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand-strict primaries
        charcoal: "#1A1C1E",
        ink: "#0F1112",
        obsidian: "#1A1F1E",
        surface: "#252829",
        elevated: "#2E3133",
        mist: "#3A3D3F",
        teal: {
          DEFAULT: "#3DBFA0",
          deep: "#2E9F85",
          glow: "rgba(61,191,160,0.18)"
        },
        bone: "#F0EDE8",
        boneDeep: "#E5E0D8",
        paper: {
          DEFAULT: "#E8E6E6",
          soft: "#EFEDED",
          deep: "#D4D2D2"
        },
        coolGrey: {
          DEFAULT: "#A0A8A5",
          deep: "#6E7572",
          soft: "#C9CFCC",
          warm: "#B8BEBB"
        },
        // Agent-specific desaturated accents — never used as primary,
        // only as 1px tints on icon containers, hairlines, micro-marks.
        agent: {
          architect: "#9FB7A6",       // sage   — Brand Architect
          strategist: "#B6B294",      // olive  — Revenue Strategist
          authority: "#B5A795",       // taupe  — Authority Builder
          dealroom: "#A0A8AE",        // slate  — Deal Room Assistant
          shield: "#9CA8A8",          // steel  — Reputation & Media Shield
          confidence: "#C9BEA8"       // champagne — Commercial Confidence
        }
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],
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
        // ─── Brand typography scale ───────────────────────────
        // Caption — DM Sans Regular, 12–13px / mobile 12px
        caption: ["clamp(12px, 1.05vw, 13px)", { lineHeight: "1.5", letterSpacing: "0em" }],
        microNum: ["10px", { lineHeight: "1.0", letterSpacing: "0.16em" }],
        eyebrow: ["11px", { lineHeight: "1.1", letterSpacing: "0.18em" }],
        // UI / Button — DM Sans Medium, 14–15px / mobile 14px
        ui: ["clamp(14px, 1.1vw, 15px)", { lineHeight: "1.45", letterSpacing: "-0.005em" }],
        // Body Copy — DM Sans Regular, 16–17px / mobile 15.5–16px
        body: ["clamp(15.5px, 1.2vw, 17px)", { lineHeight: "1.65" }],
        // Intro Copy — DM Sans Regular, 18–20px / mobile 16–17px
        bodyLg: ["clamp(17px, 1.45vw, 20px)", { lineHeight: "1.55" }],
        // Module H3 — DM Sans Medium, 20–24px / mobile 18–21px
        h3: ["clamp(18px, 1.55vw, 21px)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
        h3Lg: ["clamp(21px, 1.85vw, 24px)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
        // Section H2 — Barlow Condensed SemiBold Uppercase, 30–36px / mobile 26–30px
        h2: ["clamp(26px, 2.6vw, 30px)", { lineHeight: "1.05", letterSpacing: "0.02em" }],
        h2Lg: ["clamp(30px, 3.1vw, 36px)", { lineHeight: "1.0", letterSpacing: "0.02em" }],
        // Page H1 — Barlow Condensed Bold Uppercase, 44–56px / mobile 32–38px
        h1: ["clamp(32px, 3.6vw, 44px)", { lineHeight: "0.98", letterSpacing: "0.02em" }],
        h1Lg: ["clamp(38px, 4.4vw, 56px)", { lineHeight: "0.96", letterSpacing: "0.02em" }],
        // Hero Display — Barlow Condensed Bold Uppercase, 56–72px / mobile 34–42px
        display: ["clamp(34px, 4.8vw, 56px)", { lineHeight: "0.94", letterSpacing: "0.02em" }],
        displayLg: ["clamp(42px, 6vw, 72px)", { lineHeight: "0.92", letterSpacing: "0.02em" }]
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
        // Tinted, never pure black — shadows pick up the surrounding tone
        "teal-glow": "0 0 0 1px rgba(61,191,160,0.35), 0 12px 40px -8px rgba(61,191,160,0.30)",
        "teal-soft": "0 8px 32px -12px rgba(61,191,160,0.25)",
        "ink-deep": "0 24px 60px -20px rgba(15,17,18,0.55)",
        // Light-section shadows — warm-tinted to bone background
        "bone-soft": "0 18px 38px -22px rgba(70, 60, 45, 0.25), 0 6px 14px -8px rgba(70, 60, 45, 0.10)",
        "bone-deep": "0 32px 60px -22px rgba(70, 60, 45, 0.30), 0 10px 22px -8px rgba(70, 60, 45, 0.12)",
        "bone-edge": "0 1px 0 rgba(70, 60, 45, 0.08), 0 24px 48px -24px rgba(70, 60, 45, 0.22)",
        "card-lift": "0 1px 0 rgba(255,255,255,0.6) inset, 0 24px 48px -22px rgba(70, 60, 45, 0.30)"
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
