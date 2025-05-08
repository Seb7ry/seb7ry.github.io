import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Sistema de Gestión de Facturación Médica',
    description: 'Registro y control de comprobantes de atención médica.',
    image: '/images/proyecto1.jpg',
    demoUrl: 'https://demo-ejemplo1.com',
    frontendUrl: 'https://github.com/usuario/front-facturacion',
    backendUrl: 'https://github.com/usuario/back-facturacion',
  },
  {
    title: 'Gestor de Mantenimiento Técnico',
    description: 'Gestión digital de mantenimientos preventivos y correctivos.',
    image: '/images/proyecto2.jpg',
    demoUrl: 'https://demo-ejemplo2.com',
    frontendUrl: 'https://github.com/usuario/front-mantenimiento',
    backendUrl: 'https://github.com/usuario/back-mantenimiento',
  },
  {
    title: 'API de Usuarios con Autenticación',
    description: 'Microservicio de autenticación seguro con NestJS.',
    image: '/images/proyecto3.jpg',
    backendUrl: 'https://github.com/usuario/api-auth-nest',
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative w-full py-24 text-white overflow-hidden bg-[#1B1D2A]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#4c2a4d] via-[#5e3a5f] to-[#392741]" />

      <div className="relative z-10 max-w-6xl mx-auto px-20">
        <h2 className="text-2xl uppercase tracking-widest text-[#F6C871] mb-2 text-left">
          Proyectos
        </h2>
        <p className="italic text-sm text-white/70 mb-10 text-left">
          Algunos de los desarrollos más representativos.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff0f] p-5 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4 border border-white/10"
              />
              <h3 className="text-lg font-semibold text-[#F6C871] mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-white/80 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm px-3 py-1 bg-[#F6C871] text-[#1B1D2A] rounded hover:bg-[#e5b958] transition"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Ver proyecto
                  </a>
                )}
                {project.frontendUrl && (
                  <a
                    href={project.frontendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#ffeac5] hover:text-[#F6C871]"
                  >
                    <FaGithub />
                    Frontend
                  </a>
                )}
                {project.backendUrl && (
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#ffeac5] hover:text-[#F6C871]"
                  >
                    <FaGithub />
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
