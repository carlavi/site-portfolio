"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FrameVideo } from "@/components/frame-video";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/lib/projects";

// How quickly the thumbnail eases toward the cursor each frame (rAF + lerp,
// same approach as the custom pointer in ios-pointer.tsx).
const EASE = 0.2;

function isVideoSrc(src?: string) {
  return !!src && (src.endsWith(".webm") || src.endsWith(".mp4"));
}

// Mirrors the home gallery tile's media logic (components/project-gallery.tsx)
// so the footer preview looks like the same thumbnail: a `heroLayers` glow
// mark needs its dark backdrop and centered/contained layout, it can't be
// cropped in as a plain cover image.
function ThumbMedia({ project }: { project: Project }) {
  const { hero, heroLayers, homeThumb, pageTheme } = project;
  const media = homeThumb ?? hero;
  const isDark = pageTheme === "dark";

  return (
    <div
      className={`absolute inset-0 ${isDark ? "" : "bg-secondary"}`}
      style={isDark ? { backgroundColor: "#141414" } : undefined}
    >
      {heroLayers ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[91%] aspect-[882/497]">
            <Image src={heroLayers.bg} alt="" fill className="object-contain" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[29%] aspect-square">
                <Image src={heroLayers.fg} alt="" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      ) : media ? (
        isVideoSrc(media) ? (
          <FrameVideo src={media} rate={1} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <Image src={media} alt="" fill className="object-cover" />
        )
      ) : null}
    </div>
  );
}

function NavLink({ project, align, label }: { project: Project; align: "start" | "end"; label: string }) {
  const thumbRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  function tick() {
    pos.current.x += (pos.current.targetX - pos.current.x) * EASE;
    pos.current.y += (pos.current.targetY - pos.current.y) * EASE;
    if (thumbRef.current) {
      thumbRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -115%)`;
    }
    rafRef.current = requestAnimationFrame(tick);
  }

  function handleEnter(e: React.MouseEvent) {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    pos.current.x = pos.current.targetX = e.clientX;
    pos.current.y = pos.current.targetY = e.clientY;
    if (thumbRef.current) thumbRef.current.style.opacity = "1";
    rafRef.current = requestAnimationFrame(tick);
  }

  function handleMove(e: React.MouseEvent) {
    pos.current.targetX = e.clientX;
    pos.current.targetY = e.clientY;
  }

  function handleLeave() {
    if (thumbRef.current) thumbRef.current.style.opacity = "0";
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group flex flex-col py-10 md:py-14 ${align === "end" ? "items-end text-right" : "items-start text-left"}`}
    >
      <span className="text-xs uppercase tracking-wide text-muted-foreground/60 mb-2">{label}</span>
      <span className="text-lg sm:text-2xl font-semibold text-foreground transition-opacity group-hover:opacity-60">
        {project.title}
      </span>

      <div
        ref={thumbRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 w-40 sm:w-48 aspect-[4/3] overflow-hidden rounded-xl opacity-0 shadow-lg transition-opacity duration-200"
      >
        <ThumbMedia project={project} />
      </div>
    </Link>
  );
}

export function ProjectFooterNav({ prev, next }: { prev: Project; next: Project }) {
  return (
    <div className="mt-8 pb-8">
      <Separator />
      <div className="grid grid-cols-2 gap-4">
        <NavLink project={prev} align="start" label="Newer" />
        <NavLink project={next} align="end" label="Older" />
      </div>
    </div>
  );
}
