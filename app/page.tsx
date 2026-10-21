import { Navbar } from "@/components/navbar";
import { FadeUp } from "@/components/fade-up";
import { ProjectGallery } from "@/components/project-gallery";
import { projects } from "@/lib/projects";
import { HOME_WIDTH } from "@/lib/layout";

export default function Home() {
  return (
    <div className="relative flex flex-col" style={{ color: "var(--foreground)" }}>
      <div className="px-4 md:px-12">
        <div className={`${HOME_WIDTH} mx-auto`}>
          <Navbar />
        </div>
      </div>

      <main className="relative z-10 flex-1 px-4 pb-6 md:px-12 md:pb-10">
        <div className={`${HOME_WIDTH} mx-auto`}>
          {/* Hero — sized to leave the top of the gallery peeking above the fold */}
          <section className="flex flex-col items-center justify-center text-center md:min-h-[calc((100svh-88px-160px)*0.75)] pt-9 pb-9 md:pt-12 md:pb-12">
            <FadeUp delay={0}>
              <h1 className="font-semibold tracking-[-0.04em] leading-[1.1] text-[clamp(1.375rem,4.5vw,3.5rem)]">
                Making complex things
                <br />
                feel simple.
              </h1>
            </FadeUp>
            <FadeUp delay={80} className="mt-8 md:mt-10">
              <p className="max-w-xl mx-auto text-[0.9rem] md:text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
                I&rsquo;m a product designer with 10+ years of experience across fintech, SaaS, and startups. I work from early
                product ideas to launch, turning complex problems into clear, thoughtful experiences.
              </p>
            </FadeUp>
          </section>

          <ProjectGallery projects={projects} />
        </div>
      </main>
    </div>
  );
}
