import { Hero } from "@/components/sections/Hero";
import { FrameworkStrip } from "@/components/sections/FrameworkStrip";
import { StatsRail } from "@/components/sections/StatsRail";
import { ThreeUp } from "@/components/sections/ThreeUp";
import { AgentShowcase } from "@/components/sections/AgentShowcase";
import { TCAFramework } from "@/components/sections/TCAFramework";
import { LogoBar } from "@/components/sections/LogoBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { PressBar } from "@/components/sections/PressBar";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { DeclarativeBand } from "@/components/sections/DeclarativeBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FrameworkStrip />
      <StatsRail />
      <ThreeUp />
      <DeclarativeBand
        kicker="Why this exists"
        lines={[
          "Not theory. Not a training plan.",
          "The actual commercial work."
        ]}
      />
      <AgentShowcase />
      <TCAFramework />
      <LogoBar />
      <Testimonials />
      <PressBar />
      <PricingTeaser />
      <ClosingCTA />
    </>
  );
}
