import { brandArchitect } from "./brand-architect";
import { revenueStrategist } from "./revenue-strategist";
import { authorityBuilder } from "./authority-builder";
import { dealRoomAssistant } from "./deal-room-assistant";
import { reputationMediaShield } from "./reputation-media-shield";
import { commercialConfidence } from "./commercial-confidence";

export type AgentSlug =
  | "brand-architect"
  | "revenue-strategist"
  | "authority-builder"
  | "deal-room-assistant"
  | "reputation-media-shield"
  | "commercial-confidence";

export type AgentModel = "claude-opus-4-7" | "claude-sonnet-4-6";

export type AgentSpec = {
  slug: AgentSlug;
  systemPrompt: string;
  model: AgentModel;
};

/** Fast lookup by slug — all six agents. */
export const agentRegistry: Record<AgentSlug, AgentSpec> = {
  "brand-architect": brandArchitect,
  "revenue-strategist": revenueStrategist,
  "authority-builder": authorityBuilder,
  "deal-room-assistant": dealRoomAssistant,
  "reputation-media-shield": reputationMediaShield,
  "commercial-confidence": commercialConfidence
};

/** Subscription tiers map to which agents the user can access. */
export type SubscriptionTier = "starter" | "pro" | "annual";

/**
 * Starter = 3 specialists per the pricing teaser ("put dollars on the board"):
 * Deal Room Assistant, Revenue Strategist, Commercial Confidence.
 * Pro / Annual = all six.
 */
export const tierAccess: Record<SubscriptionTier, AgentSlug[]> = {
  starter: ["deal-room-assistant", "revenue-strategist", "commercial-confidence"],
  pro: [
    "brand-architect",
    "revenue-strategist",
    "authority-builder",
    "deal-room-assistant",
    "reputation-media-shield",
    "commercial-confidence"
  ],
  annual: [
    "brand-architect",
    "revenue-strategist",
    "authority-builder",
    "deal-room-assistant",
    "reputation-media-shield",
    "commercial-confidence"
  ]
};

export function canAccess(tier: SubscriptionTier, slug: AgentSlug): boolean {
  return tierAccess[tier].includes(slug);
}
