import React from "react";
import { Page } from "../types/pages";

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
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

      <div className="neon-panel p-10">
        <h1 className="text-4xl font-bold text-white mb-6">About Voxxai</h1>
        <p className="mb-4 text-lg leading-relaxed">
          This is an internal page example. Because we are using state-based
          routing, switching to this page happens instantly without a browser
          reload.
        </p>
        <p className="text-slate-400">
          You can expand this section with your bio, resume, or contact form
          later.
        </p>
      </div>
    </main>
  );
};
