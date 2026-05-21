import type { Metadata } from "next";
import { Barlow, DM_Sans, DM_Mono } from "next/font/google";
import { SiteNav } from "@/components/nav/SiteNav";
import { StickyMobileCTA } from "@/components/nav/StickyMobileCTA";
import { Footer } from "@/components/nav/Footer";
import "@/styles/globals.css";

// Parent brand uses Barlow (not Condensed) for headings at 600/700.
// See thecommercialathlete.com — CSS variable --font_0 = "barlow-v2".
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap"
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap"
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap"
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://coach.thecommercialathlete.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Commercial Athlete Coach — Build the career your sport won't.",
    template: "%s — The Commercial Athlete Coach"
  },
  description:
    "The AI Commercial Department for Athletes. Five specialists trained on the TCA framework — built for Australian athletes, available twenty-four hours a day.",
  applicationName: "The Commercial Athlete Coach",
  authors: [{ name: "The Commercial Athlete" }],
  keywords: [
    "Australian athletes",
    "athlete commercial career",
    "sports sponsorship",
    "athlete brand",
    "athlete management",
    "AI for athletes"
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "The Commercial Athlete Coach",
    title: "The Commercial Athlete Coach",
    description:
      "Build the career your sport won't. The AI Commercial Department for Australian athletes."
  },
  twitter: {
    card: "summary_large_image",
    title: "The Commercial Athlete Coach",
    description:
      "Build the career your sport won't. The AI Commercial Department for Australian athletes."
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      className={`${barlow.variable} ${dm.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
