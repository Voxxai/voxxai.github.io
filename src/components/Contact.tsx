import React from "react";
import { Page } from "../types/pages";

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
            href="mailto:contact@voxxai.com"
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-neonRed/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-white/5 border border-neonRed/30 rounded-xl p-8 backdrop-blur-xl hover:border-neonRed/60 hover:bg-white/10 transition">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
              <p className="text-slate-300 mb-4">
                Send me a message directly. I'll get back to you as soon as I can.
              </p>
              <span className="inline-flex items-center gap-2 text-neonRed font-semibold group-hover:text-white transition">
                contact@voxxai.com →
              </span>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Voxxai"
            target="_blank"
            rel="noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-neonRed/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-white/5 border border-neonRed/30 rounded-xl p-8 backdrop-blur-xl hover:border-neonRed/60 hover:bg-white/10 transition">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-white mb-2">GitHub</h3>
              <p className="text-slate-300 mb-4">
                Check out my open-source projects and contributions.
              </p>
              <span className="inline-flex items-center gap-2 text-neonRed font-semibold group-hover:text-white transition">
                View Profile →
              </span>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-xl mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Contact</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-neonRed/60 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-neonRed/60 transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-neonRed/60 transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-neonRed text-black font-semibold hover:bg-white transition shadow-glowRed"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => onNavigate("projects")}
            className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:border-neonRed hover:text-neonRed transition"
          >
            View Projects
          </button>
          <button
            onClick={() => onNavigate("skills")}
            className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:border-neonRed hover:text-neonRed transition"
          >
            See Skills
          </button>
          <button
            onClick={() => onNavigate("about")}
            className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:border-neonRed hover:text-neonRed transition"
          >
            About Me
          </button>
        </div>
      </section>
    </main>
  );
};
