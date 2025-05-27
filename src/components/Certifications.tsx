import { FaCode } from 'react-icons/fa';
import { SiAmazon, SiAngular, SiCoursera } from 'react-icons/si';

const CERTIFICATIONS = [
  {
    title: 'AWS Academy Cloud Foundations',
    description: 'Certificación oficial de Amazon sobre fundamentos de computación en la nube.',
    icon: <SiAmazon className="text-yellow-400 text-lg" />,
    link: 'https://www.credly.com/badges/cac04ecf-0359-440c-8cfc-07052b7ad6d6',
  },
  {
    title: 'Angular (Legacy)',
    description: 'Curso de Udemy sobre desarrollo web con Angular en su versión clásica.',
    icon: <SiAngular className="text-red-500 text-lg" />,
    link: 'https://www.udemy.com/certificate/UC-106a3d11-b430-4438-9bc0-296b35ead224/',
  },
  {
    title: 'Programming Foundations',
    description: 'Certificación de Coursera sobre lógica, estructuras y fundamentos de programación.',
    icon: <FaCode className="text-purple-400 text-lg" />,
    link: 'https://www.coursera.org/account/accomplishments/certificate/7V7DZ2Q75267',
  },
  {
    title: 'Introducción a la Inteligencia Artificial',
    description: 'Curso introductorio de Coursera sobre los conceptos clave de la IA moderna.',
    icon: <SiCoursera className="text-blue-300 text-lg" />,
    link: 'https://www.coursera.org/account/accomplishments/certificate/W6XFTP3VUTQA',
  }
];

export default function Certifications() {
  return (
    <section
      id="certificaciones"
      className="relative w-full py-20 text-white overflow-hidden bg-[#1B1D2A]"
    >
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#1B1D2A] via-[#2A2D42] to-[#1B1D2A]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-40">
        <h2 className="text-2xl uppercase tracking-widest text-[#F6C871] mb-2 md:text-left">
          Certificaciones
        </h2>
        <p className="italic text-sm text-white/70 mb-10 md:text-left">
          Certificaciones que aportan a mi experiencia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver certificado: ${cert.title}`}
              className="group block bg-white/5 p-5 rounded-lg transition-all duration-500 ease-out hover:bg-white/10 hover:shadow-md hover:-translate-y-[2px]"
            >
              <div className="flex items-center gap-3 mb-2">
                {cert.icon}
                <h3 className="text-sm font-semibold text-white flex items-center gap-1">
                  {cert.title}
                  <span className="text-white/40 group-hover:text-[#F6C871] transition duration-300 transform scale-90">
                    ↗
                  </span>
                </h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                {cert.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
