'use client';

import { Card } from '@/components/ui/Card';
import { Page } from '../types/pages';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
    <main className="relative z-10">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Let's Connect</h1>
          <p className="text-xl text-slate-300">
            I'm always interested in discussing new projects, collaboration opportunities, or just tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <a
            href="mailto:gilkranendonk@gmail.com"
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-neonRed/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <Card variant="hoverGlow" className="relative">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
              <p className="text-slate-300 mb-4">
                Send me a message directly. I'll get back to you as soon as I can.
              </p>
              <span className="inline-flex items-center gap-2 text-neonRed font-semibold group-hover:text-white transition">
                gilkranendonk@gmail.com →
              </span>
            </Card>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Voxxai"
            target="_blank"
            rel="noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-neonRed/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <Card variant="hoverGlow" className="relative">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-white mb-2">GitHub</h3>
              <p className="text-slate-300 mb-4">
                Check out my open-source projects and contributions.
              </p>
              <span className="inline-flex items-center gap-2 text-neonRed font-semibold group-hover:text-white transition">
                View Profile →
              </span>
            </Card>
          </a>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-3 rounded-lg bg-neonRed text-black font-semibold hover:bg-white transition shadow-glowRed"
          >
            View My Work
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:border-neonRed hover:text-neonRed transition"
          >
            Learn About Me
          </button>
        </div>
      </section>
    </main>
  );
};
