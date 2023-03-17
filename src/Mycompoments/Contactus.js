import React from 'react'

export default function Contactus() {
  return (
    <div className='ContactHome'>
      <div className='InsideContactHome'>
      <div className='contactus'>
        <div className=' InsideContactus'>
        <h2>Contact Us</h2>
        <p>info@veridiants.com</p>
        <p>careers@veridiants.com</p>
        <p>713 482 92810</p>
        <p> 11931 Wickchester Lane Suite 150, Houston, TX 77043</p>
      </div>
      </div>
      <div className='Form'>
      <form>
        <h2>Queries Form</h2>
        <p>Name</p>
        <input type="text" placeholder='Enter your name ..' />
        <p>Email</p>
        <input type="text" placeholder='Enter your email'/>
        <p>Queries</p>
        <textarea type="text" placeholder='Descrive your queries'/>
        <button>Submit</button>
      </form>
      </div>
      </div>
    </div>
  )
}
