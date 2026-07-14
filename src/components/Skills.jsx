import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C", "C++", "Python", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "Firebase", "MongoDB"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Android Studio", "Figma", "Antigravity"]
    },
    {
      title: "Core Subjects",
      skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-sm tracking-widest uppercase text-white/50 mb-8 font-medium px-4">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="liquid-glass rounded-3xl p-6 lg:p-8 hover:scale-[1.02] transition-transform">
            <h3 className="font-medium text-white/90 mb-6 font-serif italic text-xl">{category.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, skillIdx) => (
                <span 
                  key={skillIdx} 
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
