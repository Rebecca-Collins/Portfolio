// import React, { useState } from "react";
// import "./Input.scss";

// function Input({ label, name, placeholder, type, icon, iconClass }) {
//   const [isFocused, setIsFocused] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [isFilled, setIsFilled] = useState(false);

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//     setIsFilled(event.target.value !== "");
//   };

//   const fieldClass =
//     "field" +
//     (isFilled ? " field--filled" : "") +
//     (isFocused ? " field--focused" : "");
//   const labelClass =
//     "field__label" + (isFilled || isFocused ? " field__label--up" : "");
//   const iconClass =
//     "field__label__icon" + (isFilled || isFocused ? " field__label__icon--up" : "");

//   return (
//     <div className={fieldClass}>
//       <label htmlFor={name} className={labelClass}>
//         <img className={iconClass} src={icon} alt={icon} />
//         {label}
//       </label>
//       <input
//         value={inputValue}
//         onChange={handleChange}
//         type={type}
//         name={name}
//         className="field__input"
//         placeholder={placeholder}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//       />
//     </div>
//   );
// }

// export default Input;



// import React, { useState } from "react";
// import "./Input.scss";

// function Input({ label, name, placeholder, type, icon, iconClass }) {
//   const [isFocused, setIsFocused] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [isFilled, setIsFilled] = useState(false);

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//     setIsFilled(event.target.value !== "");
//   };

//   return (
//     <div className="field">
//       <label htmlFor={name} className={`field__label ${isFilled || isFocused ? "field__label--focused" : ""}`}>
//         <img
//           className={iconClass}
//           src={icon}
//           alt={icon}
//         />
//         {label}
//       </label>
//       <input
//         value={inputValue}
//         onChange={handleChange}
//         type={type}
//         name={name}
//         className={`field__input ${isFilled ? "field__input--filled" : ""} ${
//           isFocused ? "field__input--focused" : ""
//         }`}
//         placeholder={placeholder}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//       />
//     </div>
//   );
// }

// export default Input;



// import React, { useState } from "react";
// import "./Input.scss";

// const Input = ({ icon, type, name, iconClass, size, ...rest }) => {
//   const [isFilled, setIsFilled] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   const handleFocus = () => {
//     setIsFocused(true);
//   };
  
//   const handleBlur = event => {
//     setIsFocused(false);
//     if (event.target.value) {
//       setIsFilled(true);
//     } else {
//       setIsFilled(false);
//     }
//   };

//   // const handleFocus = () => {
//   //   setIsFocused(true);
//   // };

//   // const handleBlur = event => {
//   //   setIsFocused(false);
//   //   if (event.target.value) {
//   //     setIsFilled(true);
//   //   } else {
//   //     setIsFilled(false);
//   //   }
//   // };

//   const inputClasses = [
//     "field__input",
//     isFilled ? "field__input--filled" : "",
//     isFocused ? "field__input--focused" : ""
//   ]
//     .filter(Boolean)
//     .join(" ");

//   return (
//     <div className="field">
//       <input
//         className={inputClasses}
//         type={type}
//         name={name}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         {...rest}
//       />
//       <label className="field__label">
//         <img src={icon} className={iconClass} alt="" />
//       </label>
//     </div>
//   );
// };

// export default Input;