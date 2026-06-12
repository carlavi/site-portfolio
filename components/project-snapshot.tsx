"use client";

type SnapshotItem = { label: string; value: string };

export function ProjectSnapshot({ items }: { items: SnapshotItem[] }) {
  return (
    <div
      className="transition-colors duration-300"
      style={{
        background: "var(--card)",
        border: "1px solid color-mix(in oklch, var(--foreground) 8%, transparent)",
        borderRadius: "22px",
        maxWidth: "720px",
        padding: "36px 40px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "color-mix(in oklch, var(--foreground) 15%, transparent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "color-mix(in oklch, var(--foreground) 8%, transparent)";
      }}
    >
      <p
        className="mb-8"
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "color-mix(in oklch, var(--foreground) 35%, transparent)",
        }}
      >
        Project Snapshot
      </p>

      <div className="flex flex-col">
        {items.map((item, i) => {
          const signals =
            item.label.toLowerCase() === "early signals"
              ? item.value.split("·").map((s) => s.trim())
              : null;

          return (
            <div
              key={item.label}
              style={{
                paddingTop: i === 0 ? 0 : "20px",
                paddingBottom: i === items.length - 1 ? 0 : "20px",
                borderTop: i === 0 ? "none" : "1px solid color-mix(in oklch, var(--foreground) 6%, transparent)",
              }}
            >
              <span
                className="block mb-2"
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "9.5px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "color-mix(in oklch, var(--foreground) 38%, transparent)",
                }}
              >
                {item.label}
              </span>

              {signals ? (
                <ul className="flex flex-col" style={{ gap: "3px" }}>
                  {signals.map((s) => (
                    <li
                      key={s}
                      style={{ fontSize: "13.5px", lineHeight: "1.6", color: "color-mix(in oklch, var(--foreground) 68%, transparent)" }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontSize: "13.5px", lineHeight: "1.65", color: "color-mix(in oklch, var(--foreground) 68%, transparent)" }}>
                  {item.value}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
