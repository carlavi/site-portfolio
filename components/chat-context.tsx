import { type ReactNode } from "react";
import { inter } from "@/lib/fonts";
import { resolveTheme, type WidgetTheme } from "@/lib/widget-themes";

// Wraps a chat gallery widget with the surrounding transcript it actually
// lives in — a user message bubble, the agent's short lead-in line, then
// the widget itself — so it reads as part of a conversation rather than a
// floating card. Mirrors Carla's YaloCode gallery reference. The container
// itself is always full width — it's the widget passed in via `children`
// (e.g. WidgetCard) that varies its own width per use case, same as a real
// chat bubble not always spanning the row.
export function ChatContext({
  userMessage,
  agentIntro,
  children,
  theme = { mode: "light", accent: "navy" },
}: {
  userMessage: string;
  agentIntro: string;
  children: ReactNode;
  theme?: WidgetTheme;
}) {
  const t = resolveTheme(theme);

  return (
    <div
      className={`w-full aspect-[9/16] overflow-y-auto rounded-2xl p-4 sm:aspect-auto sm:overflow-visible sm:p-8 ${inter.className}`}
      style={{ backgroundColor: t.wash }}
    >
      <div className="flex flex-col items-end gap-1.5">
        <span className="text-[11px] tracking-wide uppercase" style={{ color: t.muted }}>
          You
        </span>
        <div
          className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm"
          style={{ backgroundColor: t.userBubble, color: t.text }}
        >
          {userMessage}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-1.5">
        <span className="text-[11px] tracking-wide uppercase" style={{ color: t.muted }}>
          YaloCode
        </span>
        <div className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm" style={{ color: t.text }}>
          {agentIntro}
        </div>
      </div>

      <div className="mt-4">{children}</div>
    </div>
  );
}
