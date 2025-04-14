import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Reading from './components/Reading';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-academia-primary text-academia-text font-serif">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/reading" element={<Reading />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;