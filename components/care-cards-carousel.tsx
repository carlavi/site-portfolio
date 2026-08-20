"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Droplet, Sun, Sprout, ThermometerSun, SprayCan, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  droplet: Droplet,
  sun: Sun,
  sprout: Sprout,
  thermometer: ThermometerSun,
  spray: SprayCan,
};

const CARE_ITEMS: { icon: keyof typeof ICONS; label: string; body: string }[] = [
  { icon: "droplet", label: "Water", body: "I'm happy with 2–3 cups every 7–10 days." },
  { icon: "sun", label: "Light", body: "I like bright, indirect light." },
  { icon: "sprout", label: "Fertilizer", body: "Feed me every 4–6 weeks." },
  { icon: "thermometer", label: "Temperature", body: "I'm most comfortable between 18–28°C." },
  { icon: "spray", label: "Humidity", body: "I enjoy a bit of humidity." },
];

// Card height is fixed (not fluid) so the scroll distance and each card's
// pulse delay can be computed as plain numbers; only the container's own
// height is measured at runtime, so the carousel matches whatever box it's
// dropped into (e.g. the real aspect-[7/8] frame-pair column) instead of a
// guessed pixel size.
const CARD_HEIGHT = 88;
const CARD_GAP = 28; // extra room so the scaled-up centered card doesn't crowd its neighbors
const STEP = CARD_HEIGHT + CARD_GAP;
const DURATION = 20; // seconds per full loop

export function CareCardsCarousel({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setHeight(el.clientHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Rendered 3x so the animated middle copy always has a real duplicate
  // card peeking above and below it — see the .care-track comment in
  // globals.css for why that's needed to loop seamlessly.
  const cards = [...CARE_ITEMS, ...CARE_ITEMS, ...CARE_ITEMS];
  // Centers the first card of the middle copy at rest so its pulse delay
  // can start at 0s (the keyframes' own translateY values do the rest).
  const restOffset = height / 2 - CARD_HEIGHT / 2;

  return (
    <div
      ref={containerRef}
      className={`care-fade-mask relative h-full w-full overflow-hidden rounded-2xl ${className ?? ""}`}
      style={{ backgroundColor: "#EFF3EA" }}
    >
      {height > 0 && (
        <div
          className="care-track flex flex-col gap-7 px-[19.6%]"
          style={
            {
              marginTop: restOffset,
              "--care-duration": `${DURATION}s`,
              "--care-step": `${STEP}px`,
            } as React.CSSProperties
          }
        >
          {cards.map((item, i) => {
            const Icon = ICONS[item.icon];
            const delay = (i % CARE_ITEMS.length) * (DURATION / CARE_ITEMS.length);
            return (
              <div
                key={i}
                className="care-card flex shrink-0 items-center gap-3 rounded-2xl bg-white px-5 py-4"
                style={{ height: CARD_HEIGHT, "--care-delay": `${delay}s` } as React.CSSProperties}
              >
                <Icon className="care-icon size-5 shrink-0" strokeWidth={1.3} />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground/70">{item.label}</p>
                  <p className="text-sm leading-snug text-foreground">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
