"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export function FadeUp({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        timeoutId = setTimeout(() => {
          el.style.transition = "opacity 0.35s ease, transform 0.35s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(10px)", ...style }}
    >
      {children}
    </div>
  );
}
