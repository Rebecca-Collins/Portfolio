import "./HomePage.scss";
import chevron from "../../assets/images/chevron.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import Typewriter from "../../components/Typewriter/Typewriter";

function Typewriter({ text }) {
  const [displayWords, setDisplayWords] = useState([]);
  const [currentIndex] = useState(0);

  // THIS IS WORKING!
  useEffect(() => {
    const words = text.split(/\s+/);
    const spans = words.reduce((acc, word) => {
      if (word.length <= 8) {
        // set a limit for word length
        acc.push({ text: word, typedText: "" });
      } else {
        let currentWord = word;
        while (currentWord.length > 0) {
          let endIndex = Math.min(currentWord.length, 8); // set a limit for character count
          acc.push({ text: currentWord.slice(0, endIndex), typedText: "" });
          currentWord = currentWord.slice(endIndex);
        }
      }
      return acc;
    }, []);
    setDisplayWords(spans);
  }, [text]);

  const isTypingComplete = currentIndex >= displayWords.length;

  // check if displayWords is empty and return null until it is not
  if (displayWords.length === 0) {
    return null;
  }
  // ---------

  return (
    <h1 className="home__text typewriter">
      {displayWords.map((span, index) => (
        <span key={index}>
          {span.typedText}
          {index === currentIndex && !isTypingComplete && (
            <span className="typewriter-cursor">Rebecca Collins.</span>
          )}
          {span.text.endsWith("\n") && <br />}
        </span>
      ))}
    </h1>
  );
}

// THIS IS WORKING----
// return (
//   <h1 className="home__text typewriter">
//     {displayWords.map((span, index) => (
//       <span key={index}>
//         {span.typedText}
//         {index === currentIndex && !isTypingComplete && <span>Rebecca Collins.</span>}
//         {' '}
//       </span>
//     ))}
//   </h1>
// );
// }
// -------------

// THIS WORKS
//   const [displayText, setDisplayText] = useState(text);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (currentIndex < text.length) {
//       setTimeout(() => {
//         setCurrentIndex(currentIndex + 1);
//       }, 100);
//     }
//     setDisplayText(text.slice(0, currentIndex));
//   }, [currentIndex, text]);

//   return <h1 className="home__text typewriter">{displayText}</h1>;
// }

function HomePage() {
  // const [text] = useState("Rebecca Collins.");

  return (
    <main className="home">
      {/* <main className="home background"> */}
      <div className="home__text-container">
        <Typewriter text="Rebecca Collins." />

        <div className="home__subheading-container">
          <h3 className="home__subheading">Full-Stack Web Developer</h3>
          <p className="home__paragraph">
            I stay current with industry trends and use cutting-edge technologies to
            bring your brand to life. Dedicated to exceptional results, whether
            creating a modern website or complex software. Let's shape the
            future and give your brand a competitive edge.{" "}
          </p>

          <Link className="home__link">
            {" "}
            Learn More{" "}
            <img
              className="home__chevron-img"
              src={chevron}
              alt="right arrow"
            />{" "}
          </Link>
        </div>
      </div>
      <div>
        <Link className="home__contact-link" to="/contact">Get in touch</Link>
      </div>
    </main>
  );
}

export default HomePage;

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
