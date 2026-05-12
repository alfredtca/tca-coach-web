import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactPaths } from "@/components/sections/ContactPaths";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Three paths: athletes signing up to the Coach, sports organisations licensing the platform, or press requesting comment."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        sub={contact.hero.sub}
        number="01"
      />
      <ContactPaths />
    </>
  );
}
