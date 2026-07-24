import Image from "next/image";
import { Sidebar } from "@/components/sidebar";
import { FadeUp } from "@/components/fade-up";
import { TEXT_WIDTH } from "@/lib/layout";

const paragraphs = [
  "For the past 10+ years, I've been designing digital products across fintech, SaaS, and, more recently, AI.",
  "I've worked with startups and companies like PayPal, Nubank, Konfio, and Yalo, leading projects from early discovery through launch. My work usually sits somewhere between product strategy, UX, UI, and execution, helping teams turn complex ideas into products people can actually use.",
  "Lately, I've been focused on AI products. At Yalo, I help design tools that enable non-technical teams to build and manage conversational agents. Outside of work, I'm co-building Helia, an AI-powered plant care app that combines practical care with storytelling and conversation.",
  "I enjoy working on products with a clear purpose, especially when they involve untangling complexity, learning something new, and collaborating closely with the people building them.",
  "Outside of product, you'll usually find me taking pottery classes, working on Helia, or finding new ways to bring creativity into everyday life.",
];

export default function About() {
  return (
    <div className="relative flex flex-col md:flex-row md:h-screen md:overflow-hidden" style={{ color: "var(--foreground)" }}>
      <Sidebar />

      {/* Main content */}
      <main className="relative z-10 flex-1 md:overflow-y-auto px-4 py-6 md:px-12 md:py-10">
        <div className={`${TEXT_WIDTH} mx-auto flex flex-col gap-6`}>
          <FadeUp delay={100} className="relative w-full rounded-2xl overflow-hidden aspect-[4/3] mb-2">
            <Image src="/images/about/home.png" alt="Carla Vivani" fill className="object-cover" priority />
          </FadeUp>
          {paragraphs.map((text, i) => (
            <FadeUp key={i} delay={250 + i * 80}>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {text}
              </p>
            </FadeUp>
          ))}
        </div>
      </main>
    </div>
  );
}
