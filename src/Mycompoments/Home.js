import React from "react";
import Header from "./Header";
import "./style.css";
import Video from "./Video";
import { Route, Routes } from 'react-router-dom'
import AboutUs from "./AboutUs";
import Landing from "./Landing";
import CoreValues from "./CoreValues";

export default function Home() {
  return (
    <div className="homepage">
         <Header/> 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<CoreValues />} />
          <Route path="/jobs" element={<Video />} />
          <Route path="/whychoose" element={<Video />} />
          <Route path="/contact" element={<Video />} />
        </Routes>
    </div>
  );
}
