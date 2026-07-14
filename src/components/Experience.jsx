import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "ICAR–National Research Centre on Yak (ICAR-NRCY)",
      location: "Dirang, Arunachal Pradesh",
      date: "June 2026–Present",
      bullets: [
        "Developing EstroSync, an IoT-enabled estrous synchronization PWA using React + Firebase",
        "Implementing Firebase Auth, Firestore, Storage, role-based access control",
        "Integrating IoT sensor data and AI-assisted reproductive analytics"
      ]
    },
    {
      title: "Software Development Intern",
      company: "Kamaiah Engineering Services Pvt. Ltd.",
      location: "Kahilipara, Guwahati",
      date: "July 2025",
      bullets: [
        "120-hour internship in software development practices, documentation, testing",
        "SDLC, requirement analysis, and QA process exposure"
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-sm tracking-widest uppercase text-white/50 mb-8 font-medium px-4">Experience</h2>
      
      <div className="relative pl-4 md:pl-8">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-8 bottom-8 w-px bg-white/10"></div>
        
        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              {/* Timeline Node */}
              <div className="absolute left-[-16px] top-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Briefcase className="w-4 h-4 text-white/80" />
              </div>
              
              <div className="liquid-glass rounded-3xl p-6 lg:p-8 hover:scale-[1.01] transition-transform">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white/90 mb-1">{exp.title}</h3>
                    <div className="text-white/70 font-medium">{exp.company}</div>
                    <div className="text-sm text-white/50 mt-1">{exp.location}</div>
                  </div>
                  <div className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80 whitespace-nowrap self-start">
                    {exp.date}
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-white/70 space-y-2 leading-relaxed text-sm md:text-base">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="pl-2 relative">
                      <span className="absolute left-0">-</span>
                      <span className="pl-4 block">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
