import { WidgetCard } from "@/components/widget-card";
import { TaskProgressBar } from "@/components/task-progress-bar";
import { type WidgetTheme } from "@/lib/widget-themes";

// Chat gallery widget 3 of 4 — the agent testing the WhatsApp agent's use
// cases in the background. No main CTA, just a small, easy-to-miss way to
// cancel.
export function TaskProgressCard({ theme }: { theme?: WidgetTheme }) {
  return (
    <WidgetCard
      eyebrow="Quality check"
      title="Testing your WhatsApp agent"
      description="Running through your use cases to make sure everything works as expected."
      secondaryLabel="Cancel"
      theme={theme}
    >
      <TaskProgressBar total={20} unit="use cases" theme={theme} />
    </WidgetCard>
  );
}
