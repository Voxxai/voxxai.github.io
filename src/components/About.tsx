import React from "react";
import { Page } from "../types/pages";

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <main className="relative z-10">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            I'm Voxxai, a full-stack engineer passionate about building elegant, performant web experiences.
          </p>
        </div>

        <div className="space-y-12">
          {/* Background */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Background</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              I specialize in modern web development with a focus on React and TypeScript. My expertise spans frontend architecture, API design, and building scalable systems. I've worked on everything from interactive tools to full-stack applications.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Beyond code, I'm deeply into gaming, anime, and tech culture—influences that shape my design philosophy toward sleek, bold, and user-centric interfaces.
            </p>
          </div>

          {/* Philosophy */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-white mb-4">My Philosophy</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-neonRed font-bold mt-1">•</span>
                <span><strong className="text-white">Clean Code:</strong> Maintainable, readable, and well-documented solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neonRed font-bold mt-1">•</span>
                <span><strong className="text-white">User First:</strong> Design and performance decisions centered on user experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neonRed font-bold mt-1">•</span>
                <span><strong className="text-white">Shipping Fast:</strong> Rapid iteration while maintaining quality standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neonRed font-bold mt-1">•</span>
                <span><strong className="text-white">Continuous Learning:</strong> Staying updated with modern tooling and best practices</span>
              </li>
            </ul>
          </div>

          {/* Current Focus */}
          <div className="bg-gradient-to-br from-neonRed/10 to-neonBlack/10 border border-neonRed/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Current Focus</h2>
            <p className="text-slate-300 leading-relaxed">
              I'm currently focused on building scalable React applications, exploring state management patterns, and diving deeper into performance optimization. I'm always looking for interesting projects and collaboration opportunities.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate("projects")}
            className="px-8 py-3 rounded-lg bg-neonRed text-black font-semibold hover:bg-white transition shadow-glowRed"
          >
            See My Work
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:border-neonRed hover:text-neonRed transition"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </main>
  );
};
