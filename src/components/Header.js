import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './styles/Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-logo">TunerHub</div>
            <nav className="header-nav">
                <Link to="/home">Home</Link>
                <Link to="/modeling">Modeling</Link>
                <Link to="/marketplace">Marketplace</Link>
                <Link to="/community">Community</Link>
                <Link to="/mod-guide">Mod Guide</Link>
                <Link to="/mapsystem">Map System</Link>  {/* New Map System link */}
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
}

export default Header;
