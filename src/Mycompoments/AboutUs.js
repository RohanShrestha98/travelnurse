import React from "react";
import "./about.css";
import CoreValues from "./CoreValues";
import Footer from "./Footer";
import MissionVision from "./MissionVision";
import Welcome from "./Welcome";

export default function AboutUs() {
  return (
    <>
    <div className="aboutus">
      <div className="background">
        <img src="img/background.png" alt="" />
      </div>
      <div className="backgroundContent">
        <p>Partnering with Healthcare Providers to Make a Difference</p>
        <h1>Find your home <br /> away from  home with <br />  Veridian Healthcare</h1>
        <button>Get Started <i class="fa-solid fa-arrow-right"></i></button>
      </div>
      
    </div>
    <Welcome/>
    <MissionVision/>
    <CoreValues/>
    <Footer/>
    </>
  );
}
