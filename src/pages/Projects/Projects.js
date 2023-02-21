import { useState } from "react";
import bandsite from "../../assets/images/5-copy.png";
import brainflix from "../../assets/images/6-copy.png";
import googleAccess from "../../assets/images/1-copy.png";
import instock from "../../assets/images/2-copy.png";
// import travelSite from "../../assets/images/3-copy.png";
import oceanside from "../../assets/images/4-copy.png";


import "./Projects.scss";
import ProjectCards from "../../components/ProjectCards/ProjectCards";

function Projects() {
  const [selectedProject, setSelectedProject] = useState("");

  const handleClick = (projectName) => {
    setSelectedProject(projectName);
  };

  

//   // Define an array of icon paths
// const icons = [
//   FaReact,
//   "/path/to/second/icon",
//   "/path/to/third/icon",
  
// ];



  return (
    <section className="project">
        <h1 className="project__heading">Portfolio</h1>
      <div className="project__container">
      <ProjectCards
            projectName="bandsite"
            image={bandsite}
            handleClick={handleClick}
            // projectTitle="Bandsite"
            projectText="BandSite, a dynamic web platform designed for musical artists to comment directly to the page. It offers users the ability to preview upcoming performances."
            projectTitle="Languages: HTML5, CSS, JavaScript, DOM, Flexbox "
            projectContent="Technologies used: Axios, SASS,"  
          />

          <ProjectCards
            projectName="brainflix"
            image={brainflix}
            handleClick={handleClick}
            // projectTitle="Brainflix"
            projectText="Brainflix, a video streaming platform that lets you watch, upload, and share videos like YouTube."
            projectTitle="Languages: JavaScript, HTML5, CSS, Flexbox"
            projectContent="Technologies used: React,  Axios, Node.js and SASS"
          />

          <ProjectCards
            projectName="googleAccess"
            image={googleAccess}
            handleClick={handleClick}
            // projectTitle="Google Access"
            
            projectText="Winning Hackathon project with BrainStation and Google."
            projectTitle="Languages: JavaScript, Flexbox, HTML5"
            // projectText="The G-Access Toolbar lets you personalize accessibility settings in Google products and save them for use across all of them. It lets you adjust elements like text size and color contrast directly on the page."
            projectContent="Technologies used: React, SASS, "
          />

          {/* <ProjectCards
            projectName="travelSite"
            image={travelSite}
            handleClick={handleClick}
            projectTitle="Travel Site"
            projectText=""
            // projectText="Travel Site allows users to discover and plan their next travel adventure. It features a user-friendly interface, a variety of destinations and activities to choose from"
            projectContent="Technologies used: HTML5, Flexbox and SASS"
          /> */}

          <ProjectCards
            projectName="instock"
            image={instock}
            handleClick={handleClick}
            // projectTitle="Instock"
            projectTitle="Languages: JavaScript, HTML, CSS, Flexbox,"
            projectText="Instock, an inventory management system. It allows users to manage their warehouse inventory efficiently and effectively."
            projectContent="Technologies used: React, Axios, Knex, MYSQL, Express, Node.js, SCSS "
          />

          <ProjectCards
            projectName="oceanside"
            image={oceanside}
            handleClick={handleClick}
            // projectTitle="Oceanside United"
            projectText="Oceanside United, a website for a women's soccer team. Key features include user authentication, commenting system, add and delete players."
            projectTitle="Languages: JavaScript, HTML, Flexbox, CSS"
           
            projectContent="Technologies used:  React, SCSS,  Axios, Knex, MYSQL, Express, Node.js"
          />

      </div>
      {selectedProject !== "" && (
        <div className="overlay open">
          <button onClick={() => setSelectedProject("")}>Close</button>
        </div>
      )}
    </section>
  );
}

export default Projects;
