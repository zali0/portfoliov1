import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Sky from './components/Sky';

function App() {
  return (
    <div className="app">
      <div>
          <Sky />
          <Navbar />
          <About />
          <Projects />
          <Contact />
          <Footer />
      </div>
    </div>
  );
}

export default App;
