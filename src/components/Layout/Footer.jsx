import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-content">
                <h2 className="footer-title">Contact</h2>
                <p className="footer-intro">I'm open to product manager or advising opportunities.</p>
                <div className="footer-contact-info">
                    <a href="mailto:brian.nunes.souza@gmail.com">brian.nunes.souza@gmail.com</a>
                    <span className="footer-contact-divider">|</span>
                    <a href="tel:+15619294363">561-929-4363</a>
                </div>
                <div className="footer-cta">
                    <h3>Ready to build something amazing?</h3>
                    <p>I'm currently open to new opportunities in Product Management.</p>
                    <div className="footer-buttons">
                        <a href="mailto:brian.nunes.souza@gmail.com" className="btn btn-primary">Contact Me</a>
                        <a href="/Brian De Souza Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            View Resume
                        </a>
                    </div>
                </div>
                <p className="footer-bottom">&copy; 2026 Brian De Souza. Built with React & Vite.</p>
            </div>
        </footer>
    );
};

export default Footer;
