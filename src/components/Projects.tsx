import React from "react";
import { projects } from "../data/projects";
import { Page } from "../types/pages";

interface ProjectsProps {
  onNavigate: (page: Page) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  return (
    <main className="relative z-10 mx-auto min-h-screen max-w-5xl px-6 py-12 text-slate-200">
      <button
        onClick={() => onNavigate("home")}
        className="mb-8 flex items-center gap-2 text-neonCyan hover:text-neonPink transition font-mono text-sm group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">
          &lt;
        </span>{" "}
        Back to Home
      </button>

      <header className="neon-panel p-10 mb-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neonCyan">
              Projects
            </p>
            <h1 className="text-4xl font-bold text-white">Detailed work</h1>
            <p className="mt-2 max-w-2xl text-slate-300">
              Highlights across frontend, backend, and gameplay experiments.
              Each card links to GitHub.
            </p>
          </div>
          <button
            onClick={() => onNavigate("contact")}
            className="rounded-lg border border-neonPink/60 bg-neonPink/10 px-4 py-2 text-sm font-semibold text-white shadow-glowPink transition hover:-translate-y-0.5 hover:border-neonCyan/60"
          >
            Get in touch
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="neon-panel p-6 flex flex-col gap-4 border border-white/10 bg-white/5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-white drop-shadow-[0_0_12px_rgba(65,243,255,0.25)]">
                  {project.name}
                </h2>
                <p className="mt-1 text-sm text-slate-200 leading-relaxed">
                  {project.description || "No description yet."}
                </p>
              </div>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${
                  project.archived
                    ? "border-white/20 text-slate-300"
                    : "border-neonCyan/60 bg-neonCyan/10 text-neonCyan shadow-glowCyan"
                }`}
              >
                {project.archived ? "Archived" : "Active"}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-slate-100">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                {project.language || "Unknown"}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                GitHub
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neonCyan transition hover:text-neonPink"
              >
                View repository <span aria-hidden>&gt;</span>
              </a>
              <button
                onClick={() => onNavigate("skills")}
                className="text-xs font-semibold text-slate-300 underline-offset-4 hover:text-neonCyan"
              >
                Related skills
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};
