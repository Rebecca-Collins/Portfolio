import React from "react";
import "./HomePage.scss";
// import Navbar from "../../components/Navbar/Navbar";

function HomePage() {
  return (
    <main className="home">
      {/* <Navbar /> */}
      <div className="home__text-container">
        <h1 className="home__text">Rebecca,</h1>
        <div className="home__subheading-container">
          <h3 className="home__subheading">Full-Stack Web Developer</h3>
          <p className="home__paragraph">
            My passions for design, user experience and technology drive me to
            create responsive, user-friendly and high-performance websites.
          </p>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
