export type Section =
  | { type: "text"; heading: string; body: string; hideSeparator?: boolean }
  | { type: "image"; src?: string; alt: string; caption?: string; fit?: "cover" | "contain"; imgWidth?: number; imgHeight?: number }
  | { type: "image-text"; alt: string; heading: string; body: string; imageLeft?: boolean }
  | { type: "cards"; heading: string; cards: { title: string; body: string }[] }
  | { type: "metrics"; heading: string; rows: { label: string; value: string }[] }
  | { type: "snapshot"; heading: string; items: { label: string; value: string }[] };

// Newer, image-forward case study template: a single Overview intro, a run of
// plain image containers (full-width or side-by-side pairs), and a closing
// Conclusion. Used by projects that set `overview`/`gallery`/`conclusion`.
export type GallerySection =
  // `caption` renders a small footnote below the container (e.g. crediting
  // source footage that isn't the author's own work). `aspect` overrides the
  // default 16/9 container ratio — e.g. to match a video's native ratio so
  // `object-cover` doesn't crop it.
  | { type: "image"; src?: string; alt: string; caption?: string; aspect?: `${number}/${number}` }
  | { type: "image-pair"; images: [{ src?: string; alt: string }, { src?: string; alt: string }] }
  // A single rounded container in a brand color, holding one or more inset
  // (not cropped) images side by side. Used for screenshots that need to sit
  // on a colored backdrop instead of bleeding full-width.
  // `fill`: media bleeds edge to edge (no inner padding, no border) instead
  // of sitting inset with a margin — the rounded corners act as a mask.
  | { type: "frame"; bg: FrameBg; images: { src?: string; alt: string }[]; fill?: boolean; radius?: number; noBorder?: boolean; bgColor?: string; custom?: "scan-video" }
  // Two independent colored containers side by side, each with its own bg.
  // `fill` on a frame bleeds its media edge to edge (cropped, no inset
  // padding) instead of sitting inset with a margin — e.g. a photo that's
  // taller than the container and needs to be masked rather than shrunk.
  // `custom` swaps the frame's content for a bespoke component (e.g. a
  // hand-built, animated recreation of a UI element) instead of an image.
  // `lottie` renders a looping Lottie/dotLottie animation edge to edge.
  | {
      type: "frame-pair";
      frames: [
        { bg: FrameBg; src?: string; alt: string; fill?: boolean; custom?: "reveri-toggle" | "care-cards"; lottie?: string; caption?: { eyebrow: string; title: string; body: string }; bgColor?: string },
        { bg: FrameBg; src?: string; alt: string; fill?: boolean; custom?: "reveri-toggle" | "care-cards"; lottie?: string; caption?: { eyebrow: string; title: string; body: string }; bgColor?: string },
      ];
    }
  // A single colored container that auto-cycles between two screens with a
  // slide transition, instead of splitting them into two static boxes. An
  // optional static `companion` box sits next to it in the same row.
  | {
      type: "screen-swap";
      bg: FrameBg;
      screens: [{ src?: string; alt: string }, { src?: string; alt: string }];
      companion?: { bg: FrameBg; src?: string; alt: string };
    }
  // Two document pages staggered/interleaved (one sits higher, one lower)
  // inside one colored container, instead of two evenly centered thumbnails.
  | { type: "document-pair"; bg: FrameBg; documents: [{ src?: string; alt: string }, { src?: string; alt: string }] }
  // A fully bespoke, self-contained component — no frame/bg wrapper, unlike
  // `frame`/`frame-pair`'s `custom`, since these manage their own layout,
  // background, and (for chat-gallery) an interactive switcher.
  // `heading`/`body` render as a left-aligned title + paragraphs above the
  // component, same visual weight as the page's Overview/Conclusion.
  | { type: "custom"; component: "chat-gallery"; heading?: string; body?: string };

