"use client";

import { useState } from "react";
import { BarChart3, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { resolveTheme, type WidgetTheme } from "@/lib/widget-themes";

// Fixed semantic status colors — these describe a test outcome category,
// not the widget's brand accent, so they stay constant across themes.
const TAG_COLORS = {
  happy_path: { bg: "#DCFCE7", text: "#15803D" },
  edge_case: { bg: "#FEF3C7", text: "#B45309" },
  regression: { bg: "#CCFBF1", text: "#0F766E" },
} as const;

const TAG_LABELS: Record<TagKey, string> = {
  happy_path: "Happy path",
  edge_case: "Edge case",
  regression: "Regression",
};

type TagKey = keyof typeof TAG_COLORS;

// Same chip everywhere in this widget — Objectives used to render an
// all-caps, visually heavier version; now both sections share this one.
function Tag({ tag }: { tag: TagKey }) {
  const c = TAG_COLORS[tag];
  return (
    <Badge className="border-0" style={{ backgroundColor: c.bg, color: c.text }}>
      {TAG_LABELS[tag]}
    </Badge>
  );
}

const STATS = [
  { value: "~10", label: "Conversations" },
  { value: "~$0.80", label: "Est. cost" },
  { value: "~15 min", label: "Est. time" },
];

const OBJECTIVES: { text: string; tag: TagKey; criteria: string }[] = [
  {
    text: "Validate loyalty enrollment flow end-to-end for new customers, including welcome message and points balance.",
    tag: "happy_path",
    criteria: "Criteria 3/3",
  },
  {
    text: "Verify all edge cases and failure paths: duplicate enrollment, phone number not found on retry, and points balance timeout.",
    tag: "edge_case",
    criteria: "Criteria 4/4",
  },
  {
    text: "Confirm no regression on the welcome message step edited 12 min ago.",
    tag: "regression",
    criteria: "Criteria 2/2",
  },
];

const SCENARIOS: { title: string; description: string; tag: TagKey }[] = [
  {
    title: "New customer enrolls in loyalty program",
    description: "Core happy path, must pass before any other scenario.",
    tag: "happy_path",
  },
  {
    title: "Welcome message renders correctly after enrollment",
    description: "Validates the edit made 12 min ago, direct regression check.",
    tag: "regression",
  },
  {
    title: "Duplicate enrollment attempt (step 44)",
    description: "Retrying enrollment with a phone number already in the program.",
    tag: "edge_case",
  },
];

function SectionHeader({
  label,
  count,
  theme,
}: {
  label: string;
  count?: string;
  theme: ReturnType<typeof resolveTheme>;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: theme.muted }}>
        {label}
      </span>
      {count && (
        <span className="text-xs" style={{ color: theme.muted }}>
          {count}
        </span>
      )}
    </div>
  );
}

export function TestPlanContent({ theme = { mode: "light", accent: "navy" } }: { theme?: WidgetTheme }) {
  const t = resolveTheme(theme);
  const [checked, setChecked] = useState<Set<number>>(new Set(SCENARIOS.map((_, i) => i)));

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-1.5">
          <BarChart3 className="size-3.5" style={{ color: t.muted }} />
          <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: t.muted }}>
            Run summary
          </span>
        </div>
        <div className="mt-3 flex items-center gap-6">
          {STATS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-6">
              {i > 0 && <div className="h-8 w-px" style={{ backgroundColor: t.border }} />}
              <div>
                <p className="text-lg font-bold" style={{ color: t.text }}>
                  {s.value}
                </p>
                <p className="text-[11px] tracking-wide uppercase" style={{ color: t.muted }}>
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader label="Objectives" count={`${OBJECTIVES.length} objectives`} theme={t} />
        <div className="mt-3 flex flex-col gap-2">
          {OBJECTIVES.map((o, i) => (
            <div
              key={o.text}
              className="flex items-start justify-between gap-4 rounded-lg p-3"
              style={{ backgroundColor: `color-mix(in srgb, ${t.text} 4%, transparent)` }}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-xs font-medium" style={{ color: t.muted }}>
                  {i + 1}
                </span>
                <p className="text-sm" style={{ color: t.text }}>
                  {o.text}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1.5">
                <Tag tag={o.tag} />
                <span className="text-[11px]" style={{ color: t.muted }}>
                  {o.criteria}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader label="What to test" count="10 scenarios" theme={t} />
        <div className="mt-3 flex flex-col gap-4">
          {SCENARIOS.map((s, i) => {
            const isChecked = checked.has(i);
            return (
              <button key={s.title} onClick={() => toggle(i)} className="flex items-start justify-between gap-4 text-left">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors"
                    style={{
                      backgroundColor: isChecked ? t.accent : "transparent",
                      borderColor: isChecked ? t.accent : t.border,
                    }}
                  >
                    {isChecked && <Check className="size-3.5" style={{ color: t.accentText }} strokeWidth={3} />}
                  </span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: t.text }}>
                      {s.title}
                    </p>
                    <p className="text-sm" style={{ color: t.muted }}>
                      {s.description}
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <Tag tag={s.tag} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
