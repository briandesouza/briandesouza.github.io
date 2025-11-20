import React from 'react';
import { Mail, FileText, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-cta">
                    <h3>Ready to build something amazing?</h3>
                    <p>I'm currently open to new opportunities in Product Management.</p>
                    <div className="footer-buttons">
                        <a href="mailto:brian.nunes.souza@gmail.com" className="btn btn-primary">
                            <Mail size={18} /> Contact Me
                        </a>
                        <a href="/Brian De Souza Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <FileText size={18} /> View Resume
                        </a>
                    </div>
                </div>
                
                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Brian De Souza. Built with React & Vite.</p>
                    <div className="footer-social">
                        <a href="https://github.com/briandesouza" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                        <a href="https://linkedin.com/in/briannunesdesouza" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
