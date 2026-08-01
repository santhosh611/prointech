import React from 'react';
import Navbar from '../frontend/src/components/Navbar';
import Hero from '../frontend/src/components/Hero';
import CompanyOverview from '../frontend/src/components/CompanyOverview';
import CapabilitiesGrid from '../frontend/src/components/CapabilitiesGrid';
import SupportModel from '../frontend/src/components/SupportModel';
import ServiceLevels from '../frontend/src/components/ServiceLevels';
import EnterpriseTrust from '../frontend/src/components/EnterpriseTrust';
import ProductsTeaser from '../frontend/src/components/ProductsTeaser';
import CTABand from '../frontend/src/components/CTABand';
import Footer from '../frontend/src/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-canvas text-brand-dark flex flex-col font-sans selection:bg-gold-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CompanyOverview />
        <CapabilitiesGrid />
        <SupportModel />
        <ServiceLevels />
        <EnterpriseTrust />
        <ProductsTeaser />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
