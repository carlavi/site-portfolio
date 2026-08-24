import { WidgetCard } from "@/components/widget-card";
import { SelectionCards } from "@/components/selection-cards";
import { type WidgetTheme } from "@/lib/widget-themes";

const OPTIONS = [
  { title: "CPG / Food & Beverage", description: "Consumer goods, food brands, and distributors." },
  { title: "Retail", description: "E-commerce, brick-and-mortar, and marketplaces." },
  { title: "Financial Services", description: "Banking, insurance, and fintech." },
  { title: "Other", description: "Something else, I'll ask a couple of quick questions." },
];

// Chat gallery widget 1 of 4, single-select variant — the industry picker
// from Carla's reference.
export function SelectionSingleCard({ theme }: { theme?: WidgetTheme }) {
  return (
    <WidgetCard
      eyebrow="Choose your industry"
      title="What industry are you in?"
      description="This helps me pick the right agent type for you."
      primaryLabel="Continue"
      secondaryLabel="Skip"
      theme={theme}
    >
      <SelectionCards options={OPTIONS} variant="single" theme={theme} />
    </WidgetCard>
  );
}
