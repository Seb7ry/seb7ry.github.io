import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Project';

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#1B1D2A] via-[#2A2D42] to-[#1B1D2A]">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Certifications />
    </div>
  );
}

export default App;
