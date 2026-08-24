"use client";

import { useEffect, useState } from "react";
import { resolveTheme, type WidgetTheme } from "@/lib/widget-themes";

// Content slot for the "task progress" chat gallery widget — a background
// task the agent is still working through, one item at a time (e.g.
// "Testing 12 of 20 use cases"). The count and the bar fill are driven by
// the same `step` state so they always move together. Once the count
// finishes, the filled bar keeps a slow pulse so it still reads as
// "wrapping up" rather than stalled.
export function TaskProgressBar({
  total,
  unit,
  target = 68,
  durationMs = 8000,
  theme = { mode: "light", accent: "navy" },
}: {
  total: number;
  unit: string;
  target?: number;
  durationMs?: number;
  theme?: WidgetTheme;
}) {
  const t = resolveTheme(theme);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => (s >= total ? s : s + 1));
    }, durationMs / total);
    return () => clearInterval(id);
  }, [total, durationMs]);

  const progress = Math.round((step / total) * target);

  return (
    <div>
      <div className="flex items-center justify-between text-xs" style={{ color: t.muted }}>
        <span>
          Testing {step} of {total} {unit}
        </span>
        <span>{progress}%</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full" style={{ backgroundColor: t.border }}>
        <div
          className="task-progress-fill h-full rounded-full ease-linear"
          style={{ width: `${progress}%`, backgroundColor: t.accent, transitionProperty: "width", transitionDuration: `${durationMs / total}ms` }}
        />
      </div>
    </div>
  );
}
