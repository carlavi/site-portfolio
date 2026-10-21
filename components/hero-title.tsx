import { Fragment, type CSSProperties } from "react";

// Hero headline: words blur-in one by one on load, then a soft light band
// sweeps across the text every `shimmerEvery` seconds. Pure CSS (see
// `.hero-word` / `.hero-shimmer` in globals.css); respects reduced motion.
export function HeroTitle({
  lines,
  className = "",
  stagger = 90, // ms between words
  blur = 10, // px the words start blurred at
  duration = 900, // ms each word takes to settle
  shimmerEvery = 8, // s per shimmer cycle (the sweep itself is ~18% of it)
  shimmerStrength = 0.5, // opacity of the light band
}: {
  lines: string[];
  className?: string;
  stagger?: number;
  blur?: number;
  duration?: number;
  shimmerEvery?: number;
  shimmerStrength?: number;
}) {
  let count = 0;
  const words = lines.map((line) => line.split(" ").map((word) => ({ word, i: count++ })));
  const introMs = (count - 1) * stagger + duration;

  return (
    <h1 className={`relative ${className}`} aria-label={lines.join(" ")}>
      <span aria-hidden>
        {words.map((line, li) => (
          <Fragment key={li}>
            {li > 0 && <br />}
            {line.map(({ word, i }, wi) => (
              <Fragment key={i}>
                {wi > 0 && " "}
                <span
                  className="hero-word"
                  style={{ animationDelay: `${i * stagger}ms`, animationDuration: `${duration}ms`, "--hero-blur": `${blur}px` } as CSSProperties}
                >
                  {word}
                </span>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </span>
      {/* Same text laid over the top in a light color, masked to a moving band */}
      <span
        aria-hidden
        className="hero-shimmer"
        style={{ animationDelay: `${introMs}ms`, animationDuration: `${shimmerEvery}s`, "--shimmer-strength": shimmerStrength } as CSSProperties}
      >
        {lines.map((line, li) => (
          <Fragment key={li}>
            {li > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </span>
    </h1>
  );
}
