import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Brian De Souza. Built with React & Vite.</p>
            </div>
        </footer>
    );
};

export default Footer;
