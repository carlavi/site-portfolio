"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export function FadeUp({
  children,
  delay = 0,
  className,
  style,
  immediate = false,
  offset = 10,
  duration = 0.35,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  // Animate on mount instead of waiting to scroll into view (for content that only peeks above the fold).
  immediate?: boolean;
  offset?: number; // px the element rises from
  duration?: number; // seconds
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    const reveal = () => {
      timeoutId = setTimeout(() => {
        el.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    };

    if (immediate) {
      reveal();
      return () => clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        reveal();
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [delay, immediate, duration]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: `translateY(${offset}px)`, ...style }}
    >
      {children}
    </div>
  );
}
