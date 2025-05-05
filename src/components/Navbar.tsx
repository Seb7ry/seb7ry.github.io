import { useEffect, useState } from 'react';
import profileImg from '../assets/images/profile.png';
import clsx from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Overlay semitransparente con blur para el fondo */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={clsx(
          'fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-all duration-300',
          scrolled ? 'bg-[#1B1D2A]/40 shadow-lg' : 'bg-[#1B1D2A]/40'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Perfil con imagen, nombre y cargo */}
          <div className="flex items-center space-x-3">
            <img
              src={profileImg}
              alt="Foto de perfil"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-[#F4D49B]">Sebastián Murillo</p>
              <p className="text-xs text-[#9CA3AF] italic">Desarrollador de Software</p>
            </div>
          </div>

          {/* Menú en pantalla grande */}
          <div className="hidden md:flex space-x-8 text-[#F4D49B]">
            <a href="#inicio" className="hover:text-[#F6C871]">Inicio</a>
            <a href="#sobremi" className="hover:text-[#F6C871]">Sobre mí</a>
            <a href="#proyectos" className="hover:text-[#F6C871]">Proyectos</a>
            <a href="#contacto" className="hover:text-[#F6C871]">Contacto</a>
          </div>

          {/* Botón hamburguesa para mobile */}
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

        {/* Menú hamburguesa desplegable */}
        <div
          className={clsx(
            'md:hidden absolute  left-0 w-full z-40 overflow-hidden transition-all duration-300',
            'bg-[#1B1D2A]/40',
            isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
          )}
        >
          <div className="px-4 space-y-3 text-[#F4D49B]">
            <a 
              href="#inicio" 
              className="block py-2 hover:text-[#F6C871] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#sobremi" 
              className="block py-2 hover:text-[#F6C871] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre mí
            </a>
            <a 
              href="#proyectos" 
              className="block py-2 hover:text-[#F6C871] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </a>
            <a 
              href="#contacto" 
              className="block py-2 hover:text-[#F6C871] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}