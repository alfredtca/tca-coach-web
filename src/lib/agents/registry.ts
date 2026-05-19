import { brandArchitect } from "./brand-architect";
import { revenueStrategist } from "./revenue-strategist";
import { authorityBuilder } from "./authority-builder";
import { dealRoomAssistant } from "./deal-room-assistant";
import { reputationMediaShield } from "./reputation-media-shield";

export type AgentSlug =
  | "brand-architect"
  | "revenue-strategist"
  | "authority-builder"
  | "deal-room-assistant"
  | "reputation-media-shield";

export type AgentModel = "claude-opus-4-7" | "claude-sonnet-4-6";

export type AgentSpec = {
  slug: AgentSlug;
  systemPrompt: string;
  model: AgentModel;
};

/** Fast lookup by slug — five specialists per the platform blueprint.
    Deal Room absorbs the fee + script + rehearsal work that previously
    lived in a sixth Commercial Confidence agent. */
export const agentRegistry: Record<AgentSlug, AgentSpec> = {
  "brand-architect": brandArchitect,
  "revenue-strategist": revenueStrategist,
  "authority-builder": authorityBuilder,
  "deal-room-assistant": dealRoomAssistant,
  "reputation-media-shield": reputationMediaShield
};

/** Subscription tiers map to which agents the user can access. */
export type SubscriptionTier = "starter" | "pro" | "annual";

/**
 * Starter = 3 specialists that put dollars on the board:
 * Deal Room, Revenue Strategist, Authority Builder.
 * Pro / Annual = all five.
 */
export const tierAccess: Record<SubscriptionTier, AgentSlug[]> = {
  starter: ["deal-room-assistant", "revenue-strategist", "authority-builder"],
  pro: [
    "brand-architect",
    "revenue-strategist",
    "authority-builder",
    "deal-room-assistant",
    "reputation-media-shield"
  ],
  annual: [
    "brand-architect",
    "revenue-strategist",
    "authority-builder",
    "deal-room-assistant",
    "reputation-media-shield"
  ]
};

export function canAccess(tier: SubscriptionTier, slug: AgentSlug): boolean {
  return tierAccess[tier].includes(slug);
}
