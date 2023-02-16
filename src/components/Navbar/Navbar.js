import React from "react";
import "./Navbar.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
// import { IconContext } from "react-icons";
// import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";

// import ReactDOM from 'react-dom'

const handleViewButtonClick = () => {
  window.open("https://github.com/Rebecca-Collins", "_blank");
};

const handleLinkButton = () => {
  window.open("https://www.linkedin.com/in/collins-rebecca/", "_blank");
};

const handleResumeButton = () => {
  window.open("https://dvrfp7vt6y4co.cloudfront.net/0e963f9f-f7e9-4502-879f-992725cdf8a8/Rebecca%20Collins%20Resume.pdf", "_blank");
};

// ReactDOM.render(element, document.body)

function Navbar() {
  return (
    <header>
      <div className="navigation">
    <nav className="navigation__container">
      {/* <BurgerMenu /> */}

      <Link className="logo" to="/">
        RC
      </Link>

      {/* <Link className="navigation__links" to="/about">
        About
      </Link> */}

      <Link className="navigation__links" to="/projects">
        Portfolio
      </Link>
      
      <Link className="navigation__links" to="/contact">
      Connect
      </Link>
      <div className="link github">
      {/* <IconContext.Provider
      value={{ color: '#9ec759', size: '17px' }}> */}
          <FaGithub className="spin"  onClick={handleViewButtonClick}/>
          {/* </IconContext.Provider> */}
        </div>
        <div className="link linkedin">
        
          <FaLinkedinIn className="spin" onClick={handleLinkButton}/>
         
        </div>
        <div className="link resume">
        <FaWpforms className="spin" onClick={handleResumeButton}/>      
        </div>
    </nav>
    </div>
    </header>
  );
}

export default Navbar;
