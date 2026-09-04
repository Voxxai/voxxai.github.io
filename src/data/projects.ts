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
      "Salary and shift calculator with automatic allowance detection, break calculations and local data storage.",
    html_url: "https://github.com/Voxxai/salaryCalculator",
    language: "TypeScript",
    archived: false,
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
];
