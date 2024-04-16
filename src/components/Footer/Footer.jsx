import React from 'react';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.png'; 
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.png'; 

const Footer = () => (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        <div>
            <a href="https://github.com/Akent90" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                <GitHubIcon title="GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/alexanderjkent/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon title="LinkedIn"/>
            </a>
        </div>
    </footer>
);

export default Footer;
