import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="scroll-mt-24">
      <div className="liquid-glass rounded-3xl p-6 lg:p-8 h-full flex flex-col">
        <h2 className="text-sm tracking-widest uppercase text-white/50 mb-8 font-medium">Certifications & Achievements</h2>
        
        <div className="space-y-8 flex-1">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-white/70" />
              <h3 className="font-semibold text-lg">Certifications</h3>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>NPTEL – Joy of Computing Using Python</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>PwC Salesforce Program (Ongoing)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>IIT Guwahati Quiz Competition Participant</span>
              </li>
            </ul>
          </div>
          
          <div className="w-full h-px bg-white/10"></div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-white/70" />
              <h3 className="font-semibold text-lg">Achievements</h3>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>Gold Medal – Bench Press (Under 75kg, ADBU 2026)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>Gold Medal – Short Video Competition (ADBU 2026)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>Silver – Short Video Competition (2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>Silver – Advertisement Making (2026)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>Silver – Football Tournament, Nowgong University (2022)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>Top 5 State-Level Magazine Art Competition, Assam</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
