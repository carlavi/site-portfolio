export type Section =
  | { type: "text"; heading: string; body: string }
  | { type: "image"; alt: string; caption?: string }
  | { type: "image-text"; alt: string; heading: string; body: string; imageLeft?: boolean }
  | { type: "cards"; heading: string; cards: { title: string; body: string }[] }
  | { type: "metrics"; heading: string; rows: { label: string; value: string }[] }
  | { type: "snapshot"; heading: string; items: { label: string; value: string }[] };

export type Project = {
  slug: string;
  number: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  meta: {
    client: string;
    role: string;
    year: string;
    tools?: string[];
    link?: string;
  };
  sections: Section[];
};

export const projects: Project[] = [
  {
    slug: "yalocode",
    number: "01",
    title: "[Placeholder] YaloCode",
    tags: ["AI", "Engineering", "Systems Design"],
    year: "[Placeholder]",
    description: "[Placeholder] Sistemas de IA diseñados con credibilidad técnica — donde producto e ingeniería hablan el mismo idioma.",
    meta: {
      client: "[Placeholder client]",
      role: "[Placeholder role]",
      year: "[Placeholder]",
      link: "[Placeholder link]",
    },
    sections: [
      {
        type: "text",
        heading: "[Placeholder] El reto",
        body: "[Placeholder] Describe el problema técnico/de producto y por qué requería credibilidad de ingeniería para resolverse.",
      },
      {
        type: "text",
        heading: "[Placeholder] El enfoque",
        body: "[Placeholder] Cómo se diseñó el sistema de IA: decisiones técnicas, colaboración con ingeniería, trade-offs.",
      },
      {
        type: "image",
        alt: "[Placeholder] Captura del sistema / arquitectura",
        caption: "[Placeholder] Descripción de la imagen",
      },
      {
        type: "metrics",
        heading: "[Placeholder] Resultados",
        rows: [
          { label: "[Placeholder métrica]", value: "[Placeholder valor]" },
          { label: "[Placeholder métrica]", value: "[Placeholder valor]" },
        ],
      },
      {
        type: "text",
        heading: "[Placeholder] Aprendizajes",
        body: "[Placeholder] Qué aprendiste sobre construir credibilidad técnica como diseñador.",
      },
    ],
  },
  {
    slug: "helia",
    number: "02",
    title: "Helia: Building an emotionally-driven product for plant care",
    tags: ["Mobile", "Product Strategy", "Founder"],
    year: "2025 – Present",
    description: "A plant care app combining plant identification, curated care guidance, and conversational interactions — built on the hypothesis that emotional connection improves care consistency.",
    meta: {
      client: "Co-Founder",
      role: "Product Strategy, UX/UI, Frontend",
      year: "2025 – Present",
    },
    sections: [
      {
        type: "snapshot",
        heading: "Project Snapshot",
        items: [
          { label: "Role", value: "Co-Founder, Product Design" },
          { label: "Team", value: "2 people" },
          { label: "What we built", value: "A plant care app combining plant identification, curated care guidance, and conversational interactions to make plant care feel more personal and approachable." },
          { label: "Hypothesis", value: "Emotional connection could improve care consistency." },
          { label: "Early signals", value: "117 registered users · 517 plant analyses completed · ~85%+ scan completion rate · 33 beta testers · Advanced to Stage 2 of 500 Global's selection process" },
          { label: "What I owned", value: "Product strategy, UX/UI, frontend implementation, pricing, brand, GTM, and day-to-day product operations." },
        ],
      },
      {
        type: "text",
        heading: "Can emotional connection change how people care for plants?",
        body: "Most plant care apps focus on information: watering reminders, care guides, and species databases.\n\nBut as plant owners ourselves, we kept noticing a different problem:\n\nPeople rarely stop caring for plants because information is unavailable.\n\nThey stop because motivation fades.\n\nPlants become another responsibility, uncertainty builds — Am I watering too much? Is this normal? — and over time, care becomes inconsistent.\n\nWe started with a simple hypothesis: if people formed a stronger emotional connection with their plants, they might care for them more consistently.\n\nThat idea became Helia — a plant care app designed to make caring for plants feel more personal, approachable, and easier to sustain over time.",
      },
      {
        type: "text",
        heading: "Building around emotional motivation",
        body: "Instead of treating plants as entries in a database, we wanted them to feel more present in people's daily lives.\n\nToday, people can:\n\n• Scan and identify plant species\n• Receive curated care guidance instead of fragmented internet advice\n• Save plants into a personal garden\n• Talk with their plants conversationally\n• Ask contextual care questions at any moment\n\nRather than overwhelming people with generic information, the goal was to create a care experience that felt simpler, more trustworthy, and easier to return to.",
      },
      {
        type: "text",
        heading: "Building for trust, not information overload",
        body: "One of the earliest product decisions was resisting the temptation to become \"Google for plants.\"\n\nPlant care advice online is often contradictory. Search for the same species and you'll likely find dozens of conflicting recommendations around watering, light, humidity, and care.\n\nInstead, we focused on curation over abundance.\n\nHelia provides structured, simplified care guidance designed to reduce uncertainty and help people feel more confident caring for their plants.\n\nBecause confidence matters. People are more likely to keep caring for something when they feel they're doing it right.",
      },
      {
        type: "text",
        heading: "From utility to relationship",
        body: "[PLACEHOLDER: biggest product tension / decision]\n\nWe quickly realized Helia worked best when it balanced practical utility with emotional connection.\n\nToo much utility made the experience feel transactional. Too much emotionality made it feel gimmicky.\n\nWe started exploring ways to make plants feel more present without losing credibility as a care tool.\n\nThis led to features like plant personalities, conversational interactions, personalized care guidance, and narrative elements designed to build emotional attachment.\n\nThe goal wasn't novelty. It was helping people feel more connected — so care became easier to sustain over time.",
      },
      {
        type: "text",
        heading: "What early product signals told us",
        body: "Helia is still early, but we intentionally built the product with instrumentation from day one to understand behavior and learn quickly.\n\nOne insight stood out: while onboarding still needs work, the core scan flow showed strong completion rates once people started using the product.\n\nThis helped us separate two different problems: activation was the challenge, and core product value showed stronger signal.\n\nRepeated plant analyses also suggested something interesting: people weren't only scanning once. Many were returning to identify additional plants, explore care guidance, or experiment with the product in ways we hadn't fully expected.\n\n[PLACEHOLDER: stronger behavioral insight]",
      },
      {
        type: "text",
        heading: "Designing and operating with constraints",
        body: "Helia is built by a team of two.\n\nI lead product strategy, UX/UI, frontend implementation, pricing, brand, growth experiments, and day-to-day product operations. My husband leads backend systems, infrastructure, app distribution, and legal operations.\n\nWorking at this scale means every decision matters:\n\n• Balancing emotional design with usability\n• Managing infrastructure and AI costs carefully\n• Prioritizing features against engineering constraints\n• Learning directly from user behavior rather than large-scale research\n\nInstead of separating strategy, design, and execution, we move across all three constantly — making decisions quickly, testing ideas, and adapting as we learn.",
      },
      {
        type: "text",
        heading: "Learning in the real world",
        body: "[PLACEHOLDER: Family Fest / GreenHub learnings]\n\nBecause Helia exists in a highly emotional category, we wanted to understand behavior beyond analytics dashboards.\n\nThrough in-person events, plant adoption experiences, and direct observation, we've been able to see how people react to the product in real time: what confuses them, what excites them, what makes them immediately want to scan a plant.\n\nThese moments have influenced onboarding, education, and how we introduce conversational interactions.",
      },
      {
        type: "text",
        heading: "What surprised us",
        body: "[PLACEHOLDER: unexpected behavior]\n\nExamples:\n\n• People talking to plants more than expected\n• Repeat scanning behavior\n• Emotional attachment patterns\n• Unexpected onboarding friction\n• What people valued most",
      },
      {
        type: "text",
        heading: "What building Helia changed for me",
        body: "Helia pushed me beyond designing interfaces.\n\nAs a founder, I've had to move fluidly between product strategy, positioning, pricing, growth, interaction design, and implementation constraints — often within the same week.\n\nBuilding an early-stage product also changed how I think about technology. When new tools make almost anything possible, the hard part stops being: what can we build? It becomes: what is actually worth building?\n\nFor us, that meant resisting novelty for novelty's sake. Every feature had to answer a harder question: would this genuinely help people care for their plants more consistently?\n\nSometimes the answer was emotional connection. Sometimes it was reducing uncertainty. Sometimes it was simply making care feel easier.\n\nWe're still early, but building Helia has taught me that good products aren't built by adding more. They're built by understanding what matters enough to keep.",
      },
    ],
  },
  {
    slug: "reveri",
    number: "03",
    title: "Reveri: Designing an AI onboarding, and deciding not to ship it",
    tags: ["AI", "Experimentation", "Product Design"],
    year: "2025",
    description: "Two AI onboarding concepts, tested and shelved, and what that taught the team about designing for probabilistic systems.",
    meta: {
      client: "Reveri",
      role: "Product Design",
      year: "January 2025",
    },
    sections: [
      {
        type: "text",
        heading: "Could AI recreate the feeling of being guided by Dr. Spiegel?",
        body: "At Reveri, we explored an ambitious question: could onboarding feel less like setup and more like stepping into a first session with Dr. David Spiegel?\n\nOur hypothesis was simple: if users could experience the doctor's presence and clinical approach earlier, they might feel relief faster, before ever reaching a paywall.\n\nAt the time, it took users 15 to 20 minutes to reach their first hypnosis session. While the longer onboarding helped educate users and supported retention, we kept coming back to the same question: could we help people feel better, sooner?",
      },
      {
        type: "text",
        heading: "Outcome",
        body: "We explored two onboarding directions powered by AI and tested them internally. In the end, we decided not to ship either.\n\nThe experience felt slower, more rigid, and less natural than we hoped. Instead of helping users reach relief faster, the onboarding was adding friction.\n\nThe biggest insight: we were still designing AI like a traditional flow. Question, answer, repeat. That logic worked for onboarding forms, but broke down in conversation.\n\nAs interactions became more complex, the experience felt increasingly forced. The more we added, the further it moved away from feeling intuitive.\n\nRather than push forward with something that wasn't working, we decided to stop and rethink the problem. That decision changed how our team approached AI across the product.",
      },
      {
        type: "text",
        heading: "Why this was difficult",
        body: "Designing onboarding for AI introduced challenges we hadn't fully encountered before:\n\n• Voice interactions created latency and pacing issues\n• Conversation felt unnatural when users were forced into rigid flows\n• Giving users control (pause, skip, volume, responses) quickly increased complexity\n• Some questions felt easier to answer by tapping, not speaking\n• Designing predictable experiences became harder with probabilistic behavior\n\nWe realized something important: good onboarding logic didn't automatically translate into good AI interaction.",
      },
      {
        type: "image-text",
        alt: "Concept render of the video-guided onboarding with Dr. Spiegel",
        heading: "Iteration 1: Video-guided onboarding",
        body: "Our first prototype imagined onboarding as a guided session with Dr. Spiegel. Users would see him in the background while progressing through a conversational Q&A experience layered through bottom sheets.\n\nThe idea felt emotionally compelling, but practical limitations surfaced quickly. Filming new content would take time, and early AI avatar options didn't feel convincing enough. More importantly, the interaction itself felt too structured to feel conversational.",
        imageLeft: true,
      },
      {
        type: "image-text",
        alt: "Concept render of the beacon-based talk-or-tap onboarding",
        heading: "Iteration 2: Beacon + Talk or Tap",
        body: "We simplified. Instead of video, we introduced a soft animated beacon to represent the doctor's presence. Users could respond through voice or tap, with voice positioned as the default interaction and tap available quietly when needed.\n\nThis version helped reduce visual complexity, but surfaced a deeper issue: the friction wasn't visual, it was conversational. Even after simplifying the interface, interactions still felt slower and less fluid than intended.",
        imageLeft: false,
      },
      {
        type: "text",
        heading: "A smaller, more useful starting point",
        body: "Rather than continue expanding onboarding, we shifted direction. Engineering first scoped what AI could realistically support inside the product, and I partnered closely with them to design around those constraints.\n\nTogether, we built Reveri's first voice-responsive hypnosis session, trained around Dr. Spiegel's clinical approach and designed to help users feel relief from the very beginning.\n\nInstead of a complex onboarding experience, we focused on a much simpler question: what is the smallest interaction that can genuinely help someone feel better?\n\nThe result was a lightweight, focused player built around only what users actually needed.",
      },
      {
        type: "text",
        heading: "What designing for AI changed for me",
        body: "This project changed how I think about product design.\n\nBefore Reveri, I still approached experiences in relatively linear ways: mapping flows, anticipating edge cases, defining expected outcomes. AI challenged that instinct.\n\nI learned that designing for probabilistic systems means working with uncertainty. You can't map every path in advance. Instead, you shape boundaries, collaborate closely with engineering, and design around behavior that won't always be predictable.\n\nMost importantly, I learned that no amount of interface polish matters if the underlying AI doesn't provide real value. That lesson has stayed with me across every AI product I've worked on since.",
      },
    ],
  },
  {
    slug: "reveri-ai-sessions",
    number: "04",
    title: "Reveri: Introducing AI into a clinical pain relief experience",
    tags: ["AI", "Healthcare", "Product Design"],
    year: "2025",
    description: "Redesigning Reveri's hypnosis sessions around real-time, personalized AI guidance, and the trust-building work that came with it.",
    meta: {
      client: "Reveri",
      role: "Product Design",
      year: "March–June 2025",
      tools: ["Figma", "ChatGPT", "Bolt"],
    },
    sections: [
      {
        type: "text",
        heading: "Helping users feel relief, faster and more personally",
        body: "After exploring (and ultimately stepping away from) a more ambitious AI onboarding concept, we shifted toward a smaller but more meaningful question: could AI make Reveri's hypnosis sessions feel more responsive to each person's pain?\n\nBefore AI, sessions followed a fixed structure. Every user received the same guidance, regardless of what hurt, how pain showed up, or what imagery resonated most.\n\nWe saw an opportunity to make sessions more adaptive: listening, responding, and adjusting in real time based on what users shared.",
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
        type: "cards",
        heading: "Two paths into care",
        cards: [
          { title: "Talk Mode", body: "A real-time, conversational experience powered by AI, positioned as the primary entry point into the product." },
          { title: "Listen Mode", body: "A more traditional, audio-only hypnosis experience, kept easily accessible for users who prefer it." },
        ],
      },
      {
        type: "text",
        heading: "Building trust through educational moments",
        body: "Introducing AI into a clinical setting brought a new challenge: uncertainty.\n\nPeople naturally had questions. Will this work for me? Can I use this with pain medication? What exactly am I paying for?\n\nInstead of interrupting the experience with long explanations, we introduced lightweight educational moments designed to appear contextually throughout the session. These moments helped answer concerns early while preserving emotional flow.\n\nWe also saw an interesting signal: users who engaged with these touchpoints during their first sessions showed higher retention over time.",
      },
      {
        type: "text",
        heading: "Fast iteration through prototyping",
        body: "Designing conversational AI required a different workflow than traditional product design.\n\nBecause behavior mattered just as much as interface, static screens alone weren't enough to evaluate the experience.\n\nI used low-fidelity flows, conversational prompts, and Bolt prototypes to simulate interactions before implementation, helping us validate assumptions, align quickly with engineering, and test ideas with beta users before investing heavily in development.\n\nThis made it easier to understand not just how the UI looked, but how the experience actually felt in motion.",
      },
      {
        type: "text",
        heading: "What this project reinforced",
        body: "This work reinforced an important lesson from our earlier onboarding experiments: AI becomes useful when it solves a specific problem well.\n\nThe breakthrough wasn't trying to redesign everything around AI. It was identifying a moment where personalization could meaningfully improve the user experience, and designing around that constraint.\n\nIn this case, helping people feel relief sooner, while feeling more understood in the process.",
      },
    ],
  },
  {
    slug: "nubank",
    number: "05",
    title: "Nubank: Cuenta Nu México",
    tags: ["Fintech", "Design Systems", "Banking"],
    year: "2021–2023",
    description: "Diseñando experiencias bancarias clave para el lanzamiento de Cuenta Nu en México.",
    meta: {
      client: "Nubank México",
      role: "Product Designer, Transactions",
      year: "2021–2023",
    },
    sections: [
      {
        type: "text",
        heading: "Launching a banking product for Mexico",
        body: "When Nubank expanded into Mexico, we faced a challenge beyond localization: adapting a banking product built for Brazil to a very different financial context.\n\nI joined as one of the first designers on the Cuenta Nu team, helping shape key banking experiences for launch, from transfers and credit card payments to account transparency and transaction systems.\n\nWe quickly realized that adapting the product required more than translating existing flows. We had to rethink how people move money, what they expect from banking, local regulations, and how to make financial decisions feel intuitive for Mexican users.",
      },
      {
        type: "text",
        heading: "My role",
        body: "As a Product Designer on the Transactions team, I worked closely with a Design Lead, UX Research, Content Design, Product, and Engineering partners to shape key financial experiences for Cuenta Nu México.\n\nMy focus included transfer flows, credit card payments, account transparency, and transaction systems that helped debit and credit experiences feel more connected as the product evolved.",
      },
      {
        type: "text",
        heading: "Designing with systems in mind",
        body: "As Cuenta Nu launched in Mexico, Nubank was also transitioning toward a new design system. Some product areas had already adopted it, while others still relied on older patterns, creating inconsistencies across shared experiences, especially around transactions.\n\nTo help teams stay aligned as the product grew, I contributed to a set of artifacts that clarified transaction states, interaction logic, and content patterns across debit and credit experiences.\n\nThese helped create more consistency for users, while making it easier for teams to design and build around the same logic.",
      },
      {
        type: "cards",
        heading: "Systems artifacts I contributed to",
        cards: [
          { title: "Feed Detail Anatomy", body: "A component-level breakdown of the transaction detail experience, identifying mandatory vs. optional information and clarifying how content should behave across different scenarios. Became a helpful reference for more consistent design and content decisions." },
          { title: "Feed Item System", body: "Transactions came with a lot of edge cases: pending, settled, reversed, failed. A visual catalog of transaction states and behaviors helped product and engineering teams implement experiences more consistently." },
          { title: "Transactions Map", body: "A system map connecting transaction types to UI states, push notifications, and account statement visibility. Became a shared reference point as teams aligned debit and credit experiences during the transition to the new design system." },
        ],
      },
      {
        type: "text",
        heading: "Simplifying transfers for a different financial context",
        body: "Brazil's transfer experience relied heavily on PIX: fast, direct, and deeply embedded into people's habits. In Mexico, SPEI worked differently, and several assumptions from the original flow created unnecessary friction.\n\nRather than simply localizing the interface, we focused on adapting the experience to local expectations.\n\nI partnered closely with my Design Lead and teammates across research, content, product, and engineering to identify moments that didn't translate well to the Mexican context and redesign the experience to feel more direct, predictable, and familiar.\n\nKey challenge: balancing consistency with Nubank's core product while adapting to a different way people move money.",
      },
      {
        type: "text",
        heading: "Designing credit card payments with clarity",
        body: "As part of launching Cuenta Nu, we introduced a new payment experience that allowed users to pay their Nu credit card directly from their debit account.\n\nResearch surfaced a critical issue: many users struggled to understand the difference between minimum and full payment, sometimes leading to unintentional debt.\n\nInstead of optimizing purely for speed, our team prioritized clarity. I led the design of the payment flow, partnering closely with Content Design and UX Research to make payment decisions easier to understand and less intimidating.\n\nTogether, we tested language, hierarchy, and educational moments to help users better understand payment consequences before confirming.",
      },
      {
        type: "text",
        heading: "Making account statements easier to understand",
        body: "Account statements are usually dense, technical, and difficult to navigate. We saw an opportunity to make them feel more useful: less like a legal document and more like something people could actually understand.\n\nI collaborated with Legal, Finance, Content, and Product partners to restructure information, simplify language, and align the experience with Nubank's transparent tone of voice. We also incorporated insights from Legal Design research to make complex financial information easier to understand.\n\nNo small letters. No overly technical language. Just clearer financial information designed around trust.",
      },
      {
        type: "text",
        heading: "Outcome",
        body: "This work contributed to the public launch of Cuenta Nu in Mexico and helped establish several interaction patterns that remained part of the product as it evolved.\n\nBeyond shipping individual features, it also helped debit and credit experiences feel more connected while improving alignment across design, product, engineering, and content teams.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
