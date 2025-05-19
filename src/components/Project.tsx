import { JSX } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiDocker, SiMongodb, SiNestjs, SiPostgresql } from 'react-icons/si';

interface Technology {
  name: string;
  icon: JSX.Element;
}

interface Project {
  title: string;
  description: string;
  screenshots?: string[];
  demoUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
  technologies?: Technology[];
}

const projects: Project[] = [
  {
    title: 'Sistema de Gestión de Facturación Médica',
    description:
      'Sistema de admisiones médicas con firma digital de pacientes y generación automática de comprobantes enlazados a facturas de HOSVITAL. Agiliza el proceso de facturación y reduce el uso de papel en el Hospital San Juan Bautista.',
    screenshots: ['/images/fact-desk.png'],
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
      'Plataforma para centralizar reportes de mantenimiento técnico en el hospital. Permite gestionar usuarios, dependencias, casos y generar PDF firmados por los usuarios involucrados, reemplazando formularios físicos.',
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
  const getGridCols = () => {
    if (projects.length === 1) return 'grid-cols-1';
    if (projects.length === 2) return 'grid-cols-1 sm:grid-cols-2';
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <section
      id="proyectos"
      className="relative w-full py-24 text-white overflow-hidden bg-[#1B1D2A]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#4c2a4d] via-[#5e3a5f] to-[#392741]" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-40">
        <h2 className="text-2xl uppercase tracking-widest text-[#F6C871] mb-2 text-center md:text-left">
          Proyectos
        </h2>
        <p className="italic text-sm text-white/70 mb-10 text-center md:text-left">
          Algunos de los desarrollos más representativos.
        </p>

        <div className={`grid ${getGridCols()} gap-8`}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff0f] p-5 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col"
            >
              {project.screenshots && project.screenshots[0] ? (
                <img
                  src={project.screenshots[0]}
                  alt={`Screenshot del proyecto ${project.title}`}
                  className="h-48 sm:h-56 w-full object-cover border border-white/10 rounded-lg mb-4"
                />
              ) : (
                <div className="h-48 sm:h-56 w-full flex items-center justify-center bg-white/5 border border-white/10 rounded-lg mb-4 text-white/40 text-sm italic">
                  Vista previa no disponible
                </div>
              )}

              <h3 className="text-lg font-semibold text-[#F6C871] mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-white/80 mb-4">{project.description}</p>
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full text-sm"
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 text-white text-sm px-3 py-1 rounded-full hover:bg-white/20 transition"
                  >
                    <FaExternalLinkAlt className="text-[#F6C871]" />
                    Ver proyecto
                  </a>
                )}
                {project.frontendUrl && (
                  <a
                    href={project.frontendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 text-white text-sm px-3 py-1 rounded-full hover:bg-white/20 transition"
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
                    className="flex items-center gap-2 bg-white/10 text-white text-sm px-3 py-1 rounded-full hover:bg-white/20 transition"
                  >
                    <FaGithub className="text-[#F6C871]" />
                    Backend
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
