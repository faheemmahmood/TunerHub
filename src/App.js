import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Modeling from './components/Modeling';
import Marketplace from './components/Marketplace';
import Community from './components/Community';
import ModGuide from './components/ModGuide';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';  // General styles

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/modeling" element={<Modeling />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mod-guide" element={<ModGuide />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
