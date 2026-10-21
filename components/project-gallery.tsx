import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "@/components/fade-up";
import { HoverRevealTile } from "@/components/hover-reveal-tile";
import { ColorRevealTile } from "@/components/color-reveal-tile";
import { type Project } from "@/lib/projects";

function Tile({ project, aspect }: { project: Project; aspect: string }) {
  const { hero, heroLayers, homeThumb, homeBadge, homeHoverReveal, homeHoverColor, pageTheme, homeCardTransparent } = project;
  const media = homeThumb ?? hero;
  const isVideo = media?.endsWith(".webm") || media?.endsWith(".mp4");
  const isDark = pageTheme === "dark";

  return (
    <Link href={`/projects/${project.slug}`} className="group block flex-1">
      <div
        className={`relative ${aspect} ${isDark || homeCardTransparent ? "" : "bg-secondary"} rounded-2xl overflow-hidden`}
        style={isDark ? { backgroundColor: "#141414" } : undefined}
      >
        {heroLayers ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[91%] aspect-[882/497] animate-breathe-soft">
              <Image src={heroLayers.bg} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[29%] aspect-square animate-breathe">
                  <Image src={heroLayers.fg} alt={project.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        ) : media && isVideo && homeHoverReveal ? (
          <HoverRevealTile
            video={media}
            alt={project.name}
            sun={homeHoverReveal.sun}
            wordmark={homeHoverReveal.wordmark}
            wordmarkMobile={homeHoverReveal.wordmarkMobile}
          />
        ) : media && !isVideo && homeHoverColor ? (
          <ColorRevealTile image={media} alt={project.name} color={homeHoverColor.color} />
        ) : media ? (
          isVideo ? (
            <video src={media} className="absolute inset-0 w-full h-full object-cover sm:scale-[1.15]" autoPlay loop muted playsInline />
          ) : (
            <Image src={media} alt={project.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
          )
        ) : null}
        {homeBadge && (
          <div className="absolute inset-0 z-10 flex items-center justify-end pr-[15px] pointer-events-none">
            <div
              className="relative w-[34%] aspect-[166/62] animate-fade-pulse"
              style={{ filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))" }}
            >
              <Image src={homeBadge} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain" />
            </div>
          </div>
        )}
      </div>
      <div className="mt-3 opacity-100 sm:opacity-0 transition-opacity sm:group-hover:opacity-100">
        <p className="text-lg font-medium text-foreground">{project.title}</p>
      </div>
    </Link>
  );
}

// Masonry: cycling aspect ratios give the columns their staggered, variable heights.
const ASPECTS = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]", "aspect-[4/5]", "aspect-[1/1]"];

const COLUMNS = 3;

export function ProjectGallery({ projects }: { projects: Project[] }) {
  // Deal projects round-robin into columns so the order reads left → right.
  // Below lg the columns become `contents` and `order` restores the original sequence in a plain grid.
  const columns = Array.from({ length: COLUMNS }, (_, c) =>
    projects.map((project, i) => ({ project, i })).filter(({ i }) => i % COLUMNS === c),
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 md:gap-8">
      {columns.map((column, c) => (
        <div key={c} className="contents lg:flex lg:flex-1 lg:flex-col lg:gap-8">
          {column.map(({ project, i }) => (
            <FadeUp
              key={project.slug}
              // First row peeks above the fold, so it plays right after the hero on load;
              // the rest rise in on scroll, staggered by column.
              immediate={i < COLUMNS}
              delay={i < COLUMNS ? 200 + c * 80 : c * 80}
              offset={i < COLUMNS ? 16 : 40}
              duration={i < COLUMNS ? 0.5 : 0.7}
              className="min-w-0"
              style={{ order: i }}
            >
              <Tile project={project} aspect={ASPECTS[i % ASPECTS.length]} />
            </FadeUp>
          ))}
        </div>
      ))}
    </div>
  );
}
