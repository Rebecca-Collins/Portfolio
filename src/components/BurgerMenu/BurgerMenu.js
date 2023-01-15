//----ORIGNAL AND WORKS BUT DOESNT CLOSE WHEN CLICKED ---- 
// import "./BurgerMenu.scss";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className={`burger-menu ${isOpen ? "open" : ""}`}>
//         <div
//           className={`burger-menu__button ${
//             isOpen ? "burger-menu__button open" : "burger-menu__button"
//           }`}
//           onClick={toggleMenu}
//         >
//           <div className="burger-menu__line" />
//           <div className="burger-menu__line" />
//           <div className="burger-menu__line" />
//         </div>
//       </div>
//       <nav className={`burger-menu__content ${isOpen ? "open" : ""}`}>
//         <div className="burger-menu__link-container">
//           <h1>
//             <Link className="burger-menu__links" to="/home">
//               Home
//             </Link>
//           </h1>
//           <h1>
//             <Link className="burger-menu__links" to="/about">
//               About
//             </Link>
//           </h1>
//           <h1>
//             <Link className="burger-menu__links" to="/">
//               Projects
//             </Link>
//           </h1>

//           <h1>
//             <Link className="burger-menu__links" to="/">
//               Contact
//             </Link>
//           </h1>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default BurgerMenu;
// ----------------------------------
// ---- link one-----
import "./BurgerMenu.scss";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(() => {
    const links = document.querySelectorAll(".burger-menu__links");
    links.forEach(link => {
      link.addEventListener("click", toggleMenu);
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener("click", toggleMenu);
      });
    };
  }, [isOpen, toggleMenu]);

  return (
    <>
      <div className={`burger-menu ${isOpen ? "open" : ""}`}>
        <div
          className={`burger-menu__button ${
            isOpen ? "burger-menu__button open" : "burger-menu__button"
          }`}
          onClick={toggleMenu}
        >
          <div className="burger-menu__line" />
          <div className="burger-menu__line" />
          <div className="burger-menu__line" />
        </div>
      </div>
      <nav className={`burger-menu__content ${isOpen ? "open" : ""}`}>
        <div className="burger-menu__link-container">
          <h1>
            <Link className="burger-menu__links" to="/">
              Home
            </Link>
          </h1>
          <h1>
            <Link className="burger-menu__links" to="/about">
              About
            </Link>
          </h1>
          <h1>
            <Link className="burger-menu__links" to="/">
              Projects
            </Link>
          </h1>

          <h1>
            <Link className="burger-menu__links" to="/">
              Contact
            </Link>
          </h1>
        </div>
      </nav>
    </>
  );
}

export default BurgerMenu;
