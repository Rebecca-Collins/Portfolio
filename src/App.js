import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer"


const App = () => {


  return (
    <BrowserRouter>
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
