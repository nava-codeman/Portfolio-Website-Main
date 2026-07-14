import React from 'react';
import { HeartHandshake } from 'lucide-react';

const Leadership = () => {
  return (
    <section id="leadership" className="scroll-mt-24 h-full">
      <div className="liquid-glass rounded-3xl p-6 lg:p-8 h-full flex flex-col">
        <h2 className="text-sm tracking-widest uppercase text-white/50 mb-8 font-medium">Leadership & Extracurricular</h2>
        
        <div className="flex flex-col flex-1 justify-between">
          <div className="mb-8">
            <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center mb-6">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Secretary, Indoor Sports Committee</h3>
            <div className="text-sm text-white/60 mb-4">Assam Don Bosco University</div>
            
            <p className="text-white/80 text-sm leading-relaxed">
              Coordinated university sporting events and student participation, organizing schedules, managing equipment, and fostering a spirit of sportsmanship among peers.
            </p>
          </div>
          
          <div className="liquid-glass rounded-2xl p-6 mt-auto">
            <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Interests & Hobbies</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">Powerlifting</span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">Sketching</span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">Photography</span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">Video Editing</span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">UI/UX Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
