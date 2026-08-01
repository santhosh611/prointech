import React from 'react';
import { ArrowRight, Cpu, Cloud, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-canvas dark:bg-neutral-950 overflow-hidden transition-colors duration-300">

      {/* ============================================================ */}
      {/* EXCLUSIVE SUBTLE DARK RED / CRIMSON MESH GRADIENT LAYER */}
      {/* ============================================================ */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-100/50 via-rose-50/20 to-transparent dark:from-red-950/30 dark:via-neutral-950 dark:to-transparent pointer-events-none z-0"></div>
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-red-400/15 via-rose-300/10 to-transparent dark:from-red-900/15 dark:via-rose-950/5 dark:to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Hero Headline */}
        <div className="max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-dark dark:text-white leading-[1.15]">
            Engineering Intelligent Systems for the <span className="italic font-normal text-red-700 dark:text-red-500 underline decoration-red-400 dark:decoration-red-600/50 decoration-wavy decoration-1 underline-offset-8">Modern Enterprise</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-brand-muted dark:text-gray-300 leading-relaxed max-w-3xl font-normal">
            Proinfocus Pte Ltd partners with global institutions to architect, deploy, and scale mission-critical artificial intelligence, resilient multi-cloud infrastructure, and bespoke enterprise software solutions.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-base font-semibold text-white bg-red-700 hover:bg-red-800 transition-all duration-200 shadow-md hover:shadow-[0_4px_22px_-2px_rgba(185,28,28,0.5)] group text-center"
          >
            <span>Talk to Us</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#capabilities"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-base font-semibold text-brand-dark dark:text-white bg-white/90 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800 hover:border-gray-400 transition-all duration-200 shadow-sm text-center"
          >
            Explore Capabilities
          </a>
        </div>

        {/* Core Pillars Glimpse Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/95 dark:bg-neutral-900 p-6 rounded-xl border border-gray-200/80 dark:border-neutral-800 shadow-subtle hover:shadow-card hover:border-red-400 dark:hover:border-red-600/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-neutral-800 border border-red-200 dark:border-neutral-700 flex items-center justify-center text-red-700 dark:text-red-400 mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-dark dark:text-white font-sans flex items-center justify-between">
              Artificial Intelligence
              <span className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 font-normal">Core</span>
            </h3>
            <p className="mt-2 text-sm text-brand-muted dark:text-gray-400 leading-relaxed">
              Domain-tuned large language models, predictive analytics, and automated decision engines built for strict regulatory standards.
            </p>
          </div>

          <div className="bg-white/95 dark:bg-neutral-900 p-6 rounded-xl border border-gray-200/80 dark:border-neutral-800 shadow-subtle hover:shadow-card hover:border-red-400 dark:hover:border-red-600/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-neutral-800 border border-red-200 dark:border-neutral-700 flex items-center justify-center text-red-700 dark:text-red-400 mb-4 group-hover:scale-110 transition-transform">
              <Cloud className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-dark dark:text-white font-sans flex items-center justify-between">
              Cloud Solutions
              <span className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 font-normal">Scale</span>
            </h3>
            <p className="mt-2 text-sm text-brand-muted dark:text-gray-400 leading-relaxed">
              Multi-cloud architecture, zero-downtime migrations, and automated Kubernetes environments optimized for cost and throughput.
            </p>
          </div>

          <div className="bg-white/95 dark:bg-neutral-900 p-6 rounded-xl border border-gray-200/80 dark:border-neutral-800 shadow-subtle hover:shadow-card hover:border-red-400 dark:hover:border-red-600/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-neutral-800 border border-red-200 dark:border-neutral-700 flex items-center justify-center text-red-700 dark:text-red-400 mb-4 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-dark dark:text-white font-sans flex items-center justify-between">
              Enterprise Software
              <span className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 font-normal">Resilience</span>
            </h3>
            <p className="mt-2 text-sm text-brand-muted dark:text-gray-400 leading-relaxed">
              High-concurrency microservice backends, legacy system modernization, and secure internal operational platforms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
