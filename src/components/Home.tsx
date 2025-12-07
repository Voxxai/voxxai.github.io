import React from "react";
import { projects } from "../data/projects";
import { summarySkills } from "../data/skills";
import { Page } from "../types/pages";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const previewProjects = projects.slice(0, 4);

  return (
    <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-12 sm:py-16">
      <header className="neon-panel p-8 sm:p-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-neonCyan">
                Software Engineer
              </p>
              <h1 className="text-5xl font-bold leading-tight text-neonPink sm:text-6xl drop-shadow-[0_0_24px_rgba(255,75,203,0.45)]">
                VOXXAI
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-200">
                I build expressive, resilient products with React, TypeScript,
                and modern tooling. Cyberpunk-infused, shipping-grade code.
              </p>
            </div>
            <div className="flex flex-col items-end gap-3 text-right text-sm text-slate-300">
              <span className="rounded-full border border-neonPink/40 bg-neonPink/10 px-3 py-1 shadow-glowPink">
                React + TS
              </span>
              <span className="rounded-full border border-neonCyan/40 bg-neonCyan/10 px-3 py-1 shadow-glowCyan">
                UI Systems
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Shipping fast
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            {summarySkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("about")}
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-neonCyan/60"
            >
              About Me
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className="rounded-lg border border-neonCyan/60 bg-neonCyan/10 px-4 py-3 text-sm font-semibold text-white shadow-glowCyan transition hover:-translate-y-0.5 hover:border-neonPink/60 hover:shadow-glowPink"
            >
              View Projects
            </button>
            <button
              onClick={() => onNavigate("skills")}
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-neonCyan/60"
            >
              See Skills
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="rounded-lg border border-neonPink/60 bg-neonPink/10 px-4 py-3 text-sm font-semibold text-white shadow-glowPink transition hover:-translate-y-0.5 hover:border-neonCyan/60"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      <section className="neon-panel p-8 sm:p-10">
        <div className="flex items-start justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <p className="text-xs uppercase tracking-[0.3em] text-neonCyan">
                Featured Tool
              </p>
              <button
                onClick={() => onNavigate("projects")}
                className="text-xs font-semibold text-neonPink underline-offset-4 hover:underline"
              >
                more projects
              </button>
            </div>
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
                Open Calculator (External) &gt;
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
              Curated static showcase
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {previewProjects.map((project) => (
              <div
                key={project.name}
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
                        {project.name}
                      </h4>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {project.description?.trim() || "No description yet."}
                      </p>
                    </div>
                    <span className="rounded-full border border-neonCyan/50 bg-neonCyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-neonCyan">
                      Active
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100">
                      {project.language || "Unknown"}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-100">
                      GitHub
                    </span>
                  </div>

                  <div className="pt-2">
                    <a
                      className="inline-flex items-center gap-2 text-sm font-semibold text-neonCyan transition hover:text-neonPink"
                      href={project.html_url}
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
    </main>
  );
};
