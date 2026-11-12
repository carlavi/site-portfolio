import { type ReactNode } from "react";
import Image from "next/image";
import { Component, MessageSquare, Split } from "lucide-react";
import { geistMono } from "@/lib/fonts";

// Playground-only exploration of Apple-style glass. Two techniques:
//   - Classic glass: translucent fill + backdrop blur/saturate + a bright
//     hairline edge. Works everywhere.
//   - Liquid glass: classic glass plus an SVG displacement filter on the
//     blurred layer, so what's behind gets refracted/warped like a lens.
//     Chromium only — Safari/Firefox ignore the url() filter and fall back
//     to classic glass.
// Glass has no color of its own, so every demo puts something behind it.

const ACCENT = "#C78888";

const ITEMS = [
  { icon: <Split />, label: "Interaction design", title: "Choosing the right interaction model", body: "Not every task was best handled through conversation." },
  { icon: <Component />, label: "Design systems", title: "Making complex actions visible", body: "Reusable UI patterns that kept users in control." },
  { icon: <MessageSquare />, label: "Agent behavior design", title: "Shaping how the agent works", body: "Skills and instructions that made creation consistent." },
];

export function GlassExploration() {
  return (
    <div className="flex w-full flex-col gap-16">
      <LiquidFilter />

      <Demo label="A · Glass clásico sobre manchas de color (todos los navegadores)">
        <BlobStage>
          <Cards variant="classic" />
        </BlobStage>
      </Demo>

      <Demo label="B · Liquid glass sobre manchas de color (refracción solo en Chrome)">
        <BlobStage>
          <Cards variant="liquid" />
        </BlobStage>
      </Demo>

      <Demo label="C · Navbar de glass con contenido pasando por debajo — haz scroll dentro de cada caja">
        <div className="grid gap-4 md:grid-cols-2">
          <ScrollStage variant="classic" caption="Clásico" />
          <ScrollStage variant="liquid" caption="Liquid (Chrome)" />
        </div>
      </Demo>
    </div>
  );
}

function Demo({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm text-muted-foreground/70">{label}</h3>
      {children}
    </div>
  );
}

// Soft color field: blurred blobs in the YaloCode accent plus warm tones.
function BlobStage({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#F6F3F1] px-5 py-16 sm:px-10 sm:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-[5%] top-[10%] h-[70%] w-[38%] rounded-full blur-3xl" style={{ background: ACCENT, opacity: 0.55 }} />
        <div className="absolute left-[38%] top-[45%] h-[60%] w-[30%] rounded-full bg-[#F2C48D] opacity-60 blur-3xl" />
        <div className="absolute right-[-5%] top-[-10%] h-[70%] w-[35%] rounded-full bg-[#9FB4D9] opacity-50 blur-3xl" />
        {/* Crisp shapes so the refraction in B has edges to bend */}
        <div className="absolute left-[22%] top-[18%] size-24 rounded-full border-[10px] border-white/70" />
        <div className="absolute right-[18%] bottom-[12%] h-3 w-[40%] rounded-full bg-neutral-900/80" />
        <div className="absolute left-[8%] bottom-[20%] h-3 w-[25%] rounded-full bg-white" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function Cards({ variant }: { variant: "classic" | "liquid" }) {
  return (
    <div className={`grid grid-cols-1 gap-3 md:grid-cols-3 ${geistMono.className}`}>
      {ITEMS.map((item) => (
        <Glass key={item.label} variant={variant} className="rounded-2xl">
          <div className="flex flex-col p-6 md:p-7">
            <span className="[&_svg]:size-5 [&_svg]:stroke-[1.5]" style={{ color: ACCENT }}>{item.icon}</span>
            <p className="mt-4 text-[12px] text-neutral-600">{item.label}</p>
            <h4 className="mt-8 font-sans text-lg font-medium leading-snug text-neutral-900">{item.title}</h4>
            <p className="mt-2 font-sans text-[15px] leading-relaxed text-neutral-600">{item.body}</p>
          </div>
        </Glass>
      ))}
    </div>
  );
}

// Layered glass surface: effect (blur [+ distortion]) → tint → shine → content.
function Glass({ variant, className = "", children }: { variant: "classic" | "liquid"; className?: string; children: ReactNode }) {
  return (
    <div className={`relative isolate overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backdropFilter: "blur(14px) saturate(160%)",
          WebkitBackdropFilter: "blur(14px) saturate(160%)",
          filter: variant === "liquid" ? "url(#liquid-glass)" : undefined,
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-white/35" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          boxShadow:
            "inset 1px 1px 0 rgba(255,255,255,0.75), inset -1px -1px 0 rgba(255,255,255,0.25), 0 8px 32px rgba(0,0,0,0.08)",
        }}
        aria-hidden
      />
      {children}
    </div>
  );
}

// Scrollable box with a sticky glass navbar; real case-study imagery scrolls
// underneath it, which is how Apple actually uses the material.
function ScrollStage({ variant, caption }: { variant: "classic" | "liquid"; caption: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-[460px] overflow-y-auto rounded-2xl bg-[#FAFAFA]">
        <div className="sticky top-3 z-10 mx-3">
          <Glass variant={variant} className="rounded-full">
            <div className="flex items-center justify-between px-5 py-3 text-sm">
              <span className="font-semibold text-neutral-900">Carla Vivani</span>
              <span className="flex gap-4 text-neutral-700">
                <span>Work</span>
                <span>About</span>
                <span>Contact</span>
              </span>
            </div>
          </Glass>
        </div>
        <div className="-mt-[52px] flex flex-col gap-3 p-3 pt-0">
          <Image src="/images/yalocode/chat-ui-gallery.jpeg" alt="" width={1600} height={915} className="h-auto w-full rounded-xl" />
          <Image src="/images/helia/chat-hands.jpg" alt="" width={1333} height={2000} className="h-auto w-full rounded-xl" />
          <Image src="/images/yalocode/home-screen.png" alt="" width={1600} height={949} className="h-auto w-full rounded-xl" />
          <Image src="/images/helia/sun.jpg" alt="" width={1179} height={1646} className="h-auto w-full rounded-xl" />
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{caption}</p>
    </div>
  );
}

// Low-frequency noise → displacement: warms the blurred backdrop like an
// uneven lens. Rendered once, referenced by id from every liquid surface.
function LiquidFilter() {
  return (
    <svg className="absolute h-0 w-0" aria-hidden>
      <filter id="liquid-glass" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
        <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
        <feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
