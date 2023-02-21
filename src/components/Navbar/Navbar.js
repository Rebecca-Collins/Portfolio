import React from "react";
import "./Navbar.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const handleViewButtonClick = () => {
  window.open("https://github.com/Rebecca-Collins", "_blank");
};

const handleLinkButton = () => {
  window.open("https://www.linkedin.com/in/collins-rebecca/", "_blank");
};

const handleResumeButton = () => {
  window.open(
    "https://dvrfp7vt6y4co.cloudfront.net/0e963f9f-f7e9-4502-879f-992725cdf8a8/Rebecca%20Collins%20Resume.pdf",
    "_blank"
  );
};

// function Navbar() {
//   return (
//     <header className="navigation">
//       <nav className="navigation__container">
//       <Link className="navigation__logo" to="/">
//           RC
//         </Link>
//         <div className="navigation__link-container">       
//         <Link className="navigation__links" to="/projects">
//           Portfolio
//         </Link>
//         <Link className="navigation__links" to="/contact">
//           Connect
//         </Link>
//         </div>
//         <div className="navigation__icon-container">
//           <div className="link github">
//             <FaGithub className="spin" onClick={handleViewButtonClick} />
//           </div>
//           <div className="link linkedin">
//             <FaLinkedinIn className="spin" onClick={handleLinkButton} />
//           </div>
//           <div className="link resume">
//             <FaWpforms className="spin" onClick={handleResumeButton} />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;


function Navbar() {
  const location = useLocation();

  return (
    <header className="navigation">
      <nav className="navigation__container">
        <Link className="navigation__logo" to="/">
          RC
        </Link>
        <div className="navigation__link-container">       
          <Link className={`navigation__links ${location.pathname === '/projects' ? 'active' : ''}`} to="/projects">
            Portfolio
          </Link>

          <Link className={`navigation__links ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">
            Connect
          </Link>

          {/* <Link className={`navigation__links ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
          About
          </Link> */}
        </div>
  
        <div className="navigation__icon-container">
          <div className="link github">
            <FaGithub className="spin" onClick={handleViewButtonClick} />
          </div>
          <div className="link linkedin">
            <FaLinkedinIn className="spin" onClick={handleLinkButton} />
          </div>
          <div className="link resume">
            <FaWpforms className="spin" onClick={handleResumeButton} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;