import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
