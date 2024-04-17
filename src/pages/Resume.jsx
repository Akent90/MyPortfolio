import React from 'react';

const Resume = () => (
  <section className="resume-section">
    <h2>Resume</h2>
    <a href="/AlexanderKentResume.pdf" download="AlexanderKentResume.pdf" className="resume-download-link">
      Download my resume
    </a>
    <div className="proficiencies">
      <div className="front-end">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="back-end">
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Resume;
