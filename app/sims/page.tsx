import { Sidebar } from "@/components/sidebar";

export default function Sims() {
  return (
    <div className="relative flex flex-col md:flex-row md:h-screen md:overflow-hidden" style={{ color: "var(--foreground)" }}>
      <Sidebar />
      <main className="relative z-10 flex-1 flex items-center justify-center py-16 md:py-0">
        <h1 className="text-3xl font-bold">Sims</h1>
      </main>
    </div>
  );
}
