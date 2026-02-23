import React from "react";
import { projects } from "../data/projects";
import { summarySkills } from "../data/skills";
import { Page } from "../types/pages";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredProject = projects[0];
  const recentProjects = projects.slice(0, 3);

  return (
    <main className="relative z-10">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-neonRed font-semibold">
                Welcome to my portfolio
              </p>
              <h1 className="text-6xl sm:text-7xl font-bold leading-tight text-white drop-shadow-[0_0_30px_rgba(255,26,26,0.3)]">
                Voxxai
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Full-stack engineer crafting modern web experiences with React, TypeScript, and elegant design. I build products that are both performant and delightful.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {summarySkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-neonRed/30 bg-neonRed/5 text-sm text-slate-200 hover:border-neonRed/60 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate("projects")}
                className="px-8 py-3 rounded-lg bg-neonRed text-black font-semibold hover:bg-white transition shadow-glowRed"
              >
                View Work
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:border-neonRed hover:text-neonRed transition"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden">
              <img
                src="/Soul.jpg"
                alt="Soul - Personal branding"
                className="w-full h-full object-cover border border-neonRed/30 rounded-3xl"
              />
              <div className="absolute inset-0 border border-neonRed/50 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-neonRed/20 rounded-2xl p-8 md:p-12 backdrop-blur-xl overflow-hidden relative">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-neonRed/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-neonRed font-semibold mb-3">
              Featured Project
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">
              {featuredProject?.name}
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mb-6 leading-relaxed">
              {featuredProject?.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-neonRed/10 border border-neonRed/40 text-sm text-slate-200">
                {featuredProject?.language}
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/20 text-sm text-slate-300">
                Active Project
              </span>
            </div>
            <a
              href={featuredProject?.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neonRed/10 border border-neonRed/60 text-neonRed font-semibold hover:bg-neonRed hover:text-black transition"
            >
              Explore on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Recent Projects Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Recent Work</h2>
          <p className="text-slate-400">A selection of projects spanning frontend, backend, and game development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map((project) => (
            <a
              key={project.name}
              href={project.html_url}
              target="_blank"
              rel="noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-neonRed/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-neonRed/40 transition h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-neonRed transition">
                      {project.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded font-semibold ${
                      project.archived
                        ? "bg-white/10 text-slate-400"
                        : "bg-neonRed/10 text-neonRed border border-neonRed/30"
                    }`}>
                      {project.archived ? "Archive" : "Active"}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                  <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">
                    {project.language}
                  </span>
                  <span className="text-xs text-neonRed font-semibold ml-auto">View →</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate("projects")}
            className="px-8 py-3 rounded-lg border border-neonRed/60 text-neonRed font-semibold hover:bg-neonRed/10 transition"
          >
            See All Projects
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="bg-gradient-to-r from-neonRed/10 to-neonBlack/10 border border-neonRed/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to collaborate?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new projects and innovative ideas.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="px-8 py-3 rounded-lg bg-neonRed text-black font-semibold hover:bg-white transition shadow-glowRed"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
};
