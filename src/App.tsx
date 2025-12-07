import React, { useState } from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Page } from "./types/pages";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: Page) => setCurrentPage(page);

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight font-sans text-slate-200 selection:bg-neonPink/30 selection:text-white">
      <div className="glow-blob pink" aria-hidden />
      <div className="glow-blob cyan" aria-hidden />
      <div className="absolute inset-0 grid-overlay" aria-hidden />
      <div
        className="absolute inset-0 scanlines pointer-events-none"
        aria-hidden
      />

      {currentPage === "home" && <Home onNavigate={handleNavigate} />}
      {currentPage === "about" && <About onNavigate={handleNavigate} />}
      {currentPage === "projects" && <Projects onNavigate={handleNavigate} />}
      {currentPage === "skills" && <Skills onNavigate={handleNavigate} />}
      {currentPage === "contact" && <Contact onNavigate={handleNavigate} />}

      <footer className="relative z-10 mx-auto flex max-w-5xl justify-center px-6 pb-8 pt-4 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} Voxxai · State-based Portfolio</span>
      </footer>
    </div>
  );
};

export default App;
