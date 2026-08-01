import React from 'react';
import { Target, Compass, Award, Shield, CheckCircle2 } from 'lucide-react';

export default function CompanyOverview() {
  const coreValues = [
    {
      title: 'Architectural Integrity',
      description: 'We prioritize clean engineering principles, scalable schemas, and robust error handling over superficial quick-fixes.',
      icon: Target,
    },
    {
      title: 'Enterprise Resilience',
      description: 'Systems designed for high concurrency, zero unplanned downtime, and seamless failover across distributed regions.',
      icon: Shield,
    },
    {
      title: 'Strategic Alignment',
      description: 'We embed deeply with client leadership to ensure technology deliverables directly advance core operational objectives.',
      icon: Compass,
    },
  ];

  return (
    <section id="company" className="py-24 bg-white dark:bg-neutral-900 border-y border-gray-200/80 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">

            <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-semibold text-xs uppercase tracking-widest mb-3">
              <div className="w-6 h-0.5 bg-red-600"></div>
              Company Overview
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark dark:text-white leading-tight">
              A Strategic Engineering Partner for High-Stakes Systems
            </h2>

            <p className="mt-6 text-base sm:text-lg text-brand-muted dark:text-gray-300 leading-relaxed">
              Founded on the belief that enterprise technology should be predictable, secure, and transformative, <strong className="text-brand-dark dark:text-white font-semibold">Proinfocus Pte Ltd</strong> serves as an end-to-end technology partner for organizations driving digital transformation.
            </p>

            <p className="mt-4 text-base text-brand-muted dark:text-gray-300 leading-relaxed">
              We specialize in closing the gap between cutting-edge software innovation and enterprise-grade execution. Whether modernizing legacy core systems, embedding custom AI automation pipelines, or establishing resilient cloud infrastructures, our multi-disciplinary engineering teams deliver with precision and operational discipline.
            </p>

            {/* Bullet Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-brand-dark dark:text-gray-200">Institutional Security Practices</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-brand-dark dark:text-gray-200">Direct Senior Architect Oversight</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-brand-dark dark:text-gray-200">Transparent Governance & SLAs</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-brand-dark dark:text-gray-200">Vendor-Neutral Architecture</span>
              </div>
            </div>

          </div>

          {/* Right Column: Values & Credibility Card */}
          <div className="lg:col-span-5">
            <div className="bg-brand-canvas dark:bg-neutral-950 p-8 rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-card relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-700 text-white rounded-full text-xs font-medium shadow-md">
                  <Award className="w-3.5 h-3.5" /> Established Excellence
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-brand-dark dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-neutral-800">
                Core Engineering Philosophy
              </h3>

              <div className="space-y-6">
                {coreValues.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-100/80 dark:bg-neutral-900 border border-red-300 dark:border-neutral-700 text-red-700 dark:text-red-400 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark dark:text-white text-sm">{val.title}</h4>
                        <p className="text-xs text-brand-muted dark:text-gray-400 leading-relaxed mt-1">{val.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-neutral-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Pro In Focus Engineering Charter</span>
                <span className="font-mono text-red-700 dark:text-red-400 font-semibold">v4.2 Enterprise Standard</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
