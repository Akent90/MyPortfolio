import React from 'react';
import Project from '../components/Project/Project';
import festiForecastImage from '../assets/images/FestiForecast.png';

const projects = [
    {
        id: 'festiforecast',
        title: 'FestiForecast',
        imageUrl: festiForecastImage,
        deployedUrl: 'https://leadencat.github.io/festiforecast/',
        repoUrl: 'https://github.com/Akent90/FestiForecast'
    },
];

const Portfolio = () => (
    <section>
        <h2>Portfolio</h2>
        <div>
            {projects.map(project => (
                <Project key={project.id} {...project} />
            ))}
        </div>
    </section>
);

export default Portfolio;