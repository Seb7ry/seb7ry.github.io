import { FaComments, FaUsers, FaBrain, FaUserCheck, FaClock, FaSyncAlt } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section
      id="sobremi"
      className="w-full px-6 py-16 bg-[#F6C871] text-[#1B1D2A]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h2>
        <p className="text-lg leading-relaxed mb-10">
          Soy estudiante de Ingeniería de Sistemas en la <strong>Universidad de Ibagué</strong>,
          actualmente cursando el <strong>décimo semestre</strong>. Me apasiona el desarrollo backend,
          la resolución de problemas y el aprendizaje constante.
        </p>

        <h3 className="text-2xl font-semibold mb-6">Habilidades blandas</h3>

        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto text-sm">
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
    </section>
  );
}
