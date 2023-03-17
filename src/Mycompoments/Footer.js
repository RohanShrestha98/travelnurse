import React from 'react'
import "./style.css"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='InsideFooter'>
      <div className='footerLogo'>
        <img src="img/logo.png" alt="" />
      </div>
      <div className='quickLinks'>
        <h2>Quick Links</h2>
        <p>Our Story</p>
        <p>Newsroom</p>
        <p>Causes</p>
        <p>Become a Travell nurse</p>
        <p>Partner with us</p>
      </div>
      <div className='quickLinks'>
      <h2>Contact Infomation</h2>
        <p>713 482 92810</p>
        <p>info@veridiants.com</p>
        <p>11931 Wickchester Lane Suite 150, Houston, TX 77043</p>
        
      </div>
      </div>
      <div className='copyright'>
      Copyright © 2036 Veridian Health Care Design:
      </div>
    </div>
  )
}
