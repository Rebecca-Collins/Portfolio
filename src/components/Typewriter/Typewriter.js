import { useEffect, useState } from "react";


function Typewriter({ text }) {
  const [displayWords, setDisplayWords] = useState([]);
  const [currentIndex] = useState(0);

 
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

export default Typewriter;