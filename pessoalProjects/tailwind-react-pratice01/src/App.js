import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Hero />
      </>
    </Router>
  );
}

export default App;
