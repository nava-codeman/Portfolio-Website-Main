import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const SocialsModal = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/nava-codeman',
      icon: '/github.png'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/navjyoti-nath-674688229/',
      icon: '/linkedin.png'
    },
    {
      name: 'Gmail',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=jyotinav710@gmail.com',
      icon: '/logo-gmail-9988.png'
    },
    {
      name: 'Instagram',
      url: '#', // User didn't specify URL, keeping it empty for now
      icon: '/instagram.png'
    },
    {
      name: 'YouTube',
      url: '#', 
      icon: '/icons8-youtube-logo-94.png'
    },
    {
      name: 'Facebook',
      url: '#',
      icon: '/icons8-facebook-96.png'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6" onClick={onClose}>
      
      {/* Container */}
      <div 
        className="liquid-glass-strong rounded-3xl p-8 sm:p-12 w-full max-w-[600px] relative border border-white/20 shadow-2xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Socials"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-3xl font-bold mb-8 text-center tracking-tight">Let's Connect</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 w-full">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              {/* Icon Container resembling a keyboard key */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 liquid-glass rounded-xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b-4 border-white/10 hover:border-white/20 hover:-translate-y-1 active:border-b-0 active:translate-y-1 transition-all">
                <img src={social.icon} alt={social.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialsModal;
