import React from 'react';
import { ShieldAlert, Clock, RefreshCw, Headphones, Check } from 'lucide-react';

export default function ServiceLevels() {
  const slas = [
    {
      metric: '99.9%',
      title: 'Guaranteed Availability SLA',
      description: 'Financially backed uptime commitments with multi-region failover and real-time public status monitoring.',
      icon: Clock,
    },
    {
      metric: '< 15 Mins',
      title: 'P1 Incident Response',
      description: 'Immediate escalation to Principal Engineers for Critical P1 outages with direct line communication.',
      icon: ShieldAlert,
    },
    {
      metric: '24/7/365',
      title: 'Dedicated Engineering Desk',
      description: 'Round-the-clock support desk staffed by qualified engineers, not tier-1 script readers.',
      icon: Headphones,
    },
    {
      metric: '< 5 Mins',
      title: 'RPO / RTO Recovery Target',
      description: 'Continuous transactional database replication ensuring near-instantaneous backup restoration.',
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Subtle red grid decoration overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#9B111E_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-gray-800">
          <div>
            <div className="flex items-center gap-2 text-red-500 font-semibold text-xs uppercase tracking-widest mb-3">
              <div className="w-6 h-0.5 bg-red-600"></div>
              Service Level Guarantees
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Institutional Reliability & Strict SLA Performance
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-gray-400 max-w-md">
            Our SLAs are binding contractual commitments designed to provide enterprise stakeholders complete operational peace of mind.
          </p>
        </div>

        {/* Metric Band Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-900/90 border border-neutral-800 p-6 rounded-xl hover:border-red-600/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 text-red-500 flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Contractual SLA</span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-bold text-red-500 font-serif tracking-tight">
                    {item.metric}
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-white font-sans">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-red-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Enforced in Master Service Agreement</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
