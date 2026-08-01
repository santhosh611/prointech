import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin, Building2 } from 'lucide-react';

export default function CTABand() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI & Automation',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    inquiryId: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null, inquiryId: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          inquiryId: data.inquiryId,
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          service: 'AI & Automation',
          message: '',
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.error || 'Failed to submit inquiry. Please check your information and try again.',
          inquiryId: null,
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Network connection failed. Please verify the backend server is running on port 5000.',
        inquiryId: null,
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-canvas dark:bg-neutral-950 bg-grid-pattern relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Narrative & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-semibold text-xs uppercase tracking-widest mb-3">
                <div className="w-6 h-0.5 bg-red-600"></div>
                Get In Touch
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark dark:text-white leading-tight">
                Ready to Accelerate Your Enterprise Capability?
              </h2>

              <p className="mt-4 text-base text-brand-muted dark:text-gray-300 leading-relaxed">
                Connect directly with our senior technology advisors. We conduct a preliminary architectural review of your goals with zero pressure or commitment.
              </p>

              {/* Direct Info List */}
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-neutral-900 border border-red-300 dark:border-neutral-800 text-red-700 dark:text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">Global Headquarters</h4>
                    <p className="text-sm font-semibold text-brand-dark dark:text-white mt-0.5">Proinfocus Pte Ltd Technologies</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Enterprise Engineering & AI Solutions Division</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-neutral-900 border border-red-300 dark:border-neutral-800 text-red-700 dark:text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">Advisory Inquiry</h4>
                    <p className="text-sm font-semibold text-brand-dark dark:text-white mt-0.5">advisory@proinfocus.com</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Response guaranteed within 24 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-neutral-900 border border-red-300 dark:border-neutral-800 text-red-700 dark:text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">Enterprise Desk</h4>
                    <p className="text-sm font-semibold text-brand-dark dark:text-white mt-0.5">+1 (800) 555-FOCUS</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Mon - Fri (8:00 AM - 6:00 PM EST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility Note */}
            <div className="mt-12 p-4 bg-red-50 dark:bg-neutral-900 border border-red-200 dark:border-neutral-800 rounded-lg text-xs text-red-900 dark:text-red-300 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
              <span>All consultations are executed under non-disclosure confidentiality protections.</span>
            </div>
          </motion.div>

          {/* Right Column: Contact/Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-neutral-900 p-8 sm:p-10 rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-card">

              <h3 className="font-serif text-2xl font-bold text-brand-dark dark:text-white mb-2">
                Submit an Enterprise Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted dark:text-gray-300 mb-8">
                Please fill out the form below and an enterprise solution architect will get in touch with you.
              </p>

              {/* Status Toast Alert Messages with AnimatePresence */}
              <AnimatePresence>
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700/50 rounded-lg text-emerald-900 dark:text-emerald-200 text-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block">Inquiry Submitted Successfully!</strong>
                      <span>Thank you for reaching out to Proinfocus Pte Ltd. Reference ID: <code className="bg-emerald-100 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded text-xs font-mono font-bold">{status.inquiryId}</code>. Our senior advisory team will contact you within 24 hours.</span>
                    </div>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-700/50 rounded-lg text-rose-900 dark:text-rose-200 text-sm flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block">Submission Error</strong>
                      <span>{status.error}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. e.vance@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Global Tech Corp"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      Primary Area of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    >
                      <option value="AI & Automation">Artificial Intelligence & Automation</option>
                      <option value="Cloud Infrastructure">Cloud Infrastructure & Migration</option>
                      <option value="Enterprise Software">Enterprise Software Engineering</option>
                      <option value="Full Partnership">Full Strategic Technology Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                    Project Scope / Inquiry Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your enterprise requirements, timeline, or current technical challenges..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-4 rounded-lg font-semibold text-white bg-red-700 hover:bg-red-800 transition-all duration-200 shadow-md hover:shadow-[0_4px_20px_-2px_rgba(185,28,28,0.5)] flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span>Processing Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Inquiry to Advisory Team</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
