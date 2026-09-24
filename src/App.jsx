import React, { useState, useEffect } from 'react';
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
import GlobalParticleUniverse from './components/GlobalParticleUniverse';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [foodRushModalOpen, setFoodRushModalOpen] = useState(false);
  const [jobGuardModalOpen, setJobGuardModalOpen] = useState(false);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-blue-500 selection:text-white">
      {/* ── Global 3D particle universe — fixed behind all content ── */}
      <GlobalParticleUniverse />

      {/* 01 / Preloader Boot Sequence */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Global Interactive Utilities */}
      <CustomCursor />
      <AudioController />



      {/* Main Website Viewports — mounted immediately so Spline 3D preloads during preloader, instantly visible on Enter */}
      <div
        className={`relative z-10 flex flex-col w-full overflow-x-hidden transition-opacity duration-700 ${
          loading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-hidden={loading}
      >
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