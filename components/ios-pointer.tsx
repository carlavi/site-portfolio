"use client";

import { useEffect, useRef } from "react";

// A small dot that chases the real cursor with spring-like easing, and
// magnetically snaps to/grows over any element carrying `data-magnetic`
// (Figma prototype-mode pointer). No animation library — just rAF + lerp.
const MAGNETIC_SELECTOR = "[data-magnetic]";
const BASE_SIZE = 16;
const EASE = 0.2;

export function IOSPointer() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    const raw = { x: 0, y: 0 };
    const current = { x: 0, y: 0, size: BASE_SIZE };
    const target = { x: 0, y: 0, size: BASE_SIZE };
    let snapped = false;
    let ready = false;

    function onMove(e: MouseEvent) {
      raw.x = e.clientX;
      raw.y = e.clientY;
      if (!snapped) {
        target.x = e.clientX;
        target.y = e.clientY;
        target.size = BASE_SIZE;
      }
      if (!ready) {
        ready = true;
        current.x = raw.x;
        current.y = raw.y;
        dot!.style.opacity = "1";
      }
    }

    function onOver(e: Event) {
      const el = (e.target as HTMLElement).closest(MAGNETIC_SELECTOR) as HTMLElement | null;
      if (!el) return;
      snapped = true;
      const rect = el.getBoundingClientRect();
      target.x = rect.left + rect.width / 2;
      target.y = rect.top + rect.height / 2;
      target.size = Math.min(Math.max(rect.width, rect.height) * 0.7, 96);
    }

    function onOut(e: Event) {
      const el = (e.target as HTMLElement).closest(MAGNETIC_SELECTOR);
      if (!el) return;
      snapped = false;
      target.x = raw.x;
      target.y = raw.y;
      target.size = BASE_SIZE;
    }

    let raf: number;
    function tick() {
      current.x += (target.x - current.x) * EASE;
      current.y += (target.y - current.y) * EASE;
      current.size += (target.size - current.size) * EASE;
      // Animate actual width/height (not transform: scale) — mix-blend-mode
      // rasterizes the element into a layer, so scaling that layer up via
      // transform blurs/pixelates its edge instead of redrawing it crisp.
      dot!.style.width = `${current.size}px`;
      dot!.style.height = `${current.size}px`;
      dot!.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full opacity-0"
      style={{
        width: BASE_SIZE,
        height: BASE_SIZE,
        backgroundColor: "rgba(255, 255, 255, 0.55)",
        mixBlendMode: "difference",
        willChange: "width, height, transform, opacity",
      }}
    />
  );
}
