import { useEffect, useState } from 'react';
import profileImg from '../assets/images/profile.jpg';
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
    <nav
      className={clsx(
        'fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300',
        scrolled ? 'bg-white/10 shadow-lg' : 'bg-white/5'
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
            <p className="text-sm font-semibold text-[#e2e8f0]">Sebastián Murillo</p>
            <p className="text-xs text-gray-400 italic">Desarrollador de Software</p>
          </div>
        </div>

        {/* Menú en pantalla grande */}
        <div className="hidden md:flex space-x-8 text-[#e2e8f0]">
          <a href="#inicio" className="hover:text-cyan-400">Inicio</a>
          <a href="#sobremi" className="hover:text-cyan-400">Sobre mí</a>
          <a href="#proyectos" className="hover:text-cyan-400">Proyectos</a>
          <a href="#contacto" className="hover:text-cyan-400">Contacto</a>
        </div>

        {/* Botón hamburguesa para mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-[#e2e8f0]">
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

      {/* Menú mobile */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out px-4 text-[#e2e8f0]',
          isOpen ? 'max-h-96 py-4 space-y-2 bg-black/70 backdrop-blur-md' : 'max-h-0'
        )}
      >
        <a href="#inicio" className="block hover:text-cyan-400">Inicio</a>
        <a href="#sobremi" className="block hover:text-cyan-400">Sobre mí</a>
        <a href="#proyectos" className="block hover:text-cyan-400">Proyectos</a>
        <a href="#contacto" className="block hover:text-cyan-400">Contacto</a>
      </div>
    </nav>
  );
}
