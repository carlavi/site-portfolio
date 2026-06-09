"use client";

type SnapshotItem = { label: string; value: string };

export function ProjectSnapshot({ items }: { items: SnapshotItem[] }) {
  return (
    <div
      className="transition-colors duration-300"
      style={{
        background: "#FAF8F4",
        border: "1px solid rgba(20,20,20,0.08)",
        borderRadius: "22px",
        maxWidth: "720px",
        padding: "36px 40px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(20,20,20,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(20,20,20,0.08)";
      }}
    >
      <p
        className="mb-8"
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(43,38,29,0.35)",
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
                borderTop: i === 0 ? "none" : "1px solid rgba(20,20,20,0.06)",
              }}
            >
              <span
                className="block mb-2"
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "9.5px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(43,38,29,0.38)",
                }}
              >
                {item.label}
              </span>

              {signals ? (
                <ul className="flex flex-col" style={{ gap: "3px" }}>
                  {signals.map((s) => (
                    <li
                      key={s}
                      style={{ fontSize: "13.5px", lineHeight: "1.6", color: "rgba(43,38,29,0.68)" }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontSize: "13.5px", lineHeight: "1.65", color: "rgba(43,38,29,0.68)" }}>
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
