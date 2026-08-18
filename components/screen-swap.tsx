"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Screen = { src?: string; alt: string };
type Variant = "fade-lift" | "slide" | "zoom";

const VARIANT_STYLE: Record<Variant, { duration: string; get: (i: number, active: number) => { opacity: number; transform: string } }> = {
  "fade-lift": {
    duration: "duration-700",
    get: (i, active) => ({
      opacity: active === i ? 1 : 0,
      transform: active === i ? "translateY(0) scale(1)" : "translateY(-12px) scale(0.97)",
    }),
  },
  slide: {
    duration: "duration-500",
    get: (i, active) => ({
      opacity: active === i ? 1 : 0,
      // Screen 0 always parks off-left when inactive, screen 1 off-right —
      // with only two screens this ping-pongs into a natural swipe both ways.
      transform: active === i ? "translateX(0)" : i === 0 ? "translateX(-15%)" : "translateX(15%)",
    }),
  },
  zoom: {
    duration: "duration-500",
    get: (i, active) => ({
      opacity: active === i ? 1 : 0,
      transform: active === i ? "scale(1)" : "scale(0.92)",
    }),
  },
};

// Two screens auto-cycling inside one colored frame instead of splitting
// into two side-by-side boxes. Pick a transition `variant` to match the mood.
export function ScreenSwap({
  screens,
  bg = "#820AD1",
  interval = 4200,
  variant = "fade-lift",
  aspect = "aspect-[7/8]",
}: {
  screens: [Screen, Screen];
  bg?: string;
  interval?: number;
  variant?: Variant;
  aspect?: string;
}) {
  const [active, setActive] = useState(0);
  const { duration, get } = VARIANT_STYLE[variant];

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a === 0 ? 1 : 0)), interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div className={`relative w-full ${aspect} rounded-2xl p-4 ${variant === "slide" ? "" : "overflow-hidden"}`} style={{ backgroundColor: bg }}>
      <div className={variant === "slide" ? "absolute inset-4 overflow-hidden rounded-xl" : "contents"}>
        {screens.map((screen, i) => {
          const s = get(i, active);
          return (
            <div
              key={i}
              className={`absolute transition-all ease-out ${duration} ${variant === "slide" ? "inset-0" : "inset-4"}`}
              style={{ opacity: s.opacity, transform: s.transform }}
            >
              {screen.src ? (
                <Image src={screen.src} alt={screen.alt} fill className="object-contain p-6" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <span className="text-sm text-center text-white/80">{screen.alt}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
