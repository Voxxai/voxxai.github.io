'use client';

import React from "react";
import { skillsByCategory } from "../data/skills";
import { Page } from "../types/pages";

interface SkillsProps {
  onNavigate: (page: Page) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onNavigate }) => {
  return (
    <main className="relative z-10">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Skills & Expertise</h1>
          <p className="text-xl text-slate-300">
            Technologies and methodologies I work with daily to build modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillsByCategory.map((group, index) => (
            <div
              key={group.category}
              className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-xl hover:border-neonRed/30 hover:bg-white/[0.07] transition"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-neonRed/20 flex items-center justify-center">
                  <span className="text-neonRed font-bold text-sm">{index + 1}</span>
                </div>
                <h2 className="text-2xl font-bold text-white">{group.category}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-neonRed/10 border border-neonRed/30 text-sm text-slate-200 hover:border-neonRed/60 hover:bg-neonRed/20 transition cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-neonRed/20 to-neonRed/5 border border-neonRed/30 rounded-xl p-8">
            <div className="text-3xl font-bold text-neonRed mb-2">4+</div>
            <p className="text-slate-300">Years of Web Development</p>
          </div>
          <div className="bg-gradient-to-br from-neonRed/20 to-neonRed/5 border border-neonRed/30 rounded-xl p-8">
            <div className="text-3xl font-bold text-neonRed mb-2">3+</div>
            <p className="text-slate-300">Production Applications</p>
          </div>
          <div className="bg-gradient-to-br from-neonRed/20 to-neonRed/5 border border-neonRed/30 rounded-xl p-8">
            <div className="text-3xl font-bold text-neonRed mb-2">99%</div>
            <p className="text-slate-300">Test Coverage Committed</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Looking for someone with these skills?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can contribute to your project and bring value to your team.
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
