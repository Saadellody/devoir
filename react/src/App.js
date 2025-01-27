// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Importer la barre de navigation
import Profile from './pages/Profile';
import LoginButton from './components/LoginButton';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Navbar />  {/* Ajouter la barre de navigation ici */}
            <Routes>
                <Route path="/" element={<LoginButton />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
