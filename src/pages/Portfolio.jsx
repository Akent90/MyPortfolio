import React from 'react';
import Project from '../components/Project/Project';

const projects = [
    // Add details of projects to this array
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