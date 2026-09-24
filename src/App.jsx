import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import AudioController from './components/AudioController';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import DribbbleDeckNav from './components/DribbbleDeckNav';
import AboutSection from './components/AboutSection';
import TypographyStatement from './components/TypographyStatement';
import ProjectsSection from './components/ProjectsSection';
import ToolboxSection from './components/ToolboxSection';
import ProcessSection from './components/ProcessSection';
import ExperienceSection from './components/ExperienceSection';
import DsaTerminalSection from './components/DsaTerminalSection';
import GithubSection from './components/GithubSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FoodRushCaseStudyModal from './components/FoodRushCaseStudyModal';
import JobGuardCaseStudyModal from './components/JobGuardCaseStudyModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [foodRushModalOpen, setFoodRushModalOpen] = useState(false);
  const [jobGuardModalOpen, setJobGuardModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-[#CCFF00] selection:text-black">
      {/* 01 / Preloader Boot Sequence */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Global Interactive Utilities */}
      <CustomCursor />
      <AudioController />

      {/* Sticky Side Badge: Available For Opportunity (Desktop Only) */}
      {!loading && (
        <div className="fixed left-0 top-1/2 z-40 hidden md:flex items-center transform -translate-y-1/2 pointer-events-auto">
          <a
            href="#contact"
            className="bg-[#0F0F0F]/90 border-y border-r border-[#CCFF00]/30 hover:border-[#CCFF00]/60 backdrop-blur-xl text-[#CCFF00] py-6 px-2.5 text-[9px] font-mono font-bold uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(204,255,0,0.15)] rounded-r-2xl cursor-pointer hover:bg-[#CCFF00]/8 transition-all duration-300 group"
          >
            <span className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping inline-block" />
              AVAILABLE FOR OPPORTUNITY
            </span>
          </a>
        </div>
      )}

      {/* Main Website Viewports */}
      {!loading && (
        <div className="flex flex-col w-full overflow-x-hidden">
          <HeaderNav />
          <main>
            <Hero onOpenFoodRushModal={() => setFoodRushModalOpen(true)} />
            <DribbbleDeckNav
              onOpenFoodRushModal={() => setFoodRushModalOpen(true)}
              onOpenJobGuardModal={() => setJobGuardModalOpen(true)}
            />
            <AboutSection />
            <TypographyStatement />
            <ProjectsSection
              onOpenFoodRushModal={() => setFoodRushModalOpen(true)}
              onOpenJobGuardModal={() => setJobGuardModalOpen(true)}
            />
            <ToolboxSection />
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

      {/* JobGuard Full Screen Case Study Modal */}
      <JobGuardCaseStudyModal
        isOpen={jobGuardModalOpen}
        onClose={() => setJobGuardModalOpen(false)}
      />
    </div>
  );
}