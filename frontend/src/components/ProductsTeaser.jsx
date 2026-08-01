import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ExternalLink,
  Fingerprint,
  MessageSquare,
  PackageCheck,
  Receipt,
  Smartphone,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export default function ProductsTeaser({ onOpenProductsPage }) {
  const featuredProducts = [
    {
      id: 'ciphergate',
      name: 'CipherGate',
      category: 'Workforce & Biometrics',
      link: 'https://ciphergate.in/',
      description: 'Worker management & touchless attendance system powered by AI facial recognition for secure verification and instant payroll calculation.',
      icon: Fingerprint,
      badge: '99.9% Face Accuracy',
      pulseColor: 'bg-emerald-500'
    },
    {
      id: 'gowhats',
      name: 'GoWhats',
      category: 'WhatsApp Commerce',
      link: 'https://gowhats.in/',
      description: 'Meta-verified WhatsApp API gateway enabling automated conversational checkout, live inventory sync, and Razorpay payment flows.',
      icon: MessageSquare,
      badge: 'Meta Verified Partner',
      pulseColor: 'bg-emerald-500'
    },
    {
      id: 'f3',
      name: 'F3 Engine',
      category: 'Supply Chain & Logistics',
      link: 'https://f3engine.com/',
      description: 'Logistics control center for real-time multi-warehouse tracking, smart order routing, fulfillment automation, and operational analytics.',
      icon: PackageCheck,
      badge: '1000+ Warehouses',
      pulseColor: 'bg-blue-500'
    },
    {
      id: 'billzzy',
      name: 'Billzzy',
      category: 'Invoicing & Sales Workflows',
      link: 'https://billzzy.in/',
      description: 'Intelligent billing and sales workflow engine automating corporate invoicing, order processing, and customer management.',
      icon: Receipt,
      badge: 'Smart Billing Engine',
      pulseColor: 'bg-indigo-500'
    },
    {
      id: 'billzzy-lite',
      name: 'Billzzy Lite',
      category: 'Mobile Point-of-Sale',
      link: 'https://lite.billzzy.com/',
      description: 'Transforms smartphones into zero-hardware billing terminals. Generate instant WhatsApp receipts and eliminate expensive paper rolls.',
      icon: Smartphone,
      badge: 'Zero Printer POS',
      pulseColor: 'bg-indigo-500'
    },
    {
      id: 'fynovo',
      name: 'Fynovo',
      category: 'AI Finance & Growth Intelligence',
      link: 'https://fynovo.in/',
      description: 'Financial Intelligence for Modern Growth. AI-driven financial analytics, revenue forecasting, and executive BI insights.',
      icon: TrendingUp,
      badge: 'AI Finance Engine',
      pulseColor: 'bg-cyan-500'
    },
  ];

  return (
    <section id="products" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Simplified Clean Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-300 text-red-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              Production Platforms
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
              Commercial Software Suite
            </h2>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenProductsPage}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-white bg-red-700 hover:bg-red-800 transition-colors shadow-md text-sm shrink-0 group"
            >
              <span>View Products Showcase</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Live Products Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-brand-canvas p-6 rounded-xl border border-gray-200/90 hover:border-red-400 transition-all duration-300 flex flex-col justify-between group shadow-subtle hover:shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-red-800 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${prod.pulseColor}`}></span>
                        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${prod.pulseColor}`}></span>
                      </span>
                      {prod.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-1">
                    {prod.category}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-red-700 transition-colors">
                    {prod.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center justify-between">
                  <a
                    href={prod.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-dark hover:text-red-600 transition-colors group/link"
                  >
                    <span>Explore {prod.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-red-600 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
