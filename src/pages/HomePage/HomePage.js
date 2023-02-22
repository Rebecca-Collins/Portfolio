import "./HomePage.scss";
import { Link } from "react-router-dom";
import Typewriter from "../../components/Typewriter/Typewriter";
import axiosIcon from "../../assets/images/axios.svg";
import express from "../../assets/images/express.png";
import knex from "../../assets/images/knex.svg";
import sass from "../../assets/images/sass.png";
import node from "../../assets/images/node.png";
import mysql from "../../assets/images/mysql.png";
import javascript from "../../assets/images/javascript.png";
import reactIcon from "../../assets/images/reactIcon.png";
import html5 from "../../assets/images/html5.png";


function HomePage() {
  return (
    <main className="home">
      <div className="home__container">
        <div className="home__heading-container">
          <div className="home__text-typewriter">
            <Typewriter text="Rebecca Collins." />
          </div>
          <h3 className="home__subheading">Full-Stack Web Developer</h3>
        </div>
        <div className=" home__memoji">
        </div>
       
        <div className="home__subheading-container">
          <p className="home__paragraph">
            I stay current with industry trends and use cutting-edge
            technologies to bring your brand to life. Dedicated to exceptional
            results, whether creating a modern website or complex software.
            Let's shape the future and give your brand a competitive edge.
          </p>
          <p className="home__paragraph">
            I am dedicated to delivering high-quality work and making a positive
            impact through my skills and expertise. In my free time, I enjoy
            playing soccer, volunteering and keeping up with the latest
            technology advancements. I am looking for a company that shares my
            passion for innovation and problem-solving.
          </p>
        </div>
        <section className="home__skills-container">
        <h2 className="home__skill-heading">Skills</h2>
        <div className="home__icon-content">
          <div className="home__icon-container">
            <img className="home__icon" 
            src={axiosIcon} alt="axios icon" />
          </div>
          <div className="home__icon-container">
            <img className="home__icon" 
            src={express} alt="express icon" />
          </div>
          <div className="home__icon-container">
            <img className="home__icon" 
            src={knex} alt="knex icon" />
          </div>
          <div className="home__icon-container">
            <img className="home__icon" 
            src={sass} alt="sass icon" />
          </div>
          <div className="home__icon-container">
            <img className="home__icon" 
            src={reactIcon} alt="react icon" />
          </div>
          <div className="home__icon-container">
            <img className="home__icon" 
            src={node} alt="node.js icon" />
          </div>
          <div className="home__icon-container">
            <img className="home__icon" 
            src={mysql} alt="mysql icon" />
          </div>
          <div className="home__icon-container">
            <img
              className="home__icon"
              src={javascript}
              alt="javascript icon"
            />
          </div>
          <div className="home__icon-container">
            <img className="home__icon" src={html5} alt="html5 icon" />
          </div>
        </div>
        </section>
       

        {/* </div> */}
        <div className="home__link-container">
          <Link className="home__contact-link" to="/contact">
            Get In Touch
          </Link>
          <Link className="home__link" to="/about">
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;

// {/* <p className="home__paragraph">
//             My approach is centred around staying ahead of industry trends and
//             utilizing cutting-edge technologies to bring your company's values
//             to life for your clients. I am dedicated to delivering exceptional
//             results, whether it's through the creation of a sleek and modern
//             website or the development of a complex software system. Let's work
//             together to shape the future of technology and give your brand a
//             competitive edge. My portfolio showcases the diverse range of
//             projects I've tackled and demonstrates the skills I bring to the
//             table.
//           </p> */}

//             {/* <p className="home__paragraph">
//             If you're looking for a web developer who is dedicated to delivering
//             high-quality results and is always eager to learn and grow, look no
//             further. My approach, as outlined in the previous paragraph, is
//             centered around staying ahead of industry trends and utilizing
//             cutting-edge technologies to bring your company's values to life for
//             your clients. Let's work together to bring your vision to life and
//             give your brand a competitive edge.
//           </p> */}
