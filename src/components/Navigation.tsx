'use client';

import { Home, User, Briefcase, Wrench, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../types/pages';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: Array<{ page: Page; label: string; icon: typeof Home }> = [
  { page: 'home', label: 'Home', icon: Home },
  { page: 'about', label: 'About', icon: User },
  { page: 'projects', label: 'Projects', icon: Briefcase },
  { page: 'skills', label: 'Skills', icon: Wrench },
  { page: 'contact', label: 'Contact', icon: Mail },
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2">
        {navItems.map(({ page, label, icon: Icon }) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
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

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed right-0 top-0 bottom-0 w-64 bg-midnight backdrop-blur-xl border-l border-white/20 shadow-2xl z-50 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/20">
                  <span className="text-xl font-bold text-neonRed">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col p-4 gap-2">
                  {navItems.map(({ page, label, icon: Icon }, index) => (
                    <motion.button
                      key={page}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavigate(page)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-white/5 text-neonRed font-semibold border border-neonRed/50 shadow-[0_0_15px_rgba(255,8,68,0.2)]'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{label}</span>
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
