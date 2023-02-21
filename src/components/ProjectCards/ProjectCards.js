import "./ProjectCards.scss";

import { useState } from "react";

function ProjectCards({
  projectName,
  image,
  projectText,
  projectContent,
  projectTitle
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleViewButtonClick = () => {
    window.open("https://github.com/Rebecca-Collins", "_blank");
  };

  return (
    <div className="project-card card">
      <img
        className="project-card__image"
        src={image}
        alt={`${projectName} project`}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="overlay open">
          <div className="overlay__content"> 
            <p className="overlay__text">{projectText}</p>
            <p className={`overlay__title ${projectName}`}>{projectTitle}</p>
            <p className="overlay__details">{projectContent}</p>
            <div className="overlay__button-container">
              <button
                className="overlay__view-button"
                onClick={handleViewButtonClick}
              >
                View
              </button>
              <button
                className="overlay__close-button"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCards;
