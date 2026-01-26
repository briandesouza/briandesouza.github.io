import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="logo">
                    Brian<span className="highlight">DeSouza</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="/Brian_De_Souza_Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link resume-link">
                        Resume
                    </a>
                </nav>

                <div className="social-icons">
                    <a href="https://github.com/briandesouza" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    <a href="https://linkedin.com/in/briannunesdesouza" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                    <a href="mailto:brian.nunes.souza@gmail.com"><Mail size={20} /></a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <nav className="mobile-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a 
                            href="/Brian_De_Souza_Resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mobile-nav-link resume-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Resume
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
