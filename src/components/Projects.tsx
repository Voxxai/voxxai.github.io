'use client';

import React, { useEffect, useState } from "react";
import { Page } from "../types/pages";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

interface ProjectsProps {
  onNavigate: (page: Page) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.github.com/users/voxxai/repos");

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data: GitHubRepo[] = await response.json();

        // Filter out forks and sort by updated date (most recent first)
        const filteredRepos = data
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          );

        setRepos(filteredRepos);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An error occurred fetching repos"
        );
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const activeRepos = repos.filter((repo) => !repo.fork);

  // Find salaryCalculator as featured project
  const featuredRepo = activeRepos.find((repo) => repo.name === "salaryCalculator");
  const otherRepos = activeRepos.filter((repo) => repo.name !== "salaryCalculator");

  return (
    <main className="relative z-10">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-xl text-slate-300">
            A comprehensive collection of my work spanning frontend, backend, and game development.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-neonRed mb-4" />
              <p className="text-slate-300">Loading projects...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mb-12 bg-neonRed/10 border border-neonRed/50 rounded-lg p-4">
            <p className="text-neonRed">
              Unable to fetch projects at this moment. Please try again later.
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && repos.length > 0 && (
          <>
            {/* Featured Project */}
            {featuredRepo && (
              <div className="mb-20">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-neonRed rounded-full" />
                  Featured Project
                </h2>
                <a
                  href={featuredRepo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-neonRed/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-white/5 border border-neonRed/30 rounded-xl p-8 backdrop-blur-xl hover:border-neonRed/60 hover:bg-white/10 transition">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-3xl font-bold text-neonRed mb-3 group-hover:text-white transition">
                        {featuredRepo.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                      {featuredRepo.language && (
                        <span className="px-4 py-2 rounded-full bg-neonRed/20 border border-neonRed/40 text-sm text-neonRed font-semibold">
                          {featuredRepo.language}
                        </span>
                      )}
                      {featuredRepo.stargazers_count > 0 && (
                        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-slate-300 flex items-center gap-2">
                          ⭐ {featuredRepo.stargazers_count} stars
                        </span>
                      )}
                      <span className="ml-auto text-neonRed font-semibold text-sm group-hover:text-white transition">
                        View on GitHub →
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            )}

            {/* Other Projects */}
            {otherRepos.length > 0 && (
              <div className="mb-20">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-neonRed rounded-full" />
                  Other Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherRepos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-neonRed/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                      <div className="relative bg-white/5 border border-neonRed/30 rounded-xl p-6 backdrop-blur-xl hover:border-neonRed/60 hover:bg-white/10 transition h-full flex flex-col justify-between">
                        <h3 className="text-lg font-bold text-neonRed mb-3 group-hover:text-white transition truncate">
                          {repo.name}
                        </h3>
                        <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                          {repo.language && (
                            <span className="text-xs bg-neonRed/20 px-3 py-1 rounded-full text-neonRed font-semibold">
                              {repo.language}
                            </span>
                          )}
                          {repo.stargazers_count > 0 && (
                            <span className="text-xs text-slate-400">
                              ⭐ {repo.stargazers_count}
                            </span>
                          )}
                          <span className="text-xs text-slate-400 ml-auto">
                            Explore →
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && repos.length === 0 && !error && (
          <div className="text-center py-20">
            <p className="text-slate-300">No projects found.</p>
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
