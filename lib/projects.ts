export type Section =
  | { type: "text"; heading: string; body: string }
  | { type: "image"; alt: string; caption?: string }
  | { type: "image-text"; alt: string; heading: string; body: string; imageLeft?: boolean }
  | { type: "cards"; heading: string; cards: { title: string; body: string }[] }
  | { type: "metrics"; heading: string; rows: { label: string; value: string }[] };

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
    title: "Helia: Giving Your Plants a Voice",
    tags: ["AI", "Mobile", "UX Research"],
    year: "2024",
    description: "An AI-powered plant care app that turns care into conversation.",
    meta: {
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
