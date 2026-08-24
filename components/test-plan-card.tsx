import { WidgetCard } from "@/components/widget-card";
import { TestPlanContent } from "@/components/test-plan-content";
import { type WidgetTheme } from "@/lib/widget-themes";

// Chat gallery widget 4 of 4 — the richest one, reusing the same test-plan
// widget built for the Conversation screen recreation. Retail/loyalty
// example instead of the original Petco reference.
export function TestPlanCard({ theme = { mode: "light", accent: "navy" } }: { theme?: WidgetTheme }) {
  return (
    <WidgetCard
      eyebrow="Test plan"
      title="Loyalty use case"
      description="15 scenarios · Standard suite"
      primaryLabel="Run tests"
      secondaryLabel="Modify"
      theme={theme}
      width="full"
    >
      <TestPlanContent theme={theme} />
    </WidgetCard>
  );
}
