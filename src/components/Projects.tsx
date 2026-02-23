import React from "react";
import { projects } from "../data/projects";
import { Page } from "../types/pages";

interface ProjectsProps {
  onNavigate: (page: Page) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const activeProjects = projects.filter((p) => !p.archived);
  const archivedProjects = projects.filter((p) => p.archived);

  return (
    <main className="relative z-10">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-xl text-slate-300">
            A comprehensive collection of my work spanning frontend, backend, and game development.
          </p>
        </div>

        {/* Active Projects */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-2 bg-neonRed rounded-full" />
            Active Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProjects.map((project) => (
              <a
                key={project.name}
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-neonRed/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-white/5 border border-neonRed/30 rounded-xl p-6 backdrop-blur-xl hover:border-neonRed/60 hover:bg-white/10 transition h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-neonRed mb-3 group-hover:text-white transition">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                    <span className="text-xs bg-neonRed/20 px-3 py-1 rounded-full text-neonRed font-semibold">
                      {project.language}
                    </span>
                    <span className="text-xs text-slate-400 ml-auto">Explore →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Archived Projects */}
        {archivedProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 opacity-75">
              <span className="w-2 h-2 bg-slate-500 rounded-full" />
              Archived Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60">
              {archivedProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative"
                >
                  <div className="relative bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur-xl hover:border-white/40 transition h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-400 mb-3">
                        {project.name}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-slate-400">
                        {project.language}
                      </span>
                      <span className="text-xs text-slate-500 ml-auto">View →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={() => onNavigate("contact")}
            className="px-8 py-3 rounded-lg bg-neonRed text-black font-semibold hover:bg-white transition shadow-glowRed"
          >
            Interested? Let's Talk
          </button>
        </div>
      </section>
    </main>
  );
};
