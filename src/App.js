import './App.scss';
// import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
// import CustomCursor from "./components/CustomCurser/CustomCurser";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer"
// function App() {

const App = () => {

  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsVisible(true);
  //   }, 500);
  // }, []);

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   const target = event.target.getAttribute('href');
  //   const element = document.querySelector(target);
  //   element.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <BrowserRouter>
    {/* <CustomCursor/> */}
     {/* <div className="custom-cursor"></div> */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    
  );
}

export default App;
