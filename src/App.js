import './App.css';
import Navbar from './components/Navbar';
import Sky from './components/Sky';

function App() {
  return (
    <div className="app">
      <div>
          <Sky />
          <Navbar />
      </div>
    </div>
  );
}

export default App;
