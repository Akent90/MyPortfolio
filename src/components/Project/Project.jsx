import React from 'react';

const Project = ({ title, imageUrl, deployedUrl, repoUrl }) => (
    <div className="project">
        <h3>{title}</h3>
        <img src={imageUrl} alt={`Screenshot of project ${title}`} />
        <a href={deployedUrl}>View Project</a>
        <a href={repoUrl}>View Code</a>
    </div>
);

export default Project;