import './App.css';
import About from './components/About';
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
      </div>
    </div>
  );
}

export default App;
