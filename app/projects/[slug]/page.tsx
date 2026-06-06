import Link from "next/link";

type Section =
  | { type: "text"; heading: string; body: string }
  | { type: "image"; alt: string; caption?: string }
  | { type: "image-text"; alt: string; heading: string; body: string; imageLeft?: boolean }
  | { type: "cards"; heading: string; cards: { title: string; body: string }[] }
  | { type: "metrics"; heading: string; rows: { label: string; value: string }[] };

const project = {
  meta: {
    title: "Helia: Giving Your Plants a Voice",
    client: "Personal project",
    role: "UX / Product Design",
    year: "2024",
    link: "https://example.com",
  },
  sections: [
    {
      type: "text",
      heading: "Where AI Turns Care Into Connection",
      body: "Helia is a plant care app that uses AI to help users understand and respond to their plants' needs in a natural, conversational way.",
    },
    {
      type: "text",
      heading: "Outcome & Impact",
      body: "After two rounds of usability testing, 85% of users reported feeling more confident about their plant care routines. The AI conversation feature had a 92% satisfaction rate.",
    },
    {
      type: "image",
      alt: "App mockups showing the main screens",
      caption: "Key screens from the final design",
    },
    {
      type: "metrics",
      heading: "Concept Testing Summary",
      rows: [
        { label: "Task completion rate", value: "88%" },
        { label: "Avg. time on task", value: "1m 42s" },
        { label: "Net Promoter Score", value: "74" },
        { label: "Users who'd use it daily", value: "6/8" },
      ],
    },
    {
      type: "text",
      heading: "Next Steps",
      body: "1. Expand the plant database to 500+ species.\n2. Add push notifications for watering reminders.\n3. Build a social layer for plant enthusiasts to share tips.",
    },
    {
      type: "image-text",
      alt: "Design exploration",
      heading: "Designing for Immediate Delight",
      body: "Early explorations focused on reducing friction in the onboarding flow. We tested five different approaches before landing on a conversational setup.",
      imageLeft: true,
    },
    {
      type: "cards",
      heading: "AI Personality System",
      cards: [
        { title: "Warm", body: "Encouraging tone that celebrates small wins and milestones." },
        { title: "Knowledgeable", body: "Backed by botanical data but explained in plain language." },
        { title: "Curious", body: "Asks follow-up questions to refine care recommendations." },
        { title: "Playful", body: "Light humor to make plant care feel fun, not stressful." },
      ],
    },
  ] as Section[],
};

function TextSection({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="py-12 border-t" style={{ borderColor: "var(--border)" }}>
      <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>{heading}</h2>
      <p className="leading-relaxed whitespace-pre-line max-w-2xl text-sm" style={{ color: "var(--muted-foreground)" }}>{body}</p>
    </section>
  );
}

function ImageSection({ alt, caption }: { alt: string; caption?: string }) {
  return (
    <section className="py-12 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="w-full rounded-xl overflow-hidden aspect-[16/9] flex items-center justify-center" style={{ backgroundColor: "var(--secondary)" }}>
        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{alt}</span>
      </div>
      {caption && <p className="mt-3 text-xs text-center" style={{ color: "var(--muted-foreground)" }}>{caption}</p>}
    </section>
  );
}

function ImageTextSection({ alt, heading, body, imageLeft = false }: { alt: string; heading: string; body: string; imageLeft?: boolean }) {
  return (
    <section className="py-12 border-t" style={{ borderColor: "var(--border)" }}>
      <div className={`flex flex-col md:flex-row gap-8 items-center ${imageLeft ? "" : "md:flex-row-reverse"}`}>
        <div className="w-full md:w-1/2 rounded-xl aspect-[4/3] flex items-center justify-center" style={{ backgroundColor: "var(--secondary)" }}>
          <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{alt}</span>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>{heading}</h2>
          <p className="leading-relaxed text-sm" style={{ color: "var(--muted-foreground)" }}>{body}</p>
        </div>
      </div>
    </section>
  );
}

function MetricsSection({ heading, rows }: { heading: string; rows: { label: string; value: string }[] }) {
  return (
    <section className="py-12 border-t" style={{ borderColor: "var(--border)" }}>
      <h2 className="text-xl font-semibold mb-6" style={{ color: "var(--foreground)" }}>{heading}</h2>
      <div className="divide-y rounded-xl overflow-hidden max-w-lg border" style={{ borderColor: "var(--border)", divideColor: "var(--border)" }}>
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between px-5 py-3" style={{ backgroundColor: "var(--card)" }}>
            <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>{row.label}</span>
            <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{row.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CardsSection({ heading, cards }: { heading: string; cards: { title: string; body: string }[] }) {
  return (
    <section className="py-12 border-t" style={{ borderColor: "var(--border)" }}>
      <h2 className="text-xl font-semibold mb-6" style={{ color: "var(--foreground)" }}>{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card) => (
          <div key={card.title} className="border rounded-xl p-5" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
            <h3 className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>{card.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function renderSection(section: Section, index: number) {
  switch (section.type) {
    case "text": return <TextSection key={index} {...section} />;
    case "image": return <ImageSection key={index} {...section} />;
    case "image-text": return <ImageTextSection key={index} {...section} />;
    case "metrics": return <MetricsSection key={index} {...section} />;
    case "cards": return <CardsSection key={index} {...section} />;
  }
}

export default function ProjectPage() {
  const { meta, sections } = project;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-40 px-6 py-8 flex-col gap-2 z-10 hidden lg:flex border-r" style={{ borderColor: "var(--border)" }}>
        <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Carla Vivani</span>
        <Link href="/" className="text-sm transition-colors" style={{ color: "var(--muted-foreground)" }}>
          ← Back
        </Link>
      </aside>

      <main className="max-w-3xl mx-auto px-6 py-16 lg:pl-48">
        <Link href="/" className="lg:hidden inline-block mb-8 text-sm transition-colors" style={{ color: "var(--muted-foreground)" }}>
          ← Back
        </Link>

        {/* Hero placeholder */}
        <div className="flex gap-4 mb-10">
          {[1, 2].map((i) => (
            <div key={i} className="flex-1 rounded-2xl aspect-[9/16] max-w-[180px] flex items-center justify-center" style={{ backgroundColor: "var(--secondary)" }}>
              <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>Mockup {i}</span>
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 leading-snug" style={{ color: "var(--foreground)" }}>{meta.title}</h1>

        {/* Metadata */}
        <div className="flex flex-wrap gap-6 text-sm mb-4">
          {[
            { label: "Client", value: meta.client },
            { label: "Role", value: meta.role },
            { label: "Year", value: meta.year },
          ].map(({ label, value }) => (
            <div key={label}>
              <span className="block text-xs uppercase tracking-wide mb-0.5" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>{label}</span>
              <span style={{ color: "var(--muted-foreground)" }}>{value}</span>
            </div>
          ))}
          {meta.link && (
            <div>
              <span className="block text-xs uppercase tracking-wide mb-0.5" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>Link</span>
              <a href={meta.link} className="underline underline-offset-2" style={{ color: "var(--foreground)" }}>View project ↗</a>
            </div>
          )}
        </div>

        {sections.map(renderSection)}

        <div className="pt-16 pb-8 border-t mt-8" style={{ borderColor: "var(--border)" }}>
          <Link href="/" className="text-sm transition-colors" style={{ color: "var(--muted-foreground)" }}>
            ← Back to projects
          </Link>
        </div>
      </main>
    </div>
  );
}
