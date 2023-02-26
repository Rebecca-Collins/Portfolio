import axiosIcon from "../../assets/images/axios.svg";
import express from "../../assets/images/express.png";
import knex from "../../assets/images/knex.svg";
import sass from "../../assets/images/sass.png";
import node from "../../assets/images/node.png";
import mysql from "../../assets/images/mysql.png";
import javascript from "../../assets/images/javascript.png";
import reactIcon from "../../assets/images/reactIcon.png";
import html5 from "../../assets/images/html5.png";
import figma from "../../assets/images/figma-icon.png";
import "./Skills.scss";

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
        <div className="skills__container">
          <figure>
            <img src={reactIcon} alt=" React Icon" />
            <figcaption>React</figcaption>
          </figure>
          <figure>
            <img src={axiosIcon} alt="axios icon" />
            <figcaption>Axios</figcaption>
          </figure>
          <figure>
            <img src={node} alt="node.js icon" />
            <figcaption>Node JS</figcaption>
          </figure>
          <figure>
            <img src={mysql} alt="mysql icon" />
            <figcaption>MySQL</figcaption>
          </figure>
          <figure>
            <img src={knex} alt="knex icon" />
            <figcaption>Knex</figcaption>
          </figure>
          <figure>
            <img src={sass} alt="sass icon" />
            <figcaption>Sass</figcaption>
          </figure>
          <figure>
            <img src={express} alt="express icon" />
            <figcaption>Express</figcaption>
          </figure>
          <figure>
            <img src={javascript} alt="javascript icon" />
            <figcaption>Javascript</figcaption>
          </figure>
          <figure>
            <img src={html5} alt="html5 icon" />
            <figcaption>HTML5</figcaption>
          </figure>
          <figure>
            <img src={figma} alt="figma icon" />
            <figcaption>Figma</figcaption>
          </figure>
        </div>
    </section>
  );
}
export default Skills;
