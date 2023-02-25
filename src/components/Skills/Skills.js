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

    // <section>
    //   <h2 className="home__skill-heading">Skills</h2>

    //       <img className="home__icon" src={axiosIcon} alt="axios icon" />

    //       <img className="home__icon" src={express} alt="express icon" />

    //       <img className="home__icon" src={knex} alt="knex icon" />

    //       <img className="home__icon" src={sass} alt="sass icon" />

    //       <img className="home__icon" src={reactIcon} alt="react icon" />

    //       <img className="home__icon" src={node} alt="node.js icon" />

    //       <img className="home__icon" src={mysql} alt="mysql icon" />

    //     <div>
    //       <img className="home__icon" src={javascript} alt="javascript icon" />
    //     </div>

    //       <img className="home__icon" src={html5} alt="html5 icon" />

    // </section>
    //     <section className="home__skills-container">
    //     <h2 className="home__skill-heading">Skills</h2>
    //     <div className="home__icon-content">
    //       <div>
    //         <img className="home__icon"
    //         src={axiosIcon} alt="axios icon" />
    //       </div>
    //       <div>
    //         <img className="home__icon"
    //         src={express} alt="express icon" />
    //       </div>
    //       <div>
    //         <img className="home__icon"
    //         src={knex} alt="knex icon" />
    //       </div>
    //       <div>
    //         <img className="home__icon"
    //         src={sass} alt="sass icon" />
    //       </div>
    //       <div>
    //         <img className="home__icon"
    //         src={reactIcon} alt="react icon" />
    //       </div>
    //  {/* <div className="home__second-icon-container">  */}
    //  <div>
    //         <img className="home__icon"
    //         src={node} alt="node.js icon" />
    //       </div>
    //       <div>
    //         <img className="home__icon"
    //         src={mysql} alt="mysql icon" />
    //       </div>
    //       <div>
    //         <img
    //           className="home__icon"
    //           src={javascript}
    //           alt="javascript icon"
    //         />
    //       </div>
    //       <div>
    //         <img className="home__icon" src={html5} alt="html5 icon" />
    //       </div>
    //  {/* </div> */}

    //     </div>
    //     </section>
  );
}

export default Skills;
