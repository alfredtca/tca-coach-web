import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Sign up"
};

export default function SignupPage() {
  return (
    <Section
      tone="paper"
      pad="none"
      grain
      className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-[80vh]"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <aside className="lg:col-span-5 lg:pr-10">
          <Eyebrow>Foundation members</Eyebrow>
          <h1 className="display mt-6 text-h1Lg text-ink balance">
            Sign up.
          </h1>
          <p className="t-intro mt-8 max-w-prose2 text-bodyLg text-ink/65 pretty">
            Pick the plan you want, drop in your details, and you&apos;ll land
            in the coach room. Real billing connects with Stripe later — for
            now your selection just controls which specialists you can talk to.
          </p>
          <p className="mt-8 text-caption text-ink/60">
            Already have an account?{" "}
            <Link href="/login" className="link-teal">
              Log in
            </Link>
            .
          </p>
        </aside>

        <div className="lg:col-span-7">
          <Suspense fallback={<AuthFormSkeleton />}>
            <AuthForm mode="signup" />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}

function AuthFormSkeleton() {
  return (
    <div className="border border-rule/60 bg-paper-soft p-8 lg:p-10">
      <div aria-hidden className="h-3 w-24 animate-pulse bg-white/10" />
      <div aria-hidden className="mt-8 h-12 w-full animate-pulse bg-paper-soft" />
      <div aria-hidden className="mt-5 h-12 w-full animate-pulse bg-paper-soft" />
      <div aria-hidden className="mt-5 h-12 w-full animate-pulse bg-paper-soft" />
      <div aria-hidden className="mt-5 h-12 w-full animate-pulse bg-paper-soft" />
      <div aria-hidden className="mt-7 h-12 w-40 animate-pulse bg-teal/40" />
    </div>
  );
}
