import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { FadeUp } from "@/components/fade-up";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProjectSnapshot } from "@/components/project-snapshot";
import { ScreenSwap } from "@/components/screen-swap";
import { FrameVideo } from "@/components/frame-video";
import { ReveriToggle } from "@/components/reveri-toggle";
import { ProjectFooterNav } from "@/components/project-footer-nav";
import { CareCardsCarousel } from "@/components/care-cards-carousel";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { getProject, getAdjacentProjects, projects, type Section, type GallerySection, type FrameBg } from "@/lib/projects";

const FRAME_BG: Record<FrameBg, string> = {
  light: "#FCF9FD",
  purple: "#820AD1",
  dark: "#1F1F20",
  gray: "#F3F3F3",
  indigo: "#1B1430",
  charcoal: "#1C1C1E",
  black: "#000000",
  lavender: "#E5E0E9",
};

const FRAME_TEXT: Record<FrameBg, string> = {
  light: "#6b7280",
  purple: "#f3e6fc",
  dark: "#9ca3af",
  gray: "#6b7280",
  indigo: "#c4b5dd",
  charcoal: "#9ca3af",
  black: "#9ca3af",
  lavender: "#6b7280",
};

// #FCF9FD sits almost flush against the page's own #FAFAFA background, so
// light frames get a hairline border to read as a distinct container.
const FRAME_BORDER: Record<FrameBg, string | undefined> = {
  light: "1px solid rgba(0, 0, 0, 0.08)",
  purple: undefined,
  dark: undefined,
  gray: undefined,
  indigo: undefined,
  charcoal: undefined,
  black: undefined,
  lavender: undefined,
};
import { TEXT_WIDTH, CASE_STUDY_WIDTH } from "@/lib/layout";

// Renders **bold** spans within otherwise plain paragraph text.
// Renders **bold** spans and [text](/href) internal links within otherwise
// plain paragraph text.
function formatInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <Link key={i} href={linkMatch[2]} className="underline underline-offset-2 hover:text-foreground">
          {linkMatch[1]}
        </Link>
      );
    }
    return part;
  });
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function TextSection({ heading, body, hideSeparator }: { heading: string; body: string; hideSeparator?: boolean }) {
  const paragraphs = body.split("\n\n");
  return (
    <section className="py-8">
      {!hideSeparator && <Separator className="mb-8" />}
      <h2 className="text-xl font-semibold mb-4 text-foreground">{heading}</h2>
      <div className={`${TEXT_WIDTH} flex flex-col gap-3 text-base leading-relaxed text-muted-foreground`}>
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

function GalleryImage({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9]">
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary">
          <span className="text-sm text-muted-foreground">{alt}</span>
        </div>
      )}
    </div>
  );
}

function GalleryPairImage({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden aspect-[7/8]">
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary">
          <span className="text-sm text-muted-foreground">{alt}</span>
        </div>
      )}
    </div>
  );
}

function FrameInsetImage({ src, alt, bg, radius }: { src?: string; alt: string; bg: FrameBg; radius?: number }) {
  const isVideo = src?.endsWith(".webm") || src?.endsWith(".mp4");
  return (
    <div className="relative flex-1 h-full min-w-0">
      {src ? (
        isVideo ? (
          // object-contain rounds the invisible bounding box, not the video's
          // own visible edges, when the aspect ratio leaves letterbox gaps —
          // so size the element to its natural aspect ratio instead and round
          // that directly.
          <div className="absolute inset-0 flex items-center justify-center p-2">
            <FrameVideo src={src} rate={1} className="h-full w-auto max-w-full" style={{ borderRadius: radius }} />
          </div>
        ) : (
          <Image src={src} alt={alt} fill className="object-contain p-2" />
        )
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span className="text-sm text-center" style={{ color: FRAME_TEXT[bg] }}>{alt}</span>
        </div>
      )}
    </div>
  );
}

