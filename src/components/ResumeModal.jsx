import React, { useEffect, useRef, useState } from 'react';
import { Download, X } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownload = async (e) => {
    e.stopPropagation();
    if (!resumeRef.current || isDownloading) return;
    
    setIsDownloading(true);
    const element = resumeRef.current;
    
    const opt = {
      margin:       [10, 0, 10, 0], // Top, Left, Bottom, Right margins in mm
      filename:     'Navjyoti_Nath_Resume.pdf',
      image:        { type: 'jpeg', quality: 1.0 },
      html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-center bg-black/50 backdrop-blur-md p-4 sm:p-6 lg:p-12 overflow-y-auto" onClick={onClose}>
      
      {/* Floating Action Buttons */}
      <div className="fixed top-6 right-6 lg:top-12 lg:right-12 flex flex-col gap-4 z-[110]">
        <button 
          onClick={onClose}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all shadow-lg hover:scale-105 active:scale-95"
          aria-label="Close Resume"
        >
          <X className="w-6 h-6" />
        </button>

        <button 
          onClick={handleDownload}
          disabled={isDownloading}
          className={`w-12 h-12 flex items-center justify-center rounded-full ${isDownloading ? 'bg-white/5 text-white/50 cursor-wait' : 'bg-white text-black hover:bg-gray-200 hover:scale-105 active:scale-95'} transition-all shadow-lg`}
          aria-label="Download PDF"
          title="Download as PDF"
        >
          <Download className={`w-5 h-5 ${isDownloading ? 'animate-bounce' : ''}`} />
        </button>
      </div>

      {/* A4 Page Container */}
      <div 
        className="bg-white text-black w-full max-w-[794px] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Printable Area */}
        <div ref={resumeRef} className="p-10 sm:p-12 lg:p-16 bg-white min-h-[1123px]">
          {/* Header */}
          <header className="border-b-2 border-black/80 pb-6 mb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2 text-black">Navjyoti Nath</h1>
              <p className="text-lg text-gray-700 font-medium">Morigaon, Assam, India</p>
            </div>
            <div className="text-sm text-gray-600 flex flex-col items-center sm:items-end gap-1">
              <p>+91 8822053335 | +91 9394287296</p>
              <p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jyotinav710@gmail.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">jyotinav710@gmail.com</a> | 
                <a href="https://github.com/nava-codeman" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline ml-1">GitHub</a> | 
                <a href="https://www.linkedin.com/in/navjyoti-nath-674688229/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline ml-1">LinkedIn</a>
              </p>
            </div>
          </header>

          <div className="space-y-7 text-gray-900 text-sm leading-relaxed">
            
            {/* Professional Summary */}
            <section>
              <h2 className="text-base font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-black">Professional Summary</h2>
              <p className="text-justify">
                Computer Science and Engineering undergraduate with hands-on experience in Java, Full Stack Web Development, Firebase, React, and IoT-enabled software systems. Currently serving as a Research Intern at ICAR–National Research Centre on Yak, contributing to the development of EstroSync, an intelligent estrous synchronization platform integrating IoT devices, cloud technologies, and AI-assisted reproductive monitoring. Passionate about designing scalable software solutions, solving real-world problems, and continuously expanding expertise in backend development, cloud computing, and modern software engineering practices.
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-base font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-black">Education</h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <h3 className="font-bold text-[15px] text-black">Assam Don Bosco University</h3>
                    <p className="italic">Bachelor of Technology (B.Tech), Computer Science & Engineering</p>
                  </div>
                  <div className="sm:text-right mt-1 sm:mt-0">
                    <p className="font-semibold text-black">2023 – 2027</p>
                    <p>CGPA: 7.14/10 (Current)</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <h3 className="font-bold text-[15px] text-black">Gurukul Academy Junior College, Morigaon</h3>
                    <p className="italic">Higher Secondary (Class XII)</p>
                  </div>
                  <div className="sm:text-right mt-1 sm:mt-0">
                    <p className="font-semibold text-black">2022</p>
                    <p>67%</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <h3 className="font-bold text-[15px] text-black">St. Theresa’s School, Morigaon</h3>
                    <p className="italic">Secondary School (Class X)</p>
                  </div>
                  <div className="sm:text-right mt-1 sm:mt-0">
                    <p className="font-semibold text-black">2020</p>
                    <p>70.17%</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-base font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-black">Technical Skills</h2>
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li><span className="font-semibold text-black">Languages:</span> Java, C, C++, Python, JavaScript, SQL</li>
                <li><span className="font-semibold text-black">Frontend:</span> React.js, HTML5, CSS3, Tailwind CSS</li>
                <li><span className="font-semibold text-black">Backend & Database:</span> Node.js, Express.js, Firebase, MongoDB</li>
                <li><span className="font-semibold text-black">Tools:</span> Git, GitHub, VS Code, Postman, Android Studio, Figma, Antigravity</li>
                <li><span className="font-semibold text-black">Core Subjects:</span> Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, Software Engineering</li>
              </ul>
            </section>

            {/* Experience */}
            <section className="break-inside-avoid">
              <h2 className="text-base font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-black">Experience</h2>
              <div className="space-y-5">
                
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                    <div>
                      <h3 className="font-bold text-[15px] text-black">Research Intern</h3>
                      <p className="italic font-medium text-gray-700">ICAR – National Research Centre on Yak (ICAR-NRCY) | Dirang, Arunachal Pradesh</p>
                    </div>
                    <span className="font-semibold text-black mt-1 sm:mt-0 whitespace-nowrap">June 2026 – Present</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li>Contributing to the development of EstroSync, an intelligent IoT-enabled estrous synchronization platform for precision livestock management.</li>
                    <li>Designing and developing a Progressive Web Application (PWA) using React and Firebase for real-time reproductive health monitoring and breeding management.</li>
                    <li>Implementing Firebase Authentication, Cloud Firestore, Storage, and role-based access control for secure multi-user farm management.</li>
                    <li>Collaborating with researchers to integrate IoT sensor data, automate hormone synchronization workflows, and improve reproductive efficiency in yak and cattle farming.</li>
                    <li>Participating in system architecture, database design, dashboard development, and AI-assisted reproductive analytics for smart livestock management.</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                    <div>
                      <h3 className="font-bold text-[15px] text-black">Software Development Intern</h3>
                      <p className="italic font-medium text-gray-700">Kamaiah Engineering Services Pvt. Ltd. | Kahilipara, Guwahati</p>
                    </div>
                    <span className="font-semibold text-black mt-1 sm:mt-0 whitespace-nowrap">July 2025</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li>Completed a 120-hour industrial internship focusing on software development practices, documentation, testing, and engineering workflows.</li>
                    <li>Collaborated with technical teams to understand software development life cycle, requirement analysis, and quality assurance processes.</li>
                    <li>Strengthened practical knowledge of professional software engineering methodologies, documentation standards, and collaborative development.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            <section className="break-inside-avoid">
              <h2 className="text-base font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-black">Featured Projects</h2>
              <div className="space-y-4">
                
                <div>
                  <h3 className="font-bold text-[15px] text-black mb-1">EstroSync – Smart Estrous Synchronization Platform</h3>
                  <p className="text-xs font-semibold text-gray-600 mb-1 uppercase">React • Firebase • IoT • AI • Progressive Web App</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li>Developing a next-generation smart livestock management platform as part of the ongoing research internship at ICAR–National Research Centre on Yak.</li>
                    <li>Designed to automate estrous synchronization, reproductive monitoring, hormone scheduling, and breeding recommendations through intelligent IoT-enabled devices.</li>
                    <li>Developing secure cloud infrastructure using Firebase Authentication, Firestore Database, Cloud Storage, and real-time synchronization across multiple farms.</li>
                    <li>Designing interactive dashboards for veterinarians and farmers to monitor reproductive cycles, health records, breeding history, and synchronization protocols.</li>
                    <li>Implementing scalable architecture with AI-assisted analytics, offline support, role-based access control, and intelligent notification systems for precision livestock farming.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[15px] text-black mb-1">FitHub – MERN Fitness Platform</h3>
                  <p className="text-xs font-semibold text-gray-600 mb-1 uppercase">React • Node.js • Express • MongoDB • Firebase</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li>Designed and developed a comprehensive fitness platform providing personalized workout plans, diet recommendations, and fitness tracking features.</li>
                    <li>Implemented user authentication, responsive user interface, scalable backend architecture, and secure cloud database integration.</li>
                    <li>Developed modular frontend components following modern React architecture and best software engineering practices.</li>
                    <li>Designed for future expansion with community interaction, trainer management, progress tracking, and social fitness features.</li>
                  </ul>
                </div>

                <div className="break-inside-avoid">
                  <h3 className="font-bold text-[15px] text-black mb-1">FundSure – NGO and Government Funding Platform</h3>
                  <p className="text-xs font-semibold text-gray-600 mb-1 uppercase">React • Firebase • Role-Based Access</p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li>Designed a digital funding platform connecting NGOs, government organizations, donors, and beneficiaries through a transparent online ecosystem.</li>
                    <li>Implemented role-based authentication, project management workflows, funding dashboards, and beneficiary tracking.</li>
                    <li>Designed scalable Firebase backend architecture with secure authentication and cloud-based data management.</li>
                    <li>Focused on improving transparency, accessibility, and efficiency in digital fund allocation and project monitoring.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Certifications & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 break-inside-avoid">
              <section>
                <h2 className="text-base font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-black">Certifications</h2>
                <ul className="list-disc list-outside ml-4 space-y-1 pr-2">
                  <li>NPTEL – Joy of Computing Using Python</li>
                  <li>PwC Salesforce Program (Ongoing) – Successfully completed the training phase and currently progressing through the industry pathway leading towards internship, apprenticeship, and full-time opportunities.</li>
                  <li>IIT Guwahati – Quiz Competition Participant</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-base font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-black">Achievements</h2>
                <ul className="list-disc list-outside ml-4 space-y-1">
                  <li>Gold Medal – Bench Press (Under 75 kg), Assam Don Bosco University (2026)</li>
                  <li>Gold Medal – Short Video Competition, Assam Don Bosco University (2026)</li>
                  <li>Silver Medal – Short Video Competition, Assam Don Bosco University (2025)</li>
                  <li>Silver Medal – Advertisement Making Competition, Assam Don Bosco University (2026)</li>
                  <li>Silver Medal – Football Tournament, Nowgong University (2022)</li>
                  <li>Ranked Top 5 in the State-Level Magazine Art Competition, Assam</li>
                  <li>Recipient of multiple awards in sketching, art competitions, and creative design events.</li>
                </ul>
              </section>
            </div>

            {/* Leadership & Extracurricular */}
            <section className="break-inside-avoid">
              <h2 className="text-base font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-black">Leadership & Responsibilities</h2>
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li><span className="font-semibold text-black">Secretary, Indoor Sports Committee</span>, Assam Don Bosco University, Azara</li>
                <li>Coordinated university sporting events, managed student participation, and supported event planning and execution.</li>
                <li>Promoted teamwork, leadership, and effective communication while organizing departmental and university-level activities.</li>
              </ul>
            </section>

            <section className="break-inside-avoid">
              <h2 className="text-base font-bold uppercase tracking-widest border-b border-gray-300 pb-1 mb-3 text-black">Extracurricular & Interests</h2>
              <ul className="list-disc list-outside ml-4 space-y-1">
                <li>Fitness Enthusiast with competitive experience in powerlifting and strength sports.</li>
                <li>Passionate about sketching, creative designing, photography, and digital content creation.</li>
                <li>Actively involved in sports, video editing, UI/UX design, and technical innovation projects.</li>
                <li><span className="font-semibold text-black">Areas of Interest:</span> Software Engineering, Java Backend Development, Full Stack Web Development, Artificial Intelligence, Internet of Things (IoT), Cloud Computing, Firebase Ecosystem, Data Structures & Algorithms.</li>
              </ul>
            </section>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
