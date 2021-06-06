import { Link } from "react-scroll";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Fire from "./components/Fire";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sky from "./components/Sky";

function App() {
  return (
    <div className="app">
      <div>
        <Sky />
        <Link
          spy={true}
          className="work"
          to="about"
          smooth={true}
          duration={1000}
          // href="#portfolio"
        >
          <Fire className="set" />
        </Link>
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
