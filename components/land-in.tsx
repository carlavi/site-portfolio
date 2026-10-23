"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

// Shopify.design-style "landing" reveal: the element starts enlarged (closer to the camera),
// pushed down and fanned out from the viewport center, then settles into place with a long
// ease-out-expo. The outer wrapper is observed (untransformed) so the offset doesn't delay the trigger.
export function LandIn({
  children,
  delay = 0,
  immediate = false,
  className,
  style,
  seed = 0,
}: {
  children: ReactNode;
  delay?: number; // ms
  immediate?: boolean; // reveal on mount instead of on scroll (above-the-fold rows)
  className?: string;
  style?: CSSProperties;
  seed?: number; // varies duration slightly per element so cards don't land in lockstep
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      inner.style.opacity = "1";
      inner.style.transform = "none";
      return;
    }

    // Starting pose, computed from where the element actually sits so it works for any column count.
    const mobile = window.innerWidth < 768;
    const rect = outer.getBoundingClientRect();
    const half = window.innerWidth / 2;
    const spread = Math.max(-1, Math.min(1, (rect.left + rect.width / 2 - half) / half));
    const x = spread * (mobile ? 40 : 140);
    const y = mobile ? 72 : 160;
    const scale = mobile ? 1.06 : 1.2;
    const duration = 1.3 + (seed % 4) * 0.15;

    inner.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

    let timeoutId: ReturnType<typeof setTimeout>;
    const reveal = () => {
      timeoutId = setTimeout(() => {
        inner.style.transition = `transform ${duration}s var(--ease-out-expo), opacity ${duration}s var(--ease-out-expo)`;
        inner.style.opacity = "1";
        inner.style.transform = "none";
      }, delay);
    };

    if (immediate) {
      reveal();
      return () => clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(outer);
        reveal();
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(outer);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [delay, immediate, seed]);

  return (
    <div ref={outerRef} className={className} style={style}>
      <div ref={innerRef} style={{ opacity: 0, willChange: "transform, opacity" }}>
        {children}
      </div>
    </div>
  );
}
