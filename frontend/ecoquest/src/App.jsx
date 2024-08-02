import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Navbar from './components/Navbar';
import Marketplace from './components/Marketplace';
// import Community from './components/Community';
// import About from './components/About';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Navbar />
        <div>
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/marketplace" element={<Marketplace />} />
            {/* <Route path="/community" element={<Community />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
