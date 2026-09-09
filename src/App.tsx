import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedLogos } from './components/TrustedLogos';
import { Features } from './components/Features';
import { AIDemo } from './components/AIDemo';
import { Workflow } from './components/Workflow';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { GetStartedModal } from './components/GetStartedModal';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState('Pro');

  const handleOpenGetStarted = (planName = 'Pro') => {
    setSelectedPlanForModal(planName);
    setIsGetStartedOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e5e1e4] flex flex-col selection:bg-[#7bd0ff] selection:text-[#0a0a0c]">
      {/* 01. Navigation */}
      <Navbar onOpenGetStarted={() => handleOpenGetStarted('Pro')} />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 02. Hero Section */}
        <Hero
          onOpenGetStarted={() => handleOpenGetStarted('Pro')}
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
        />

        {/* 03. Trusted By / Companies Section */}
        <TrustedLogos />

        {/* 04. Features Section */}
        <Features />

        {/* 05. Interactive AI Demo */}
        <AIDemo />

        {/* 06. Workflow Section */}
        <Workflow />

        {/* 07. Statistics Section */}
        <Stats />

        {/* 08. Pricing Section */}
        <Pricing onSelectPlan={(plan) => handleOpenGetStarted(plan)} />

        {/* 09. FAQ Section */}
        <FAQ />

        {/* 10. Final Call to Action */}
        <FinalCTA onOpenGetStarted={() => handleOpenGetStarted('Pro')} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
        initialPlan={selectedPlanForModal}
      />
    </div>
  );
}
