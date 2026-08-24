import { WidgetCard } from "@/components/widget-card";
import { SelectionCards } from "@/components/selection-cards";
import { type WidgetTheme } from "@/lib/widget-themes";

const OPTIONS = [
  { title: "Order tracking", description: "Let customers check order status and delivery updates instantly." },
  { title: "Product recommendations", description: "Suggest products based on browsing and purchase history." },
  { title: "Abandoned cart recovery", description: "Re-engage customers who left items in their cart." },
  { title: "Loyalty & rewards", description: "Answer points balance and redemption questions." },
];

// Chat gallery widget 1 of 4, multi-select variant — the agent proposing a
// few WhatsApp use cases for a retail business, several selectable at once.
export function SelectionMultiCard({ theme }: { theme?: WidgetTheme }) {
  return (
    <WidgetCard
      eyebrow="Select use cases"
      title="Which use cases fit your retail business?"
      description="Select all that apply, I'll tailor the agent to handle these."
      primaryLabel="Continue"
      secondaryLabel="Skip"
      theme={theme}
    >
      <SelectionCards options={OPTIONS} variant="multi" theme={theme} />
    </WidgetCard>
  );
}
