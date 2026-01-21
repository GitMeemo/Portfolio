import { Hero, Projects, Experience, Contact, About, Testimonials } from './Sections';
import { Navbar, Footer } from './Layouts';
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
 