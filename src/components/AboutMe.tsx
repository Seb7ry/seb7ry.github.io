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
      className="relative w-full py-20 text-white overflow-hidden bg-[#4c2a4d]"
    >
      {/* Fondo con gradiente horizontal */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#4c2a4d] via-[#5e3a5f] to-[#392741]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-40 flex flex-col md:flex-row items-start gap-12">
        {/* Texto principal */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl uppercase tracking-widest text-[#F6C871] mb-1">
            Sobre mí
          </h2>
          <p className="italic text-sm text-white/70 mb-6">
            Pasión por el desarrollo y el aprendizaje constante
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4 text-white/90">
            Soy estudiante de Ingeniería de Sistemas en la <strong className="text-[#F6C871]">Universidad de Ibagué</strong>, actualmente en el <strong className="text-[#F6C871]">décimo semestre</strong>.
            Me especializo en desarrollo <strong className="text-[#F6C871]">backend con Spring Boot</strong> y estoy fortaleciendo mis habilidades en <strong className="text-[#F6C871]">Frontend con React</strong> y <strong className="text-[#F6C871]">tecnologías cloud como AWS</strong>.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            Me apasiona construir soluciones eficientes, colaborar en equipo y seguir aprendiendo cada día en el mundo del desarrollo de software.
          </p>
        </div>

        {/* Habilidades blandas */}
        <div className="flex-1 mt-8 md:mt-16 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-6 text-[#ffeac5]">
            Habilidades blandas
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm">
            {[
              { icon: <FaComments />, label: 'Comunicación asertiva' },
              { icon: <FaUsers />, label: 'Trabajo en equipo' },
              { icon: <FaBrain />, label: 'Pensamiento crítico' },
              { icon: <FaUserCheck />, label: 'Autonomía y responsabilidad' },
              { icon: <FaSyncAlt />, label: 'Adaptabilidad al cambio' },
              { icon: <FaClock />, label: 'Gestión del tiempo' },
            ].map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full"
              >
                <span className="text-[#F6C871]">{item.icon}</span> {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
