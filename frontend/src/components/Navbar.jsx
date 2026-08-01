import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Calendar,
  Fingerprint,
  MessageSquare,
  PackageCheck,
  Receipt,
  Smartphone,
  TrendingUp,
  ArrowUpRight,
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react';

export default function Navbar({ isDarkMode, onToggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Scroll Progress Bar using Framer Motion useScroll & useSpring
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (targetId) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);

    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navProducts = [
    {
      name: 'School Timetabling System',
      tag: 'Academic Scheduling',
      icon: Calendar,
      internal: true,
      link: 'https://classontime.com/',
      action: () => handleNavClick('school-timetabling'),
    },
    {
      name: 'CipherGate',
      tag: 'AI Face Attendance & Payroll',
      icon: Fingerprint,
      link: 'https://ciphergate.in/',
      action: () => handleNavClick('ciphergate'),
    },
    {
      name: 'GoWhats',
      tag: 'WhatsApp Commerce Engine',
      icon: MessageSquare,
      link: 'https://gowhats.in/',
      action: () => handleNavClick('gowhats'),
    },
    {
      name: 'F3 Engine',
      tag: 'Fulfillment & Warehousing',
      icon: PackageCheck,
      link: 'https://f3engine.com/',
      action: () => handleNavClick('f3'),
    },
    {
      name: 'Billzzy',
      tag: 'Sales & Invoicing Workflows',
      icon: Receipt,
      link: 'https://billzzy.in/',
      action: () => handleNavClick('billzzy'),
    },
    {
      name: 'Billzzy Lite',
      tag: 'Paperless Mobile POS',
      icon: Smartphone,
      link: 'https://lite.billzzy.com/',
      action: () => handleNavClick('billzzy-lite'),
    },
    {
      name: 'Fynovo',
      tag: 'AI Financial Analytics',
      icon: TrendingUp,
      link: 'https://fynovo.in/',
      action: () => handleNavClick('fynovo'),
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 md:px-8 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto max-w-7xl mx-auto rounded-full transition-all duration-500 relative overflow-hidden liquid-glass-pill ${scrolled ? 'liquid-glass-scrolled py-2.5 px-4 sm:px-6' : 'py-3.5 px-5 sm:px-7'
          }`}
      >
        {/* Specular Liquid Glass Sheen & Refraction Glare Highlights */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 dark:via-white/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-8 w-1/3 h-full bg-gradient-to-b from-white/25 dark:from-white/10 to-transparent rounded-full blur-md pointer-events-none transform -skew-x-12" />

        {/* Curved Linear Scroll Progress Indicator Bar at Island Pill Bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-rose-600 origin-left z-50 shadow-[0_0_12px_rgba(155,17,30,0.9)]"
          style={{ scaleX }}
        />

        <div className="flex items-center justify-between relative z-10">

          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group focus:outline-none text-left"
          >
            <div className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xl tracking-tighter">P</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white ml-0.5 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-brand-dark dark:text-white flex items-center gap-1">
                PROINFOCUS
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium hidden sm:inline-block">
                Pte. Ltd. • Software & Engineering
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <button
              onClick={() => handleNavClick('company')}
              className="relative text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-brand-dark dark:hover:text-white py-1 focus:outline-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
            >
              Company
            </button>

            <button
              onClick={() => handleNavClick('capabilities')}
              className="relative text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-brand-dark dark:hover:text-white py-1 focus:outline-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
            >
              Capabilities
            </button>

            {/* Products Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                className="relative inline-flex items-center gap-1.5 text-sm font-medium transition-colors py-1 focus:outline-none text-gray-700 dark:text-gray-200 hover:text-brand-dark dark:hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 text-red-600 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''
                  }`} />
              </button>

              {/* Dropdown Card Menu with Slight Glass Translucency */}
              <AnimatePresence>
                {productsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                    className="absolute right-0 top-full mt-3 w-[420px] bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl rounded-2xl border border-gray-200/80 dark:border-neutral-800 shadow-2xl p-4 z-50"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-3 pb-2 border-b border-gray-100 dark:border-neutral-800 flex items-center justify-between">
                      <span>Commercial Software Suite</span>
                      <span className="text-red-600 dark:text-red-400 font-mono">7 Products</span>
                    </div>

                    <div className="mt-2 max-h-[380px] overflow-y-auto space-y-1.5 pr-1">
                      {navProducts.map((prod, idx) => {
                        const Icon = prod.icon;
                        const content = (
                          <>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-neutral-800 text-red-700 dark:text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-700 group-hover:text-white transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-xs text-brand-dark dark:text-white group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                                  {prod.name}
                                </div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400">{prod.tag}</div>
                              </div>
                            </div>
                            {prod.internal ? (
                              <span className="text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Flagship
                              </span>
                            ) : (
                              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-600 transition-colors" />
                            )}
                          </>
                        );

                        if (prod.link) {
                          return (
                            <a
                              key={idx}
                              href={prod.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="w-full text-left p-2.5 rounded-xl hover:bg-red-50/80 dark:hover:bg-neutral-800 border border-transparent hover:border-red-200 dark:hover:border-neutral-700 transition-all group flex items-center justify-between"
                            >
                              {content}
                            </a>
                          );
                        }

                        return (
                          <button
                            key={idx}
                            onClick={prod.action}
                            className="w-full text-left p-2.5 rounded-xl hover:bg-red-50/80 dark:hover:bg-neutral-800 border border-transparent hover:border-red-200 dark:hover:border-neutral-700 transition-all group flex items-center justify-between"
                          >
                            {content}
                          </button>
                        );
                      })}
                    </div>

                    {/* Footer link in dropdown */}
                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-neutral-800">
                      <button
                        onClick={() => handleNavClick('products')}
                        className="w-full text-center py-2 rounded-xl font-semibold text-xs text-brand-dark dark:text-white bg-brand-canvas dark:bg-neutral-800 hover:bg-red-100 dark:hover:bg-neutral-700 text-red-700 dark:text-red-400 border border-gray-200 dark:border-neutral-700 transition-colors flex items-center justify-center gap-1"
                      >
                        <span>View All Products Section</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop Right Controls: Dark Mode Toggle & Get in Touch */}
          <div className="hidden md:flex items-center gap-3 sm:gap-4">

            {/* Functional Dark Mode Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-full bg-gray-100/80 dark:bg-neutral-800/80 backdrop-blur-md text-gray-700 dark:text-red-400 hover:text-red-600 transition-colors border border-gray-200 dark:border-neutral-700 focus:outline-none shadow-sm"
              aria-label="Toggle Theme Mode"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-brand-dark" />
              )}
            </motion.button>

            {/* Get in Touch CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-red-700 hover:bg-red-800 transition-all duration-200 shadow-md hover:shadow-[0_4px_20px_-2px_rgba(185,28,28,0.5)] group"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Mobile Menu Button & Mobile Dark Mode Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-red-400"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:text-brand-dark hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Floating Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="pointer-events-auto max-w-7xl mx-auto mt-2 rounded-3xl liquid-glass-pill px-5 pt-4 pb-6 shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('company')}
                className="text-left text-base font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 py-2 border-b border-gray-100 dark:border-neutral-800"
              >
                Company
              </button>
              <button
                onClick={() => handleNavClick('capabilities')}
                className="text-left text-base font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 py-2 border-b border-gray-100 dark:border-neutral-800"
              >
                Capabilities
              </button>

              {/* Mobile Products list */}
              <div className="py-2 border-b border-gray-100 dark:border-neutral-800">
                <div className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400 mb-2 flex items-center justify-between">
                  <span>Products Suite</span>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="text-[11px] underline text-brand-dark dark:text-white font-semibold"
                  >
                    View All
                  </button>
                </div>
                <div className="space-y-1.5">
                  {navProducts.map((prod, idx) => {
                    const content = (
                      <>
                        <span>{prod.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                      </>
                    );

                    if (prod.link) {
                      return (
                        <a
                          key={idx}
                          href={prod.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="w-full text-left py-2.5 px-3.5 rounded-xl bg-gray-50 dark:bg-neutral-800/80 border border-gray-200/60 dark:border-neutral-700/60 text-xs font-medium text-brand-dark dark:text-white flex items-center justify-between"
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <button
                        key={idx}
                        onClick={prod.action}
                        className="w-full text-left py-2.5 px-3.5 rounded-xl bg-gray-50 dark:bg-neutral-800/80 border border-gray-200/60 dark:border-neutral-700/60 text-xs font-medium text-brand-dark dark:text-white flex items-center justify-between"
                      >
                        {content}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className="mt-2 w-full text-center py-3 rounded-full font-semibold text-white bg-red-700 hover:bg-red-800 shadow-md"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
