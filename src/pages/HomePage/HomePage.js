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
            As someone who is deeply passionate about the industry, I constantly
            stay up-to-date with the latest trends and cutting-edge
            technologies. My goal is always to create exceptional results,
            whether I'm designing a modern website or implementing innovative
            marketing strategies. I believe that my dedication to staying ahead
            of the curve and my commitment to collaboration make me a valuable
            asset to any team. Together, we can give your brand the competitive
            edge it deserves.
          </p>
          <p className="home__paragraph">
            Beyond my work, I'm dedicated to personal and professional growth.
            When I'm not tackling the latest project, you'll find me playing
            soccer, volunteering, or staying up-to-date with the latest
            technology advancements. I'm passionate about problem-solving and
            driven to make a positive impact, and I'm looking for a company that
            shares those same values.
          </p>
        </div>
        <Skills/>
        <div className="home__link-container">
          <Link className="home__link" to="/contact">
            Get In Touch
          </Link>
          <Link className="home__link" to="/about">
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;


  /* <p className="home__paragraph">
            I stay current with industry trends and use cutting-edge
            technologies to bring your brand to life. Dedicated to exceptional
            results, whether creating a modern website or complex software.
            Let's shape the future and give your brand a competitive edge.
          </p> */


  /* <p className="home__paragraph">
            I am dedicated to delivering high-quality work and making a positive
            impact through my skills and expertise. In my free time, I enjoy
            playing soccer, volunteering and keeping up with the latest
            technology advancements. I am looking for a company that shares my
            passion for innovation and problem-solving.
          </p> */


// {/* <p className="home__paragraph">
//             My approach is centred around staying ahead of industry trends and
//             utilizing cutting-edge technologies to bring your company's values
//             to life for your clients. I am dedicated to delivering exceptional
//             results, whether it's through the creation of a sleek and modern
//             website or the development of a complex software system. Let's work
//             together to shape the future of technology and give your brand a
//             competitive edge. My portfolio showcases the diverse range of
//             projects I've tackled and demonstrates the skills I bring to the
//             table.
//           </p> */}

//             {/* <p className="home__paragraph">
//             If you're looking for a web developer who is dedicated to delivering
//             high-quality results and is always eager to learn and grow, look no
//             further. My approach, as outlined in the previous paragraph, is
//             centered around staying ahead of industry trends and utilizing
//             cutting-edge technologies to bring your company's values to life for
//             your clients. Let's work together to bring your vision to life and
//             give your brand a competitive edge.
//           </p> */}
