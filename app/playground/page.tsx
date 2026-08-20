import Image from "next/image";
import { Sidebar } from "@/components/sidebar";
import { IOSPointer } from "@/components/ios-pointer";
import { ScreenSwap } from "@/components/screen-swap";
import { ReveriToggle } from "@/components/reveri-toggle";
import { HoverRevealTile } from "@/components/hover-reveal-tile";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { CASE_STUDY_WIDTH } from "@/lib/layout";

// Hidden playground — not linked from nav. Test animations/transitions here
// before porting them into a real case study or Home.
export default function Playground() {
  return (
    <div className="relative flex flex-col md:flex-row md:h-screen md:overflow-hidden cursor-none [&_*]:cursor-none!" style={{ color: "var(--foreground)" }}>
      <IOSPointer />
      <Sidebar />
      <main className="relative z-10 flex-1 flex flex-col items-center gap-20 py-16 md:overflow-y-auto md:py-20">
        <section className="flex flex-col items-center gap-10">
          <h1 className="text-3xl font-bold">Playground</h1>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              data-magnetic
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
            >
              Hover me
            </button>
            <a
              data-magnetic
              href="#"
              className="rounded-2xl border border-border px-6 py-8 text-sm text-muted-foreground"
            >
              A link
            </a>
            <div
              data-magnetic
              className="flex h-24 w-40 items-center justify-center rounded-2xl bg-secondary text-sm text-muted-foreground"
            >
              Card-shaped target
            </div>
          </div>
        </section>

        <section className={`w-full ${CASE_STUDY_WIDTH} mx-auto flex flex-col items-center gap-10 px-4`}>
          <h2 className="text-sm text-muted-foreground/70">Reveri — beacon breathing + shimmer text</h2>
          <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] bg-black dark">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div className="relative w-1/2 aspect-[882/497] animate-breathe-soft">
                <Image src="/images/reveri-ai-sessions/beacon-bg.svg" alt="" fill className="object-contain" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[29%] aspect-square animate-breathe">
                    <Image src="/images/reveri-ai-sessions/Beacon.svg" alt="Beacon" fill className="object-contain" />
                  </div>
                </div>
              </div>
              <p className="text-shimmer text-sm font-light">The Dr. is on his way...</p>
            </div>
          </div>
        </section>

        <section className={`w-full ${CASE_STUDY_WIDTH} mx-auto flex flex-col items-center gap-10 px-4`}>
          <h2 className="text-sm text-muted-foreground/70">Reveri — Talk/Listen toggle (autoloop)</h2>
          <div className="relative flex w-full items-center justify-center rounded-2xl overflow-hidden aspect-[16/9] p-8" style={{ backgroundColor: "#1B1430" }}>
            <ReveriToggle />
          </div>
        </section>

        <section className={`w-full ${CASE_STUDY_WIDTH} mx-auto flex flex-col items-center gap-10 px-4`}>
          <h2 className="text-sm text-muted-foreground/70">Reveri — pain chart (Lottie, footnote removed)</h2>
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden aspect-[7/8]" style={{ backgroundColor: "#1C1C1E" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[85%] w-[85%]">
                <DotLottieReact
                  src="/images/reveri-ai-sessions/reveri-vs-painkillers.lottie"
                  loop
                  autoplay
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`w-full ${CASE_STUDY_WIDTH} mx-auto flex flex-col items-center gap-10 px-4`}>
          <h2 className="text-sm text-muted-foreground/70">Reveri — wellness score (png, on #000000)</h2>
          <div className="relative flex w-full max-w-sm items-center justify-center rounded-2xl overflow-hidden aspect-[7/8] p-4" style={{ backgroundColor: "#000000" }}>
            <div className="relative h-full w-full">
              <Image src="/images/reveri-ai-sessions/wellness-score.png" alt="Wellness / pain relief score ring" fill className="object-contain" />
            </div>
          </div>
        </section>

        <section className={`w-full ${CASE_STUDY_WIDTH} mx-auto flex flex-col items-center gap-10 px-4`}>
          <h2 className="text-sm text-muted-foreground/70">Helia — hover video → sun/wordmark (desktop only)</h2>
          <div className="group relative w-full rounded-2xl overflow-hidden bg-secondary aspect-square sm:aspect-[16/9]">
            <HoverRevealTile
              video="/images/helia/cover.webm"
              alt="Helia"
              sun="/images/helia/helia-sun.svg"
              wordmark="/images/helia/helia-black.svg"
              wordmarkMobile="/images/helia/helia-white.svg"
            />
          </div>
        </section>

        <section className={`w-full ${CASE_STUDY_WIDTH} mx-auto flex flex-col items-center gap-10 px-4`}>
          <h2 className="text-sm text-muted-foreground/70">Nubank — purple pair, screen swap variants (real size)</h2>
          {/* Same grid-cols-2 gap-4 the real frame-pair row uses — rendering only
              one child per row sizes it to the true production column width. */}
          {(["fade-lift", "slide", "zoom"] as const).map((variant) => (
            <div key={variant} className="flex w-full flex-col items-center gap-3">
              <p className="text-xs text-muted-foreground/60">{variant}</p>
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                <ScreenSwap
                  variant={variant}
                  screens={[
                    { src: "/images/nubank/pago-minimo.png", alt: "Credit card payment amount screen — \"¿Cuánto quieres pagar?\"" },
                    { src: "/images/nubank/Intereses.png", alt: "Interest-avoidance tip screen — \"¡Estás evitando pagar intereses!\"" },
                  ]}
                />
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
