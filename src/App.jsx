/* Layout */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

/* Sections */
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

/* UI */
import ParticleBackground, { ScrollProgress } from './components/ui/ParticleBackground';

function App() {
  return (
    <>
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
