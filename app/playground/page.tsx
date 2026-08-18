import { Sidebar } from "@/components/sidebar";
import { IOSPointer } from "@/components/ios-pointer";
import { ScreenSwap } from "@/components/screen-swap";
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
