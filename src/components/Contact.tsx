'use client';

import React, { useState, useEffect } from "react";
import { Page } from "../types/pages";

interface ContactProps {
  onNavigate: (page: Page) => void;
}

interface SubmitStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });
  const [cooldown, setCooldown] = useState(0);
  const [canSubmit, setCanSubmit] = useState(true);

  // Handle cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => {
        setCooldown(cooldown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({ type: "loading" });
    setCanSubmit(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to send message");
      }

      // Success state
      setStatus({
        type: "success",
        message: "Message sent successfully! 🎉",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });

      // Start 60-second cooldown
      setCooldown(60);
      setTimeout(() => {
        setCanSubmit(true);
      }, 60000);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "An error occurred. Please try again.",
      });
      setCanSubmit(true);
    }
  };

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
          <form className="space-y-4" onSubmit={handleSubmit}>
            {status.type === "success" && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400 font-semibold">{status.message}</p>
              </div>
            )}
            {status.type === "error" && (
              <div className="p-4 bg-neonRed/20 border border-neonRed/50 rounded-lg">
                <p className="text-neonRed font-semibold">{status.message}</p>
              </div>
            )}
            <div>
              <label className="block text-sm text-slate-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-neonRed/60 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-neonRed/60 transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-neonRed/60 transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status.type === "loading" || !canSubmit}
              className="w-full px-6 py-3 rounded-lg bg-neonRed text-black font-semibold hover:bg-white transition shadow-glowRed disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status.type === "loading" && (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              )}
              {status.type !== "loading" && !canSubmit && (
                <>Retry in {cooldown}s</>
              )}
              {status.type !== "loading" && canSubmit && (
                <>Send Message</>
              )}
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
