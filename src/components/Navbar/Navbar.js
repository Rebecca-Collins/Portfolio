import React from 'react';
import "./Navbar.scss"
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import {Link} from "react-router-dom";

function Navbar() {
  return (
         <nav className="navigation">
           <BurgerMenu/>
            <Link className="navigation__links" to="">Projects</Link>
            <Link className="navigation__links" to="">Contact</Link>
            <Link className="navigation__links" to="">About</Link>
           
        </nav>
   
  )
}

export default Navbar