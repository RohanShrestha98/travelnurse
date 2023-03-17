import React from 'react'
import "./style.css"

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className='homepageAboutus'>
      <div className='leftAboutus'>
      <img src="img/nurse.png" alt="" />
      </div>
        <div className='rightAboutus'>
            <h2>Discover Our <br /> Travel Nurse Agency</h2>
            <p>Travel nursing is a healthcare profession where registered nurses (RNs) work in temporary nursing assignments at healthcare facilities throughout the United States. Travel nurses may work in hospitals, clinics, long-term care facilities, or other healthcare settings, and their assignments typically last from 8-13 weeks, although some may be shorter or longer</p>
            <button>Learn more <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        
      </div>
    </div>
  )
}
