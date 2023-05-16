import "./HomePage.scss";
import { Link } from "react-router-dom";
import Typewriter from "../../components/Typewriter/Typewriter";
import Skills from "../../components/Skills/Skills";

function HomePage() {
  return (
    <main className="home">
      <div className="home__container">
        <div className="home__heading-container">
          <div className="home__text-typewriter">
            <Typewriter text="Rebecca Collins." />
          </div>
          <h3 className="home__subheading">Full-Stack Web Developer</h3>
        </div>
        <div className=" home__memoji"></div>
        <div className="home__subheading-container">
          <p className="home__paragraph">
            As someone who is{" "}
            <span className="home__highlight-text">deeply passionate</span>{" "}
            about the industry, I constantly stay up-to-date with the latest
            trends and{" "}
            <span className="home__highlight-text">
              cutting-edge technologies
            </span>
            . My goal is always to create{" "}
            <span className="home__highlight-text">exceptional results</span>,
            whether I'm designing a modern website or implementing innovative
            marketing strategies. I believe that my{" "}
            <span className="home__highlight-text">dedication</span> to staying
            ahead of the curve and my commitment to{" "}
            <span className="home__highlight-text">collaboration</span> make me
            a <span className="home__highlight-text">valuable asset</span> to
            any team. Together, we can give your brand the{" "}
            <span className="home__highlight-text">competitive edge</span> it
            deserves.
          </p>
          <p className="home__paragraph">
            Beyond my work, I'm dedicated to{" "}
            <span className="home__highlight-text">
              personal and professional growth
            </span>
            . When I'm not tackling the latest project, you'll find me playing
            soccer, volunteering, or staying up-to-date with the latest
            technology advancements. I am{" "}
            <span className="home__highlight-text">dedicated</span> to
            problem-solving and driven to make a{" "}
            <span className="home__highlight-text">positive impact</span>, and
            I'm looking for a company that shares those same values.
          </p>
        </div>
        <Skills />
        <div className="home__link-container">
          <Link className="home__link" to="/contact">
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
