import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/nava-codeman', icon: <FaGithub className="w-4 h-4" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/navjyoti-nath-674688229/', icon: <FaLinkedin className="w-4 h-4" /> },
    { name: 'Instagram', url: 'https://www.instagram.com/_navjyoti_nath_/', icon: <FaInstagram className="w-4 h-4" /> },
    { name: 'YouTube', url: 'https://www.youtube.com/@navaxlifts', icon: <FaYoutube className="w-4 h-4" /> },
    { name: 'Facebook', url: 'https://www.facebook.com/jyotinav710/', icon: <FaFacebook className="w-4 h-4" /> },
    { name: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=jyotinav710@gmail.com', icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <footer id="contact" className="mt-12 lg:mt-24 w-full p-4 lg:p-8">
      <div className="liquid-glass-strong rounded-3xl p-8 lg:p-16 max-w-[1400px] mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-white/50 mb-12 font-medium text-center">Contact Information</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-center lg:items-start max-w-5xl mx-auto">
          
          <div className="flex-1 text-center lg:text-left flex flex-col gap-6">
            <h3 className="text-3xl lg:text-4xl font-semibold mb-2">Let's Connect</h3>
            <p className="text-white/70 leading-relaxed max-w-md mx-auto lg:mx-0">
              Morigaon, Assam, India – 782105
            </p>
            
            <div className="flex flex-col gap-3 mt-4">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jyotinav710@gmail.com" target="_blank" rel="noreferrer" className="text-lg hover:text-white/80 transition-colors inline-block">
                jyotinav710@gmail.com
              </a>
              <div className="text-white/80">
                <a href="tel:+918822053335" className="hover:text-white transition-colors">+91 8822053335</a>
                <span className="mx-2 text-white/30">|</span>
                <a href="tel:+919394287296" className="text-sm hover:text-white transition-colors">+91 9394287296</a>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {socials.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all">
                    {social.icon}
                  </div>
                  <span className="font-medium text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
        </div>
        
        <div className="w-full h-px bg-white/10 mt-16 mb-8"></div>
        <div className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} Navjyoti Nath. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
