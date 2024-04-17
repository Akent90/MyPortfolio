import React from 'react';
import GitHubIcon from '../../assets/icons/github.png'; 
import LinkedInIcon from '../../assets/icons/linkedin.png'; 

const Footer = () => (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        <div>
            <a href="https://github.com/Akent90" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                <img src={GitHubIcon} alt="GitHub" title="GitHub" /> 
            </a>
            <a href="https://www.linkedin.com/in/alexanderjkent/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" title="LinkedIn" /> 
            </a>
        </div>
    </footer>
);

export default Footer;
