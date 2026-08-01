import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Fingerprint, 
  MessageSquare, 
  PackageCheck, 
  Receipt, 
  Smartphone, 
  TrendingUp, 
  ExternalLink, 
  ChevronLeft, 
  CheckCircle2, 
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Globe,
  Star
} from 'lucide-react';

export default function ProductsPage({ onBackToHome, onOpenContact, isEmbedded }) {

  // Sequential Products List with App-Specific Theme Colors & Themed Drop Shadows
  const products = [
    {
      id: 'school-timetabling',
      name: 'School Timetabling System',
      subtitle: 'Academic Scheduling & Constraint Engine',
      category: 'FLAGSHIP PLATFORM',
      isInternal: false,
      link: 'https://classontime.com/',
      demoCredentials: {
        username: 'demo',
        password: 'demo'
      },
      description: 'An intelligent multi-variable constraint optimization engine for schools, colleges, and university faculties. Automatically generates 100% conflict-free master timetables, balances educator workloads, optimizes room capacities, and publishes schedules in seconds.',
      features: [
        'Automated Multi-Variable Constraint Solver',
        'Teacher Workload & Fair Period Balancer',
        'Smart Room & Lab Capacity Optimization',
        'Parallel Student Elective Stream Resolver',
        'PDF, Excel, iCal & SIS API Integration'
      ],
      badge: 'Active Flagship',
      uiUrl: 'classontime.com',
      mockupType: 'browser',
      image: null,
      stats: [
        { label: 'Conflicts', val: '0 Violations' },
        { label: 'Speed', val: '1.84 Seconds' },
        { label: 'Capacity', val: '98.4% Efficiency' }
      ],
      // Brand Theme: Deep Crimson / Dark Red
      theme: {
        badgeBg: 'bg-red-700 text-white',
        subText: 'text-red-700 dark:text-red-400',
        checkColor: 'text-red-600 dark:text-red-400',
        ambientGlow: 'bg-red-600/30 shadow-[0_20px_60px_-15px_rgba(155,17,30,0.4)]',
        btnBg: 'bg-red-700 hover:bg-red-800 text-white shadow-red-500/20',
        cardBorder: 'border-red-300/80 dark:border-red-600/30',
        frameShadow: 'shadow-[0_25px_50px_-12px_rgba(155,17,30,0.25)] border-red-600/40',
        pulseDot: 'bg-red-500'
      }
    },
    {
      id: 'billzzy',
      name: 'Billzzy',
      subtitle: 'Intelligent Invoicing & Sales Automation',
      category: 'COMMERCIAL WORKFLOWS',
      link: 'https://billzzy.in/',
      description: 'Billzzy simplifies invoicing, customer management, order processing, and sales workflows through intelligent automation and digital-first experiences.',
      features: [
        'Smart Automated Invoicing',
        'Automated Sales Workflows',
        'Address & Pincode Automation',
        'Order & Customer Insights',
        'Productivity Optimization'
      ],
      badge: 'Billing Engine',
      uiUrl: 'billzzy.in',
      mockupType: 'browser',
      image: '/billzzy.png',
      stats: [
        { label: 'Workflow', val: 'Automated' },
        { label: 'Invoicing', val: 'Digital First' }
      ],
      // Brand Theme: Royal Electric Indigo/Purple (#5B42F3)
      theme: {
        badgeBg: 'bg-indigo-600 text-white',
        subText: 'text-indigo-700 dark:text-indigo-400',
        checkColor: 'text-indigo-600 dark:text-indigo-400',
        ambientGlow: 'bg-indigo-500/30 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.4)]',
        btnBg: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/30',
        cardBorder: 'border-indigo-200 dark:border-indigo-500/30',
        frameShadow: 'shadow-[0_25px_50px_-12px_rgba(99,102,241,0.3)] border-indigo-500/40',
        pulseDot: 'bg-indigo-400'
      }
    },
    {
      id: 'billzzy-lite',
      name: 'Billzzy Lite',
      subtitle: 'Paperless Mobile Point-of-Sale',
      category: 'MOBILE POS TECH',
      link: 'https://lite.billzzy.com/',
      description: 'Billzzy Lite transforms any smartphone into a complete billing system. Businesses can generate invoices, manage inventory, send receipts through WhatsApp, and eliminate expensive billing hardware.',
      features: [
        'No printer required',
        'No paper thermal rolls',
        'WhatsApp digital receipts',
        'Mobile billing POS & NFC support',
        'Eco-friendly operations'
      ],
      badge: 'Zero Hardware POS',
      uiUrl: 'lite.billzzy.com',
      mockupType: 'standalone-mobile',
      image: '/billzzylite.png', // REAL 3D IPHONE BILLZZY LITE IMAGE (298KB)
      stats: [
        { label: 'Hardware Needed', val: 'Zero Printer' },
        { label: 'Dispatch Channel', val: 'WhatsApp' }
      ],
      // Brand Theme: Royal Indigo/Purple (#5B42F3)
      theme: {
        badgeBg: 'bg-indigo-600 text-white',
        subText: 'text-indigo-700 dark:text-indigo-400',
        checkColor: 'text-indigo-600 dark:text-indigo-400',
        ambientGlow: 'bg-indigo-500/35 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.5)]',
        btnBg: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/30',
        cardBorder: 'border-indigo-200 dark:border-indigo-500/30',
        frameShadow: 'shadow-[0_25px_50px_-12px_rgba(99,102,241,0.35)]',
        pulseDot: 'bg-indigo-400'
      }
    },
    {
      id: 'gowhats',
      name: 'GoWhats',
      subtitle: 'Meta-Verified WhatsApp Commerce',
      category: 'MESSAGING ENGINE',
      link: 'https://gowhats.in/',
      description: 'WhatsApp API provider verified by Meta. Features Razorpay integrated checkout, automated inventory synchronization, and conversational checkout automation.',
      features: [
        'Meta-Verified WhatsApp Business API',
        'Razorpay Integrated Checkout',
        'Real-Time Inventory Synchronization',
        'Conversational Checkout Automation'
      ],
      badge: 'Meta Verified Partner',
      uiUrl: 'gowhats.in',
      mockupType: 'browser',
      image: '/gowhats.png',
      stats: [
        { label: 'Payment Gateway', val: 'Razorpay Direct' },
        { label: 'Certification', val: 'Meta Official' }
      ],
      // Brand Theme: WhatsApp Vibrant Green (#25D366 / #10B981)
      theme: {
        badgeBg: 'bg-emerald-600 text-white',
        subText: 'text-emerald-700 dark:text-emerald-400',
        checkColor: 'text-emerald-600 dark:text-emerald-400',
        ambientGlow: 'bg-emerald-500/30 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.4)]',
        btnBg: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30',
        cardBorder: 'border-emerald-200 dark:border-emerald-500/30',
        frameShadow: 'shadow-[0_25px_50px_-12px_rgba(16,185,129,0.3)] border-emerald-500/40',
        pulseDot: 'bg-emerald-400'
      }
    },
    {
      id: 'fynovo',
      name: 'Fynovo',
      subtitle: 'AI Financial Intelligence Platform',
      category: 'AI FINANCE',
      link: 'https://fynovo.in/',
      description: 'Financial Intelligence For Modern Growth. Fynovo uses artificial intelligence to monitor financial performance, identify opportunities, predict trends, automate reporting, and provide actionable insights for business growth.',
      features: [
        'AI financial analytics',
        'Growth & revenue forecasting',
        'Continuous financial monitoring',
        'Business intelligence & predictive insights',
        'Performance optimization'
      ],
      badge: 'AI Growth Engine',
      uiUrl: 'fynovo.in',
      mockupType: 'browser',
      image: '/fynovo.png',
      stats: [
        { label: 'Intelligence Level', val: 'Predictive AI' },
        { label: 'Reporting Hub', val: 'Automated BI' }
      ],
      // Brand Theme: Deep Teal / Ocean Blue (#087E8B / #0E7490)
      theme: {
        badgeBg: 'bg-cyan-700 text-white',
        subText: 'text-cyan-800 dark:text-cyan-400',
        checkColor: 'text-cyan-700 dark:text-cyan-400',
        ambientGlow: 'bg-cyan-500/30 shadow-[0_20px_60px_-15px_rgba(14,116,144,0.4)]',
        btnBg: 'bg-cyan-700 hover:bg-cyan-800 text-white shadow-cyan-700/30',
        cardBorder: 'border-cyan-200 dark:border-cyan-500/30',
        frameShadow: 'shadow-[0_25px_50px_-12px_rgba(14,116,144,0.3)] border-cyan-500/40',
        pulseDot: 'bg-cyan-400'
      }
    },
    {
      id: 'ciphergate',
      name: 'CipherGate',
      subtitle: 'Worker Management & AI Biometrics',
      category: 'WORKFORCE TECHNOLOGY',
      link: 'https://ciphergate.in/',
      description: 'A modern worker management app that tracks salary and features AI Facial Recognition for touchless attendance, secure verification, and real-time monitoring.',
      features: [
        'AI Facial Recognition',
        'Touchless Attendance Logging',
        'Secure Identity Verification',
        'Real-Time Perimeter & Salary Tracking',
        '99.9% Recognition Accuracy',
        '< 1s Identification Speed'
      ],
      badge: 'Live Platform',
      uiUrl: 'ciphergate.in',
      mockupType: 'browser',
      image: '/ciphergate.png',
      stats: [
        { label: 'Accuracy Rate', val: '99.9%' },
        { label: 'Identify Speed', val: '< 1s' }
      ],
      // Brand Theme: Dark Forest Green (#064E3B / #047857)
      theme: {
        badgeBg: 'bg-teal-900 text-teal-100',
        subText: 'text-teal-900 dark:text-teal-400',
        checkColor: 'text-teal-800 dark:text-teal-400',
        ambientGlow: 'bg-teal-700/30 shadow-[0_20px_60px_-15px_rgba(4,120,87,0.4)]',
        btnBg: 'bg-teal-900 hover:bg-teal-950 text-white shadow-teal-900/30',
        cardBorder: 'border-teal-300 dark:border-teal-600/30',
        frameShadow: 'shadow-[0_25px_50px_-12px_rgba(4,120,87,0.3)] border-teal-600/40',
        pulseDot: 'bg-emerald-400'
      }
    },
    {
      id: 'f3',
      name: 'F3 Engine',
      subtitle: 'Supply Chain & Fulfillment Control Tower',
      category: 'ENTERPRISE LOGISTICS',
      link: 'https://f3engine.com/',
      description: 'A fulfillment app providing real-time inventory tracking, intelligent order routing, shipment visibility, analytics, warehouse automation, and operational insights from a single control center.',
      features: [
        'Real-time multi-warehouse inventory',
        'Smart order routing algorithms',
        'Fulfillment & packing automation',
        'Warehouse operational analytics'
      ],
      badge: 'Logistics Engine',
      uiUrl: 'f3engine.com',
      mockupType: 'browser',
      image: '/f3.png',
      stats: [
        { label: 'Warehouses', val: '1000+' },
        { label: 'Uptime SLA', val: '99.9%' },
        { label: 'Monthly Orders', val: '10K+' }
      ],
      // Brand Theme: Royal Electric Blue (#1D4ED8)
      theme: {
        badgeBg: 'bg-blue-600 text-white',
        subText: 'text-blue-700 dark:text-blue-400',
        checkColor: 'text-blue-600 dark:text-blue-400',
        ambientGlow: 'bg-blue-500/30 shadow-[0_20px_60px_-15px_rgba(29,78,216,0.4)]',
        btnBg: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30',
        cardBorder: 'border-blue-200 dark:border-blue-500/30',
        frameShadow: 'shadow-[0_25px_50px_-12px_rgba(29,78,216,0.3)] border-blue-500/40',
        pulseDot: 'bg-blue-400'
      }
    }
  ];

  return (
    <div className={`min-h-screen bg-brand-canvas dark:bg-neutral-950 text-brand-dark dark:text-white pt-24 pb-32 transition-colors duration-300 ${isEmbedded ? 'pt-16' : 'pt-28'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optional Back link if not embedded */}
        {!isEmbedded && (
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <button
              onClick={onBackToHome}
              className="inline-flex items-center text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-brand-dark dark:hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform text-red-600" />
              <span>Back to Main Overview</span>
            </button>
          </motion.div>
        )}

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-neutral-900 border border-red-300 dark:border-neutral-800 text-red-800 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
            Software Applications Showcase
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark dark:text-white leading-tight">
            Commercial Software Suite
          </h2>

          <p className="mt-4 text-lg text-brand-muted dark:text-gray-300 leading-relaxed">
            Real product screenshots and interface previews highlighted with each platform’s signature brand theme colors, live pulse indicators, and glowing ambient backdrops.
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/* OPEN NARRATIVE FEATURE SHOWCASE WITH SCROLL FADE-UP ANIMATIONS */}
        {/* ============================================================ */}
        <div className="space-y-28">
          {products.map((item, index) => {
            const isEven = index % 2 === 0;
            const t = item.theme;

            return (
              <motion.section
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative border-b border-gray-200/80 dark:border-neutral-800 pb-24 last:border-b-0"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>

                  {/* TEXT CONTENT COLUMN */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Badge with Live Pulse Dot & Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold shadow-sm ${t.badgeBg}`}>
                        <span className="relative flex h-2 w-2">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${t.pulseDot}`}></span>
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${t.pulseDot}`}></span>
                        </span>
                        {item.badge}
                      </span>
                      <span className="text-xs font-mono font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>

                    {/* App Title & Subtitle */}
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark dark:text-white leading-tight">
                      {item.name}
                    </h3>
                    
                    <div className={`text-sm font-semibold font-mono mt-1 ${t.subText}`}>
                      {item.subtitle}
                    </div>

                    {/* App Description */}
                    <p className="mt-5 text-base sm:text-lg text-brand-muted dark:text-gray-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Key Stats Strip */}
                    <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-gray-200/60 dark:border-neutral-800">
                      {item.stats.map((s, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-brand-dark dark:text-white">
                          <Zap className={`w-4 h-4 shrink-0 ${t.checkColor}`} />
                          <span className="text-gray-500 dark:text-gray-400">{s.label}:</span>
                          <span className="font-bold text-brand-dark dark:text-white">{s.val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Key Capabilities List */}
                    <div className="mt-6 space-y-2.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                        Key Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium group/feat">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 transition-transform group-hover/feat:scale-125 ${t.checkColor}`} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {item.demoCredentials && (
                      <div className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 max-w-md">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                          <ShieldCheck className={`w-4 h-4 ${t.checkColor}`} />
                          <span>Demo Access Credentials</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-xs font-medium">
                          <div className="flex items-center gap-1.5">
                            <span className="text-gray-400">Username:</span>
                            <code className="px-2 py-0.5 rounded bg-white dark:bg-neutral-950 border border-gray-200 dark:border-neutral-800 font-mono font-bold text-gray-800 dark:text-gray-200">
                              {item.demoCredentials.username}
                            </code>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-gray-400">Password:</span>
                            <code className="px-2 py-0.5 rounded bg-white dark:bg-neutral-950 border border-gray-200 dark:border-neutral-800 font-mono font-bold text-gray-800 dark:text-gray-200">
                              {item.demoCredentials.password}
                            </code>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* App Specific Themed Explore Button */}
                    <div className="mt-8">
                      {item.isInternal ? (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={onOpenContact}
                          className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg transition-all ${t.btnBg}`}
                        >
                          <span>Request Timetabling System Demo</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      ) : (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg transition-all group/btn ${t.btnBg}`}
                        >
                          <span>Explore {item.name}</span>
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </motion.a>
                      )}
                    </div>

                  </div>

                  {/* UI MOCKUP / SCREENSHOT COLUMN WITH ZOOM & AMBIENT GLOW */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group">
                      
                      {/* APP-SPECIFIC BRAND COLORED AMBIENT BACKLIGHT SHADOW */}
                      <div className={`absolute -inset-4 rounded-3xl blur-2xl pointer-events-none transition-all duration-500 opacity-60 group-hover:opacity-100 ${t.ambientGlow}`}></div>

                      {item.mockupType === 'standalone-mobile' ? (
                        /* Dedicated Standalone 3D Phone Bezel Display for Billzzy Lite */
                        <motion.div 
                          whileHover={{ y: -6, scale: 1.03 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10 max-w-[340px] mx-auto"
                        >
                          <img
                            src={item.image}
                            alt="Billzzy Lite POS App"
                            className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                          />
                        </motion.div>
                      ) : (
                        /* Desktop Browser Frame Mockup for Web Applications */
                        <motion.div 
                          whileHover={{ y: -6 }}
                          transition={{ duration: 0.3 }}
                          className={`bg-white dark:bg-neutral-950 rounded-2xl border border-gray-200 dark:border-neutral-800 overflow-hidden relative z-10 transition-shadow ${t.frameShadow}`}
                        >
                          
                          {/* Chrome Header */}
                          <div className="bg-gray-100 dark:bg-neutral-900 px-4 py-3 border-b border-gray-200 dark:border-neutral-800 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                              <div className="w-3 h-3 rounded-full bg-red-600"></div>
                              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                            </div>
                            <div className="bg-white dark:bg-neutral-800 px-4 py-1 rounded-md text-[11px] font-mono text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-neutral-700 flex items-center gap-2">
                              <Globe className="w-3 h-3 text-red-600 dark:text-red-400" />
                              <span>{item.uiUrl}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                              </span>
                              <span>LIVE TELEMETRY</span>
                            </div>
                          </div>

                          {/* Image Container with Subtle Zoom on Hover */}
                          {item.image ? (
                            <div className="relative overflow-hidden bg-gray-50 dark:bg-neutral-900 max-h-[380px] flex items-center justify-center">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                            </div>
                          ) : (
                            <div className="p-6 bg-white dark:bg-neutral-900 text-brand-dark dark:text-white space-y-4 font-mono text-xs">
                              <div className="flex items-center justify-between border-b border-gray-200 dark:border-neutral-800 pb-3">
                                <div>
                                  <div className="text-sm font-bold text-brand-dark dark:text-white font-serif">{item.name} Portal</div>
                                  <div className="text-[11px] text-gray-500 dark:text-gray-400">{item.subtitle}</div>
                                </div>
                                <span className="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 text-[10px] font-bold">
                                  OPERATIONAL
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                {item.stats.map((st, stIdx) => (
                                  <div key={stIdx} className="p-3 bg-gray-50 dark:bg-neutral-950 rounded-lg border border-gray-200 dark:border-neutral-800">
                                    <div className="text-[10px] text-gray-500">{st.label}</div>
                                    <div className="text-sm font-bold text-red-600 dark:text-red-400 mt-0.5">{st.val}</div>
                                  </div>
                                ))}
                              </div>

                              <div className="p-3 bg-gray-50 dark:bg-neutral-950 rounded-lg border border-gray-200 dark:border-neutral-800 flex items-center justify-between text-[11px]">
                                <span className="text-gray-500 dark:text-gray-400">Platform Provider:</span>
                                <span className="text-red-700 dark:text-red-400 font-semibold">Proinfocus Pte Ltd</span>
                              </div>
                            </div>
                          )}

                        </motion.div>
                      )}

                    </div>
                  </div>

                </div>
              </motion.section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
