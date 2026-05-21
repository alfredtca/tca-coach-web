import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProfileForm } from "@/components/auth/ProfileForm";
import { getSession, hasCompletedProfile } from "@/lib/session";

export const metadata: Metadata = {
  title: "Complete your profile"
};

export const dynamic = "force-dynamic";

export default function OnboardingPage() {
  const session = getSession();
  if (!session) {
    redirect("/signup");
  }
  // If they've already completed the wizard, send them straight to coach.
  if (hasCompletedProfile(session)) {
    redirect("/coach");
  }

  return (
    <Section
      tone="paper"
      pad="none"
      grain
      className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-[80vh]"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
        <aside className="lg:col-span-5 lg:pr-10 lg:sticky lg:top-32">
          <Eyebrow>Step 2 of 2</Eyebrow>
          <h1 className="display mt-6 text-h1Lg text-ink balance">
            Tell us about you.
          </h1>
          <p className="t-intro mt-8 max-w-prose2 text-bodyLg text-ink/65 pretty">
            The Coach is most useful when it knows what kind of athlete it&apos;s
            working with. This takes about ninety seconds. Every specialist
            uses these answers to pre-fill prompts so you spend less time
            re-typing context.
          </p>
          <p className="mt-8 text-caption text-ink/45">
            Want to skip and finish later?{" "}
            <Link href="/coach" className="link-teal">
              Open the coach room
            </Link>
            . You&apos;ll be nudged to complete this once you&apos;re inside.
          </p>
        </aside>

        <div className="lg:col-span-7">
          <ProfileForm />
        </div>
      </div>
    </Section>
  );
}
