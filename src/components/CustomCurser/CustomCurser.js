import "./CustomCurser.scss"
// import { useState, useEffect } from 'react';

// function CustomCursor() {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [hover, setHover] = useState(false);

// console.log(cursorPosition)

//   useEffect(() => {
//     const handleMouseMove = e => {
//       setCursorPosition({ x: e.pageX, y: e.pageY });
//     };

//     const handleMouseOver = e => {
//       if (e.target.matches('.clickable')) {
//         setHover(true);
//       }
//     };

//     const handleMouseOut = e => {
//       if (e.target.matches('.clickable')) {
//         setHover(false);
//       }
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseover', handleMouseOver);
//     document.addEventListener('mouseout', handleMouseOut);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseover', handleMouseOver);
//       document.removeEventListener('mouseout', handleMouseOut);
//     };
//   }, [cursorPosition, hover]);

//   return (
//     <div
//       className={`custom-cursor ${hover ? 'hover' : ''}`}
//       style={{
//         left: `${cursorPosition.x}px`,
//         top: `${cursorPosition.y}px`,
//       }}
//     />
//   );
// }

// export default CustomCursor;

// -------top is the first and its slow now... bottom is from youtube

// function CustomCursor() {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0
//   });

// console.log(mousePosition);

// useEffect(() => {
//   const mouseMove = e => {
//     setMousePosition({
//       x: e.clientX,
//       y: e.clientY
//     })
//   }
//   window.addEventListener("mousemove", mouseMove)

//   return () => {
//     window.removeEventListener("mousemove", mouseMove)
//   }
// })


// }

// export default CustomCursor;




import { useState, useEffect } from 'react';

function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

console.log(cursorPosition)

  useEffect(() => {
    const handleMouseMove = e => {
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    const handleMouseOver = e => {
      if (e.target.matches('.clickable')) {
        setHover(true);
      }
    };

    const handleMouseOut = e => {
      if (e.target.matches('.clickable')) {
        setHover(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hover ? 'hover' : ''}`}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
    >
      <div className="cursor-circle"></div>
    </div>
  );
}

export default CustomCursor;
