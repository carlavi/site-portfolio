import { type ReactNode, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { inter } from "@/lib/fonts";
import { resolveTheme, type WidgetTheme } from "@/lib/widget-themes";

// Shared shell for the YaloCode chat gallery widgets — every widget type
// (suggested action, selection cards, task progress, test plan) is this
// same eyebrow/title/description/content/CTA structure, just with a
// different `children` slot in the middle. Typography intentionally departs
// from the rest of the site (Inter, not General Sans) to read as Yalo's own
// product rather than the portfolio. `theme` (mode + accent) swaps the
// widget's palette — see lib/widget-themes.ts. `width` is per widget type —
// the chat container it sits in (ChatContext) is always full width, but the
// widget bubble itself may only take half the row on desktop, same as a
// real chat bubble not always spanning the full width. Mobile is always
// 100% regardless.
export function WidgetCard({
  eyebrow,
  title,
  description,
  children,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
  theme = { mode: "light", accent: "navy" },
  width = "full",
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  // Optional — a widget mid-background-task (e.g. Task progress) has no
  // main CTA at all, just a small, discreet way to cancel.
  primaryLabel?: string;
  secondaryLabel: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  theme?: WidgetTheme;
  width?: "full" | "half";
}) {
  const t = resolveTheme(theme);
  const eyebrowStyle = {
    fontFamily: "var(--font-mono, monospace)",
    "--eyebrow-shimmer-base": t.muted,
    "--eyebrow-shimmer-peak": "#FFFFFF",
  } as CSSProperties;

  return (
    <div
      className={`w-full rounded-2xl border p-6 sm:p-8 ${width === "half" ? "sm:w-1/2" : "sm:w-full"} ${inter.className}`}
      style={{ backgroundColor: t.card, borderColor: t.border, color: t.text }}
    >
      <p className="eyebrow-shimmer text-xs font-light tracking-[0.08em] uppercase" style={eyebrowStyle}>
        {eyebrow}
      </p>
      <h3 className="mt-2 text-lg font-bold tracking-tight sm:text-xl" style={{ color: t.text }}>
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed sm:text-base" style={{ color: t.muted }}>
        {description}
      </p>
      {children && <div className="mt-6">{children}</div>}
      {primaryLabel ? (
        <div className="mt-6 flex items-center gap-5">
          <Button
            size="lg"
            className="rounded-lg px-4 hover:opacity-90"
            style={{ backgroundColor: t.accent, color: t.accentText }}
            onClick={onPrimary}
          >
            {primaryLabel}
          </Button>
          <Button variant="ghost" size="lg" className="px-1 hover:bg-transparent" style={{ color: t.text }} onClick={onSecondary}>
            {secondaryLabel}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      ) : (
        // No main CTA — just a small, easy-to-miss way out, not a real button.
        <div className="mt-4">
          <button
            className="text-xs opacity-60 transition-opacity hover:opacity-100"
            style={{ color: t.muted }}
            onClick={onSecondary}
          >
            {secondaryLabel}
          </button>
        </div>
      )}
    </div>
  );
}
