import React from "react";
import "./About.scss";

function About() {
  return (
    <section className="about">
      <h1 className="about__heading">About Me</h1>
      <div className="about__text-container">
      <div className="about__text-content">
        <p className="about__text">
          As a recent graduate in Software Engineering, I am seeking to leverage
          my skills and passion within the industry. I possess a solid
          understanding of web development technologies such as HTML, CSS,
          JavaScript, React and various back-end languages including Node.js,
          Express, MySQL and Knex. My objective is to design user-friendly,
          reusable and visually pleasing websites and applications.
        </p>
      </div>
      <div className="about__text-content">
        <p className="about__text">
          My experiences through various projects during my studies have honed
          my problem-solving aptitude, attention to detail and ability to
          collaborate effectively within a team. I am enthusiastic about
          continuing my professional development and am confident that my drive
          and motivation will enable me to make meaningful contributions to any
          organization or project.
        </p>
      </div>
      <div className="about__text-content">
        <p className="about__text">
          I am eager to take on challenging and innovative projects and to be a
          part of a progressive and forward-thinking company. I believe that my
          skills and experience align well with the company's goals and
          objectives and I am confident that I will be able to make a valuable
          contribution to the team.
        </p>
      </div>
      </div>
    </section>
  );
}

export default About;
