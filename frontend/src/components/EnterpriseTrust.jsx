import React from 'react';
import { ShieldCheck, Lock, FileCheck, Server, Key, Eye } from 'lucide-react';

export default function EnterpriseTrust() {
  const trustPillars = [
    {
      title: 'SOC 2 & ISO 27001 Ready',
      description: 'Engineered from day one to comply with SOC 2 Type II controls and ISO 27001 information security standards.',
      icon: FileCheck,
    },
    {
      title: 'Zero-Trust Architecture',
      description: 'Strict identity verification, micro-segmentation, and least-privilege access control across all network boundaries.',
      icon: ShieldCheck,
    },
    {
      title: 'End-to-End Encryption',
      description: 'AES-256 encryption for data at rest and TLS 1.3 for data in transit with automated key rotation.',
      icon: Lock,
    },
    {
      title: 'Immutable Audit Logging',
      description: 'Comprehensive, tamper-proof audit trails for security telemetry, user action tracking, and regulatory compliance.',
      icon: Eye,
    },
    {
      title: 'Dedicated Isolated Tenants',
      description: 'Single-tenant VPC deployments and isolated data schemas ensuring complete data sovereignty.',
      icon: Server,
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      description: 'Granular policy enforcement, SAML / SSO integration (Okta, Azure AD), and MFA verification.',
      icon: Key,
    },
  ];

  return (
    <section id="trust" className="py-24 bg-brand-canvas border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-red-700 font-semibold text-xs uppercase tracking-widest mb-3">
            <div className="w-6 h-0.5 bg-red-600"></div>
            Enterprise Trust & Security
            <div className="w-6 h-0.5 bg-red-600"></div>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
            Uncompromising Security for Mission-Critical Environments
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-muted">
            We understand that enterprise software is only as viable as its security posture. Security and regulatory compliance are hardcoded into every line of code we write.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-subtle hover:shadow-card hover:border-red-400 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-red-700 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Institutional Trust Assurance Banner */}
        <div className="mt-16 bg-white p-8 rounded-2xl border border-red-300/80 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-brand-dark">
                Require Custom Security Audits or Compliance Blueprints?
              </h4>
              <p className="text-sm text-brand-muted mt-1">
                Our Security Architecture team works directly with client InfoSec teams to complete vendor risk assessments and compliance reviews.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-md text-sm font-semibold bg-red-700 text-white hover:bg-red-800 transition-colors shrink-0"
          >
            Request Security Documentation
          </a>
        </div>

      </div>
    </section>
  );
}
