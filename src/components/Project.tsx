import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  screenshots?: string[];
  demoUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Sistema de Gestión de Facturación Médica',
    description: 'Registro y control de comprobantes de atención médica.',
    screenshots: ['/images/fact-desk.png', '/images/fact-movil.png'],
    frontendUrl: 'https://github.com/Seb7ry/hosjuba-fact-interface',
    backendUrl: 'https://github.com/Seb7ry/hosjuba-fact-service',
    demoUrl: 'https://hosjuba-fact-interface.onrender.com/',
  },
  {
    title: 'Sistema de Gestión de Facturación Médica',
    description: 'Registro y control de comprobantes de atención médica.',
    screenshots: ['/images/fact-desk.png', '/images/fact-movil.png'],
    frontendUrl: 'https://github.com/Seb7ry/hosjuba-fact-interface',
    backendUrl: 'https://github.com/Seb7ry/hosjuba-fact-service',
    demoUrl: 'https://hosjuba-fact-interface.onrender.com/',
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
              {Array.isArray(project.screenshots) && project.screenshots.length > 0 && (
                <img
                  src={project.screenshots[0]}
                  alt={`Screenshot del proyecto ${project.title}`}
                  className="h-48 sm:h-56 w-full object-cover border border-white/10 rounded-lg mb-4"
                />
              )}

              <h3 className="text-lg font-semibold text-[#F6C871] mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-white/80 mb-4">{project.description}</p>

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
