"use client";

import { Maximize2 } from "lucide-react";
import { FrameVideo } from "@/components/frame-video";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// The scan video needs its own aspect ratio on mobile (1:1, video at 70% of
// the container height) instead of the shared Frame system's fixed 16:9, and
// a tap-to-enlarge dialog — bespoke enough that it isn't worth threading
// through Frame/FrameInsetImage's generic props.
export function ScanVideoFrame({ src, alt, radius = 32 }: { src: string; alt: string; radius?: number }) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            aria-label={`Expand: ${alt}`}
            className="group relative flex aspect-square w-full items-center justify-center overflow-hidden sm:aspect-[16/9]"
            style={{ backgroundColor: "var(--background)", borderRadius: radius }}
          />
        }
      >
        <FrameVideo src={src} rate={1} className="h-[85%] w-auto max-w-full sm:h-full" style={{ borderRadius: radius }} />
        <span className="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full bg-foreground/10 text-foreground opacity-100 backdrop-blur-sm transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
          <Maximize2 className="size-4" />
        </span>
      </DialogTrigger>

      <DialogContent
        showCloseButton
        className="max-w-[92vw] border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-sm"
      >
        <div className="flex items-center justify-center">
          <FrameVideo src={src} rate={1} className="h-[85vh] w-auto max-w-full" style={{ borderRadius: radius }} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
