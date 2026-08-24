"use client";

import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { accentStyles, type WidgetMode, type WidgetAccentName } from "@/lib/widget-themes";

const MODES: WidgetMode[] = ["light", "dark"];
const ACCENTS: WidgetAccentName[] = ["navy", "green", "rose"];

// Discreet, floating theme control — playground-only. Sits in the corner of
// the preview instead of a row of buttons up top, since the widget-type
// switcher took that spot.
export function ThemeDropdown({
  mode,
  accent,
  onModeChange,
  onAccentChange,
}: {
  mode: WidgetMode;
  accent: WidgetAccentName;
  onModeChange: (mode: WidgetMode) => void;
  onAccentChange: (accent: WidgetAccentName) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs shadow-sm backdrop-blur-sm">
        <span className="size-2.5 rounded-full" style={{ backgroundColor: accentStyles[accent][mode].color }} />
        <span className="text-foreground capitalize">
          {accent} · {mode}
        </span>
        <ChevronDown className="size-3 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-44">
        <div className="flex items-center gap-1 self-start rounded-full border border-border p-0.5">
          {MODES.map((m) => (
            <button
              key={m}
              onClick={() => onModeChange(m)}
              className="flex-1 rounded-full px-2.5 py-1 text-xs capitalize"
              style={{
                backgroundColor: mode === m ? "var(--foreground)" : "transparent",
                color: mode === m ? "var(--background)" : "var(--foreground)",
              }}
            >
              {m}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 px-0.5">
          {ACCENTS.map((a) => (
            <button
              key={a}
              onClick={() => onAccentChange(a)}
              aria-label={a}
              className="flex size-7 items-center justify-center rounded-full border-2"
              style={{ borderColor: accent === a ? accentStyles[a][mode].color : "transparent" }}
            >
              <span className="size-4 rounded-full" style={{ backgroundColor: accentStyles[a][mode].color }} />
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
