import React from "react";
import "./Navbar.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <BurgerMenu />
      {/* <h1 className="navigation__heading"> */}
        <Link className="navigation__links" to="/">
          Home
        </Link>
      {/* </h1> */}
      {/* <h1 className="navigation__heading"> */}
        <Link className="navigation__links" to="/about">
          About
        </Link>
      {/* </h1> */}
      {/* <h1 className="navigation__heading"> */}
        <Link className="navigation__links" to="/projects">
          Projects
        </Link>
      {/* </h1> */}
      {/* <h1 className="navigation__heading"> */}
        <Link className="navigation__links" to="/">
          Contact
        </Link>
      {/* </h1> */}
    </nav>
  );
}

export default Navbar;
