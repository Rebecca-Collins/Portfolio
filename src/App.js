import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import CustomCursor from "./components/CustomCurser/CustomCurser";
import Projects from "./pages/Projects/Projects";
function App() {
  return (
    <BrowserRouter>
    <CustomCursor/>
     {/* <div className="custom-cursor"></div> */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
