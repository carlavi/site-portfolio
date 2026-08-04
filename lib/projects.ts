export type Section =
  | { type: "text"; heading: string; body: string; hideSeparator?: boolean }
  | { type: "image"; src?: string; alt: string; caption?: string; fit?: "cover" | "contain"; imgWidth?: number; imgHeight?: number }
  | { type: "image-text"; alt: string; heading: string; body: string; imageLeft?: boolean }
  | { type: "cards"; heading: string; cards: { title: string; body: string }[] }
  | { type: "metrics"; heading: string; rows: { label: string; value: string }[] }
  | { type: "snapshot"; heading: string; items: { label: string; value: string }[] };

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
};

export const projects: Project[] = [
  {
    slug: "helia",
    number: "02",
    name: "Helia",
    coverSpan: "full",
    title: "Helia: Turning plant care from a responsibility into a relationship",
    tags: ["Mobile", "Product Strategy", "Founder"],
    year: "2025 – Present",
    description: "I co-founded Helia and led the product from an early hypothesis to a live plant care experience used to identify, understand, and build a more personal relationship with plants.",
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
          { label: "Team", value: "Two-person founding team" },
          { label: "Timeline", value: "2025–Present" },
          { label: "Scope", value: "Product strategy, UX/UI, frontend implementation, pricing, brand, growth, and product operations" },
          { label: "Early signals", value: "117 registered users · 517 plant analyses · 85%+ scan completion rate · Advanced to Stage 2 of 500 Global's selection process" },
        ],
      },
      {
        type: "text",
        heading: "People didn't stop caring because information was unavailable. They stopped when confidence and motivation faded.",
        body: "Most plant care products focus on information: watering reminders, care guides, and species databases.\n\nBut plant owners already have access to more advice than they can realistically process. The harder problem is knowing which advice to trust, understanding what applies to a specific plant, and staying motivated once care begins to feel like another responsibility.\n\nWe started with a hypothesis:\n\nA stronger emotional connection could help people care for their plants more consistently.\n\nThat idea became Helia, a plant care product designed to make care feel more personal, approachable, and easier to sustain over time.",
      },
      {
        type: "text",
        heading: "We made emotional connection part of the care model, not a decorative layer on top of it.",
        body: "Instead of treating plants as entries in a database, Helia makes each one feel present within the product.\n\nPeople can identify a plant, save it to their garden, receive curated care guidance, ask contextual questions, and talk with it through a distinct conversational personality.\n\nThe plant becomes the interface through which care is understood.\n\nThis changed the experience from:\n\nSearch → Interpret → Remember\n\nto:\n\nScan → Understand → Ask → Care\n\nThe goal was not to make plants talking feel novel. It was to use personality and conversation to reduce distance between receiving advice and acting on it.",
      },
      {
        type: "text",
        heading: "Utility created trust. Personality gave people a reason to return.",
        body: "One of our biggest product tensions was balancing practical value with emotional connection.\n\nToo much utility made Helia feel like another plant database. Too much personality risked making the experience feel entertaining but unreliable.\n\nWe designed around both needs:\n\n• Curated guidance reduced contradictory or overwhelming advice\n• Plant histories gave conversations useful context\n• Personalities made individual plants feel distinct\n• Care actions and reminders connected conversation to real behavior\n• Contextual questions let people ask what mattered in the moment\n\nEvery emotional interaction needed to support a practical outcome: greater confidence, clearer next steps, or a stronger reason to keep caring.",
      },
      {
        type: "text",
        heading: "Early behavior showed stronger core value than initial activation.",
        body: "We instrumented Helia from the beginning to understand where people moved forward, where they abandoned the experience, and which behaviors repeated.\n\nThe scan flow reached a completion rate above 85% once users started it. People also completed 517 plant analyses across 117 registered accounts, suggesting that usage extended beyond a single curiosity-driven scan.\n\nThis helped us distinguish two different product challenges:\n\nActivation still needed work. Getting people into the first meaningful interaction required clearer onboarding and stronger expectation-setting.\n\nThe core experience showed more promising signals. Once people began scanning and exploring their plants, they frequently completed the flow and returned to analyze additional plants.\n\nThe next challenge was no longer proving that people found the concept interesting. It was turning that initial interest into an ongoing care habit.",
      },
      {
        type: "text",
        heading: "A two-person team forced strategy, design, and execution to operate as one system.",
        body: "Helia is built and operated by two people.\n\nI lead product strategy, UX/UI, frontend implementation, pricing, positioning, brand, growth experiments, and day-to-day product decisions. My co-founder leads backend systems, infrastructure, application distribution, and legal operations.\n\nAt this scale, product decisions cannot be separated from technical and business constraints.\n\nA new feature affects infrastructure cost. A pricing decision changes product architecture. A growth experiment reveals onboarding problems. A conversational behavior can alter trust in the entire experience.\n\nWorking this way has required constant movement between framing the problem, designing the experience, shipping the product, and evaluating what happened next.",
      },
      {
        type: "text",
        heading: "Building Helia changed the question from \"What can we make?\" to \"What is worth making?\"",
        body: "New technology makes it increasingly easy to generate ideas, interfaces, and features. That abundance makes product judgment more important, not less.\n\nBuilding Helia pushed me beyond designing screens and into the full set of decisions required to sustain a product: what to prioritize, what to postpone, what people might pay for, how much uncertainty is acceptable, and which behaviors genuinely indicate value.\n\nFor us, that has meant resisting novelty for its own sake.\n\nSometimes the right answer is emotional connection. Sometimes it is clearer guidance. Sometimes it is simply removing enough friction for someone to care confidently.\n\nThe product becomes stronger not when we add more, but when we understand what matters enough for people to return.",
      },
    ],
  },
  {
    slug: "yalocode",
    number: "01",
    name: "YaloCode",
    coverSpan: "half",
    hero: "/images/yalocode/yalocode.jpeg",
    title: "YaloCode: From six-month implementations to self-serve agent delivery",
    tags: ["AI", "Enterprise", "Product Design"],
    year: "2026 – Present",
    description: "Designing a hybrid workspace that helped non-technical teams build, test, and launch enterprise WhatsApp agents in under two weeks.",
    meta: {
      client: "Yalo",
      role: "Senior Product Designer",
      year: "February 2026 – Present",
    },
    sections: [
      {
        type: "snapshot",
        heading: "Project Snapshot",
        items: [
          { label: "Role", value: "Senior Product Designer" },
          { label: "Team", value: "Product Manager, Tech Manager, Design Lead, Frontend and Backend Engineers" },
          { label: "Timeline", value: "February 2026 – Present" },
          { label: "Scope", value: "Product definition, end-to-end UX, interaction systems, information architecture and frontend implementation" },
          { label: "Impact", value: "104 active users · 4.5/5 CSAT · Delivery reduced from up to six months to under two weeks" },
        ],
      },
      {
        type: "text",
        heading: "The transformation",
        body: "Yalo had already built many of the capabilities required to create and operate enterprise conversational agents. But accessing them required deep platform knowledge, technical workflows, and support from experienced engineers.\n\nYaloCode transformed those capabilities into a natural-language workspace where teams could build, configure, test, and manage agents without needing to understand the complexity of the underlying platform. What began as an internal experiment is now used across Yalo teams and external implementation partners.\n\nBefore YaloCode:\n• Up to six months to launch\n• Multiple team handoffs\n• High engineering dependency\n• Customer feedback based primarily on mockups\n• Critical knowledge concentrated among experienced platform users\n\nWith YaloCode:\n• Working agents in under two weeks\n• Earlier customer validation\n• More autonomous internal teams\n• Reusable workflows and institutional knowledge\n• A common workspace for building, testing and reviewing",
      },
      {
        type: "text",
        heading: "The organizational bottleneck",
        body: "The problem was not missing capability. It was access.\n\nAs AI adoption accelerated, one of Yalo's central objectives was to reduce implementation time and improve customer time-to-value. At the time, launching a WhatsApp agent for an enterprise client could take up to six months. Delivery required coordination across multiple teams, extensive engineering support, and long periods in which customers could review only mockups rather than interact with a working solution.\n\nMany of the necessary platform capabilities already existed. However, they were distributed across technical tools, undocumented workflows, and institutional knowledge that only experienced engineers and platform specialists possessed.\n\nThe product challenge was not to create more capability, but to make existing capability understandable, operable, and reusable across the organization.",
      },
      {
        type: "text",
        heading: "Who we were designing for",
        body: "YaloCode served teams with very different responsibilities: Customer Success Managers delivering client implementations, Sales teams creating demos, Conversational Designers building experiences, engineers extending the platform, and Marketing teams launching internal initiatives.\n\nTheir goals varied, but their constraint was the same: they needed access to powerful platform capabilities without becoming platform experts.",
      },
      {
        type: "cards",
        heading: "Shared constraint, different goals",
        cards: [
          { title: "Deliver", body: "Customer Success and implementation teams needed to create and modify real client solutions without waiting for specialized engineering support." },
          { title: "Demonstrate", body: "Sales and Marketing teams needed to turn ideas into working experiences quickly enough to use in demos and campaigns." },
          { title: "Build and extend", body: "Conversational Designers and Engineers needed greater speed without losing control, visibility, or technical depth." },
        ],
      },
      {
        type: "text",
        heading: "My role",
        body: "Turning an internal prototype into an operational product\n\nI joined YaloCode after its initial hackathon prototype and early internal validation. My responsibility was to help turn a promising technical concept into a product that non-technical teams could use confidently in real delivery workflows.\n\nI partnered closely with Product, Engineering, Design, and Leadership to define how complex platform capabilities should be exposed, how users would collaborate with the agent, and where conversational interaction needed to give way to more structured interfaces.\n\nProduct direction:\n• Framed end-to-end workflows for creating and managing agents\n• Defined information architecture and product structure\n• Aligned product and engineering stakeholders around user needs and interaction principles\n\nInteraction system:\n• Designed how users communicated and collaborated with YaloCode\n• Created reusable skills and behavioral instructions\n• Defined structured in-chat widgets for reviewing, editing and validating generated work\n\nDelivery:\n• Designed high-fidelity workflows and interaction states\n• Worked directly with engineers throughout implementation\n• Contributed frontend pull requests to help ship the experience",
      },
      {
        type: "image",
        src: "/images/yalocode/chat-ui-gallery.jpeg",
        alt: "YaloCode chat UI gallery",
      },
      {
        type: "text",
        heading: "01. Designing for operators, not platform experts",
        body: "The existing platform reflected its technical architecture. YaloCode needed to reflect the way internal teams thought about their work.\n\nInstead of requiring users to navigate platform concepts, configurations, and undocumented dependencies, we made their intent the starting point. Users could describe what they wanted to create or change, while YaloCode translated those requests into the operations required by the platform.\n\nNatural language did not eliminate the underlying complexity. It gave the product a new way to orchestrate it.",
      },
      {
        type: "text",
        heading: "02. When conversation stopped being the simplest interface",
        body: "Early versions of YaloCode relied heavily on chat. This worked well for expressing intent, asking questions, and triggering simple actions.\n\nIt became less effective as users moved into operational work. Reviewing large outputs, comparing configurations, validating generated content, and identifying errors required more structure than a stream of messages could provide.\n\nUsers could ask YaloCode to perform complex work, but understanding and controlling the result was becoming increasingly difficult.",
      },
      {
        type: "text",
        heading: "A hybrid model of conversation and interface",
        body: "Rather than forcing users to switch between a chatbot and a separate administrative product, we introduced structured widgets directly within the conversation.\n\nNatural language remained the entry point and orchestration layer. When a task required scanning, comparison, editing, or approval, the response became an interface. This allowed us to preserve the flexibility of conversation while introducing the visibility and control required for enterprise workflows.\n\nChat orchestrated the work. Structured interfaces made the work understandable and actionable.",
      },
      {
        type: "cards",
        heading: "Widget examples",
        cards: [
          { title: "Test plan summaries", body: "Scannable overviews of generated test plans, with direct access to the next action." },
          { title: "Configuration outputs", body: "Structured representations of agent settings that users could review without parsing long conversational responses." },
          { title: "Review and validation states", body: "Inline components for approving, editing, retrying, or flagging generated work." },
        ],
      },
      {
        type: "image",
        src: "/images/yalocode/widget.jpeg",
        alt: "YaloCode structured in-chat widget",
      },
      {
        type: "text",
        heading: "03. Designing verification into the workflow",
        body: "Generating an output was not the same as completing the work.\n\nIn enterprise delivery, users needed to understand what YaloCode had changed, validate whether the result was correct, and know what would happen next. Without those signals, greater automation could also create greater uncertainty.\n\nWe designed review and validation as part of the interaction itself, rather than treating them as secondary states after generation, through patterns like progress and status, previews, summaries of changes, validation results, confirmation before consequential actions, editing and retrying, and clear recovery from errors.\n\nThe goal was not to make YaloCode appear autonomous. It was to give users the right level of confidence and control to delegate meaningful work to it.",
      },
      {
        type: "text",
        heading: "Designing the operating system",
        body: "YaloCode's experience was shaped not only through screens, but through the instructions, skills, structures, and interaction rules that determined how the product behaved.\n\nI worked on the system connecting user intent, agent behavior, generated outputs, and interface responses. This included defining reusable skills, behavioral instructions, response structures, and the conditions under which YaloCode should respond conversationally or render a structured component.\n\nUser intent → Skill selection → Platform action → Generated result → Structured response → Review or next action",
      },
      {
        type: "cards",
        heading: "Three layers of the system",
        cards: [
          { title: "Intent", body: "How users describe their goals without needing platform terminology." },
          { title: "Behavior", body: "How skills and instructions guide YaloCode through repeatable workflows." },
          { title: "Interface", body: "How outputs are rendered according to the task: conversation, structured content, validation or action." },
        ],
      },
      {
        type: "metrics",
        heading: "Adoption and impact",
        rows: [
          { label: "Active users", value: "104 of ~150 internal" },
          { label: "CSAT score", value: "4.5 / 5" },
          { label: "WhatsApp agent delivery", value: "Up to 6 months → under 2 weeks" },
        ],
      },
      {
        type: "text",
        heading: "What adoption looked like",
        body: "Beyond the headline numbers:\n\n• Expanded from internal teams to external implementation partners\n• Power users regularly work with 10–20 active skills\n• Some power users have created more than 200 reusable prompts and workflows\n• YaloCode is replacing parts of the legacy delivery workflow\n\nOne Conversational Designer summarized the impact best:\n\n\"Now almost 95% of my work happens in YaloCode. I barely open our legacy flow platform anymore.\"",
      },
      {
        type: "text",
        heading: "Making power usable",
        body: "YaloCode reinforced that giving users access to powerful technology is not the same as making that technology usable.\n\nAdoption depended on translating platform complexity into workflows teams could understand, making generated work visible and reviewable, and giving users enough control to trust the product in real delivery scenarios.\n\nThe product became valuable not because conversation replaced every interface, but because we learned when conversation was the right tool, and when structure needed to take over.\n\nThe most important shift was not making the platform more powerful. It was making its existing power accessible to the rest of the organization.",
      },
    ],
  },
  {
    slug: "reveri-ai-sessions",
    number: "03",
    name: "Reveri: AI Sessions",
    coverSpan: "half",
    pageTheme: "dark",
    hero: "/images/reveri-ai-sessions/02%20ReveriAI.jpg",
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
  },
  {
    slug: "nubank",
    number: "05",
    name: "Nubank",
    coverSpan: "full",
    hero: "/images/nubank/NuCuenta%20Cover.jpg",
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
        type: "image",
        src: "/images/nubank/Feed%20Detail%20Anatomy.jpg",
        alt: "Feed Detail Anatomy",
        fit: "contain",
        imgWidth: 2490,
        imgHeight: 1621,
      },
      {
        type: "image",
        src: "/images/nubank/Feed%20Item%20System.jpg",
        alt: "Feed Item System",
        fit: "contain",
        imgWidth: 2490,
        imgHeight: 1620,
      },
      {
        type: "image",
        src: "/images/nubank/Nu%20Transfers.jpg",
        alt: "Nu Transfers flow",
        fit: "contain",
        imgWidth: 2490,
        imgHeight: 1620,
      },
      {
        type: "text",
        hideSeparator: true,
        heading: "Simplifying transfers for a different financial context",
        body: "Brazil's transfer experience relied heavily on PIX: fast, direct, and deeply embedded into people's habits. In Mexico, SPEI worked differently, and several assumptions from the original flow created unnecessary friction.\n\nRather than simply localizing the interface, we focused on adapting the experience to local expectations.\n\nI partnered closely with my Design Lead and teammates across research, content, product, and engineering to identify moments that didn't translate well to the Mexican context and redesign the experience to feel more direct, predictable, and familiar.\n\nKey challenge: balancing consistency with Nubank's core product while adapting to a different way people move money.",
      },
      {
        type: "image",
        src: "/images/nubank/Nu%20CC%20Payment.jpg",
        alt: "Nu credit card payment flow",
        fit: "contain",
        imgWidth: 2490,
        imgHeight: 1620,
      },
      {
        type: "text",
        hideSeparator: true,
        heading: "Designing credit card payments with clarity",
        body: "As part of launching Cuenta Nu, we introduced a new payment experience that allowed users to pay their Nu credit card directly from their debit account.\n\nResearch surfaced a critical issue: many users struggled to understand the difference between minimum and full payment, sometimes leading to unintentional debt.\n\nInstead of optimizing purely for speed, our team prioritized clarity. I led the design of the payment flow, partnering closely with Content Design and UX Research to make payment decisions easier to understand and less intimidating.\n\nTogether, we tested language, hierarchy, and educational moments to help users better understand payment consequences before confirming.",
      },
      {
        type: "image",
        src: "/images/nubank/Nu%20Account%20Statement.jpg",
        alt: "Nu account statement design",
        fit: "contain",
        imgWidth: 2490,
        imgHeight: 1620,
      },
      {
        type: "text",
        hideSeparator: true,
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
  {
    slug: "reveri",
    number: "04",
    name: "Reveri: Onboarding",
    coverSpan: "half",
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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
