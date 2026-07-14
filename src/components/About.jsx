import React from 'react';

const About = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="liquid-glass-strong rounded-3xl p-8 lg:p-12">
        <h2 className="text-sm tracking-widest uppercase text-white/50 mb-8 font-medium">Professional Summary</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
              Computer Science and Engineering undergraduate with hands-on experience in <span className="font-medium text-white">Java, Full Stack Web Development, Firebase, React, and IoT-enabled software systems</span>. 
              Currently a Research Intern at <span className="font-serif italic">ICAR–National Research Centre on Yak</span>, building EstroSync — an intelligent estrous synchronization platform integrating IoT, cloud, and AI-assisted reproductive monitoring.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-4 justify-center">
            <div className="liquid-glass rounded-2xl p-4 flex flex-col">
              <span className="text-xs text-white/50 uppercase tracking-wider mb-1">Education</span>
              <span className="font-semibold">B.Tech CSE (2023–2027)</span>
              <span className="text-sm text-white/70">Assam Don Bosco University</span>
            </div>
            
            <div className="liquid-glass rounded-2xl p-4 flex flex-col">
              <span className="text-xs text-white/50 uppercase tracking-wider mb-1">Academic Standing</span>
              <span className="font-semibold text-xl">CGPA 7.14<span className="text-sm text-white/50 font-normal">/10</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
