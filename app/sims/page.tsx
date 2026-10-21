import { Navbar } from "@/components/navbar";
import { CASE_STUDY_WIDTH } from "@/lib/layout";

export default function Sims() {
  return (
    <div className="relative flex-1 flex flex-col min-h-screen" style={{ color: "var(--foreground)" }}>
      <div className="px-4 md:px-12">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <Navbar />
        </div>
      </div>
      <main className="relative z-10 flex-1 flex items-center justify-center py-16">
        <h1 className="text-3xl font-bold">Sims</h1>
      </main>
    </div>
  );
}
