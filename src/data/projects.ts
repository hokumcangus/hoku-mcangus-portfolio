export type Project = {
  description: string
  id: string
  imageUrl?: string
  liveUrl?: string
  sourceUrl?: string
  tags: string[]
  title: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "lovable-demo",
    title: "Lovable Project Demo",
    description:
      "Interactive hosted project with a polished modern interface and smooth user journey.",
    tags: ["TypeScript", "Responsive UI", "External Hosting"],
    liveUrl: "https://lovable.dev/projects/548e2395-db2f-4851-a9f4-b2417a201bd2",
    featured: true,
  },
  {
    id: "portfolio-site",
    title: "Developer Portfolio",
    description:
      "A clean multi-page portfolio experience with reusable components and accessible navigation.",
    tags: ["React", "Vite", "Accessibility"],
    sourceUrl: "https://github.com/hokumcangus/hoku-mcangus-portfolio",
    featured: true,
  },
  {
    id: "task-dashboard",
    title: "Task Dashboard",
    description:
      "A productivity dashboard focused on clear visual hierarchy, quick updates, and mobile-first layouts.",
    tags: ["UI/UX", "Dashboard", "Frontend"],
  },
]
