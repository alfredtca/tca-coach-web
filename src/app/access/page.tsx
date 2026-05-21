import type { Metadata } from "next";
import { Suspense } from "react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccessForm } from "@/components/auth/AccessForm";

export const metadata: Metadata = {
  title: "Access — Coach preview",
  robots: { index: false, follow: false }
};

export default function AccessPage() {
  return (
    <Section
      tone="paper"
      pad="none"
      grain
      className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-[80vh]"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <aside className="lg:col-span-5 lg:pr-10">
          <Eyebrow>Private preview</Eyebrow>
          <h1 className="display mt-6 text-h1Lg text-ink balance">
            Enter the access code.
          </h1>
          <p className="t-intro mt-8 max-w-prose2 text-bodyLg text-ink/65 pretty">
            The coach room is locked while the five specialists are in review.
            One code lets you through. Past this gate you&apos;ll still sign in
            or create an account as normal.
          </p>
          <p className="mt-8 text-caption text-ink/45">
            No code? The build isn&apos;t open to the public yet — check with
            Carlie or Alfred.
          </p>
        </aside>

        <div className="lg:col-span-7">
          <Suspense fallback={<AccessFormSkeleton />}>
            <AccessForm />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}

function AccessFormSkeleton() {
  return (
    <div className="border border-rule/60 bg-paper-soft p-8 lg:p-10">
      <div aria-hidden className="h-3 w-24 animate-pulse bg-white/10" />
      <div aria-hidden className="mt-8 h-12 w-full animate-pulse bg-paper-soft" />
      <div aria-hidden className="mt-7 h-12 w-32 animate-pulse bg-teal/40" />
    </div>
  );
}
