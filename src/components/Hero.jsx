import React, { useState } from 'react';
import { Menu, Download, ArrowRight, Mail, Cpu, Dumbbell } from 'lucide-react';
import ResumeModal from './ResumeModal';
import SocialsModal from './SocialsModal';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 lg:p-6 gap-4 lg:gap-6">
      
      {/* Left Panel */}
      <div className="relative w-full lg:w-[52%] min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)] rounded-3xl p-6 lg:p-10 flex flex-col liquid-glass-strong">
        
        {/* Nav */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <img 
              src="/profile.png" 
              alt="Navjyoti Nath" 
              className="w-10 h-10 rounded-full object-cover border border-white/10"
            />
            <span className="font-semibold text-2xl tracking-tighter text-white">Navjyoti Nath</span>
          </div>
          
          <button 
            className="liquid-glass rounded-full px-6 py-2.5 flex items-center gap-3 hover:scale-105 active:scale-95 transition-transform"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="text-sm font-medium">Menu</span>
            <Menu className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Center */}
        <div className="flex-1 flex flex-col items-center justify-center text-center mt-12 mb-12">
          <img 
            src="/profile.png" 
            alt="Navjyoti Nath" 
            className="w-24 h-24 rounded-full object-cover border-2 border-white/10 shadow-lg mb-8 liquid-glass p-1"
          />
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-[-0.05em] text-white font-medium mb-6 leading-[1.1]">
            Building the <span className="font-serif italic text-white/80">future</span><br className="hidden md:block"/> of software
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-lg">
            CS Undergrad · Full Stack Developer · IoT & AI Enthusiast
          </p>
          
          <button 
            className="liquid-glass-strong rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:scale-105 active:scale-95 transition-transform mb-12 group"
            onClick={() => setIsResumeOpen(true)}
          >
            <span className="text-sm font-medium">View Resume</span>
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <Download className="w-4 h-4" />
            </div>
          </button>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="liquid-glass rounded-full px-4 py-2 text-xs text-white/80">Full Stack Dev</span>
            <span className="liquid-glass rounded-full px-4 py-2 text-xs text-white/80">IoT & AI</span>
            <span className="liquid-glass rounded-full px-4 py-2 text-xs text-white/80">Cloud & Firebase</span>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-auto text-center flex flex-col items-center">
          <span className="text-xs tracking-widest uppercase text-white/50 mb-3 block">Current Focus</span>
          <p className="text-base md:text-lg text-white/90 max-w-md mx-auto mb-4 leading-relaxed">
            "<span className="font-serif italic">Designing systems</span> that connect the physical and digital world."
          </p>
          <div className="flex items-center justify-center gap-4 w-full max-w-sm">
            <div className="h-px bg-white/20 flex-1"></div>
            <span className="text-[10px] tracking-wider uppercase text-white/60 font-medium">Research Intern, ICAR–NRCY</span>
            <div className="h-px bg-white/20 flex-1"></div>
          </div>
        </div>
      </div>

      {/* Right Panel (Desktop Only) */}
      <div className="hidden lg:flex flex-col w-[48%] gap-6">
        
        {/* Top Bar */}
        <div className="flex justify-between items-start">
          <button 
            className="liquid-glass rounded-full p-2 flex items-center gap-2 hover:bg-white/5 transition-colors"
            onClick={() => setIsSocialsOpen(true)}
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4 -rotate-45" />
            </div>
            <span className="text-sm font-medium px-2">Socials</span>
          </button>
          
          <button className="liquid-glass rounded-full px-6 py-3 flex items-center gap-3 hover:scale-105 active:scale-95 transition-transform" onClick={() => scrollTo('contact')}>
            <span className="text-sm font-medium">Contact Me</span>
            <Mail className="w-4 h-4" />
          </button>
        </div>

        {/* Availability Card */}
        <div className="w-64 liquid-glass rounded-3xl p-6 self-end mt-4">
          <div className="w-2 h-2 rounded-full bg-green-400 mb-4 animate-pulse"></div>
          <h3 className="font-semibold text-lg mb-2">Open to opportunities</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Available for internships & full-time roles from 2027.
          </p>
        </div>

        {/* Bottom Feature Section */}
        <div className="mt-auto liquid-glass rounded-[2.5rem] p-4 flex flex-col gap-4">
          
          {/* Top Two Cards */}
          <div className="grid grid-cols-2 gap-4 h-40">
            <div className="liquid-glass rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer group" onClick={() => scrollTo('projects')}>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">EstroSync</h4>
                <p className="text-xs text-white/60">IoT estrous platform</p>
              </div>
            </div>
            
            <div className="liquid-glass rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer group" onClick={() => scrollTo('projects')}>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">FitHub</h4>
                <p className="text-xs text-white/60">MERN fitness app</p>
              </div>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="liquid-glass rounded-3xl p-6 h-48 relative overflow-hidden flex items-end hover:scale-[1.02] transition-transform cursor-pointer group" onClick={() => scrollTo('projects')}>
            {/* Placeholder for project thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            
            <div className="relative z-20 w-full flex justify-between items-end">
              <div>
                <h4 className="font-semibold text-lg mb-1">FundSure</h4>
                <p className="text-sm text-white/70">Transparent funding platform</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-black/70 backdrop-blur-xl transition-all">
          <button 
            className="absolute top-6 right-6 lg:top-12 lg:right-12 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all shadow-lg hover:scale-105 active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
          
          <nav className="flex flex-col items-center gap-8 text-3xl font-medium tracking-tight">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'contact', label: 'Contact Me' },
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => scrollTo(item.id), 100);
                }}
                className="text-white/70 hover:text-white hover:scale-110 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <SocialsModal isOpen={isSocialsOpen} onClose={() => setIsSocialsOpen(false)} />
    </div>
  );
};

export default Hero;