function FrameFillMedia({ src, alt, bg }: { src?: string; alt: string; bg: FrameBg }) {
  const isVideo = src?.endsWith(".webm") || src?.endsWith(".mp4");
  return (
    <div className="relative flex-1 h-full min-w-0">
      {src ? (
        isVideo ? (
          <FrameVideo src={src} rate={2} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <Image src={src} alt={alt} fill className="object-cover" />
        )
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span className="text-sm text-center" style={{ color: FRAME_TEXT[bg] }}>{alt}</span>
        </div>
      )}
    </div>
  );
}

function Frame({
  bg,
  images,
  fill,
  radius,
  noBorder,
  bgColor,
}: {
  bg: FrameBg;
  images: { src?: string; alt: string }[];
  fill?: boolean;
  radius?: number;
  noBorder?: boolean;
  bgColor?: string;
}) {
  if (fill) {
    return (
      <div
        className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] flex items-stretch"
        style={{ backgroundColor: bgColor ?? FRAME_BG[bg], borderRadius: radius }}
      >
        {images.map((img, i) => (
          <FrameFillMedia key={i} src={img.src} alt={img.alt} bg={bg} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] flex items-stretch gap-2 p-4"
      style={{ backgroundColor: bgColor ?? FRAME_BG[bg], border: noBorder ? "none" : FRAME_BORDER[bg], borderRadius: radius }}
    >
      {images.map((img, i) => (
        <FrameInsetImage key={i} src={img.src} alt={img.alt} bg={bg} radius={radius} />
      ))}
    </div>
  );
}

function FramePair({
  frames,
}: {
  frames: [
    { bg: FrameBg; src?: string; alt: string; fill?: boolean; custom?: "reveri-toggle" | "care-cards"; lottie?: string; caption?: { eyebrow: string; title: string; body: string }; bgColor?: string },
    { bg: FrameBg; src?: string; alt: string; fill?: boolean; custom?: "reveri-toggle" | "care-cards"; lottie?: string; caption?: { eyebrow: string; title: string; body: string }; bgColor?: string },
  ];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {frames.map((frame, i) => (
        <div key={i}>
          <div
            className={`relative w-full rounded-2xl overflow-hidden aspect-[7/8] flex items-center justify-center ${frame.fill || frame.custom || frame.lottie ? "" : "p-4"}`}
            style={{ backgroundColor: frame.bgColor ?? FRAME_BG[frame.bg], border: FRAME_BORDER[frame.bg] }}
          >
            {frame.lottie ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[85%] w-[85%]">
                  <DotLottieReact src={frame.lottie} loop autoplay className="absolute inset-0 h-full w-full" />
                </div>
              </div>
            ) : frame.custom === "reveri-toggle" ? (
              <ReveriToggle />
            ) : frame.custom === "care-cards" ? (
              <CareCardsCarousel />
            ) : frame.fill ? (
              <FrameFillMedia src={frame.src} alt={frame.alt} bg={frame.bg} />
            ) : (
              <FrameInsetImage src={frame.src} alt={frame.alt} bg={frame.bg} />
            )}
          </div>
          {frame.caption && (
            <div className="mt-3">
              <h3 className="text-sm text-muted-foreground/70 mb-1">{frame.caption.eyebrow}</h3>
              <p className="text-base font-medium text-foreground mb-1">{frame.caption.title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{frame.caption.body}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function DocumentPage({ src, alt, bg, left, top }: { src?: string; alt: string; bg: FrameBg; left: string; top: string }) {
  return (
    <div className="absolute" style={{ left, top, width: "42%", height: "86%" }}>
      {src ? (
        <Image src={src} alt={alt} fill className="object-contain object-top" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/10 px-4">
          <span className="text-xs text-center" style={{ color: FRAME_TEXT[bg] }}>{alt}</span>
        </div>
      )}
    </div>
  );
}

// Two document pages staggered — one higher/left, one lower/right — so they
// read as a loose stack rather than two evenly centered thumbnails.
function DocumentPair({ bg, documents }: { bg: FrameBg; documents: [{ src?: string; alt: string }, { src?: string; alt: string }] }) {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden aspect-[16/9]"
      style={{ backgroundColor: FRAME_BG[bg], border: FRAME_BORDER[bg] }}
    >
      <DocumentPage src={documents[0].src} alt={documents[0].alt} bg={bg} left="7%" top="4%" />
      <DocumentPage src={documents[1].src} alt={documents[1].alt} bg={bg} left="50%" top="12%" />
    </div>
  );
}

function renderGallerySection(section: GallerySection, index: number) {
  switch (section.type) {
    case "image":
      return <GalleryImage key={index} src={section.src} alt={section.alt} />;
    case "image-pair":
      return (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {section.images.map((img, i) => (
            <GalleryPairImage key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      );
    case "frame":
      return <Frame key={index} bg={section.bg} images={section.images} fill={section.fill} radius={section.radius} noBorder={section.noBorder} bgColor={section.bgColor} />;
    case "frame-pair":
      return <FramePair key={index} frames={section.frames} />;
    case "screen-swap":
      return (
        <div key={index} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {section.companion && (
            <div
              className="relative w-full aspect-[7/8] rounded-2xl overflow-hidden flex p-4"
              style={{ backgroundColor: FRAME_BG[section.companion.bg], border: FRAME_BORDER[section.companion.bg] }}
            >
              <FrameInsetImage src={section.companion.src} alt={section.companion.alt} bg={section.companion.bg} />
            </div>
          )}
          <ScreenSwap variant="slide" bg={FRAME_BG[section.bg]} screens={section.screens} />
        </div>
      );
    case "document-pair":
      return (
        <div key={index}>
          <div className="sm:hidden">
            <ScreenSwap variant="slide" aspect="aspect-square" bg={FRAME_BG[section.bg]} screens={section.documents} />
          </div>
          <div className="hidden sm:block">
            <DocumentPair bg={section.bg} documents={section.documents} />
          </div>
        </div>
      );
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

  const { title, hero, heroFrame, heroLayers, homeHoverReveal, meta, sections, pageTheme, overview, gallery, conclusion } = project;
  const isDark = pageTheme === "dark";
  const usesNewTemplate = Boolean(overview && gallery && conclusion);
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div
      className={`relative flex flex-col md:flex-row md:h-screen md:overflow-hidden${isDark ? " dark" : ""}`}
      style={{ color: "var(--foreground)", backgroundColor: isDark ? "#141414" : undefined }}
    >
      <Sidebar />

      <main className="relative z-10 flex-1 md:overflow-y-auto px-4 py-6 md:px-12 md:py-10">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          {/* Hero */}
          <FadeUp
            delay={0}
            className={`relative w-full rounded-2xl overflow-hidden mb-10 aspect-[16/9] ${heroFrame && heroFrame.images.length > 1 ? "flex items-center justify-center gap-6 p-8 sm:gap-10 sm:p-12" : ""}`}
            style={
              heroFrame && heroFrame.images.length > 1
                ? { backgroundColor: FRAME_BG[heroFrame.bg], border: FRAME_BORDER[heroFrame.bg] }
                : undefined
            }
          >
            {heroLayers ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <div className="relative w-1/2 aspect-[882/497] animate-breathe-soft">
                  <Image src={heroLayers.bg} alt="" fill className="object-contain" priority />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[29%] aspect-square animate-breathe">
                      <Image src={heroLayers.fg} alt={title} fill className="object-contain" priority />
                    </div>
                  </div>
                </div>
                {heroLayers.caption && (
                  <p className="text-shimmer text-sm font-light">{heroLayers.caption}</p>
                )}
              </div>
            ) : heroFrame ? (
              heroFrame.images.length === 1 ? (
                // Single pre-composed asset (e.g. a flat PNG with the phones
                // already laid out) — fill the frame edge to edge.
                heroFrame.images[0].src ? (
                  <Image src={heroFrame.images[0].src} alt={heroFrame.images[0].alt} fill className="object-contain" priority />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center px-8">
                    <span className="text-sm text-center" style={{ color: FRAME_TEXT[heroFrame.bg] }}>{heroFrame.images[0].alt}</span>
                  </div>
                )
              ) : (
                heroFrame.images.map((img, i) => (
                  <div key={i} className="relative h-full aspect-[9/19] shrink-0">
                    {img.src ? (
                      <Image src={img.src} alt={img.alt} fill className="object-contain" priority={i === 0} />
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center rounded-2xl border"
                        style={{ borderColor: FRAME_TEXT[heroFrame.bg] + "40" }}
                      >
                        <span className="text-xs text-center px-3" style={{ color: FRAME_TEXT[heroFrame.bg] }}>{img.alt}</span>
                      </div>
                    )}
                  </div>
                ))
              )
            ) : hero ? (
              hero.endsWith(".webm") || hero.endsWith(".mp4") ? (
                <>
                  <video
                    src={hero}
                    className="absolute inset-0 w-full h-full object-cover sm:scale-[1.15]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/[0.08]" />
                  {homeHoverReveal && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 sm:gap-6">
                      <div className="relative h-[94px] w-[94px] sm:h-[130px] sm:w-[130px] animate-spin-slow-static">
                        <Image src={homeHoverReveal.sun} alt="" fill className="object-contain" />
                      </div>
                      <div className="relative h-[38px] w-[156px] sm:h-[54px] sm:w-[216px]">
                        <Image src={homeHoverReveal.wordmarkMobile} alt={title} fill className="object-contain" />
                      </div>
                    </div>
                  )}
                </>
              ) : hero.endsWith(".svg") ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[34%] aspect-square">
                    <Image src={hero} alt={title} fill className="object-contain" priority />
                  </div>
                </div>
              ) : (
                <Image src={hero} alt={title} fill className="object-cover" priority />
              )
            ) : (
              <div className="absolute inset-0 bg-secondary" />
            )}
            <Button
              variant="secondary"
              size="icon-sm"
              render={<Link href="/" />}
              nativeButton={false}
              aria-label="Back to projects"
              className="absolute top-4 left-4 z-10 rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90"
            >
              <ArrowLeft />
            </Button>
          </FadeUp>

          {usesNewTemplate ? (
            <>
              {/* Title */}
              <FadeUp delay={80} className="w-full mb-8">
                <h1 className="text-3xl font-bold mb-2 leading-snug" style={{ color: "var(--foreground)" }}>{title}</h1>
                <p className="text-sm text-muted-foreground">{meta.year} · {meta.role}</p>
              </FadeUp>

              {/* Overview */}
              <FadeUp delay={160} className="flex md:justify-end mb-14">
                <div className="w-full md:w-3/5 py-8 md:py-12">
                  <h2 className="text-sm text-muted-foreground/70 mb-3">Overview</h2>
                  <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground">
                    {overview!.split("\n\n").map((p, i) => (
                      <p key={i}>{formatInline(p)}</p>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* Gallery */}
              <div className="flex flex-col gap-8 mb-14">
                {gallery!.map((section, i) => (
                  <FadeUp key={i} delay={0}>
                    {renderGallerySection(section, i)}
                  </FadeUp>
                ))}
              </div>

              {/* Conclusion */}
              <FadeUp delay={0} className={`${TEXT_WIDTH} py-8 md:py-12 pb-8`}>
                <h2 className="text-sm text-muted-foreground/70 mb-3">{conclusion!.heading}</h2>
                <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground">
                  {conclusion!.body.split("\n\n").map((p, i) => (
                    <p key={i}>{formatInline(p)}</p>
                  ))}
                </div>
              </FadeUp>
            </>
          ) : (
            <>
              {/* Title */}
              <FadeUp delay={80}>
                <h1 className="text-3xl font-bold mb-6 leading-snug" style={{ color: "var(--foreground)" }}>{title}</h1>
              </FadeUp>

              {/* Metadata */}
              <FadeUp delay={160}>
              <div className="flex flex-wrap gap-6 text-sm mb-4">
                {[
                  { label: "Role", value: meta.role },
                  { label: "Timeline", value: meta.year },
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

              <FadeUp delay={0}>
                {sections.map(renderSection)}
              </FadeUp>
            </>
          )}

          <ProjectFooterNav prev={prev} next={next} />
        </div>
      </main>
    </div>
  );
}
