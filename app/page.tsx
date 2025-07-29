'use client';

import Hero from '../components/Hero';
import ProblemsSection from '../components/ProblemsSection';
import SolutionSection from '../components/SolutionSection';
import BenefitsSection from '../components/BenefitsSection';
import FormSection from '../components/FormSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemsSection />
      <SolutionSection />
      <BenefitsSection />
      <FormSection />
      <Footer />
    </main>
  );
}