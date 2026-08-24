import Image from "next/image";
import { Sidebar } from "@/components/sidebar";
import { FadeUp } from "@/components/fade-up";
import { CASE_STUDY_WIDTH } from "@/lib/layout";

const paragraphs = [
  "For the past 10+ years, I've been designing digital products across fintech, SaaS, and, more recently, AI.",
  "I've worked with startups and companies including PayPal, Nubank, Konfio, and Yalo, taking products from early discovery through launch. My work spans product strategy, UX, interaction design, and implementation, often in spaces where the product is still being defined and the path forward isn't obvious.",
  "More recently, I've focused on AI products and the new interaction patterns they introduce. At Yalo, I worked on tools that enabled non-technical teams to build and manage conversational agents, shaping everything from product workflows and interface patterns to the behavior behind the experience. I'm also co-building Helia, a plant care app that combines practical guidance with personality, storytelling, and conversation.",
  "I'm drawn to products with a clear purpose and to problems that require turning complexity into something thoughtful, intuitive, and useful.",
  "Outside of product, you'll usually find me taking pottery classes, working on Helia, playing Sims or finding new ways to bring creativity into everyday life.",
];

export default function About() {
  return (
    <div className="relative flex flex-col md:flex-row md:h-screen md:overflow-hidden" style={{ color: "var(--foreground)" }}>
      <Sidebar />

      {/* Main content */}
      <main className="relative z-10 flex-1 md:overflow-y-auto px-4 py-6 md:px-12 md:py-10">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <FadeUp delay={0} className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] mb-10">
            <Image src="/images/about/home.png" alt="Carla Vivani" fill className="object-cover" priority />
          </FadeUp>
          <FadeUp delay={80} className="w-full mb-8">
            <h1 className="text-3xl font-bold leading-snug" style={{ color: "var(--foreground)" }}>Hi, I&rsquo;m Carla</h1>
          </FadeUp>
          <div className="flex md:justify-end">
            <div className="w-full md:w-3/5 py-8 md:py-12 flex flex-col gap-6">
              {paragraphs.map((text, i) => (
                <FadeUp key={i} delay={140 + i * 50}>
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {text}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>
          <div className="flex md:justify-end">
            <FadeUp delay={140 + paragraphs.length * 50} className="w-full md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="relative w-full aspect-[1066/1600] rounded-2xl overflow-hidden">
                <Image src="/images/about/vase.jpg" alt="A vase I made in pottery class" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-[1066/1600] rounded-2xl overflow-hidden">
                <Image src="/images/about/kintsugi.jpg" alt="A piece repaired with kintsugi in pottery class" fill className="object-cover" />
              </div>
            </FadeUp>
          </div>
        </div>
      </main>
    </div>
  );
}
