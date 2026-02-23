'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Home as HomeIcon, User, Briefcase, Code, Mail, Menu, X } from 'lucide-react';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Page } from '../types/pages';

export default function AppPage() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: Array<{ page: Page; label: string; icon: typeof HomeIcon }> = [
    { page: 'home', label: 'Home', icon: HomeIcon },
    { page: 'about', label: 'About', icon: User },
    { page: 'projects', label: 'Projects', icon: Briefcase },
    { page: 'skills', label: 'Skills', icon: Code },
    { page: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavigate = (page: Page) => {
    if (page === currentPage || isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Auto-close mobile menu
  };

  // Scroll to top when page changes, after animation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [currentPage]);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    duration: 0.4,
    type: 'tween',
  } as const;

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight font-sans text-slate-200 selection:bg-neonRed/30 selection:text-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-midnight shadow-lg">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="text-2xl font-bold text-neonRed hover:text-white transition"
          >
            VOXXAI
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ page, label, icon: Icon }) => (
              <button
                key={page}
                onClick={() => handleNavigate(page)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentPage === page
                    ? 'text-neonRed border-b-2 border-neonRed pb-1'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors z-50 relative"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-midnight/95 backdrop-blur-sm z-40 flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map(({ page, label, icon: Icon }, index) => (
                <motion.button
                  key={page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigate(page)}
                  className={`flex items-center gap-4 text-4xl font-bold transition-all duration-300 ${
                    currentPage === page
                      ? 'text-neonRed'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Icon size={40} />
                  {label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

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
            {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
            {currentPage === 'about' && <About onNavigate={handleNavigate} />}
            {currentPage === 'projects' && (
              <Projects onNavigate={handleNavigate} />
            )}
            {currentPage === 'skills' && <Skills onNavigate={handleNavigate} />}
            {currentPage === 'contact' && (
              <Contact onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
