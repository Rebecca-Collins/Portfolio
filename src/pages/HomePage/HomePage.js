import React from 'react';
import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";

function HomePage() {
  return (
    <main className="home">
        <Navbar/>
      <div className="home__text-container">
      <p className="home__text">Hi, i'm Rebecca.</p>
      </div>
     
       
    </main>
  )
}

export default HomePage