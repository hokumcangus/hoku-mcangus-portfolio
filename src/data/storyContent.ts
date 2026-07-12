export const storyContent = {
  hero: {
    kicker: "Aloha, I'm",
    title: "Living the Dream",
    subtitle:
      "From late-night mops to morning standups — a rise-up story with island roots and reggae soul.",
    heading: "Full-Stack Engineer with Island Rhythm",
    ctaPrimary: "Join my ohana",
    ctaSecondary: "Talk story",
  },

  journey: {
    title: "My Journey",
    subtitle: "From Custodian to Software Engineer",
    description:
      "Five tracks. One album. A story built on rhythm, resilience, and roots.",
    chapters: [
      {
        chapter: "Track 1",
        title: "The Broom & The Dream",
        role: "Custodian",
        lesson: "Hoomaka — The Beginning",
        text: "Midnight shifts had their own tempo — the hum of vacuums, the echo of empty halls, and me whispering promises into the quiet. This wasn’t the end of the song. It was the intro.",
      },
      {
        chapter: "Track 2",
        title: "First Lines of Code",
        role: "Self-Taught Beginner",
        lesson: "Ao — To Learn",
        text: "A borrowed laptop, free tutorials, and a dream that refused to fade. My first 'Hello, World' hit like the first chord of a Rebelution track — warm, bright, full of possibility.",
      },
      {
        chapter: "Track 3",
        title: "Bootcamp Grind",
        role: "Student",
        lesson: "Hana — The Work",
        text: "React debugging at 2 AM, custodial shifts at 4 AM, and island reggae in my headphones keeping my heartbeat steady. Three worlds, one rhythm — forward.",
      },
      {
        chapter: "Track 4",
        title: "The Offer",
        role: "Software Engineer I",
        lesson: "Lanakila — Victory",
        text: "One email flipped the beat. Custodian keys traded for an IDE, a badge, and a seat at the table I used to clean. The chorus finally hit.",
      },
      {
        chapter: "Track 5",
        title: "Living the Dream",
        role: "Engineer, Music Lover & Storyteller",
        lesson: "Mahalo — Gratitude",
        text: "Now I build software with the same energy I grew up with — island warmth, steady rhythm, and a belief that every dreamer deserves their own anthem.",
      },
    ],
  },

  toolbox: {
    title: "The Toolbox",
    subtitle: "Instruments of the craft",
    skills: [
      "TypeScript — Daily driver",
      "React — Comfortable",
      "Node.js — Comfortable",
      "PostgreSQL — Learning deeply",
      "Python — Scripts & tools",
      "AWS — Exploring",
      "Git — Daily driver",
      "Resilience — Island strong",
    ],
    builds: [
      {
        label: "Side Project",
        title: "Halau Helper",
        description:
          "A React + TypeScript app for practice schedules, mele lyrics, and ʻōlelo translations — built with aloha and intention.",
      },
      {
        label: "Open Source",
        title: "Lei API",
        description:
          "A small Node service that generates digital lei greetings — a lightweight project tuned to learn REST and deployment.",
      },
      {
        label: "From the Trenches",
        title: "Custodial CRM",
        description:
          "A scheduling tool inspired by real custodial workflows — built to honor the grind that shaped me.",
      },
    ],
  },

  compass: {
    title: "The Compass",
    subtitle: "How I build",
    principles: [
      "Clarity — like a clean mix",
      "Aloha — warmth in every interaction",
      "Craft — tuned with intention",
      "Story — every feature has a melody",
    ],
    quote:
      "I build with rhythm. I build with roots. I build with the kind of hope you feel in your chest when the bassline hits.",
  },

  connect: {
    title: "Join the ohana",
    intro: "Let’s talk story — whether you're hiring, building, or just vibing.",
    cta: "E komo mai",
    footer:
      "Mahalo for stopping by. Wishing you and your ohana good vibes and good days.",
    email: "hoku@example.com", // TODO: replace with real email before shipping
    linkedIn: {
      url: "https://www.linkedin.com/in/hokumcangus",
      label: "linkedin.com/in/hokumcangus",
    },
  },
} as const
