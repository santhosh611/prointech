import React, { useState } from 'react';
import { Search, Compass, Code2, CheckSquare, Rocket, Play, GraduationCap, HeartPulse, LifeBuoy } from 'lucide-react';

export default function SupportModel() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      name: 'Discovery',
      icon: Search,
      short: 'Requirements & Scope',
      detail: 'In-depth architecture audit, business logic mapping, compliance requirements check, and strategic roadmap definition.'
    },
    {
      name: 'Design',
      icon: Compass,
      short: 'Architecture & UX',
      detail: 'Schema modeling, zero-trust security blueprinting, API contract definitions, and component design system setup.'
    },
    {
      name: 'Development',
      icon: Code2,
      short: 'Agile Engineering',
      detail: 'Iterative bi-weekly sprints, clean code practices, automated CI/CD pipeline integration, and continuous security scanning.'
    },
    {
      name: 'UAT',
      icon: CheckSquare,
      short: 'User Acceptance',
      detail: 'Rigorous end-to-end integration testing, edge-case validation, performance load tests, and security penetration audits.'
    },
    {
      name: 'Pilot',
      icon: Rocket,
      short: 'Controlled Rollout',
      detail: 'Staged deployment to selected operational units to measure real-world latency, user adoption, and system telemetry.'
    },
    {
      name: 'Production',
      icon: Play,
      short: 'Full Go-Live',
      detail: 'Zero-downtime cutover execution, multi-region routing activation, and real-time operational dashboard monitoring.'
    },
    {
      name: 'Training',
      icon: GraduationCap,
      short: 'Knowledge Transfer',
      detail: 'Comprehensive developer & operational documentation, hands-on workshops for internal IT staff, and runbooks.'
    },
    {
      name: 'Hypercare',
      icon: HeartPulse,
      short: '30-Day Intensive Support',
      detail: 'Dedicated on-call principal engineers monitoring performance metrics, fine-tuning queries, and resolving initial feedback.'
    },
    {
      name: 'Support',
      icon: LifeBuoy,
      short: '24/7 SLA Management',
      detail: 'Long-term maintenance, guaranteed uptime response windows, patch management, and continuous feature evolution.'
    },
  ];

  return (
    <section id="support" className="py-24 bg-white border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-red-700 font-semibold text-xs uppercase tracking-widest mb-3">
            <div className="w-6 h-0.5 bg-red-600"></div>
            Methodology & Support Model
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
            Disciplined Execution from Inception to Continuous Operation
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-muted">
            Our structured 9-stage delivery lifecycle guarantees complete transparency, zero operational disruption, and sustained long-term resilience.
          </p>
        </div>

        {/* 9-Stage Pipeline Process Horizontal / Grid View */}
        <div className="mt-14">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
            The 9-Stage Proinfocus Pte Ltd Delivery Lifecycle
          </h3>

          {/* Interactive Stepper Tabs */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.name}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-lg border text-left transition-all duration-200 focus:outline-none flex flex-col justify-between ${
                    isActive
                      ? 'bg-brand-dark text-white border-brand-dark shadow-md ring-2 ring-red-600'
                      : 'bg-brand-canvas text-gray-700 border-gray-200 hover:border-red-300 hover:bg-red-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-red-400' : 'text-gray-400'}`}>
                      0{idx + 1}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-red-400' : 'text-red-700'}`} />
                  </div>
                  
                  <div className="mt-3">
                    <div className="text-xs font-bold truncate">{step.name}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <div className="mt-6 bg-brand-canvas p-6 sm:p-8 rounded-xl border border-gray-200/90 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-red-700 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm">
                0{activeStep + 1}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="font-serif text-2xl font-bold text-brand-dark">
                    {steps[activeStep].name} Stage
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-red-100 text-red-800 border border-red-300">
                    {steps[activeStep].short}
                  </span>
                </div>
                <p className="mt-2 text-sm sm:text-base text-brand-muted max-w-3xl">
                  {steps[activeStep].detail}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded text-xs font-semibold bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous Stage
              </button>
              <button
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className="px-4 py-2 rounded text-xs font-semibold bg-red-700 text-white hover:bg-red-800 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next Stage
              </button>
            </div>
          </div>

        </div>

        {/* Engagement & Support Model Overview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-subtle">
            <h4 className="font-serif text-xl font-bold text-brand-dark mb-3">
              Dedicated Engineering Squads
            </h4>
            <p className="text-sm text-brand-muted leading-relaxed">
              Every client project is assigned a co-located or time-zone aligned squad comprising a Principal Architect, Lead Full-Stack Engineers, DevOps/Cloud Specialists, and a Quality Assurance Lead. No offshore body-shopping or anonymous ticket handling.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-subtle">
            <h4 className="font-serif text-xl font-bold text-brand-dark mb-3">
              Proactive Governance & Hypercare
            </h4>
            <p className="text-sm text-brand-muted leading-relaxed">
              Deployment is only the beginning. Our 30-day Hypercare window ensures our core engineering team stays on high alert during launch, continuously monitoring real-user traffic patterns and query response times.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
