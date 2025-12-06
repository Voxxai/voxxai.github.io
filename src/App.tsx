import React from "react";

const otherProjects = [
  {
    title: "SpaceDefence",
    description:
      "MonoGame C# space defense game with custom collider system, AI-driven enemies, and multiple weapons in a top-down arena.",
    stack: ["C#", "MonoGame"],
    label: "Game dev",
    link: "https://github.com/Voxxai/SpaceDefence",
  },
  {
    title: "ProjectC",
    description:
      "Full-stack school platform with CRA frontend and Node/Express backend, covering events, news, profiles, and 2FA-secured auth.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    label: "Full-stack",
    link: "https://github.com/Voxxai/ProjectC",
  },
  {
    title: "PongGame",
    description:
      "Four-player Pong built in C# MonoGame with AI-controlled paddles, dynamic speed boosts, and scoreboard/lives tracking.",
    stack: ["C#", "MonoGame"],
    label: "Game dev",
    link: "https://github.com/Voxxai/PongGame",
  },
  {
    title: "album-frontend",
    description:
      "React + Material UI single-page app for album CRUD against a REST API, with detail views and validated forms.",
    stack: ["React", "Material UI", "REST"],
    label: "Experimental",
    link: "https://github.com/Voxxai/album-frontend",
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="glow-blob pink" aria-hidden />
      <div className="glow-blob cyan" aria-hidden />
      <div className="absolute inset-0 grid-overlay" aria-hidden />
      <div
        className="absolute inset-0 scanlines pointer-events-none"
        aria-hidden
      />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-12 sm:py-16">
        <header className="neon-panel p-8 sm:p-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.35em] text-neonCyan">
              Software Engineer
            </p>
            <h1 className="text-5xl font-bold leading-tight text-neonPink sm:text-6xl drop-shadow-[0_0_24px_rgba(255,75,203,0.45)]">
              VOXXAI
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              I build expressive, resilient products with React, TypeScript, and
              modern tooling. Cyberpunk-infused, shipping-grade code.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-neonPink/40 bg-neonPink/10 px-3 py-1 shadow-glowPink">
                React
              </span>
              <span className="rounded-full border border-neonCyan/40 bg-neonCyan/10 px-3 py-1 shadow-glowCyan">
                TypeScript
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Tailwind
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                GitHub Pages
              </span>
            </div>
          </div>
        </header>

        <section className="neon-panel p-8 sm:p-10">
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-neonCyan">
                Featured Project
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Salary Calculator
              </h2>
              <p className="max-w-xl text-base text-slate-200">
                React + TypeScript tool to calculate shifts and allowances based
                on Dutch CAO rules.
              </p>
              <div className="neon-divider" />
              <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-200">
                <span className="rounded-full border border-neonPink/60 bg-neonPink/15 px-3 py-1 shadow-glowPink">
                  React
                </span>
                <span className="rounded-full border border-neonCyan/60 bg-neonCyan/15 px-3 py-1 shadow-glowCyan">
                  TypeScript
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                  CAO logic
                </span>
              </div>
              <div className="pt-4">
                <a
                  className="inline-flex items-center gap-2 rounded-lg border border-neonCyan/60 bg-gradient-to-r from-neonCyan/15 to-neonPink/15 px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-neonPink/70 hover:shadow-glowPink"
                  href="/salaryCalculator"
                >
                  View the tool &gt;
                </a>
              </div>
            </div>
            <div className="hidden h-full min-w-[180px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-6 shadow-innerNeon sm:flex">
              <div className="text-center text-sm text-slate-200">
                <p className="text-neonPink font-semibold">Live</p>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  /salaryCalculator
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="neon-panel p-8 sm:p-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neonCyan">
                  Other Projects
                </p>
                <h3 className="text-3xl font-semibold text-white">
                  Selected work from GitHub
                </h3>
              </div>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200">
                Curated by Voxxai
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition duration-200 hover:-translate-y-1 hover:border-neonPink/60 hover:shadow-glowPink"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 bg-gradient-to-br from-neonPink/10 via-transparent to-neonCyan/10"
                    aria-hidden
                  />
                  <div className="relative flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-semibold text-white drop-shadow-[0_0_12px_rgba(65,243,255,0.25)]">
                          {project.title}
                        </h4>
                        <p className="text-sm text-slate-200 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <span className="rounded-full border border-neonCyan/50 bg-neonCyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-neonCyan">
                        {project.label}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <a
                        className="inline-flex items-center gap-2 text-sm font-semibold text-neonCyan transition hover:text-neonPink"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View on GitHub
                        <span aria-hidden>&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="neon-panel p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neonCyan">
                More coming soon
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Stay tuned for the next drop
              </h3>
              <p className="mt-2 max-w-xl text-base text-slate-200">
                Building new experiments and tools with a neon, anime-adjacent
                edge. Check back for fresh deployments.
              </p>
            </div>
            <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-neonPink shadow-glowPink">
              <span className="text-xl">*</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto flex max-w-5xl flex-col gap-2 px-6 pb-12 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <span>Deployed via GitHub Pages · voxxai.nl</span>
        <a
          className="inline-flex items-center gap-2 text-neonCyan transition hover:text-neonPink"
          href="https://github.com/Voxxai"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-lg" aria-hidden>
            [GH]
          </span>
          GitHub
        </a>
      </footer>
    </div>
  );
};

export default App;
