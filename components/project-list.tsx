"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { type Project } from "@/lib/projects";

function AnimatedItem({ project, index, isFirst }: { project: Project; index: number; isFirst: boolean }) {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = setTimeout(() => {
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 150 + index * 80);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <li ref={ref} style={{ opacity: 0, transform: "translateY(10px)" }}>
      {!isFirst && <Separator />}
      <Link
        href={`/projects/${project.slug}`}
        className="group flex items-start gap-8 py-8 -mx-4 px-4 rounded-xl transition-colors hover:bg-secondary"
      >
        <span className="text-xs font-mono mt-1 w-6 shrink-0 text-muted-foreground/50">
          {project.number}
        </span>
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="text-base font-medium text-foreground">{project.title}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        </div>
        <span className="text-xs font-mono mt-1 shrink-0 text-muted-foreground/50">
          {project.year}
        </span>
      </Link>
    </li>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="flex flex-col">
      {projects.map((project, i) => (
        <AnimatedItem key={project.slug} project={project} index={i} isFirst={i === 0} />
      ))}
    </ul>
  );
}
