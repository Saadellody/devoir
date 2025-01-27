// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about-us">À propos de nous</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/profile">Profil</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
