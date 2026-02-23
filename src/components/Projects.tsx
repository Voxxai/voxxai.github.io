'use client';

import React, { useEffect, useState } from 'react';
import { Page } from '../types/pages';
import { projects as localProjects } from '../data/projects';
import { ProjectSkeleton } from './ProjectSkeleton';

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

interface MergedProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  updated_at: string;
  isFeatured?: boolean;
  archived: boolean;
}

interface ProjectsProps {
  onNavigate: (page: Page) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const [projects, setProjects] = useState<MergedProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndMergeRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/voxxai/repos');

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const githubData: GitHubRepo[] = await response.json();

        // Merge local data with GitHub API data
        const mergedProjects: MergedProject[] = localProjects.map((localProject) => {
          const githubProject = githubData.find(
            (repo) => repo.name.toLowerCase() === localProject.name.toLowerCase()
          );

          return {
            id: githubProject?.id || Math.random(),
            name: localProject.name,
            description: localProject.description,
            html_url: localProject.html_url,
            language: localProject.language,
            stargazers_count: githubProject?.stargazers_count || 0,
            updated_at: githubProject?.updated_at || new Date().toISOString(),
            isFeatured: localProject.name === 'salaryCalculator',
            archived: localProject.archived,
          };
        });

        // Sort by: featured first, then by updated date
        const sortedProjects = mergedProjects.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });

        setProjects(sortedProjects);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An error occurred fetching repos'
        );
        // Fallback to local data if API fails
        const fallbackProjects = localProjects.map((project, index) => ({
          id: index,
          name: project.name,
          description: project.description,
          html_url: project.html_url,
          language: project.language,
          stargazers_count: 0,
          updated_at: new Date().toISOString(),
          isFeatured: project.name === 'salaryCalculator',
          archived: project.archived,
        }));
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchAndMergeRepos();
  }, []);

  const activeProjects = projects.filter((project) => !project.archived);
  const featuredProject = activeProjects.find((project) => project.isFeatured);
  const otherProjects = activeProjects.filter((project) => !project.isFeatured);

  return (
    <main className="relative z-10">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-xl text-slate-300">
            A comprehensive collection of my work spanning frontend, backend, and game development.
          </p>
        </div>

        {/* Loading State with Skeletons */}
        {loading && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-neonRed rounded-full" />
              Featured Project
            </h2>
            <div className="mb-20">
              <ProjectSkeleton />
            </div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-neonRed rounded-full" />
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mb-12 bg-neonRed/10 border border-neonRed/50 rounded-lg p-4">
            <p className="text-neonRed">
              Note: Using cached project data. Live GitHub stats unavailable.
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && projects.length > 0 && (
          <>
            {/* Featured Project */}
            {featuredProject && (
              <div className="mb-20">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-neonRed rounded-full" />
                  Featured Project
                </h2>
                <a
                  href={featuredProject.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-neonRed/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-white/5 border border-neonRed/30 rounded-xl p-8 backdrop-blur-xl hover:border-neonRed/60 hover:bg-white/10 transition">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-3xl font-bold text-neonRed mb-3 group-hover:text-white transition">
                        {featuredProject.name}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                      {featuredProject.language && (
                        <span className="px-4 py-2 rounded-full bg-neonRed/20 border border-neonRed/40 text-sm text-neonRed font-semibold">
                          {featuredProject.language}
                        </span>
                      )}
                      {featuredProject.stargazers_count > 0 && (
                        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-slate-300 flex items-center gap-2">
                          ⭐ {featuredProject.stargazers_count} stars
                        </span>
                      )}
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/20 text-sm text-slate-300">
                        Updated {new Date(featuredProject.updated_at).toLocaleDateString()}
                      </span>
                      <span className="ml-auto text-neonRed font-semibold text-sm group-hover:text-white transition">
                        View on GitHub →
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <div className="mb-20">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-neonRed rounded-full" />
                  Other Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project) => (
                    <a
                      key={project.id}
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
                          <p className="text-sm text-slate-300 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 pt-4 border-t border-white/10 flex-wrap">
                          {project.language && (
                            <span className="text-xs bg-neonRed/20 px-3 py-1 rounded-full text-neonRed font-semibold">
                              {project.language}
                            </span>
                          )}
                          {project.stargazers_count > 0 && (
                            <span className="text-xs text-slate-400">
                              ⭐ {project.stargazers_count}
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
        {!loading && projects.length === 0 && !error && (
          <div className="text-center py-20">
            <p className="text-slate-300">No projects found.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3 rounded-lg bg-neonRed text-black font-semibold hover:bg-white transition shadow-glowRed"
          >
            Interested? Let's Talk
          </button>
        </div>
      </section>
    </main>
  );
};
