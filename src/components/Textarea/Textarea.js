// import React, { useState } from "react";
// // import Icon from "../../components/Icon/Icon";
// import "./Textarea.scss";

// const Textarea = ({ icon, type, name, iconClass, size, ...rest }) => {
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

//   const inputClasses = [
//     "textarea__text-field",
//     isFilled ? "field__input--filled" : "",
//     isFocused ? "field__input--focused" : ""
//   ]
//     .filter(Boolean)
//     .join(" ");
// // function Textarea({ type, placeholder, name, label, icon, iconClass }) {
// //   const [isFocused, setIsFocused] = useState(false);
// //   const [inputValue, setInputValue] = useState("");
// //   const [isFilled, setIsFilled] = useState(false);

// //   const handleChange = (event) => {
// //     setInputValue(event.target.value);
// //     setIsFilled(event.target.value !== "");
// //   };

//   // const handleChange = (event) => {
//   //   setInputValue(event.target.value);
//   // };

//   return (
//     <div className="textarea">
//       <label htmlFor={name} className="textarea__label">
        
//         {/* <Icon icon={icon} isFilled={inputValue} isFocused={isFocused} /> */}
//         <img
//          className={iconClass}
//           // className={`input__icon ${isFilled ? "input__icon--filled" : ""}`}
//           src={icon}
//           alt={icon}
//         />
//       </label>
//       <textarea
//       className={inputClasses}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       {...rest}
//       // value={inputValue}
//         // className={`textarea__text-field ${
//         //   isFilled ? "input__field--filled" : ""
//         // } ${isFocused ? "input__field--focused" : ""}`}
//         // onChange={handleChange}
//         type={type}
//         name={name}
//         // className="textarea__field"
//         // placeholder={placeholder}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         {...rest}
//       />
//       {/* <textarea
//         className="textarea__text-field"
//         type={type}
//         name={name}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         onChange={handleChange}
       
//       /> */}
//     </div>
//   );
// }

// export default Textarea;
// import React, { useState } from "react";
// import "./Textarea.scss";

// const Textarea = ({ icon, type, name, iconClass, ...rest }) => {
//   const [isFilled, setIsFilled] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = event => {
//     setIsFocused(false);
//     if (event.target.value) {
//       setIsFilled(true);
//       console.log(setIsFilled)
//     } else {
//       setIsFilled(false);
//     }
//   };

//   const inputClasses = [
//     "textarea__text-field",
//     isFilled ? "textarea__text-field--filled" : "",
//     isFocused ? "textarea__text-field--focused" : ""
//   ]
//     .filter(Boolean)
//     .join(" ");

//   return (
//     <div className="textarea">
//       <textarea
//         className={inputClasses}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         {...rest}
//         type={type}
//         name={name}
//       />
//     <label htmlFor={name} className="textarea__label">
//         <img
//           className={iconClass}
//           src={icon}
//           alt={icon}
//         />
//       </label>
//     </div>
//   );
// };

// export default Textarea;