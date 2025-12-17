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
      {/* HERO */}
      <header className="neon-panel relative overflow-hidden p-6 sm:p-10">
        <div className="jinx-rings" aria-hidden>
          <span className="jinx-ring ring-one" />
          <span className="jinx-ring ring-two" />
          <span className="jinx-tracer tracer-one" />
          <span className="jinx-tracer tracer-two" />
          <span className="jinx-spark spark-one" />
          <span className="jinx-spark spark-two" />
        </div>
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-neonCyan">
                Software Engineer
              </p>
              <h1 className="text-4xl font-bold leading-tight text-neonPink sm:text-5xl drop-shadow-[0_0_24px_rgba(255,75,203,0.45)]">
                VOXXAI
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-200">
                I build expressive, resilient products with React, TypeScript,
                and modern tooling. Cyberpunk-infused, shipping-grade code.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 text-sm text-slate-300 sm:items-end sm:text-right">
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
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-neonCyan/60 sm:w-auto"
            >
              About Me
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className="w-full rounded-lg border border-neonCyan/60 bg-neonCyan/10 px-4 py-3 text-sm font-semibold text-white shadow-glowCyan transition hover:-translate-y-0.5 hover:border-neonPink/60 hover:shadow-glowPink sm:w-auto"
            >
              View Projects
            </button>
            <button
              onClick={() => onNavigate("skills")}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-neonCyan/60 sm:w-auto"
            >
              See Skills
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="w-full rounded-lg border border-neonPink/60 bg-neonPink/10 px-4 py-3 text-sm font-semibold text-white shadow-glowPink transition hover:-translate-y-0.5 hover:border-neonCyan/60 sm:w-auto"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* FEATURED TOOL (Live) */}
      <section className="neon-panel p-6 sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.3em] text-neonCyan">
              Featured Tool
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Salary Calculator
            </h2>
            <p className="max-w-xl text-base text-slate-200">
              React + TypeScript tool to calculate shifts and allowances based
              on Dutch CAO rules.
            </p>

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
                href="/salaryCalculator"
                className="inline-flex items-center gap-2 rounded-lg border border-neonCyan/60 bg-gradient-to-r from-neonCyan/15 to-neonPink/15 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-neonPink/70 hover:shadow-glowPink"
              >
                Open Calculator &gt;
              </a>
            </div>
          </div>

          <div className="hidden items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-8 shadow-innerNeon md:flex">
            <span className="text-sm font-semibold text-neonPink">Live</span>
          </div>
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="neon-panel p-6 sm:p-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {previewProjects.map((project) => {
            const isArchived = project.archived;

            return (
              <div
                key={project.name}
                className={`group relative overflow-hidden rounded-2xl border bg-white/5 p-6 backdrop-blur-lg transition
                  ${
                    isArchived
                      ? "border-white/10 opacity-80"
                      : "border-neonCyan/40 hover:-translate-y-1 hover:border-neonPink/60 hover:shadow-glowPink"
                  }`}
              >
                <div className="relative flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {project.name}
                      </h4>
                      <p className="text-sm text-slate-200">
                        {project.description}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide
                        ${
                          isArchived
                            ? "border border-white/25 bg-white/10 text-slate-300"
                            : "border border-neonCyan/50 bg-neonCyan/10 text-neonCyan"
                        }`}
                    >
                      {isArchived ? "Archived" : "Active"}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">
                      {project.language}
                    </span>
                  </div>

                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="pt-2 text-sm font-semibold text-neonCyan transition hover:text-neonPink"
                  >
                    View on GitHub &gt;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
