import { ArrowRight } from "lucide-react";
import { geistMono } from "@/lib/fonts";

// Comparison chart for the YaloCode guided demo flow: time to create a
// client-tailored demo agent on the legacy platform (2+ hours) vs. YaloCode
// (<10 min). Editorial before → after, no bars: YaloCode is the visual hero,
// legacy deliberately recessive. Fills a `frame-pair` frame (7:8).

// Success green (same as the diagram's check); the frame behind it uses a
// faint wash of it (set via the frame's `bgColor` in lib/projects.ts).
const GREEN = "#488A49";

export function DemoTimeChart() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center p-7 sm:p-10 text-neutral-900">
      <p className={`mb-10 text-[11px] uppercase tracking-[0.12em] text-neutral-500 sm:mb-12 ${geistMono.className}`}>
        Demo agent creation time
      </p>

      <div>
        {/* Before → after, editorial: no bars, YaloCode is the hero */}
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[13px] text-neutral-400 sm:text-sm">Legacy platform</p>
            <p className="mt-1.5 text-[26px] font-medium leading-none tracking-[-0.02em] text-neutral-400 sm:text-[34px]">2+ hours</p>
          </div>
          <ArrowRight className="mb-2 size-4 shrink-0 text-neutral-400" strokeWidth={1.75} aria-hidden />
          <div className="text-right">
            <p className="text-[13px] font-medium sm:text-sm" style={{ color: GREEN }}>YaloCode</p>
            <p className="mt-1.5 text-[32px] font-semibold leading-none tracking-[-0.03em] sm:text-[44px]">&lt;10 min</p>
          </div>
        </div>

        <div className="my-7 h-px bg-black/[0.08] sm:my-9" />

        <p className="text-lg font-medium tracking-tight sm:text-xl" style={{ color: GREEN }}>From hours to minutes.</p>
        <p className="mt-3 text-[13px] text-neutral-500 sm:text-sm">Client-tailored demo agents</p>
      </div>
    </div>
  );
}
