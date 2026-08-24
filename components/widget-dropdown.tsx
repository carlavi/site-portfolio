"use client";

import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Mobile-only widget switcher — a dropdown reads better here than tabs
// since this is a browsable catalog, not a step-by-step flow, and a select
// list scans faster than 6 wrapping pills on a narrow screen. Deliberately
// styled as a full-width, squared-off list select (not a rounded pill like
// ThemeDropdown) so the two controls don't read as the same kind of thing.
export function WidgetDropdown<K extends string>({
  value,
  options,
  onChange,
}: {
  value: K;
  options: { key: K; label: string }[];
  onChange: (key: K) => void;
}) {
  const current = options.find((o) => o.key === value);

  return (
    <Popover>
      <PopoverTrigger className="flex w-full items-center justify-between gap-2 rounded-xl border border-border bg-background px-4 py-3 text-left">
        <span className="text-sm font-medium text-foreground">{current?.label}</span>
        <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[calc(100vw-2rem)] max-w-sm p-1.5">
        <div className="flex flex-col">
          {options.map((o) => (
            <button
              key={o.key}
              onClick={() => onChange(o.key)}
              className="rounded-md px-3 py-2.5 text-left text-sm"
              style={{
                fontWeight: value === o.key ? 600 : 400,
                color: value === o.key ? "var(--foreground)" : "var(--muted-foreground)",
                backgroundColor: value === o.key ? "var(--muted)" : "transparent",
              }}
            >
              {o.label}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
