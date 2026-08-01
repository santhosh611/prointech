import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-neutral-950 text-gray-600 dark:text-gray-400 py-16 border-t border-gray-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-200 dark:border-neutral-800">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4 focus:outline-none">
              <div className="w-8 h-8 rounded-lg bg-red-700 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-sans font-bold text-xl text-brand-dark dark:text-white tracking-tight">
                PROINFOCUS <span className="text-xs font-normal text-red-700 dark:text-red-400">Pte. Ltd.</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 ml-1"></span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Proinfocus Pte Ltd is a premium technology enterprise delivering bespoke artificial intelligence, resilient multi-cloud architecture, and high-performance software systems for global organizations.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-red-700 dark:text-red-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>SOC 2 Type II & ISO 27001 Compliant Operations</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#company" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Company Overview</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Core Capabilities</a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Software Suite</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Enterprise Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-white mb-4">Capabilities</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#capabilities" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Artificial Intelligence</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Multi-Cloud Infrastructure</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Enterprise Systems</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">High-Concurrency API Fabrics</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Private RAG Pipelines</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-white mb-4">Corporate Info</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <p className="font-semibold text-brand-dark dark:text-white">Pro In Focus Advisory Group</p>
              <p>One World Tech Center, Suite 400</p>
              <p className="text-xs text-gray-500">New York, NY 10007</p>
              <p className="text-red-700 dark:text-red-400 font-mono text-xs pt-2 font-semibold">advisory@proinfocus.com</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Proinfocus Pte. Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-brand-dark dark:hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-brand-dark dark:hover:text-white cursor-pointer">Terms of Governance</span>
            <span className="hover:text-brand-dark dark:hover:text-white cursor-pointer">Security Standards</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-gray-100 dark:bg-neutral-800 text-red-700 dark:text-red-400 hover:bg-red-700 hover:text-white transition-all duration-200 border border-gray-200 dark:border-neutral-700"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
