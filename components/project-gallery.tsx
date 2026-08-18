import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "@/components/fade-up";
import { type Project } from "@/lib/projects";

function Tile({ project, aspect }: { project: Project; aspect: string }) {
  const { hero } = project;
  const isVideo = hero?.endsWith(".webm") || hero?.endsWith(".mp4");

  return (
    <Link href={`/projects/${project.slug}`} className="group block flex-1">
      <div className={`relative ${aspect} bg-secondary rounded-2xl overflow-hidden`}>
        {hero && (
          isVideo ? (
            <video src={hero} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline />
          ) : (
            <Image src={hero} alt={project.name} fill className="object-cover" />
          )
        )}
      </div>
      <div className="mt-3 opacity-100 sm:opacity-0 transition-opacity sm:group-hover:opacity-100">
        <p className="text-sm text-muted-foreground">{project.name}</p>
        <p className="text-xs text-muted-foreground/60">{project.year}</p>
      </div>
    </Link>
  );
}

function buildRows(projects: Project[]): Project[][] {
  const rows: Project[][] = [];
  let i = 0;
  while (i < projects.length) {
    const project = projects[i];
    if (project.coverSpan === "full") {
      rows.push([project]);
      i += 1;
    } else {
      rows.push(projects.slice(i, i + 2));
      i += 2;
    }
  }
  return rows;
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const rows = buildRows(projects);

  return (
    <div className="flex flex-col gap-10 sm:gap-16">
      {rows.map((row, i) => (
        <FadeUp key={row[0].slug} delay={i === 0 ? 0 : 60} className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          {row.map((project) => (
            <Tile key={project.slug} project={project} aspect={row.length === 1 ? "aspect-square sm:aspect-[16/9]" : "aspect-square"} />
          ))}
        </FadeUp>
      ))}
    </div>
  );
}
