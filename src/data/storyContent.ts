export const storyContent = {
  hero: {
    kicker: "Aloha",
    title: "Living the Dream",
    subtitle:
      "A story of grit, aloha, and the long walk from Custodian to Full‑Stack Engineer.",
    heading: "Full‑Stack Engineer & Digital Story Dancer",
    ctaPrimary: "Join my ohana",
    ctaSecondary: "Talk story",
  },

  journey: {
    title: "My Journey",
    subtitle: "From Custodian to Software Engineer",
    description:
      "Five chapters. One long chant. Every step taught me something real.",
    chapters: [
      {
        chapter: "Chapter I",
        title: "The Broom & The Dream",
        role: "Custodian — 8+ Years",
        lesson: "Hoomaka — The Beginning",
        text:
          "Night‑shift custodial at UW Bothell. Empty hallways, quiet floors, and a dream that wouldn’t let go. I learned discipline, consistency, and how to solve problems with whatever tools I had. This was the foundation.",
      },
      {
        chapter: "Chapter II",
        title: "First Lines of Code",
        role: "Self‑Taught Beginner",
        lesson: "Ao — To Learn",
        text:
          "Borrowed laptop. Free tutorials. The first 'Hello, World' felt like sunrise. Every loop became a step forward, every function a chant of possibility.",
      },
      {
        chapter: "Chapter III",
        title: "Ada & Bootstraps",
        role: "Ada Developers Academy",
        lesson: "Hana — The Work",
        text:
          "Ada sharpened my skills and gave me the confidence to build real systems. Long nights of debugging, early mornings of studying, and the moment I realized: I can do this.",
      },
      {
        chapter: "Chapter IV",
        title: "Nordstrom & The Offer",
        role: "Software Engineer I",
        lesson: "Lanakila — Victory",
        text:
          "My internship turned into a full‑time offer. I worked across full‑stack development, reliability, and distributed debugging. Custodian keys became an IDE and a Slack handle.",
      },
      {
        chapter: "Chapter V",
        title: "Taste of Aloha",
        role: "Engineer & Helper",
        lesson: "Kuleana — Responsibility",
        text:
          "I returned to help my ‘ohana’s restaurant. Fast‑paced, high‑pressure, full of heart. I started designing a custom ordering app inspired by Menufy and DoorDash — something simple, local, and made with aloha.",
      },
      {
        chapter: "Chapter VI",
        title: "The Warehouse Grind",
        role: "Warehouse Selector — Frito‑Lay",
        lesson: "Ikaika — Strength",
        text:
          "Fast‑paced, tough, and unforgiving. Pulling and boxing Frito‑Lay products sharpened my speed, accuracy, and resilience. It taught me how to stay calm under pressure and move with intention.",
      },
      {
        chapter: "Today",
        title: "Living the Dream",
        role: "AI Trainer & LLM Evaluator",
        lesson: "Mahalo — Gratitude",
        text:
          "I teach AI models how to reason more clearly and evaluate complex outputs. It’s a blend of engineering, analysis, and creativity — and a reminder that origin stories don’t have ceilings.",
      },
    ],
  },

  toolbox: {
    title: "The Toolbox",
    subtitle: "Tools of the dance",
    skills: [
      "TypeScript — Daily driver",
      "React — Comfortable",
      "Node.js — Comfortable",
      "PostgreSQL — Learning deeply",
      "Python — Scripts & tools",
      "AWS — Exploring",
      "Git — Daily driver",
      "Resilience — Black belt",
    ],
    builds: [
      {
        label: "Side Project",
        title: "Halau Helper",
        description:
          "A React + TypeScript app for hula practice schedules, mele lyrics, and ʻōlelo translations.",
      },
      {
        label: "Open Source",
        title: "Lei API",
        description:
          "A small Node service that generates digital lei greetings. Built to learn REST and deployment.",
      },
      {
        label: "From the Trenches",
        title: "Custodial CRM",
        description:
          "A scheduling tool inspired by custodial workflows. Built, shared, and open‑sourced.",
      },
    ],
  },

  compass: {
    title: "The Compass",
    subtitle: "How I build",
    principles: ["Clarity", "Aloha", "Craft", "Story"],
    quote:
      "I build with intention. I build with heart. I build with the stars in mind.",
  },

  connect: {
    title: "Join the ohana",
    intro:
      "Let's talk story! Whether you're hiring, building, or just want to connect.",
    cta: "E komo mai",
    footer: "Mahalo for stopping by! Wishing you and your ohana da best!",
  },
} as const;
