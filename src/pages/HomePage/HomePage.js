import React from "react";
import "./HomePage.scss";
import chevron from "../../assets/images/chevron.svg"
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="home">
      <div className="home__text-container">
        <h1 className="home__text">Hi, I'm Rebecca.</h1>
        <div className="home__subheading-container">
          <h3 className="home__subheading">
            Full-Stack Web Developer specializing in React, Javascript, SASS, Node.js, MYSQL, 
            and more.
          </h3>
          <p className="home__paragraph">
            I am a lifelong learner and problem solver, driven by my passion for
            creating visually stunning and intuitive websites. With a focus on
            design, user experience, and technology, I bring a unique skill set
            to the table that allows me to create responsive, user-friendly, and
            high-performance websites. Take a look at my portfolio to see the
            projects I've undertaken and the diverse skill set I bring to the
            table.
          </p>
            <Link className="home__link" to="/about"> Learn More <img className="home__chevron-img" src={chevron} alt="right arrow"/> </Link>
          <p className="home__paragraph">
            If you're looking for a web developer who is dedicated to delivering
            high-quality results and is always eager to learn and grow, I'd love
            to hear from you. Let's work together to bring your vision to life.
          </p>
        </div>
      </div>
    </main>
    // <main className="home">
    //   <div className="home__text-container">
    //     <h1 className="home__text">Welcome to my portfolio!
    //       {/* Rebecca, */}
    //       </h1>
    //     <div className="home__subheading-container">
    //       <h3 className="home__subheading">Full-Stack Web Developer</h3>
    //       <p className="home__paragraph">
    //         I am a lifelong learner and problem solver,
    //         driven by a passion for creating visually stunning and intuitive
    //         websites. Here, you will find a showcase of my diverse skill set and
    //         the projects I've undertaken that demonstrate my commitment to
    //         staying up-to-date with the latest design trends and development
    //         technologies. Let's work together to bring your vision to life.
    //         {/* My passions for design, user experience and technology drive me to
    //         create responsive, user-friendly and high-performance websites. */}
    //       </p>
    //     </div>
    //   </div>
    // </main>
  );
}

export default HomePage;
