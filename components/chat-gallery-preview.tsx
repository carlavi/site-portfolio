"use client";

import { useState } from "react";
import { ChatContext } from "@/components/chat-context";
import { SuggestedActionCard } from "@/components/suggested-action-card";
import { SelectionSingleCard } from "@/components/selection-single-card";
import { SelectionMultiCard } from "@/components/selection-multi-card";
import { TaskProgressCard } from "@/components/task-progress-card";
import { TestPlanCard } from "@/components/test-plan-card";
import { ShellCard } from "@/components/shell-card";
import { ThemeDropdown } from "@/components/theme-dropdown";
import { WidgetDropdown } from "@/components/widget-dropdown";
import { type WidgetMode, type WidgetAccentName } from "@/lib/widget-themes";

const WIDGETS = {
  "suggested-action": {
    label: "Suggested action",
    userMessage: "Build me the best agent to increase my sales",
    agentIntro: "Here's a good next step:",
    Component: SuggestedActionCard,
  },
  "selection-single": {
    label: "Selection (single)",
    userMessage: "I want to build an agent for my business.",
    agentIntro: "Let me start with one quick question to point you in the right direction:",
    Component: SelectionSingleCard,
  },
  "selection-multi": {
    label: "Selection (multi)",
    userMessage: "Build me a WhatsApp agent for my retail store.",
    agentIntro: "Here are a few use cases I can set up, pick as many as you'd like:",
    Component: SelectionMultiCard,
  },
  "test-plan": {
    label: "Test plan",
    userMessage: "Yes, let's test loyalty & rewards first",
    agentIntro: "Setup confirmed. Generating the test plan now.",
    Component: TestPlanCard,
  },
  "task-progress": {
    label: "Task progress",
    userMessage: "Looks good, run the tests",
    agentIntro: "Sure, running through each one now:",
    Component: TaskProgressCard,
  },
  shell: {
    label: "Shell",
    userMessage: "What's the shape every widget shares?",
    agentIntro: "This is the shell underneath all of them:",
    Component: ShellCard,
  },
} as const;

type WidgetKey = keyof typeof WIDGETS;

const WIDGET_OPTIONS = (Object.keys(WIDGETS) as WidgetKey[]).map((key) => ({ key, label: WIDGETS[key].label }));

// Live chat gallery — used both in /playground and on the real case study
// page. Widget-type switcher up top (pills on sm+, a dropdown below that —
// tabs that wrap to 2-3 lines don't work on a narrow phone), theme dropdown
// tucked in the bottom-right corner of the preview.
export function ChatGalleryPreview() {
  const [widget, setWidget] = useState<WidgetKey>("suggested-action");
  const [mode, setMode] = useState<WidgetMode>("dark");
  const [accent, setAccent] = useState<WidgetAccentName>("navy");

  const { userMessage, agentIntro, Component } = WIDGETS[widget];

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="w-full sm:hidden">
        <WidgetDropdown value={widget} options={WIDGET_OPTIONS} onChange={setWidget} />
      </div>
      <div className="hidden flex-wrap items-center justify-center gap-1 rounded-full border border-border p-1 sm:flex">
        {(Object.keys(WIDGETS) as WidgetKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setWidget(key)}
            className="rounded-full px-3 py-1.5 text-xs whitespace-nowrap"
            style={{
              backgroundColor: widget === key ? "var(--foreground)" : "transparent",
              color: widget === key ? "var(--background)" : "var(--foreground)",
            }}
          >
            {WIDGETS[key].label}
          </button>
        ))}
      </div>

      <div className="relative w-full">
        <ChatContext userMessage={userMessage} agentIntro={agentIntro} theme={{ mode, accent }}>
          <Component theme={{ mode, accent }} />
        </ChatContext>
        <div className="absolute right-4 bottom-4">
          <ThemeDropdown mode={mode} accent={accent} onModeChange={setMode} onAccentChange={setAccent} />
        </div>
      </div>
    </div>
  );
}
