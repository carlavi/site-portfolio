import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type PillLinkProps = {
  href: string;
  children: ReactNode;
  /** Hex color mixed into the wash — defaults to a neutral foreground mix. */
  accent?: string;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
};

// Text link with a very subtle color wrapper — pill-shaped, wash background
// via color-mix (same technique as lib/widget-themes.ts), no bg utility so
// it can react to hover without a client component.
export function PillLink({ href, children, accent = "var(--foreground)", icon, external = true, className }: PillLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group/pill-link inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground transition-colors bg-[var(--pill-bg)] hover:bg-[var(--pill-bg-hover)]",
        className
      )}
      style={
        {
          "--pill-bg": `color-mix(in srgb, ${accent} 8%, transparent)`,
          "--pill-bg-hover": `color-mix(in srgb, ${accent} 14%, transparent)`,
        } as CSSProperties
      }
    >
      {icon && <span className="flex size-3.5 shrink-0 items-center justify-center">{icon}</span>}
      {children}
      {external && (
        <span className="text-muted-foreground transition-transform group-hover/pill-link:translate-x-0.5 group-hover/pill-link:-translate-y-0.5">
          ↗
        </span>
      )}
    </a>
  );
}
