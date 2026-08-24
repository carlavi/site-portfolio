import { WidgetCard } from "@/components/widget-card";
import { resolveTheme, type WidgetTheme } from "@/lib/widget-themes";

// Not a real widget — the bare shell itself, rendered with the actual
// design system (theme, fonts, shimmer) so it's a true skeleton of what
// every other widget in the gallery is built on, not a mockup of one.
export function ShellCard({ theme = { mode: "light", accent: "navy" } }: { theme?: WidgetTheme }) {
  const t = resolveTheme(theme);

  return (
    <WidgetCard
      eyebrow="Eyebrow"
      title="Title"
      description="Description"
      primaryLabel="Primary action"
      secondaryLabel="Secondary action"
      theme={theme}
    >
      <div
        className="flex min-h-28 items-center justify-center rounded-lg border border-dashed text-xs tracking-wide uppercase"
        style={{ borderColor: t.border, color: t.muted }}
      >
        Space for dynamic UI
      </div>
    </WidgetCard>
  );
}
