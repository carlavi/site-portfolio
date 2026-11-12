import { inter } from "@/lib/fonts";
import { resolveTheme } from "@/lib/widget-themes";
import { SelectionSingleCard } from "@/components/selection-single-card";
import { YalocodeLogo } from "@/components/yalocode-logo";

// Hidden recreation of YaloCode's mobile chat with the industry-selection
// widget mid-conversation (guided demo flow), light mode — built for Carla
// to screenshot into a phone mockup. Sized as an iPhone screen (390×844);
// the playground embeds it in an iframe so mobile breakpoints apply for real.
// Not linked from any nav.

const theme = { mode: "light", accent: "navy" } as const;

export default function YaloCodeMobileIndustry() {
  const t = resolveTheme(theme);

  return (
    <div className={`flex min-h-dvh justify-center bg-white ${inter.className}`}>
      <div className="relative flex h-dvh max-h-[844px] w-full max-w-[390px] flex-col overflow-hidden bg-white" style={{ color: t.text }}>
        {/* App header */}
        <header className="flex shrink-0 items-center px-5 pb-3 pt-8">
          <YalocodeLogo className="size-6" />
        </header>

        {/* Conversation */}
        <div className="flex-1 overflow-y-auto px-4 pb-2 pt-3 [scrollbar-width:none]">
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-br-md px-4 py-2.5 text-[15px] leading-snug" style={{ backgroundColor: t.userBubble }}>
              I need a demo agent for a client meeting this afternoon
            </div>
          </div>

          <p className="mt-5 px-1 text-[15px] leading-relaxed">
            Let&apos;s tailor it to your client. A few quick choices and it&apos;ll be ready.
          </p>

          <div className="mt-4">
            <SelectionSingleCard theme={theme} />
          </div>
        </div>

        {/* Home indicator */}
        <div className="shrink-0 pb-2 pt-2">
          <div className="mx-auto h-[5px] w-[134px] rounded-full bg-neutral-900" />
        </div>
      </div>
    </div>
  );
}
