import {
  Compass,
  ChartLineUp,
  Megaphone,
  Handshake,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { AgentIcon } from "@/lib/content";

export type AgentTone = {
  Icon: Icon;
  hex: string;        // raw hex for inline style
  tailwind: string;   // tailwind class root, e.g. "agent-architect"
  label: string;      // colour label for accessibility / micro-text
};

export const agentTone: Record<AgentIcon, AgentTone> = {
  compass: {
    Icon: Compass,
    hex: "#9FB7A6",
    tailwind: "agent-architect",
    label: "Sage"
  },
  chartLineUp: {
    Icon: ChartLineUp,
    hex: "#B6B294",
    tailwind: "agent-strategist",
    label: "Olive"
  },
  megaphone: {
    Icon: Megaphone,
    hex: "#B5A795",
    tailwind: "agent-authority",
    label: "Taupe"
  },
  handshake: {
    Icon: Handshake,
    hex: "#A0A8AE",
    tailwind: "agent-dealroom",
    label: "Slate"
  },
  shield: {
    Icon: ShieldCheck,
    hex: "#9CA8A8",
    tailwind: "agent-shield",
    label: "Steel"
  }
};

export const agentIconMap: Record<AgentIcon, Icon> = Object.fromEntries(
  Object.entries(agentTone).map(([k, v]) => [k, v.Icon])
) as Record<AgentIcon, Icon>;
