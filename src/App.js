import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Footer from './components/Footer'; // Import the Footer
import './styles.css'; // Import the CSS

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
