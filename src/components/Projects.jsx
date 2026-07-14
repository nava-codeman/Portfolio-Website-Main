import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EstroSync",
      tagline: "solo-built/completed",
      description: "Smart estrous synchronization platform for precision livestock management, built independently with real-time dashboards and offline support.",
      tags: ["React", "Firebase", "IoT", "AI", "PWA"],
      icon: <Code2 className="w-6 h-6 text-white" />
    },
    {
      title: "YakSync",
      tagline: "ongoing/team project",
      description: "Companion platform to EstroSync, currently in development at ICAR-NRCY, sharing ~80-90% of its core functionality.",
      tags: ["React", "Firebase", "IoT", "Team"],
      icon: <Code2 className="w-6 h-6 text-white" />
    },
    {
      title: "FitHub",
      tagline: "completed",
      description: "MERN fitness platform with personalized workout/diet plans and progress tracking.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
      icon: <Code2 className="w-6 h-6 text-white" />
    },
    {
      title: "FundSure",
      tagline: "completed",
      description: "Transparent NGO/government funding platform with project workflows and beneficiary tracking.",
      tags: ["React", "Firebase", "Role-Based Access"],
      icon: <Code2 className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-center justify-between mb-8 px-4">
        <h2 className="text-sm tracking-widest uppercase text-white/50 font-medium">Featured Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="liquid-glass-strong rounded-3xl p-6 lg:p-8 flex flex-col h-full hover:scale-105 transition-transform group cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center">
                {project.icon}
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4 text-white -rotate-45" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <span className="text-xs text-white/50 uppercase tracking-wider mb-4 inline-block">{project.tagline}</span>
            <p className="text-white/70 text-sm leading-relaxed mb-8 flex-1">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className="liquid-glass rounded-full px-3 py-1.5 text-xs text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
