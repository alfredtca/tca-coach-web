import type { Metadata } from "next";
import { FaqList } from "@/components/sections/FaqList";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about The Commercial Athlete Coach — pricing, ownership, privacy, and how the platform works."
};

export default function FaqPage() {
  return <FaqList />;
}
