import { type ReactNode } from "react";
import { geistMono } from "@/lib/fonts";
import { ArrowRight, FileCode2, FileText, Folder, FolderOpen } from "lucide-react";

// System diagram for the YaloCode case study. Two rows:
//   1. A compact flow strip — 01 User request → 02 YaloCode → 03 Yalo
//      platform → Ready-to-test agent. YaloCode's agent goes to the platform and
//      builds everything there while the user waits in YaloCode's UI, hence
//      the build step lives under 03.
//   2. The Agent Builder skill, full width, with its three files side by
//      side (all equally relevant). A thin accent line drops from 02 into
//      it to show that's where YaloCode picks it up.
// Below lg only the skill shows (files stacked under md). Neutral, fixed light palette on the same
// #F3F3F3 as `gray` frames, set in Geist Mono for a file-system feel.

// Single accent, used sparingly: step numbers, connectors, the skill card
// and the result.
const ACCENT = "#C78888";

const FRONTMATTER = ["Name", "Description", "When to use"];
const INSTRUCTIONS = ["Tone", "Behavior", "Use cases", "Guardrails", "Widgets", "Tool usage", "Ask vs. assume"];
const FORMATTING = ["Lists vs. buttons", "Emoji rules", "Questions per turn", "Message length"];
const REFERENCES = ["Banking", "Retail", "CPG", "Cross-industry"];

export function AgentBuilderDiagram() {
  return (
    <div
      className={`w-full rounded-2xl bg-[#F3F3F3] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-28 text-neutral-900 ${geistMono.className}`}
      style={{ ["--accent-c" as string]: ACCENT }}
    >
      {/* Flow strip — desktop only; below lg the case study copy carries the
          flow and the diagram shows just the skill, with a one-line intro. */}
      <p className="mb-4 text-[11px] leading-snug text-neutral-500 lg:hidden">
        Used by YaloCode to build agents on Yalo&apos;s platform
      </p>
      <div className="hidden lg:flex lg:flex-row lg:items-center">
        <Step step="01" label="User request" />
        <Connector />
        <div className="relative rounded-xl border border-black/[0.06] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <Step step="02" label="YaloCode" body="Matches the request to the right skill" />
          {/* Drop line into the skill card (desktop only) */}
          <div className="absolute left-1/2 top-full h-8 w-px bg-[var(--accent-c)]/50" aria-hidden />
        </div>
        <Connector />
        <Step step="03" label="Yalo platform" body="Builds the agent via platform tools" />
        <Connector />
        <div className="flex items-center gap-2">
          {/* Hand-drawn so the circle has no stroke — only the check is outlined */}
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
            <circle cx="12" cy="12" r="11" fill="#488A49" />
            <path d="m8 12 3 3 5-5.5" fill="none" stroke="white" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="whitespace-nowrap text-[13px] font-semibold">Ready-to-test agent</p>
        </div>
      </div>

      {/* Agent Builder skill */}
      <div className="rounded-xl border border-[var(--accent-c)]/30 bg-[var(--accent-c)]/[0.06] p-4 sm:p-5 lg:mt-8">
        <div className="flex items-center gap-2">
          <FolderOpen className="size-[18px] text-[var(--accent-c)]" strokeWidth={1.75} />
          <p className="text-[15px] font-semibold tracking-tight">Agent Builder skill</p>
        </div>

        <div className="mt-4 grid gap-2.5 md:grid-cols-[1.25fr_1fr_0.8fr]">
          <div className="rounded-lg border border-black/[0.06] bg-white p-4">
            <FileName icon={<FileCode2 />} name="SKILL.md" />
            <p className="mt-3.5 text-[11px] font-medium text-neutral-500">Frontmatter</p>
            <p className="mt-1 flex flex-wrap gap-x-2 text-[12px] text-neutral-800">
              {FRONTMATTER.map((item, i) => (
                <span key={item} className="whitespace-nowrap">
                  {i > 0 && <span className="mr-2 text-neutral-300">·</span>}
                  {item}
                </span>
              ))}
            </p>
            <p className="mt-3.5 text-[11px] font-medium text-neutral-500">Instructions</p>
            <Chips items={INSTRUCTIONS} />
          </div>

          <FileCard icon={<FileText />} name="formatting.md" hint="WhatsApp UX rules" items={FORMATTING} />
          <FileCard icon={<Folder />} name="references/" hint="Industry examples" items={REFERENCES} />
        </div>
      </div>
    </div>
  );
}

function Step({ step, label, body }: { step: string; label: string; body?: string }) {
  return (
    <div>
      <p className="whitespace-nowrap text-[13px] font-semibold">
        <span className="font-normal text-[var(--accent-c)]">{step}</span>
        <span className="mx-1.5 text-neutral-300">/</span>
        {label}
      </p>
      {body && <p className="mt-1 whitespace-nowrap text-[11px] text-neutral-500">{body}</p>}
    </div>
  );
}

function FileName({ icon, name }: { icon: ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-1.5 text-neutral-400 [&_svg]:size-4 [&_svg]:stroke-[1.75]">
      {icon}
      <p className="text-[12px] text-neutral-700">{name}</p>
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span key={item} className="whitespace-nowrap rounded-md bg-neutral-100 px-2 py-1 text-[12px] text-neutral-700">
          {item}
        </span>
      ))}
    </div>
  );
}

function FileCard({ icon, name, hint, items }: { icon: ReactNode; name: string; hint: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-black/[0.06] bg-white p-4">
      <FileName icon={icon} name={name} />
      <p className="mt-3.5 text-[11px] font-medium text-neutral-500">{hint}</p>
      <Chips items={items} />
    </div>
  );
}

// Lone arrow centered in the space between steps.
function Connector() {
  return (
    <div className="flex flex-1 items-center justify-center px-4" aria-hidden>
      <ArrowRight className="size-4 shrink-0 text-neutral-400" strokeWidth={1.75} />
    </div>
  );
}