// Background options for `frame`/`frame-pair` gallery sections and `heroFrame`.
// `indigo`/`charcoal` are Reveri's brand shades — kept distinct from `purple`
// (Nubank's brand purple) and `dark` so changing one project's palette can't
// bleed into another's.
export type FrameBg = "light" | "purple" | "dark" | "gray" | "indigo" | "charcoal" | "black" | "lavender";

export type Project = {
  slug: string;
  number: string;
  name: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  hero?: string;
  pageTheme?: "dark";
  coverSpan: "full" | "half";
  meta: {
    client: string;
    role: string;
    year: string;
    tools?: string[];
    link?: string;
  };
  sections: Section[];
  // New image-forward template (see `GallerySection`). When these three are
  // all set, the project page renders the new template instead of `sections`.
  overview?: string;
  gallery?: GallerySection[];
  conclusion?: { heading: string; body: string; link?: { href: string; label: string } };
  // When set, replaces the default full-bleed `hero` with a colored container
  // holding one or more inset phone/screen images (e.g. a twin-phone showcase).
  // `gradient` overrides the solid `bg` swatch with a raw CSS background-image
  // gradient (e.g. a brand-specific two-color gradient that doesn't fit the
  // shared FrameBg palette) — applied even for a single inset image.
  heroFrame?: { bg: FrameBg; images: { src?: string; alt: string }[]; gradient?: string; noBorder?: boolean };
  // When set, replaces `hero` on the case study page with two stacked SVG
  // layers (a background glow/aura behind a smaller foreground mark),
  // both rendered with object-contain so neither gets cropped. `caption`
  // is an optional shimmer line that loops beneath the mark.
  heroLayers?: { bg: string; fg: string; caption?: string };
  // Overrides `hero` for the Home gallery card only — for when the case
  // study's own cover shouldn't be a video, but the home thumbnail should.
  homeThumb?: string;
  // Drops the card's default bg-secondary fill on the Home gallery — for a
  // hero/homeThumb asset with transparent padding (e.g. a mockup PNG) that
  // should blend into the page instead of showing a gray backdrop.
  homeCardTransparent?: boolean;
  // Small floating UI pill/badge overlaid on the Home gallery card, gently
  // fading in and out — Home-only, doesn't appear on the case study page.
  homeBadge?: string;
  // When set, the Home card's video (hero/homeThumb) crossfades into a
  // spinning mark + wordmark on hover (desktop only). On mobile (no
  // hover), the mark/wordmark sit statically over the video instead,
  // smaller and using `wordmarkMobile` for contrast against the video.
  homeHoverReveal?: { sun: string; wordmark: string; wordmarkMobile: string };
  // When set, the Home card's static image (hero/homeThumb, shown shrunk and
  // object-contain so it never crops) is covered on hover (desktop only) by
  // a solid `color` fade-in with the yalocode logomark centered on top.
  // Simpler cousin of `homeHoverReveal` for a flat mockup image instead of
  // a looping video.
  homeHoverColor?: { color: string };
};

