"use client";

import { useEffect } from "react";

// Site-wide deterrent against casual right-click "save image as" / inspect
// — not a real security control, just discourages casual copying.
export function DisableRightClick() {
  useEffect(() => {
    const handler = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, []);

  return null;
}
