"use client";

import { useState, type CSSProperties } from "react";
import { Check } from "lucide-react";
import { resolveTheme, type WidgetTheme } from "@/lib/widget-themes";

export type SelectionOption = { title: string; description: string };

// Content slot for the "selection cards" chat gallery widget — à la
// Claude's AskUserQuestion. `variant="single"` shows numbered circles and
// only lets one option stay selected (radio-like); `variant="multi"` shows
// checkboxes and lets several stay selected independently.
export function SelectionCards({
  options,
  variant,
  theme = { mode: "light", accent: "navy" },
}: {
  options: SelectionOption[];
  variant: "single" | "multi";
  theme?: WidgetTheme;
}) {
  const t = resolveTheme(theme);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const rowStyle = { "--row-hover-bg": `color-mix(in srgb, ${t.accent} 8%, ${t.card})` } as CSSProperties;

  function toggle(i: number) {
    setSelected((prev) => {
      if (variant === "single") return new Set([i]);
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <div>
      {options.map((opt, i) => {
        const isSelected = selected.has(i);
        return (
          <button
            key={opt.title}
            onClick={() => toggle(i)}
            className="selection-row -mx-3 flex w-[calc(100%+1.5rem)] items-start gap-4 border-t px-3 py-4 text-left first:border-t-0"
            style={{ borderColor: t.border, ...rowStyle }}
          >
            {variant === "single" ? (
              <span
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors"
                style={{
                  backgroundColor: isSelected ? t.accent : t.border,
                  color: isSelected ? t.accentText : t.muted,
                }}
              >
                {i + 1}
              </span>
            ) : (
              <span
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors"
                style={{
                  backgroundColor: isSelected ? t.accent : "transparent",
                  borderColor: isSelected ? t.accent : t.border,
                }}
              >
                {isSelected && <Check className="size-3.5" style={{ color: t.accentText }} strokeWidth={3} />}
              </span>
            )}
            <span className="flex flex-col">
              <span className="text-sm font-semibold" style={{ color: t.text }}>
                {opt.title}
              </span>
              <span className="mt-0.5 text-sm" style={{ color: t.muted }}>
                {opt.description}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
