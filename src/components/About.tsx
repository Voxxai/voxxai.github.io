import React from "react";
import { Page } from "../types/pages";

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <main className="relative z-10 mx-auto min-h-screen max-w-3xl px-6 py-12 text-slate-200">
      {/* Back button */}
      <button
        onClick={() => onNavigate("home")}
        className="mb-8 flex items-center gap-2 font-mono text-sm text-neonCyan transition hover:text-neonPink group"
      >
        <span className="transition-transform group-hover:-translate-x-1">
          &lt;
        </span>
        Back to Home
      </button>

      {/* Content */}
      <div className="neon-panel p-6 sm:p-10">
        <h1 className="mb-6 text-4xl font-bold text-white">About Voxxai</h1>

        <p className="mb-4 text-lg leading-relaxed">
          Hey, I’m <span className="font-semibold text-neonCyan">Voxxai</span> —
          a software engineer with a strong focus on modern web development,
          automation, and building things that actually feel good to use.
        </p>

        <p className="mb-4 text-lg leading-relaxed text-slate-300">
          I work primarily with{" "}
          <span className="text-white">React, TypeScript, and Node.js</span>,
          alongside modern tooling for APIs, CI/CD, and cloud-based workflows. I
          enjoy turning complex problems into clean, maintainable solutions.
        </p>

        <p className="mb-4 text-lg leading-relaxed text-slate-300">
          Outside of coding, I’m deeply into{" "}
          <span className="text-white">gaming, anime, and tech culture</span>.
          That influence shows up in my work through sleek UI, attention to
          detail, and a preference for bold, futuristic design.
        </p>

        <p className="text-slate-400">
          This site is my playground — a place to experiment, learn, and
          showcase projects I’m proud of. More coming soon.
        </p>
      </div>
    </main>
  );
};
