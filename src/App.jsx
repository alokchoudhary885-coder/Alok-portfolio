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
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-blue-500 selection:text-white">
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
            className="bg-slate-900/90 border-y border-r border-slate-800 hover:border-blue-500/50 backdrop-blur-xl text-blue-400 py-5 px-2 text-[9px] font-mono font-semibold uppercase tracking-[0.3em] shadow-md shadow-black/20 rounded-r-xl cursor-pointer hover:bg-slate-850 transition-all duration-200 group"
          >
            <span className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              AVAILABLE FOR HIRE
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