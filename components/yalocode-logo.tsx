const BLOB_PATH =
  "M272.351 0.242738C273.318 0.185644 274.285 0.14814 275.253 0.130225C351.153 -2.16865 424.808 26.0487 479.745 78.4711C533.024 129.493 564.071 199.442 566.164 273.182C568.352 349.278 539.933 423.073 487.268 478.046C435.906 530.993 365.987 561.928 292.259 564.325C279.543 564.716 265.405 563.695 252.553 563.086L192.684 560.254L0 551.165C0.377907 533.236 0.0388464 514.406 0.194431 496.385L0.930594 364.391L1.16795 306.427C1.21693 293.231 0.851036 278.215 1.5207 265.182C2.49088 248.376 4.99114 231.693 8.99046 215.341C21.0707 166.359 45.9842 121.481 81.1675 85.324C122.548 42.994 176.138 14.6738 234.424 4.33286C245.798 2.29585 260.784 0.415442 272.351 0.242738Z";

// Inlined (not <img src>) so the blob's edge can carry a thin gradient
// stroke and a shimmer can be masked to trace just that stroke, rather than
// sweeping across the whole filled shape — neither is reachable through CSS
// on a plain <img>-referenced SVG.
export function YalocodeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 567 565" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="yalo-fill" x1="566.282" y1="67.7115" x2="80.753" y2="517.206" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1D4189" />
          <stop offset="1" stopColor="#121212" />
        </linearGradient>
        <linearGradient id="yalo-stroke" x1="0" y1="0" x2="567" y2="565" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EAF2FF" />
          <stop offset="1" stopColor="#3B6FE0" />
        </linearGradient>
        <linearGradient id="yalo-shimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="white" stopOpacity="0" />
          <stop offset="0.5" stopColor="white" stopOpacity="1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Luminance mask shaped like just the stroke ring — fill="none" so
            only the 0.5px outline itself is white (visible), not the interior. */}
        <mask id="yalo-stroke-mask" maskUnits="userSpaceOnUse" x="-600" y="-600" width="1800" height="1800">
          <path d={BLOB_PATH} fill="none" stroke="white" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </mask>
      </defs>
      <path d={BLOB_PATH} fill="url(#yalo-fill)" stroke="url(#yalo-stroke)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
      <path
        d="M261.639 137.792C265.757 130.428 279.622 108.612 290.963 119.159C316.72 143.112 323.367 196.08 348.501 220.461C376.551 247.674 513.383 269.869 410.69 311.474C331.237 346.115 343.701 341.7 307.216 418.922C302.572 428.75 295.337 443.809 284.391 447.486C282.475 448.13 279.815 448.401 277.916 447.524C263.952 441.067 241.602 380.293 233.076 364.288C215.289 330.9 187.036 327.056 155.285 311.977C145.005 307.094 121.699 295.836 118.231 284.266C112.283 264.427 196.468 235.06 212.465 225.607C232.445 213.799 251.006 159.855 261.639 137.792Z"
        fill="white"
      />
      <g mask="url(#yalo-stroke-mask)">
        <rect className="yalo-shimmer-sweep" x="-40" y="-40" width="80" height="1000" fill="url(#yalo-shimmer)" />
      </g>
    </svg>
  );
}
