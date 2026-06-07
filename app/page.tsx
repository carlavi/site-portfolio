import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/projects";

const navLinks = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      {/* Sidebar */}
      <aside className="w-56 shrink-0 flex flex-col justify-between px-8 py-10 border-r border-[#E5E3DF]">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-sm font-semibold leading-snug">Carla Vivani</p>
            <p className="text-sm mt-0.5" style={{ color: "var(--muted-foreground)" }}>Product Designer</p>
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Button key={link.label} variant="ghost" size="sm" render={<Link href={link.href} />} nativeButton={false} className="justify-start px-2">
                {link.label}
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-1">
          <Button variant="ghost" size="xs" render={<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" />} nativeButton={false} className="justify-start px-2">
            LinkedIn ↗
          </Button>
          <Button variant="ghost" size="xs" render={<a href="mailto:carlavivani@gmail.com" />} nativeButton={false} className="justify-start px-2">
            Email ↗
          </Button>
        </div>
      </aside>

      {/* Main content — scrollable */}
      <main className="flex-1 overflow-y-auto px-12 py-10">
        <p className="text-sm max-w-sm leading-relaxed mb-16" style={{ color: "var(--muted-foreground)" }}>
          Diseño productos digitales centrados en las personas. Especializada en UX, sistemas de diseño y experiencias con IA.
        </p>
        <ul className="flex flex-col">
          {projects.map((project, i) => (
            <li key={project.slug}>
              {i > 0 && <Separator />}
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-start gap-8 py-8 -mx-4 px-4 rounded-xl transition-colors hover:bg-secondary"
              >
                <span className="text-xs font-mono mt-1 w-6 shrink-0 text-muted-foreground/50">
                  {project.number}
                </span>
                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="text-base font-medium text-foreground">
                    {project.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <span className="text-xs font-mono mt-1 shrink-0 text-muted-foreground/50">
                  {project.year}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
