import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/fade-up";

const navLinks = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
];

const paragraphs = [
  "For the past 10+ years, I've been designing digital products across fintech, SaaS, and, more recently, AI.",
  "I've worked with startups and companies like PayPal, Nubank, Konfio, and Yalo, leading projects from early discovery through launch. My work usually sits somewhere between product strategy, UX, UI, and execution, helping teams turn complex ideas into products people can actually use.",
  "Lately, I've been focused on AI products. At Yalo, I help design tools that enable non-technical teams to build and manage conversational agents. Outside of work, I'm co-building Helia, an AI-powered plant care app that combines practical care with storytelling and conversation.",
  "I enjoy working on products with a clear purpose, especially when they involve untangling complexity, learning something new, and collaborating closely with the people building them.",
  "Outside of product, you'll usually find me taking pottery classes, working on Helia, or finding new ways to bring creativity into everyday life.",
];

export default function About() {
  return (
    <div className="relative flex h-screen overflow-hidden" style={{ color: "var(--foreground)" }}>
      {/* Sidebar */}
      <aside className="relative z-10 w-56 shrink-0 flex flex-col justify-between px-8 py-10 border-r border-border">
        <FadeUp delay={0}>
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-sm font-semibold leading-snug">Carla Vivani</p>
              <p className="text-sm mt-0.5" style={{ color: "var(--muted-foreground)" }}>Product Designer</p>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Button key={link.label} variant="ghost" size="sm" render={<Link href={link.href} />} nativeButton={false} className="justify-start px-2">
                  {link.label}
                </Button>
              ))}
            </nav>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <div className="flex flex-col gap-1">
            <Button variant="ghost" size="xs" render={<a href="https://www.linkedin.com/in/carlavivani/" target="_blank" rel="noopener noreferrer" />} nativeButton={false} className="justify-start px-2">
              LinkedIn ↗
            </Button>
            <Button variant="ghost" size="xs" render={<a href="mailto:carlavivani@gmail.com" />} nativeButton={false} className="justify-start px-2">
              Email ↗
            </Button>
          </div>
        </FadeUp>
      </aside>

      {/* Main content */}
      <main className="relative z-10 flex-1 overflow-y-auto px-12 py-10">
        <div className="max-w-xl flex flex-col gap-6">
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
