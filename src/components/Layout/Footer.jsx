import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="copyright">© {currentYear} Brian De Souza. Built with ❤️ and AI.</p>
                    <div className="footer-socials">
                        <a href="https://github.com/briandesouza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com/in/briannunesdesouza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:brian.nunes.souza@gmail.com" aria-label="Email">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
