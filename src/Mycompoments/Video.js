import React from 'react'
import "./style.css"

export default function Video() {
  return (
      <section className="video">
            <video id="video-background" autoPlay muted loop>
                <source src="video/video.mp4" type="video/mp4"/>
              </video>
              <div id="content">
                <h1>Explore Your <br /> Nursing Adventure</h1>
                <p>inspires travel nurses to discover new places, cultures, and healthcare systems while providing helpful resources and job opportunities</p>
                <button>Get Started</button>
              </div>
              
        </section>
  )
}
