import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import AudioController from './components/AudioController';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import DribbbleDeckNav from './components/DribbbleDeckNav';
import AboutSection from './components/AboutSection';
import ToolboxSection from './components/ToolboxSection';
import ProjectsSection from './components/ProjectsSection';
import FoodRushCaseStudyModal from './components/FoodRushCaseStudyModal';
import ProcessSection from './components/ProcessSection';
import ExperienceSection from './components/ExperienceSection';
import DsaTerminalSection from './components/DsaTerminalSection';
import GithubSection from './components/GithubSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [foodRushModalOpen, setFoodRushModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08090C] text-slate-100 selection:bg-brandCyan selection:text-black">
      {/* 01 / Preloader Boot Sequence */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Global Interactive Utilities */}
      <CustomCursor />
      <AudioController />

      {/* Main Website Viewports */}
      {!loading && (
        <div className="flex flex-col w-full overflow-x-hidden">
          <HeaderNav />
          <main>
            <Hero />
            <DribbbleDeckNav onOpenFoodRushModal={() => setFoodRushModalOpen(true)} />
            <AboutSection />
            <ToolboxSection />
            <ProjectsSection onOpenFoodRushModal={() => setFoodRushModalOpen(true)} />
            <ProcessSection />
            <ExperienceSection />
            <DsaTerminalSection />
            <GithubSection />
            <CertificationsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}

      {/* FoodRush Full Screen Case Study Modal */}
      <FoodRushCaseStudyModal
        isOpen={foodRushModalOpen}
        onClose={() => setFoodRushModalOpen(false)}
      />
    </div>
  );
}
