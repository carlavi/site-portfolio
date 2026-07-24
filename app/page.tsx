import { Sidebar } from "@/components/sidebar";
import { ProjectGallery } from "@/components/project-gallery";
import { projects } from "@/lib/projects";
import { MEDIA_WIDTH } from "@/lib/layout";

export default function Home() {
  return (
    <div className="relative flex flex-col md:flex-row md:h-screen md:overflow-hidden" style={{ color: "var(--foreground)" }}>
      <Sidebar />

      {/* Main content - scrollable */}
      <main className="relative z-10 flex-1 md:overflow-y-auto px-4 py-6 md:px-12 md:py-10">
        <div className={`${MEDIA_WIDTH} mx-auto`}>
          <ProjectGallery projects={projects} />
        </div>
      </main>
    </div>
  );
}
