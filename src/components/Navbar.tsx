import { useEffect, useState } from 'react';
import clsx from 'clsx';

const SECTIONS = ['inicio', 'sobremi', 'experiencia', 'proyectos', 'certificaciones'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1, 
        rootMargin: '-60px 0px -40% 0px', 
      }
    );
  
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, []);
  

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const getLinkClass = (id: string) =>
    clsx(
      'hover:text-[#F6C871] cursor-pointer',
      activeSection === id ? 'text-[#F6C871] font-semibold' : 'text-[#F4D49B] opacity-80'
    );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={clsx(
          'fixed top-0 left-0 w-screen z-50 backdrop-blur-sm transition-all duration-300',
          scrolled ? 'bg-[#1B1D2A]/40 shadow-lg' : 'bg-[#1B1D2A]/40'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Perfil */}
          <div className="flex items-center space-x-3">
            <img
              src="/assets/images/profile.jpg"
              alt="Foto de perfil"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-[#F4D49B]">Sebastián Murillo</p>
              <p className="text-xs text-[#9CA3AF] italic">Desarrollador de Software</p>
            </div>
          </div>

          {/* Menú en escritorio */}
          <div className="hidden md:flex space-x-8">
            {SECTIONS.map((id) => (
              <span
                key={id}
                onClick={() => scrollToSection(id)}
                className={getLinkClass(id)}
              >
                {id === 'sobremi' ? 'Sobre mí' : id.charAt(0).toUpperCase() + id.slice(1)}
              </span>
            ))}
          </div>

          {/* Botón hamburguesa */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-[#F4D49B]"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={clsx(
            'md:hidden absolute left-0 w-screen z-40 overflow-hidden transition-all duration-300',
            'bg-[#1B1D2A]/40',
            isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
          )}
        >
          <div className="px-4 space-y-3">
            {SECTIONS.map((id) => (
              <span
                key={id}
                onClick={() => scrollToSection(id)}
                className={clsx(
                  'block py-2 transition-colors cursor-pointer',
                  activeSection === id ? 'text-[#F6C871]' : 'text-[#F4D49B] opacity-80',
                  'hover:text-[#F6C871]'
                )}
              >
                {id === 'sobremi' ? 'Sobre mí' : id.charAt(0).toUpperCase() + id.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
