import { useState, useRef, useEffect, JSX } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiDocker, SiMongodb, SiNestjs, SiPostgresql } from 'react-icons/si';

interface Technology {
  name: string;
  icon: JSX.Element;
}

interface Microservice {
  name: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  screenshots?: string[];
  demoUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
  technologies?: Technology[];
  microservices?: Microservice[];
}

const projects: Project[] = [
  {
    title: 'Sistema de Gestión de Facturación Médica',
    description:
      'Admisiones médicas con firma digital de pacientes y generación automática de comprobantes enlazados a facturas. Reduce el uso de papel en el Hospital San Juan Bautista.',
    screenshots: ['/assets/images/fact-desk.png'],
    frontendUrl: 'https://github.com/Seb7ry/hosjuba-fact-interface',
    backendUrl: 'https://github.com/Seb7ry/hosjuba-fact-service',
    demoUrl: 'https://hosjuba-fact-interface.onrender.com/',
    technologies: [
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'NestJS', icon: <SiNestjs className="text-red-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-300" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
      { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
    ],
  },
  {
    title: 'Sistema de Registro de Mantenimientos',
    description:
      'Reportes de mantenimiento técnico en hospitales. Permite gestionar usuarios, dependencias, casos y generar PDFs firmados digitalmente.',
    screenshots: [''],
    frontendUrl: 'https://github.com/Seb7ry/hosjuba-survey-interface',
    backendUrl: 'https://github.com/Seb7ry/hosjuba-survey-service',
    technologies: [
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'NestJS', icon: <SiNestjs className="text-red-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
      { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
    ],
  },
];

export default function Projects() {
  const getGridCols = () => 'grid-cols-1 sm:grid-cols-2';

  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);
  const [dropdownDirection, setDropdownDirection] = useState<'up' | 'down'>('down');
  const dropdownRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleDropdown = (idx: number) => {
    const ref = dropdownRefs.current[idx];
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setDropdownDirection(spaceBelow < 80 && spaceAbove > 80 ? 'up' : 'down');
      setDropdownVisible(dropdownVisible === idx ? null : idx);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownVisible !== null &&
        dropdownRefs.current[dropdownVisible] &&
        !dropdownRefs.current[dropdownVisible]?.contains(event.target as Node)
      ) {
        setDropdownVisible(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownVisible]);

  return (
    <section id="proyectos" className="relative w-full py-24 text-white overflow-hidden bg-[#1B1D2A]">
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#4c2a4d] via-[#5e3a5f] to-[#392741]" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-40">
        <h2 className="text-2xl uppercase tracking-widest text-[#F6C871] mb-2 md:text-left">
          Proyectos
        </h2>
        <p className="italic text-sm text-white/70 mb-10 md:text-left">
          Algunos de los desarrollos más representativos.
        </p>

        <div className={`grid ${getGridCols()} gap-8`}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              ref={(el) => {
                dropdownRefs.current[idx] = el;
              }}
              className="relative bg-[#ffffff0a] p-5 rounded-xl shadow-sm transition-all duration-500 ease-out transform hover:-translate-y-[2px] hover:scale-[1.01] hover:bg-white/10 flex flex-col justify-between"
            >
              {project.screenshots && project.screenshots[0] ? (
                <img
                  src={project.screenshots[0]}
                  alt={`Screenshot del proyecto ${project.title}`}
                  className="h-40 w-full object-cover border border-white/10 rounded-md mb-4"
                />
              ) : (
                <div className="h-40 w-full flex items-center justify-center bg-white/5 border border-white/10 rounded-md mb-4 text-white/30 text-sm italic">
                  Vista previa no disponible
                </div>
              )}

              <div className="flex flex-col gap-2">
                <h3 className="text-md font-semibold text-[#F6C871]">{project.title}</h3>
                <p className="text-sm text-white/80 leading-snug">{project.description}</p>

                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full text-xs text-white/70"
                      >
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4 text-xs relative">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-white hover:bg-white/20 transition"
                    >
                      <FaExternalLinkAlt className="text-[#F6C871]" />
                      Ver demo
                    </a>
                  )}
                  {project.frontendUrl && (
                    <a
                      href={project.frontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-white hover:bg-white/20 transition"
                    >
                      <FaGithub className="text-[#F6C871]" />
                      Frontend
                    </a>
                  )}
                  {project.backendUrl && (
                    <a
                      href={project.backendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-white hover:bg-white/20 transition"
                    >
                      <FaGithub className="text-[#F6C871]" />
                      Backend
                    </a>
                  )}

                  {project.microservices && (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(idx)}
                        className="bg-white/10 px-3 py-1 rounded-full text-white hover:bg-white/20 transition flex items-center gap-1"
                      >
                        Microservicios
                        <span className="text-[#F6C871] text-xs">
                          {dropdownVisible === idx ? '▲' : '▼'}
                        </span>
                      </button>

                      <div
                        className={`absolute ${dropdownDirection === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'
                          } right-0 z-20 w-max max-w-xs bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-3 transition-all duration-200 ease-out origin-top transform ${dropdownVisible === idx
                            ? 'opacity-100 scale-100 pointer-events-auto'
                            : 'opacity-0 scale-95 pointer-events-none'
                          }`}
                      >
                        <div className="flex flex-wrap gap-2">
                          {project.microservices.map((srv, i) => (
                            <a
                              key={i}
                              href={srv.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-white/20 text-xs text-white rounded-full transition whitespace-nowrap"
                            >
                              <FaGithub className="text-[#F6C871]" />
                              {srv.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
