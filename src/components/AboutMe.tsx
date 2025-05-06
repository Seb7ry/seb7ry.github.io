import {
  FaComments,
  FaUsers,
  FaBrain,
  FaUserCheck,
  FaClock,
  FaSyncAlt,
} from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section
      id="sobremi"
      className="relative w-full py-16 text-[#1B1D2A] overflow-hidden bg-gradient-to-br from-[#d2a85a] via-[#cfa763] to-[#b88f4a]"
    >
      {/* Luz decorativa suave */}
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#1B1D2A] opacity-10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            Sobre mí
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-center md:text-left">
            Soy estudiante de Ingeniería de Sistemas en la <strong>Universidad de Ibagué</strong>, actualmente en el <strong>décimo semestre</strong>.
            Me especializo en el desarrollo <strong>backend con Spring Boot</strong>, y actualmente estoy fortaleciendo mis habilidades en <strong>Frontend con React</strong> y <strong>tecnologías cloud como AWS</strong>.
          </p>
          <p className="text-lg leading-relaxed text-center md:text-left">
            Me apasiona construir soluciones eficientes, trabajar en equipo y seguir aprendiendo constantemente en el mundo del desarrollo de software.
          </p>
        </div>

        {/* Habilidades blandas */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Habilidades blandas
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            <span className="flex items-center gap-2 bg-[#1B1D2A]/10 px-4 py-2 rounded-full">
              <FaComments className="text-[#1B1D2A]" /> Comunicación asertiva
            </span>
            <span className="flex items-center gap-2 bg-[#1B1D2A]/10 px-4 py-2 rounded-full">
              <FaUsers className="text-[#1B1D2A]" /> Trabajo en equipo
            </span>
            <span className="flex items-center gap-2 bg-[#1B1D2A]/10 px-4 py-2 rounded-full">
              <FaBrain className="text-[#1B1D2A]" /> Pensamiento crítico
            </span>
            <span className="flex items-center gap-2 bg-[#1B1D2A]/10 px-4 py-2 rounded-full">
              <FaUserCheck className="text-[#1B1D2A]" /> Autonomía y responsabilidad
            </span>
            <span className="flex items-center gap-2 bg-[#1B1D2A]/10 px-4 py-2 rounded-full">
              <FaSyncAlt className="text-[#1B1D2A]" /> Adaptabilidad al cambio
            </span>
            <span className="flex items-center gap-2 bg-[#1B1D2A]/10 px-4 py-2 rounded-full">
              <FaClock className="text-[#1B1D2A]" /> Gestión del tiempo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
