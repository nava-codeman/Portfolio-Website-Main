import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  // Smooth scroll using Lenis (if installed) or basic CSS smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen text-white bg-[hsl(0,0%,6%)] selection:bg-white/30 font-sans">
      
      {/* Background Video */}
      <video 
        src="/hero-bg.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="fixed top-0 left-0 w-screen h-screen object-cover object-center z-0 pointer-events-none"
        style={{ filter: 'grayscale(100%) brightness(0.55) contrast(1.1)' }}
      />

      {/* Main Content Floating Above */}
      <main className="relative z-10">
        <Hero />
        
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col gap-12 lg:gap-24 py-12 lg:py-24">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <Certifications />
            <Leadership />
          </div>
        </div>

        <Contact />
      </main>
    </div>
  );
}

export default App;
