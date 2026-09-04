export type RepoCard = {
  name: string;
  description: string;
  html_url: string;
  language: string;
  archived: boolean;
};

export const projects: RepoCard[] = [
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
