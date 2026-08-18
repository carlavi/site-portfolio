"use client";

import { useEffect, useRef } from "react";

// <video> has no declarative playback-speed attribute, so this sets
// `playbackRate` imperatively once the element mounts.
export function FrameVideo({
  src,
  className,
  rate = 1.5,
}: {
  src: string;
  className?: string;
  rate?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.playbackRate = rate;
  }, [rate]);

  return <video ref={ref} src={src} className={className} autoPlay loop muted playsInline />;
}
