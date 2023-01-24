import { useState } from "react";
import bandsite from "../../assets/images/5-copy.png";
import brainflix from "../../assets/images/6-copy.png";
import googleAccess from "../../assets/images/1-copy.png";
import instock from "../../assets/images/2-copy.png";
import travelSite from "../../assets/images/3-copy.png";
import oceanside from "../../assets/images/4-copy.png";
import "./Projects.scss";

function Projects() {
  const [selectedProject, setSelectedProject] = useState("");

  const handleClick = projectName => {
    setSelectedProject(projectName);
  };

  return (
    <section>
      <div className="project">
        <div>
          <h1 className="project__heading">
            Bringing Ideas to Life: A selection of my web development projects
            using modern technologies.
          </h1>
          <div className="project__sub-container">
            <p className="project__sub-heading">
              Back-end development using React, Node.js, Express, Knex and
              MYSQL.
            </p>
            <p className="project__sub-heading">
              Front-end development with React, HTML5, CSS, SASS, and
              JavaScript.
            </p>
          </div>
        </div>

        <div className="project__container">

          <div className="project__content card">
            <img
              className="project__image"
              src={bandsite}
              alt="bandsite project"
              onClick={() => handleClick("bandsite")}
            />
            {selectedProject === "bandsite" && (
              <div className="overlay open">
                <button onClick={() => setSelectedProject("")}>Close</button>
              </div>
            )}
          </div>

          <div className="project__content card">
            <img
              className="project__image"
              src={brainflix}
              alt="brainflix project"
              onClick={() => handleClick("brainflix")}
            />
            {selectedProject === "brainflix" && (
              <div className="overlay open">
                <button onClick={() => setSelectedProject("")}>Close</button>
              </div>
            )}
          </div>

          <div className="project__content card">
            <img
              className="project__image"
              src={googleAccess}
              alt="bandsite project"
              onClick={() => handleClick("googleAccess")}
            />
            {selectedProject === "googleAccess" && (
              <div className="overlay open">
                <button onClick={() => setSelectedProject("")}>Close</button>
              </div>
            )}
          </div>

          <div className="project__content card">
            <img
              className="project__image"
              src={travelSite}
              alt="bandsite project"
              onClick={() => handleClick("travelSite")}
            />
            {selectedProject === "travelSite" && (
              <div className="overlay open">
                <button onClick={() => setSelectedProject("")}>Close</button>
              </div>
            )}
          </div>

          <div className="project__content card">
            <img
              className="project__image"
              src={instock}
              alt="bandsite project"
              onClick={() => handleClick("instock")}
            />
            {selectedProject === "instock" && (
              <div className="overlay open">
                <button onClick={() => setSelectedProject("")}>Close</button>
              </div>
            )}
          </div>

          <div className="project__content card">
            <img
              className="project__image"
              src={oceanside}
              alt="bandsite project"
              onClick={() => handleClick("oceanside")}
            />
            {selectedProject === "oceanside" && (
              <div className="overlay open">
                <button onClick={() => setSelectedProject("")}>Close</button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;