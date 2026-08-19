// Sparkle mark lifted from the two icon paths in the reference toggle.svg
// (cropped to their bounding box), recolored to currentColor so it can
// animate with the rest of the toggle.
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="36.5 22.3 18 18" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M40.5889 32.1396L41.2853 33.5324C41.521 34.0038 41.6388 34.2395 41.7963 34.4437C41.936 34.6249 42.0984 34.7874 42.2797 34.9271C42.4839 35.0845 42.7196 35.2024 43.1909 35.438L44.5837 36.1344L43.1909 36.8308C42.7196 37.0665 42.4839 37.1843 42.2797 37.3418C42.0984 37.4815 41.936 37.6439 41.7963 37.8252C41.6388 38.0294 41.521 38.2651 41.2853 38.7364L40.5889 40.1292L39.8925 38.7364C39.6568 38.2651 39.539 38.0294 39.3816 37.8252C39.2419 37.6439 39.0794 37.4815 38.8982 37.3418C38.6939 37.1843 38.4583 37.0665 37.9869 36.8308L36.5941 36.1344L37.9869 35.438C38.4583 35.2024 38.6939 35.0845 38.8982 34.9271C39.0794 34.7874 39.2419 34.6249 39.3816 34.4437C39.539 34.2395 39.6568 34.0038 39.8925 33.5324L40.5889 32.1396Z" fill="currentColor" />
      <path d="M48.1346 22.3746L49.181 25.0949C49.4313 25.7459 49.5565 26.0713 49.7511 26.3451C49.9237 26.5877 50.1356 26.7997 50.3783 26.9722C50.652 27.1669 50.9775 27.292 51.6284 27.5424L54.3488 28.5887L51.6284 29.635C50.9775 29.8853 50.652 30.0105 50.3783 30.2052C50.1356 30.3777 49.9237 30.5897 49.7511 30.8323C49.5565 31.1061 49.4313 31.4315 49.181 32.0824L48.1347 34.8028L47.0883 32.0824C46.838 31.4315 46.7128 31.1061 46.5182 30.8323C46.3456 30.5897 46.1337 30.3777 45.891 30.2052C45.6173 30.0105 45.2918 29.8853 44.6409 29.635L41.9205 28.5887L44.6409 27.5424C45.2918 27.292 45.6173 27.1669 45.891 26.9722C46.1337 26.7997 46.3456 26.5877 46.5182 26.3451C46.7128 26.0713 46.838 25.7459 47.0883 25.0949L48.1346 22.3746Z" fill="currentColor" />
    </svg>
  );
}

// Decorative, non-interactive recreation of Reveri's Talk/Listen segmented
// control — auto-loops between the two states on a CSS-only cycle (see
// .toggle-* keyframes in globals.css). Built from real text rather than the
// reference SVG so the pill slide and label color swap can animate; an
// exported SVG bakes "Talk"/"Listen" as static, pre-colored paths.
export function ReveriToggle() {
  return (
    <div
      className="relative flex h-[70px] w-[280px] items-center rounded-full p-1.5"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        boxShadow:
          "0 0 0 0.5px rgba(255, 255, 255, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 8px 24px rgba(0, 0, 0, 0.35)",
      }}
    >
      <div
        className="toggle-pill absolute inset-y-1.5 left-1.5 w-[calc(50%-6px)] rounded-full"
        style={{ backgroundColor: "#FBF9F7" }}
      />
      <div className="relative z-10 flex flex-1 items-center justify-center gap-2">
        <SparkleIcon className="toggle-icon size-5" />
        <span className="toggle-label-talk text-base font-medium">Talk</span>
      </div>
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <span className="toggle-label-listen text-base font-medium">Listen</span>
      </div>
    </div>
  );
}
