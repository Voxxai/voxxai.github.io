import React from "react";
import { skillsByCategory } from "../data/skills";
import { Page } from "../types/pages";

interface SkillsProps {
  onNavigate: (page: Page) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onNavigate }) => {
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
              Skills
            </p>
            <h1 className="text-4xl font-bold text-white">Capabilities</h1>
            <p className="mt-2 max-w-2xl text-slate-300">
              Stacks, patterns, and delivery skills used across projects.
            </p>
          </div>
          <button
            onClick={() => onNavigate("projects")}
            className="rounded-lg border border-neonCyan/60 bg-neonCyan/10 px-4 py-2 text-sm font-semibold text-white shadow-glowCyan transition hover:-translate-y-0.5 hover:border-neonPink/60"
          >
            View projects
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillsByCategory.map((group) => (
          <article
            key={group.category}
            className="neon-panel p-6 border border-white/10 bg-white/5"
          >
            <h2 className="text-xl font-semibold text-white drop-shadow-[0_0_12px_rgba(65,243,255,0.25)]">
              {group.category}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-100">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <button
          onClick={() => onNavigate("contact")}
          className="rounded-lg border border-neonPink/60 bg-neonPink/10 px-4 py-2 text-sm font-semibold text-white shadow-glowPink transition hover:-translate-y-0.5 hover:border-neonCyan/60"
        >
          Contact
        </button>
        <button
          onClick={() => onNavigate("about")}
          className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-neonCyan/60"
        >
          About me
        </button>
      </div>
    </main>
  );
};
