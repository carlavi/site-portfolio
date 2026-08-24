import { WidgetCard } from "@/components/widget-card";
import { type WidgetTheme } from "@/lib/widget-themes";

// Chat gallery widget 2 of 4 — a suggested next step with an accept/dismiss
// pair. No extra content slot needed beyond the shared header + CTAs.
export function SuggestedActionCard({ theme }: { theme?: WidgetTheme }) {
  return (
    <WidgetCard
      eyebrow="Agent creation"
      title="Want me to guide you step by step?"
      description="I'll ask you a few quick questions to set up the ideal sales agent for you"
      primaryLabel="Create agent"
      secondaryLabel="Not now"
      theme={theme}
      width="half"
    />
  );
}
