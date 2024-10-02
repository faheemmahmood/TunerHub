// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-logo">TunerHub</div>
            <nav className="header-nav">
                <a href="/">Home</a>
                <a href="/modeling">Modeling</a>
                <a href="/marketplace">Marketplace</a>
                <a href="/community">Community</a>
                <a href="/mod-guide">Mod Guide</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </nav>
        </header>
    );
}

export default Header;
