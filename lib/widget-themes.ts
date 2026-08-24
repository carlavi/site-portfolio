// Theme system for the YaloCode chat gallery widgets — two independent
// axes: `mode` (light/dark) sets the neutral base (near-white / near-black);
// `accent` (navy/green/rose) tints everything else — CTA, borders, the
// user's message bubble, and a very subtle wash/card tint — by mixing the
// accent color into that base at different strengths.
export type WidgetMode = "light" | "dark";
export type WidgetAccentName = "navy" | "green" | "rose";

export type WidgetTheme = {
  mode: WidgetMode;
  accent: WidgetAccentName;
};

type ModeBase = {
  base: string;
  text: string;
  muted: string;
};

// The neutral each accent gets mixed into — near-white in light mode, the
// site's own near-black (`#141414`) in dark mode.
export const modeBases: Record<WidgetMode, ModeBase> = {
  light: { base: "#FFFFFF", text: "#1A1A1A", muted: "#6B6B6B" },
  dark: { base: "#141414", text: "#F5F5F5", muted: "#A3A3A3" },
};

type AccentStyle = { color: string; text: string };

export const accentStyles: Record<WidgetAccentName, Record<WidgetMode, AccentStyle>> = {
  navy: {
    light: { color: "#1B3467", text: "#FFFFFF" },
    dark: { color: "#4C78D9", text: "#FFFFFF" },
  },
  green: {
    light: { color: "#3D532D", text: "#FFFFFF" },
    dark: { color: "#66A972", text: "#0B0B0B" },
  },
  rose: {
    light: { color: "#B3677A", text: "#FFFFFF" },
    dark: { color: "#E9D6D8", text: "#2B2829" },
  },
};

function tint(accent: string, base: string, percent: number) {
  return `color-mix(in srgb, ${accent} ${percent}%, ${base})`;
}

export function resolveTheme({ mode, accent }: WidgetTheme) {
  const m = modeBases[mode];
  const a = accentStyles[accent][mode];
  return {
    text: m.text,
    muted: m.muted,
    accent: a.color,
    accentText: a.text,
    // Wash (chat backdrop) is the faintest tint; the widget card itself a
    // touch stronger; the border and user bubble stronger still so they
    // stay legible as distinct shapes rather than just a color wash.
    wash: tint(a.color, m.base, 4),
    card: tint(a.color, m.base, 7),
    border: tint(a.color, m.base, 28),
    userBubble: tint(a.color, m.base, 16),
  };
}
