export const summarySkills: string[] = [
  "React",
  "TypeScript",
  "Tailwind",
  "Node",
  "APIs",
  "Testing",
  "GitHub Pages",
];

export const skillsByCategory: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind", "Vite/CRA", "Accessibility"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express", "REST", "Auth", "PostgreSQL/MySQL"],
  },
  {
    category: "Architecture",
    items: [
      "Component systems",
      "State mgmt",
      "Caching",
      "Error handling",
      "Observability basics",
    ],
  },
  {
    category: "Tooling",
    items: [
      "Git/GitHub",
      "CI/CD",
      "Testing",
      "Storybook",
      "Linters/Formatters",
    ],
  },
  {
    category: "Ops & Hosting",
    items: [
      "GitHub Pages",
      "Docker basics",
      "Monitoring hooks",
      "Cloud deploy patterns",
    ],
  },
];
