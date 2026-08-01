import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import ProductsPage from './components/ProductsPage';
import CTABand from './components/CTABand';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-canvas dark:bg-neutral-950 text-brand-dark dark:text-neutral-100 transition-colors duration-300 flex flex-col font-sans selection:bg-red-700 selection:text-white">
      {/* Sticky Header Navbar with Theme Toggle */}
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />

      {/* Main Single Page Layout */}
      <main className="flex-grow">
        <Hero />
        <CompanyOverview />
        <CapabilitiesGrid />
        
        {/* Software Products Showcase Embedded Directly Below Capabilities */}
        <section id="products">
          <ProductsPage onOpenContact={handleScrollToContact} isEmbedded={true} />
        </section>

        <CTABand />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
