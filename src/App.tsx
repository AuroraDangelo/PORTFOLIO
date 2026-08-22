import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuroraCanvas } from './components/background/AuroraCanvas';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { JourneySection } from './components/sections/JourneySection';
import { CodingSection } from './components/sections/CodingSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ContactSection } from './components/sections/ContactSection';
import { CatwomanEasterEgg } from './components/sections/CatwomanEasterEgg';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/common/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      {/* Real-time Aurora Borealis Canvas Layer */}
      <AuroraCanvas />

      {/* Smooth Trailing Glowing Cursor (Fine Pointers) */}
      <CustomCursor />

      {/* Main Container */}
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Floating Glassmorphism Pill Navbar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Portfolio Story Flow */}
        <main style={{ flex: 1 }}>
          {/* 1. Hero Landing */}
          <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* 2. About Me */}
          <AboutSection />

          {/* 3. Technical Skills Arsenal */}
          <SkillsSection />

          {/* 4. Featured & Utility Projects */}
          <ProjectsSection />

          {/* 5. Academic & Learning Journey */}
          <JourneySection />

          {/* 6. Competitive Programming & GitHub Activity */}
          <CodingSection />

          {/* 7. Dedicated Resume Section */}
          <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* 8. Direct Contact & Collaboration */}
          <ContactSection />

          {/* 9. Interactive Catwoman Easter Egg */}
          <CatwomanEasterEgg />
        </main>

        {/* Footer */}
        <Footer />

        {/* Full Resume Preview Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
