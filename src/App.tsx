import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Page } from "./types/pages";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Projects", page: "projects" },
    { label: "Skills", page: "skills" },
    { label: "Contact", page: "contact" },
  ];

  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    duration: 0.4,
    type: "tween",
  } as const;

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight font-sans text-slate-200 selection:bg-neonRed/30 selection:text-white">
      {/* Header Navigation */}
      <header className="relative z-20 border-b border-white/10 bg-midnight/80 backdrop-blur-md sticky top-0">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => handleNavigate("home")}
            className="text-2xl font-bold text-neonRed hover:text-white transition"
          >
            VOXXAI
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-sm font-medium transition ${
                  currentPage === item.page
                    ? "text-neonRed border-b-2 border-neonRed pb-1"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="md:hidden flex gap-2">
            {navItems.slice(1).map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-xs px-3 py-1 rounded transition ${
                  currentPage === item.page
                    ? "bg-neonRed text-black font-semibold"
                    : "border border-white/20 text-slate-300 hover:border-neonRed"
                }`}
              >
                {item.label.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Page Content with Animations */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            {currentPage === "home" && <Home onNavigate={handleNavigate} />}
            {currentPage === "about" && <About onNavigate={handleNavigate} />}
            {currentPage === "projects" && (
              <Projects onNavigate={handleNavigate} />
            )}
            {currentPage === "skills" && <Skills onNavigate={handleNavigate} />}
            {currentPage === "contact" && (
              <Contact onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mx-auto flex max-w-6xl justify-center px-6 pb-8 pt-16 text-xs text-slate-500 border-t border-white/10 mt-20">
        <span>© {new Date().getFullYear()} Voxxai · Modern Web Engineer</span>
      </footer>
    </div>
  );
};

export default App;
