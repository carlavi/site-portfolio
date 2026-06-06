import Link from "next/link";

const projects = [
  {
    slug: "helia",
    number: "01",
    title: "Helia: Giving Your Plants a Voice",
    tags: ["AI", "Mobile", "UX Research"],
    year: "2024",
    description: "An AI-powered plant care app that turns care into conversation.",
  },
  {
    slug: "project-02",
    number: "02",
    title: "Nombre del proyecto",
    tags: ["Product Design", "Web"],
    year: "2023",
    description: "Breve descripción del proyecto y su impacto.",
  },
  {
    slug: "project-03",
    number: "03",
    title: "Nombre del proyecto",
    tags: ["Design System", "Mobile"],
    year: "2023",
    description: "Breve descripción del proyecto y su impacto.",
  },
  {
    slug: "project-04",
    number: "04",
    title: "Nombre del proyecto",
    tags: ["UX Research", "Web"],
    year: "2022",
    description: "Breve descripción del proyecto y su impacto.",
  },
];

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
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: "var(--muted-foreground)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors"
            style={{ color: "var(--muted-foreground)" }}
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:carlavivani@gmail.com"
            className="text-xs transition-colors"
            style={{ color: "var(--muted-foreground)" }}
          >
            Email ↗
          </a>
        </div>
      </aside>

      {/* Main content — scrollable */}
      <main className="flex-1 overflow-y-auto px-12 py-10">
        <p className="text-sm max-w-sm leading-relaxed mb-16" style={{ color: "var(--muted-foreground)" }}>
          Diseño productos digitales centrados en las personas. Especializada en UX, sistemas de diseño y experiencias con IA.
        </p>
        <ul className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-start gap-8 py-8 -mx-4 px-4 rounded-xl transition-colors hover:bg-[#EFEDE9]"
              >
                <span className="text-xs font-mono mt-1 w-6 shrink-0" style={{ color: "var(--muted-foreground)", opacity: 0.5 }}>
                  {project.number}
                </span>
                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="text-base font-medium transition-colors" style={{ color: "var(--foreground)" }}>
                    {project.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs rounded-full px-2.5 py-0.5 border"
                        style={{ color: "var(--muted-foreground)", borderColor: "var(--border)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs font-mono mt-1 shrink-0" style={{ color: "var(--muted-foreground)", opacity: 0.5 }}>
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
