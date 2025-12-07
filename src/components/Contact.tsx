import React from "react";
import { Page } from "../types/pages";

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
    <main className="relative z-10 mx-auto min-h-screen max-w-3xl px-6 py-12 text-slate-200">
      <button
        onClick={() => onNavigate("home")}
        className="mb-8 flex items-center gap-2 text-neonCyan hover:text-neonPink transition font-mono text-sm group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">
          &lt;
        </span>{" "}
        Back to Home
      </button>

      <div className="neon-panel p-10 flex flex-col gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neonCyan">
            Contact
          </p>
          <h1 className="text-4xl font-bold text-white">
            Let’s build something
          </h1>
          <p className="mt-2 text-slate-300">
            Ping me for collaboration, contracting, or questions about the
            projects and tools showcased here.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-100">
          <a
            href="mailto:contact@voxxai.com"
            className="inline-flex items-center gap-2 rounded-lg border border-neonCyan/60 bg-neonCyan/10 px-4 py-3 font-semibold text-white shadow-glowCyan transition hover:-translate-y-0.5 hover:border-neonPink/60"
          >
            Email me
          </a>
          <a
            href="https://github.com/Voxxai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-neonCyan/60"
          >
            GitHub profile
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate("projects")}
            className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-neonCyan/60"
          >
            View projects
          </button>
          <button
            onClick={() => onNavigate("skills")}
            className="rounded-lg border border-neonPink/60 bg-neonPink/10 px-4 py-2 text-sm font-semibold text-white shadow-glowPink transition hover:-translate-y-0.5 hover:border-neonCyan/60"
          >
            See skills
          </button>
        </div>
      </div>
    </main>
  );
};
