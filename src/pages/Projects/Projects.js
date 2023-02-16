import { useState } from "react";
import bandsite from "../../assets/images/5-copy.png";
import brainflix from "../../assets/images/6-copy.png";
import googleAccess from "../../assets/images/1-copy.png";
import instock from "../../assets/images/2-copy.png";
import travelSite from "../../assets/images/3-copy.png";
import oceanside from "../../assets/images/4-copy.png";
import "./Projects.scss";

import ProjectCards from "../../components/ProjectCards/ProjectCards";

function Projects() {
  const [selectedProject, setSelectedProject] = useState("");

  const handleClick = (projectName) => {
    setSelectedProject(projectName);
  };

  return (
    <section className="project background">
      {/* <div className="project"> */}
        <div>
          <h1 className="project__heading">
          Bringing Your Ideas to Life: A Showcase of My Expertise in Modern Web Development Technologies
            {/* Bringing Ideas to Life: A selection of my web development projects
            using modern technologies. */}
          </h1>
        </div>

        <div className="project__container">
          <ProjectCards
            projectName="bandsite"
            image={bandsite}
            handleClick={handleClick}
            projectTitle="Bandsite"
            projectText="BandSite is a dynamic web platform designed for musical artists to showcase their talent and connect with fans. It offers users the ability to preview upcoming performances, listen to the band's music, and purchase tickets to shows directly from the site."
            projectContent="Developed with, HTML, JavaScript DOM, Flexbox, SASS, BEM, and REST API "
          />

          <ProjectCards
            projectName="brainflix"
            image={brainflix}
            handleClick={handleClick}
            projectTitle="Brainflix"
            projectText="Is a video streaming platform that lets you watch, upload, and share videos like YouTube. Create playlists and discover new content from creators across the world."
            projectContent="Developed with, React, JavaScript, Axios, Node.js, SASS, BEM, REST API and Flexbox"
          />

          <ProjectCards
            projectName="googleAccess"
            image={googleAccess}
            handleClick={handleClick}
            projectTitle="Google Access"
            projectText="The G-Access Toolbar lets you personalize accessibility settings in Google products and save them for use across all of them. It lets you adjust elements like text size and color contrast directly on the page."
            projectContent="Developed with React, HTML5, BEM, SASS, Flexbox and JavaScript."
          />

          <ProjectCards
            projectName="travelSite"
            image={travelSite}
            handleClick={handleClick}
            projectTitle="Travel Site"
            projectText="Travel Site allows users to discover and plan their next travel adventure. It features a user-friendly interface, a variety of destinations and activities to choose from"
            projectContent="Developed with, HTML5, BEM, Flexbox and SASS"
          />

          <ProjectCards
            projectName="instock"
            image={instock}
            handleClick={handleClick}
            projectTitle="Instock"
            projectText="Instock, an inventory management system. Working in an agile environment, I collaborated with my team to prioritize and complete tasks using JIRA. Our goal was to deliver a functional and user-friendly platform that would allow users to manage their warehouse inventory efficiently and effectively."
            projectContent="Developed with, JavaScript, HTML, SCSS, Flexbox, Axios, Knex, MYSQL, Express, Node.js"
          />

          <ProjectCards
            projectName="oceanside"
            image={oceanside}
            handleClick={handleClick}
            projectTitle="Oceanside United"
            projectText="Oceanside United is a website for a local women's soccer team to connect the team with their community and potential sponsors. Key features include a user authentication, commenting system, responsive design, dynamic timestamps, and an API backend."
            projectContent="Developed with,, JavaScript, HTML, SCSS, Flexbox, Axios, Knex, MYSQL, Express, and Node.js"
          />
        </div>
        {selectedProject !== "" && (
          <div className="overlay open">
            <button onClick={() => setSelectedProject("")}>Close</button>
          </div>
        )}
      {/* </div> */}
    </section>
  );
}

export default Projects;
