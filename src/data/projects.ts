export type RepoCard = {
  name: string;
  description: string;
  html_url: string;
  language: string;
  archived: boolean;
};

export const projects: RepoCard[] = [
  {
    name: "salaryCalculator",
    description:
      "React/TypeScript tool to calculate shifts, allowances, and totals using Dutch CAO logic.",
    html_url: "https://github.com/Voxxai/salaryCalculator",
    language: "TypeScript",
    archived: false,
  },
  {
    name: "PirateGame",
    description:
      "C# MonoGame pirate prototype featuring ship combat, cannon volleys, and quick exploration loops.",
    html_url: "https://github.com/Voxxai/PirateGame",
    language: "C#",
    archived: true,
  },
  {
    name: "ProjectC",
    description:
      "Full-stack school platform (CRA + Node/Express/MySQL) covering events, news, profiles, and 2FA-secured auth.",
    html_url: "https://github.com/Voxxai/ProjectC",
    language: "JavaScript",
    archived: true,
  },
  {
    name: "Django_Project",
    description:
      "Learning project in Django/Python with CRUD patterns and classic Django templating/auth flows.",
    html_url: "https://github.com/Voxxai/Django_Project",
    language: "Python",
    archived: true,
  },
  {
    name: "PongGame",
    description:
      "Four-player Pong in MonoGame with AI paddles, speed boosts, and scoreboard/lives tracking.",
    html_url: "https://github.com/Voxxai/PongGame",
    language: "C#",
    archived: true,
  },
  {
    name: "SpaceDefence",
    description:
      "MonoGame C# space defense game with custom colliders, AI-driven enemies, and multi-weapon arenas.",
    html_url: "https://github.com/Voxxai/SpaceDefence",
    language: "C#",
    archived: true,
  },
];