export const projects: Project[] = [
  {
    slug: "helia",
    number: "02",
    name: "Helia",
    coverSpan: "full",
    hero: "/images/helia/cover.webm",
    homeHoverReveal: {
      sun: "/images/helia/helia-sun.svg",
      wordmark: "/images/helia/helia-black.svg",
      wordmarkMobile: "/images/helia/helia-white.svg",
    },
    title: "Give your plants a voice",
    tags: ["Mobile", "Product Strategy", "Founder"],
    year: "2026",
    description: "I co-founded Helia and led the product from an early hypothesis to a live plant care experience used to identify, understand, and build a more personal relationship with plants.",
    meta: {
      client: "Co-Founder",
      role: "Product Builder",
      year: "January 2026 – Present",
    },
    sections: [],
    overview: "Helia started with a simple question: **what if plants could talk?** We created a plant care app that combines identification, curated guidance, and conversation to make everyday care feel more personal and approachable.\n\nAs co-founder and product designer, I've shaped Helia from early concept to a live iOS and Android product working across product strategy, research, interaction design, brand, frontend implementation, pricing, and growth.\n\nWhat began as an experiment in using emerging AI tools to make plant care feel more personal has grown into a fully functioning product, with 530+ users, 600+ plant analysis, and a place in Stage 2 of 500 Global's selection process.",
    gallery: [
      {
        type: "frame-pair",
        frames: [
          { bg: "gray", custom: "care-cards", alt: "Care guidance cards — water, light, fertilizer, temperature, humidity" },
          { bg: "gray", src: "/images/helia/app-store.png", alt: "Helia on the App Store", bgColor: "#FFC845" },
        ],
      },
      {
        type: "frame",
        bg: "light",
        images: [{ src: "/images/helia/scan.webm", alt: "Scanning a plant to identify it and get care guidance" }],
        radius: 32,
        noBorder: true,
        bgColor: "var(--background)",
        custom: "scan-video",
      },
      {
        type: "image-pair",
        images: [
          { src: "/images/helia/sun.jpg", alt: "Product screenshot" },
          { src: "/images/helia/brand.jpg", alt: "Product screenshot" },
        ],
      },
    ],
    conclusion: {
      heading: "Taking Helia into the real world",
      body: "One of the most useful parts of building Helia has been seeing people interact with it outside of a test or a screen. At an in-person community event, people adopted plants, added them to their garden, asked questions, and started conversations with them on the spot. Watching that happen made the product feel very different from something we were simply designing and building.\n\nI never expected to take an app all the way to production without a dedicated frontend developer. Being able to design something and then build much of it myself changed how I think about the line between design and implementation.\n\nWhat I love most about Helia is how varied the work is. One day it's product design, another it's merch or an in-person event, and then it's back to the app, changing what we built based on what we learned.",
    },
  },
  {
    slug: "yalocode",
    number: "01",
    name: "YaloCode",
    coverSpan: "full",
    hero: "/images/yalocode/yalocode-cover.png",
    homeCardTransparent: true,
    homeHoverColor: { color: "#141414" },
    heroFrame: {
      bg: "light",
      images: [{ src: "/images/yalocode/yalocode-cover.png", alt: "YaloCode test plan widget open on a laptop" }],
    },
    title: "YaloCode: Making everyone a builder",
    tags: ["AI", "Enterprise", "Product Design"],
    year: "2026 – Present",
    description: "Designing a hybrid workspace that helped non-technical teams build, test, and launch enterprise WhatsApp agents in under two weeks.",
    meta: {
      client: "Yalo",
      role: "Senior Product Designer",
      year: "February 2026 – July 2026",
    },
    sections: [],
    overview: "YaloCode started as an internal hackathon experiment with an ambitious goal: make Yalo's platform accessible to the teams responsible for building and delivering conversational agents, without requiring deep technical expertise.\n\nI joined after the initial prototype and worked across the product system, from E2E workflows and information architecture to the behavior that shaped how YaloCode responded. I defined reusable skills, behavioral instructions, response structures, and the rules that determined when the product should respond conversationally or shift into a more structured interaction. I also designed the chat patterns and components that supported those behaviors, and contributed directly to frontend implementation.\n\nYaloCode became a shared workspace across Yalo, supporting Customer Success, Sales, Conversational Design, Engineering, and external implementation partners. Today, it is actively used by around 80% of the company, with a 4.5/5 CSAT, while WhatsApp agent delivery has gone from as much as six months to under two weeks.",
    gallery: [
      {
        type: "image",
        src: "/images/yalocode/yalocode.webm",
        alt: "YaloCode product walkthrough",
        caption: "Marketing footage courtesy of Yalo",
        aspect: "3002/1654",
      },
      {
        type: "custom",
        component: "chat-gallery",
        heading: "Chat UI Gallery",
        body: "As YaloCode moved into real workflows, we noticed a trust gap: users would ask the agent to do something, but sometimes complete the task themselves because they weren't fully confident in what it would do.\n\nWe introduced structured widgets that made planned actions visible and reviewable, giving users a chance to understand what would happen next and decide whether to proceed.\n\nBelow is a recreated preview of selected interface patterns.",
      },
    ],
    conclusion: {
      heading: "Designing for builders",
      body: "Once users could see and review what the agent was doing, the next opportunity was making those workflows easier to reuse, share, and build on.\n\nPeople were already creating their own ways of working across tools like ChatGPT, Claude, Gemini, and Yalo's platform. Instead of asking everyone to start from scratch, we turned those behaviors into reusable building blocks. Skills could be created and shared, eventually growing into a marketplace, while the chat gallery made useful workflows easier for others to discover.\n\nWhat I liked most about this direction was that people didn't have to figure everything out on their own. They could start from something that already worked, adapt it to what they needed, and eventually create something others could use too.",
    },
  },
  {
    slug: "reveri-ai-sessions",
    number: "03",
    name: "Reveri: AI Sessions",
    coverSpan: "half",
    pageTheme: "dark",
    hero: "/images/reveri-ai-sessions/beacon-container.svg",
    heroLayers: {
      bg: "/images/reveri-ai-sessions/beacon-bg.svg",
      fg: "/images/reveri-ai-sessions/Beacon.svg",
      caption: "The Dr. is on his way...",
    },
    title: "Hypnosis for pain relief",
    tags: ["AI", "Healthcare", "Product Design"],
    year: "2025",
    description: "Redesigning Reveri's hypnosis sessions around real-time, personalized AI guidance, and the trust-building work that came with it.",
    meta: {
      client: "Reveri",
      role: "Senior Product Designer",
      year: "March 2025 – June 2025",
      tools: ["Figma", "ChatGPT", "Bolt"],
    },
    sections: [
      {
        type: "text",
        heading: "Helping users feel relief, faster and more personally",
        body: "After exploring (and ultimately stepping away from) a more ambitious AI onboarding concept, we shifted toward a smaller but more meaningful question: could AI make Reveri's hypnosis sessions feel more responsive to each person's pain?\n\nBefore AI, sessions followed a fixed structure. Every user received the same guidance, regardless of what hurt, how pain showed up, or what imagery resonated most.\n\nWe saw an opportunity to make sessions more adaptive: listening, responding, and adjusting in real time based on what users shared.",
      },
      {
        type: "image",
        src: "/images/reveri-ai-sessions/01%20ReveriAI.jpg",
        alt: "Reveri AI Talk session screen",
        fit: "contain",
        imgWidth: 3840,
        imgHeight: 2161,
      },
      {
        type: "text",
        heading: "Outcome",
        body: "The shift toward personalization had a measurable impact.\n\nUsers who completed AI-guided sessions reported notably higher improvement rates than those who completed non-AI sessions. Post-session feedback also showed higher feelings of being \"heard\" and \"understood\" during the experience.\n\nRather than simply introducing AI into the app, we focused on a more practical question: how could conversational interaction improve the care experience in a way users could genuinely feel?",
      },
      {
        type: "metrics",
        heading: "Reported improvement rates",
        rows: [
          { label: "AI-guided sessions", value: "87%" },
          { label: "Non-AI sessions", value: "60%" },
        ],
      },
      {
        type: "text",
        heading: "Redesigning how users enter care",
        body: "This work also changed how users entered the Reveri experience.\n\nPreviously, the product relied on a card-based system where users selected static hypnosis sessions. As conversational AI became part of the experience, we redesigned the Home Tab to support two clearer entry paths, prioritizing one as the default while keeping the other easily accessible.\n\nThis helped simplify decision-making, reduce visual complexity, and focus attention without overwhelming users.",
      },
      {
        type: "image",
        src: "/images/reveri-ai-sessions/Before%20and%20After%20Reveri.jpg",
        alt: "Before and after redesign of Reveri's home tab",
        fit: "contain",
        imgWidth: 2490,
        imgHeight: 1620,
      },
      {
        type: "cards",
        heading: "Two paths into care",
        cards: [
          { title: "Talk Mode", body: "A real-time, conversational experience powered by AI, positioned as the primary entry point into the product." },
          { title: "Listen Mode", body: "A more traditional, audio-only hypnosis experience, kept easily accessible for users who prefer it." },
        ],
      },
      {
        type: "image",
        src: "/images/reveri-ai-sessions/02%20ReveriAI.jpg",
        alt: "Talk mode and Listen mode side by side",
        fit: "contain",
        imgWidth: 3840,
        imgHeight: 2160,
      },
      {
        type: "text",
        heading: "Building trust through educational moments",
        body: "Introducing AI into a clinical setting brought a new challenge: uncertainty.\n\nPeople naturally had questions. Will this work for me? Can I use this with pain medication? What exactly am I paying for?\n\nInstead of interrupting the experience with long explanations, we introduced lightweight educational moments designed to appear contextually throughout the session. These moments helped answer concerns early while preserving emotional flow.\n\nWe also saw an interesting signal: users who engaged with these touchpoints during their first sessions showed higher retention over time.",
      },
      {
        type: "image",
        src: "/images/reveri-ai-sessions/03%20ReveriAI.jpg",
        alt: "Educational trust-building screens in Reveri",
        fit: "contain",
        imgWidth: 3840,
        imgHeight: 2161,
      },
      {
        type: "text",
        heading: "Fast iteration through prototyping",
        body: "Designing conversational AI required a different workflow than traditional product design.\n\nBecause behavior mattered just as much as interface, static screens alone weren't enough to evaluate the experience.\n\nI used low-fidelity flows, conversational prompts, and Bolt prototypes to simulate interactions before implementation, helping us validate assumptions, align quickly with engineering, and test ideas with beta users before investing heavily in development.\n\nThis made it easier to understand not just how the UI looked, but how the experience actually felt in motion.",
      },
      {
        type: "image",
        src: "/images/reveri-ai-sessions/04%20ReveriAI.jpg",
        alt: "Early prototypes of the Reveri AI session flow",
        fit: "contain",
        imgWidth: 3840,
        imgHeight: 2161,
      },
      {
        type: "text",
        heading: "What this project reinforced",
        body: "This work reinforced an important lesson from our earlier onboarding experiments: AI becomes useful when it solves a specific problem well.\n\nThe breakthrough wasn't trying to redesign everything around AI. It was identifying a moment where personalization could meaningfully improve the user experience, and designing around that constraint.\n\nIn this case, helping people feel relief sooner, while feeling more understood in the process.",
      },
    ],
    overview: "Reveri is a clinical hypnosis app co-founded by Dr. David Spiegel, a renowned psychiatrist and hypnosis researcher at Stanford University. His work has shaped decades of research into how hypnosis can support pain, stress, and sleep. Still, the product experience was largely static: users selected a guided session and followed the same structure regardless of what they were feeling or how their pain showed up.\n\nAs product designer, I defined how conversational AI would fit into the existing Reveri experience, designing the interaction model, session experience, and new paths into care from Home. Rather than redesigning the product around AI, we narrowed the opportunity to one specific moment: helping users feel more heard and supported during pain relief sessions.\n\nWe introduced a conversational mode that could adapt in real time based on what users shared, while preserving Reveri's existing audio experience for those who preferred it.\n\n**Users who completed conversational sessions reported improvement at a higher rate: 87%, compared with 60% for the standard sessions, while also strengthening users' sense of being heard and understood.**",
    gallery: [
      {
        type: "frame-pair",
        frames: [
          { bg: "indigo", alt: "Talk and Listen mode selector screen", custom: "reveri-toggle" },
          { bg: "charcoal", src: "/images/reveri-ai-sessions/lifestyle.webp", alt: "Lifestyle photo of someone starting a Reveri session on their phone", fill: true },
        ],
      },
      {
        type: "frame",
        bg: "charcoal",
        images: [{ src: "/images/reveri-ai-sessions/flow.webm", alt: "Home screen with a personalized greeting and wellness check prompt" }],
        fill: true,
      },
      {
        type: "frame-pair",
        frames: [
          { bg: "charcoal", alt: "Pain tracking chart over time: Reveri vs. painkillers", lottie: "/images/reveri-ai-sessions/reveri-vs-painkillers.lottie" },
          { bg: "black", src: "/images/reveri-ai-sessions/wellness-score.png", alt: "Wellness / pain relief score ring" },
        ],
      },
    ],
    conclusion: {
      heading: "Bringing the live experience into the product",
      body: "Throughout the project, we kept coming back to one question: how could Reveri capture more of what made a live session with Dr. David Spiegel feel so effective?\n\nThe answer turned out to be simpler than redesigning the entire experience. By letting users describe their pain and preferences through voice, we could personalize the session around what they shared, something AI finally made possible at scale.\n\nReveri reinforced the importance of designing around the emotional context of an experience, not just the interaction itself. In a product built around pain relief, the goal wasn't to make the technology more visible, but to make the experience feel more responsive, personal, and human.",
    },
  },
  {
    slug: "reveri",
    number: "04",
    name: "Reveri: Onboarding",
    coverSpan: "half",
    hero: "/images/reveri/onb-cover.png",
    homeThumb: "/images/reveri/session.webm",
    homeBadge: "/images/reveri/Pain.png",
    heroFrame: {
      bg: "charcoal",
      images: [
        { src: "/images/reveri/onb-cover.png", alt: "Concept renders of the video-guided and voice-first onboarding" },
      ],
    },
    title: "Onboarding concept explorations",
    tags: ["AI", "Experimentation", "Product Design"],
    year: "2025",
    description: "Two AI onboarding concepts, tested and shelved, and what that taught the team about designing for probabilistic systems.",
    meta: {
      client: "Reveri",
      role: "Senior Product Designer",
      year: "January 2025",
    },
    sections: [],
    overview: "Reveri's onboarding was designed to educate users before their first hypnosis session, but it could take 15–20 minutes before they experienced the product itself. We wanted to see if that time could feel more like the beginning of a session with Dr. David Spiegel, and less like setup.\n\nAt the time, we were exploring how AI could become part of the Reveri experience. We already had a voice model trained on Dr. Spiegel's voice, which gave us room to experiment with more responsive, conversational interactions. I explored how that could translate into onboarding: bringing more of his presence and guidance into the experience while helping users reach value sooner.\n\nWe ultimately decided not to take the onboarding exploration further. Instead, it helped us narrow the problem and redirect our effort toward a smaller, more useful interaction: [Reveri's first voice-responsive hypnosis session](/projects/reveri-ai-sessions).",
    gallery: [
      {
        type: "frame-pair",
        frames: [
          {
            bg: "gray",
            src: "/images/reveri/concept-1.png",
            alt: "Concept render of the video-guided onboarding with Dr. Spiegel",
            caption: {
              eyebrow: "Concept 01",
              title: "Video call",
              body: "The first direction imagined onboarding as a one-on-one video call with Dr. Spiegel. His trained voice guided the experience while questions and simple tap interactions appeared throughout, making the setup feel closer to a real conversation than a traditional onboarding flow.",
            },
          },
          {
            bg: "lavender",
            src: "/images/reveri/concept-2.png",
            alt: "Concept render of the beacon-based talk-or-tap onboarding",
            caption: {
              eyebrow: "Concept 02",
              title: "Voice-first beacon",
              body: "For the second direction, I removed the video and introduced a soft visual beacon as a representation of Dr. Spiegel's voice. The experience became simpler and more voice-led, while still giving users the option to tap when speaking wasn't convenient.",
            },
          },
        ],
      },
    ],
    conclusion: {
      heading: "Flexibility became friction",
      body: "Engineering built an early version of the experience so we could test the interaction beyond static concepts. Once we tried it, the problems became much clearer: the conversation felt rigid, switching between voice and tap added complexity, and the overall experience required more effort than the onboarding it was meant to improve.\n\nSupporting both interaction modes also introduced a lot of complexity behind the scenes without giving users a clear enough benefit. What looked flexible on paper didn't feel particularly simple or natural in use.\n\nWe decided not to take the concept further. For me, the biggest takeaway was that giving people more ways to interact doesn't automatically make a product easier to use. Sometimes the better design decision is to narrow the interaction, reduce what the system needs to handle, and focus on the moment where the technology actually adds something useful.",
    },
  },
  {
    slug: "nubank",
    number: "05",
    name: "Nubank",
    coverSpan: "full",
    hero: "/images/nubank/hero-nubank.png",
    heroFrame: {
      bg: "light",
      images: [
        { src: "/images/nubank/hero-nubank.png", alt: "Cuenta Nu payment and transfer confirmation screens" },
      ],
    },
    title: "Nubank: Cuenta Nu México",
    tags: ["Fintech", "Design Systems", "Banking"],
    year: "2021–2023",
    description: "Diseñando experiencias bancarias clave para el lanzamiento de Cuenta Nu en México.",
    meta: {
      client: "Nubank México",
      role: "Product Designer, Transactions",
      year: "July 2021 – June 2023",
    },
    sections: [],
    overview: "When Nubank expanded its banking product in Mexico, the work went beyond adapting an existing experience to a new market. Different financial habits, local infrastructure, regulation, and expectations around money meant that many of the patterns built for Brazil needed to be reconsidered.\n\nI joined as one of the first designers on the Cuenta Nu team, working closely with a Design Lead, Content Design, UX Research, Product, and Engineering. As part of the Transactions team, I focused on transfers, credit card payments, account transparency, and the systems connecting debit and credit experiences. Over two years, I helped shape some of the core banking journeys that supported Cuenta Nu's launch in Mexico, while contributing to the patterns and shared logic the product needed as it grew.",
    gallery: [
      {
        type: "screen-swap",
        bg: "purple",
        screens: [
          { src: "/images/nubank/pago-minimo.png", alt: "Credit card payment amount screen — \"¿Cuánto quieres pagar?\"" },
          { src: "/images/nubank/Intereses.png", alt: "Interest-avoidance tip screen — \"¡Estás evitando pagar intereses!\"" },
        ],
        companion: { bg: "gray", src: "/images/nubank/pago-cc.png", alt: "Credit card payment confirmation screen" },
      },
      {
        type: "frame",
        bg: "light",
        images: [{ src: "/images/nubank/transferflow.webm", alt: "Transfer amount entry screen with numeric keypad — \"¿Cuánto vas a transferir?\"" }],
        fill: true,
      },
      {
        type: "document-pair",
        bg: "purple",
        documents: [
          { src: "/images/nubank/edocuenta-1.png", alt: "Account statement cover page — \"Así podrás consultar tu estado de cuenta\"" },
          { src: "/images/nubank/edocuenta-2.png", alt: "Account statement transaction detail page" },
        ],
      },
      {
        type: "frame",
        bg: "dark",
        images: [
          { src: "/images/nubank/anatomy.png", alt: "Feed item anatomy wireframe — app header, screen main area, body, actions" },
        ],
      },
    ],
    conclusion: {
      heading: "Designing for a product that had to feel both familiar and local",
      body: "Working on Cuenta Nu made me more aware of how much context shapes a product. Patterns that worked well in Brazil didn't always translate directly to Mexico, and even small financial interactions could carry different expectations, habits, and levels of understanding.\n\nDesign has always been at the core of the Nubank experience, and I feel very lucky to have been part of an organization that treated it that way. But what stayed with me most was **the customer obsession behind the work**: understanding people deeply, questioning assumptions, and using that understanding to shape the experience.\n\n**Years later, I still find myself using many of the practices I learned at Nubank. That customer obsession became part of how I approach product design, and it's something I've carried with me ever since.**",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

// Adjacent projects for the case study footer nav, wrapping around the ends
// of the list so every project has both a previous and a next.
export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
