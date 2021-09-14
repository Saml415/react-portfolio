import React from "react";
import "./Resume.css";
function Resume() {
  return (
    <section className="my-5">
      <p className="resume">
        Dowload my resume on
        <a className="resumeLink" href="https://www.linkedin.com/">
          {" "}
          Linkedin
        </a>
      </p>
      <div className="proficiencies">
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
