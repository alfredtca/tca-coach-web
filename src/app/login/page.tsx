import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Log in"
};

export default function LoginPage() {
  return (
    <Section
      tone="ink"
      pad="none"
      grain
      className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-[80vh]"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <aside className="lg:col-span-5 lg:pr-10">
          <Eyebrow>Members</Eyebrow>
          <h1 className="display mt-6 text-h1Lg text-bone balance">
            Log in.
          </h1>
          <p className="t-intro mt-8 max-w-prose2 text-bodyLg text-coolGrey-soft pretty">
            Welcome back. Drop in your email and you&apos;ll land in the coach
            room, six specialists waiting.
          </p>
          <p className="mt-8 text-caption text-coolGrey">
            New here?{" "}
            <Link href="/signup" className="link-teal">
              Create an account
            </Link>
            .
          </p>
        </aside>

        <div className="lg:col-span-7">
          <Suspense fallback={<AuthFormSkeleton />}>
            <AuthForm mode="login" />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}

function AuthFormSkeleton() {
  return (
    <div className="border border-white/10 bg-charcoal p-8 lg:p-10">
      <div aria-hidden className="h-3 w-24 animate-pulse bg-white/10" />
      <div aria-hidden className="mt-8 h-12 w-full animate-pulse bg-white/5" />
      <div aria-hidden className="mt-5 h-12 w-full animate-pulse bg-white/5" />
      <div aria-hidden className="mt-7 h-12 w-32 animate-pulse bg-teal/40" />
    </div>
  );
}
