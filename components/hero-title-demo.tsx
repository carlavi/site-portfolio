"use client";

import { useState, type ComponentProps } from "react";
import { HeroTitle } from "@/components/hero-title";

// Playground-only: a HeroTitle variant with a Replay button (remounts it).
export function HeroTitleDemo({ label, ...props }: { label: string } & ComponentProps<typeof HeroTitle>) {
  const [run, setRun] = useState(0);
  return (
    <div className="w-full flex flex-col items-center gap-6 rounded-2xl border border-border py-16 px-4">
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground/70">{label}</span>
        <button data-magnetic onClick={() => setRun((r) => r + 1)} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          Replay
        </button>
      </div>
      <HeroTitle key={run} {...props} />
    </div>
  );
}
