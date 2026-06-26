import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FadeUp } from "@/components/fade-up";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProjectSnapshot } from "@/components/project-snapshot";
import { getProject, projects, type Section } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function TextSection({ heading, body, hideSeparator }: { heading: string; body: string; hideSeparator?: boolean }) {
  const paragraphs = body.split("\n\n");
  return (
    <section className="py-8">
      {!hideSeparator && <Separator className="mb-8" />}
      <h2 className="text-xl font-semibold mb-4 text-foreground">{heading}</h2>
      <div className="max-w-2xl flex flex-col gap-3 text-base leading-relaxed text-muted-foreground">
        {paragraphs.map((p, i) => (
          <p key={i} className="whitespace-pre-line">{p}</p>
        ))}
      </div>
    </section>
  );
}

function ImageSection({ src, alt, caption, fit = "cover", imgWidth = 1920, imgHeight = 1080 }: { src?: string; alt: string; caption?: string; fit?: "cover" | "contain"; imgWidth?: number; imgHeight?: number }) {
  return (
    <section className="py-8">
      <Separator className="mb-8" />
      {src ? (
        fit === "contain" ? (
          <Image src={src} alt={alt} width={imgWidth} height={imgHeight} className="w-full h-auto rounded-2xl block" />
        ) : (
          <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9]">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        )
      ) : (
        <div className="rounded-2xl aspect-[16/9] flex items-center justify-center bg-secondary">
          <span className="text-sm text-muted-foreground">{alt}</span>
        </div>
      )}
      {caption && <p className="mt-3 text-xs text-center text-muted-foreground">{caption}</p>}
    </section>
  );
}

function ImageTextSection({ alt, heading, body, imageLeft = false }: { alt: string; heading: string; body: string; imageLeft?: boolean }) {
  return (
    <section className="py-8">
      <Separator className="mb-8" />
      <div className={`flex flex-col md:flex-row gap-8 items-center ${imageLeft ? "" : "md:flex-row-reverse"}`}>
        <div className="w-full md:w-1/2 rounded-xl aspect-[4/3] flex items-center justify-center bg-secondary">
          <span className="text-sm text-muted-foreground">{alt}</span>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4 text-foreground">{heading}</h2>
          <p className="leading-relaxed text-base text-muted-foreground">{body}</p>
        </div>
      </div>
    </section>
  );
}

function MetricsSection({ heading, rows }: { heading: string; rows: { label: string; value: string }[] }) {
  return (
    <section className="py-8">
      <Separator className="mb-8" />
      <h2 className="text-xl font-semibold mb-6 text-foreground">{heading}</h2>
      <Card className="max-w-lg rounded-xl overflow-hidden">
        {rows.map((row, i) => (
          <div key={row.label}>
            {i > 0 && <Separator />}
            <div className="flex justify-between px-5 py-3">
              <span className="text-sm text-muted-foreground">{row.label}</span>
              <span className="text-sm font-semibold text-foreground">{row.value}</span>
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
}

function SnapshotSection({ items }: { items: { label: string; value: string }[] }) {
  return (
    <section className="py-8">
      <Separator className="mb-8" />
      <ProjectSnapshot items={items} />
    </section>
  );
}

function CardsSection({ heading, cards }: { heading: string; cards: { title: string; body: string }[] }) {
  return (
    <section className="py-8">
      <Separator className="mb-8" />
      <h2 className="text-xl font-semibold mb-6 text-foreground">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-muted-foreground">{card.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function renderSection(section: Section, index: number) {
  switch (section.type) {
    case "text": return <TextSection key={index} heading={section.heading} body={section.body} hideSeparator={section.hideSeparator} />;
    case "image": return <ImageSection key={index} src={section.src} alt={section.alt} caption={section.caption} fit={section.fit} imgWidth={section.imgWidth} imgHeight={section.imgHeight} />;
    case "image-text": return <ImageTextSection key={index} {...section} />;
    case "metrics": return <MetricsSection key={index} {...section} />;
    case "snapshot": return <SnapshotSection key={index} {...section} />;
    case "cards": return <CardsSection key={index} {...section} />;
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { title, hero, meta, sections, pageTheme } = project;
  const isDark = pageTheme === "dark";

  return (
    <div className={`min-h-screen${isDark ? " dark" : ""}`} style={{ backgroundColor: isDark ? "#141414" : "var(--background)" }}>
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-40 px-6 py-8 flex-col gap-2 z-10 hidden lg:flex border-r">
        <span className="text-sm font-semibold text-foreground">Carla Vivani</span>
        <Button variant="ghost" size="sm" render={<Link href="/" />} nativeButton={false} className="justify-start px-2 -ml-2">
          ← Back
        </Button>
      </aside>

      <main className="max-w-5xl mx-auto px-6 py-16 lg:pl-48">
        <Button variant="ghost" size="sm" render={<Link href="/" />} nativeButton={false} className="lg:hidden mb-8 -ml-2">
          ← Back
        </Button>

        {/* Hero */}
        {hero && (
          <FadeUp delay={100} className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] mb-10">
            <Image src={hero} alt={title} fill className="object-cover" priority />
          </FadeUp>
        )}

        {/* Title */}
        <FadeUp delay={hero ? 220 : 100}>
          <h1 className="text-3xl font-bold mb-6 leading-snug" style={{ color: "var(--foreground)" }}>{title}</h1>
        </FadeUp>

        {/* Metadata */}
        <FadeUp delay={hero ? 320 : 180}>
        <div className="flex flex-wrap gap-6 text-sm mb-4">
          {[
            { label: "Role", value: meta.role },
            { label: "Year", value: meta.year },
          ].map(({ label, value }) => (
            <div key={label}>
              <span className="block text-xs uppercase tracking-wide mb-0.5 text-muted-foreground/60">{label}</span>
              <span className="text-sm text-muted-foreground">{value}</span>
            </div>
          ))}
          {meta.tools && (
            <div>
              <span className="block text-xs uppercase tracking-wide mb-0.5 text-muted-foreground/60">Tools</span>
              <span className="text-sm text-muted-foreground">{meta.tools.join(", ")}</span>
            </div>
          )}
          {meta.link && (
            <div>
              <span className="block text-xs uppercase tracking-wide mb-0.5 text-muted-foreground/60">Link</span>
              <Button variant="link" size="sm" render={<a href={meta.link} />} nativeButton={false} className="px-0 h-auto text-sm">
                View project ↗
              </Button>
            </div>
          )}
        </div>
        </FadeUp>

        <FadeUp delay={hero ? 420 : 280}>
          {sections.map(renderSection)}
        </FadeUp>

        <div className="pt-8 pb-8 mt-8">
          <Separator className="mb-8" />
          <Button variant="ghost" size="sm" render={<Link href="/" />} nativeButton={false} className="-ml-2">
            ← Back to projects
          </Button>
        </div>
      </main>
    </div>
  );
}
