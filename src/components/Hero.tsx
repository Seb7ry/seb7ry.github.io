import { FaGithub, FaLinkedin, FaNodeJs, FaReact, FaJava, FaGitAlt } from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import {
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiSpring,
  SiDocker,
  SiMysql,
} from 'react-icons/si';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-24 px-4 text-white bg-[#1B1D2A] overflow-hidden"
    >
      {/* Fondo con gradiente horizontal centrado */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#1B1D2A] via-[#2A2D42] to-[#1B1D2A]" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <div className="flex space-x-4 mb-6 justify-center">
          <a
            href="/cv-sebastian.pdf"
            download
            className="flex items-center gap-2 border border-[#F6C871] text-[#F4D49B] px-5 py-2 rounded-md text-sm transition duration-300 hover:bg-[#9D6B8B] hover:border-[#F4D49B] hover:text-white"
          >
            <HiOutlineDocumentArrowDown className="text-sm" />
            Descargar CV
          </a>
        </div>

        <h1 className="text-3xl md:text-5xl text-[#F6C871] font-semibold mb-2">
          Sebastián Murillo
        </h1>
        <h2 className="text-lg md:text-xl text-[#ffeac5] mb-6">
          Desarrollador Backend con proyección Fullstack
        </h2>

        <div className="flex space-x-4 mb-6 justify-center">
          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4b7adf] hover:text-[#9D6B8B] text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F4D49B] hover:text-[#9D6B8B] text-2xl"
          >
            <FaGithub />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm max-w-2xl mx-auto">
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <SiJavascript className="text-yellow-400" /> JavaScript
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <SiTypescript className="text-blue-400" /> TypeScript
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <FaNodeJs className="text-green-500" /> Node.js
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <SiNestjs className="text-red-500" /> NestJS
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <SiAngular className="text-red-600" /> Angular
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <FaReact className="text-cyan-400" /> React
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <SiPostgresql className="text-blue-300" /> PostgreSQL
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <SiMongodb className="text-green-400" /> MongoDB
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <SiMysql className="text-[#00758F]" /> MySQL
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <FaJava className="text-[#f89820]" /> Java
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <SiSpring className="text-green-500" /> Spring Boot
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <FaFlutter className="text-sky-400" /> Flutter
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <SiDocker className="text-blue-400" /> Docker
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
            <FaGitAlt className="text-orange-400" /> Git
          </span>
        </div>
      </div>
    </section>
  );
}
