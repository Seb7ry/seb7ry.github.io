import {
  FaNodeJs,
  FaReact,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNestjs,
  SiMongodb,
  SiDocker,
} from 'react-icons/si';

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative w-full py-20 text-white overflow-hidden bg-[#1B1D2A]"
    >
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#1B1D2A] via-[#2A2D42] to-[#1B1D2A]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-40">
        <h2 className="text-2xl uppercase tracking-widest text-[#F6C871] mb-2 text-left md:text-left">
          Experiencia
        </h2>
        <p className="italic text-sm text-white/70 mb-10 text-left md:text-left">
          Proyecto universitario destacado en el Hospital San Juan Bautista.
        </p>

        <div className="bg-white/5 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#F6C871] mb-1 text-center md:text-left">
            Desarrollador Fullstack – Semestre Paz y Región
          </h3>
          <p className="text-sm text-white/70 mb-4 text-center md:text-left">
            Universidad de Ibagué · Febrero 2025 – Mayo 2025
          </p>
          <p className="text-white/90 text-sm leading-relaxed mb-6 text-center md:text-left">
            Participación en el <strong className="text-[#ffeac5]">semestre Paz y Región</strong> como desarrollador fullstack, creando dos sistemas de gestión documental para el <strong className="text-[#ffeac5]">Hospital San Juan Bautista</strong>, enfocados en la digitalización de comprobantes de atención médica en facturación y en el registro de mantenimientos técnicos del área de sistemas.
          </p>

          {/* Stack de tecnologías */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm">
            {[
              { icon: <SiJavascript className="text-yellow-400" />, label: 'JavaScript' },
              { icon: <SiTypescript className="text-blue-400" />, label: 'TypeScript' },
              { icon: <FaNodeJs className="text-green-500" />, label: 'Node.js' },
              { icon: <SiNestjs className="text-red-500" />, label: 'NestJS' },
              { icon: <FaReact className="text-cyan-400" />, label: 'React' },
              { icon: <SiMongodb className="text-green-400" />, label: 'MongoDB' },
              { icon: <SiDocker className="text-blue-400" />, label: 'Docker' },
              { icon: <FaGitAlt className="text-orange-400" />, label: 'Git' },
            ].map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full"
              >
                {item.icon} {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
