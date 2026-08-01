import React from 'react';
import { Cpu, Cloud, Server, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      id: 'ai',
      category: 'Artificial Intelligence & Automation',
      icon: Cpu,
      badge: 'Cognitive Computing',
      summary: 'Empower your enterprise with tailor-made generative AI, domain-aware LLMs, and automated intelligent workflows tailored for high-compliance environments.',
      features: [
        'Custom LLM Fine-Tuning & Private RAG Pipelines',
        'Predictive Operational Analytics & Anomaly Detection',
        'Document Intelligence & NLP Automation',
        'Strict Model Governance & Data Privacy Safeguards',
      ],
      isFeatured: false,
      ctaText: 'Get Started',
      link: '#contact'
    },
    {
      id: 'cloud',
      category: 'Cloud Solutions & Infrastructure',
      icon: Cloud,
      badge: 'Multi-Cloud Architecture',
      summary: 'Build, optimize, and orchestrate zero-trust cloud environments with continuous resilience, optimized cost models, and automated compliance.',
      features: [
        'Multi-Cloud & Hybrid Cloud Strategy (AWS / Azure / GCP)',
        'Kubernetes Orchestration & Infrastructure-as-Code (Terraform)',
        'Zero-Downtime Database & Backend Migrations',
        'FinOps Cost Optimization & Real-Time Monitoring',
      ],
      isFeatured: true,
      featuredLabel: 'Standard Plan',
      ctaText: 'Get Started',
      link: '#contact'
    },
    {
      id: 'enterprise',
      category: 'Enterprise Software & Systems Integration',
      icon: Server,
      badge: 'Mission-Critical Engineering',
      summary: 'Custom high-throughput backends, legacy system modernizations, and secure API fabrics built for mission-critical enterprise workloads.',
      features: [
        'High-Concurrency Microservices & Event-Driven Systems',
        'Legacy Core System Modernization & Middleware Wrappers',
        'Enterprise Resource & CRM Custom Extensions',
        'Comprehensive Automated Testing & Hypercare Deployment',
      ],
      isFeatured: false,
      ctaText: 'Get Started',
      link: '#contact'
    },
  ];

  return (
    <section id="capabilities" className="py-28 bg-[#080B11] text-white relative overflow-hidden border-y border-neutral-800/80">
      
      {/* Ambient Red Glow Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 relative z-10">
          <div className="inline-flex items-center gap-2 text-red-400 font-semibold text-xs uppercase tracking-widest mb-3">
            <div className="w-6 h-0.5 bg-red-500"></div>
            Core Offerings
            <div className="w-6 h-0.5 bg-red-500"></div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            Tailored Engineering for Complex Technical Challenges
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300">
            We deliver robust capabilities across three core technology pillars, engineered to integrate seamlessly into existing enterprise environments.
          </p>
        </div>

        {/* Cards Grid Container with Half-Above / Half-Inside Watermark */}
        <div className="relative mt-4">
          
          {/* Giant "SERVICES" Watermark Text: 50% floating above top of cards, 50% inside top of cards */}
          <div className="absolute -top-24 sm:-top-36 md:-top-44 lg:-top-52 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none w-full text-center overflow-hidden">
            <span className="font-serif text-[110px] sm:text-[190px] md:text-[250px] lg:text-[310px] font-black tracking-tight text-white/[0.16] leading-none uppercase inline-block drop-shadow-2xl">
              Services
            </span>
          </div>

          {/* 3 Dark Liquid Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative z-10">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`rounded-3xl p-8 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden backdrop-blur-3xl ${
                    item.isFeatured
                      ? 'bg-neutral-900/70 border-2 border-red-500/80 shadow-[0_0_50px_rgba(155,17,30,0.35)] md:-translate-y-3'
                      : 'bg-neutral-900/40 border border-white/10 shadow-2xl hover:border-white/20 hover:bg-neutral-900/60 hover:-translate-y-1'
                  }`}
                >
                  {/* Specular Top Sheen Beam */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                  {/* Featured Top Badge */}
                  {item.isFeatured && (
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-md">
                      {item.featuredLabel}
                    </div>
                  )}

                  <div>
                    {/* Top Badge & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        item.isFeatured
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                          : 'bg-white/10 border border-white/15 text-red-400'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                      {item.category}
                    </h3>

                    {/* Summary */}
                    <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Divider */}
                    <div className="my-6 border-t border-white/10"></div>

                    {/* Feature Checkmark List */}
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-4">
                      Key Focus Areas
                    </h4>

                    <ul className="space-y-3.5">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-200 gap-3">
                          <div className="w-4 h-4 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Liquid CTA Button */}
                  <div className="mt-10 pt-4">
                    <a
                      href={item.link}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-300 text-center ${
                        item.isFeatured
                          ? 'bg-white text-black hover:bg-gray-100 shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-100 hover:scale-[1.02]'
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md shadow-md'
                      }`}
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
