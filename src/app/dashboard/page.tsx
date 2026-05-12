import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false }
};

export default function DashboardPage() {
  return (
    <Section tone="ink" pad="none" grain className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-[80vh]">
      <div className="grid gap-10 lg:grid-cols-12">
        <header className="lg:col-span-7">
          <Eyebrow>Members area</Eyebrow>
          <h1 className="display mt-6 text-h1Lg text-white balance">
            Dashboard.
          </h1>
          <p className="mt-8 max-w-prose2 text-bodyLg text-white/70 pretty">
            Your six specialists, your saved outputs, and your commercial plan in one place. The chat room is live — saved outputs and the plan view ship next.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href="/coach" variant="primary" size="lg" withArrow>
              Open coach room
            </Button>
            <Button href="/how-it-works" variant="ghost" size="lg">
              See how it works
            </Button>
          </div>
        </header>

        <aside className="lg:col-span-5">
          <div className="border border-white/10 bg-charcoal p-7 lg:p-9">
            <p className="eyebrow text-coolGrey">Coming with launch</p>
            <ul className="mt-6 grid gap-3 text-ui text-white/75">
              {[
                "Conversation with each specialist",
                "Saved drafts and version history",
                "Your commercial plan, in one place",
                "Monthly group Q&A with Carlie (Pro+)",
                "Export to PDF, share to clipboard"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-[7px] h-px w-3 bg-white/30 shrink-0" />
                  <span className="pretty">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
