import React from 'react'
import "./about.css"

export default function CoreValues() {
  const services =[
    {
      id:"1",
      icons:"img/corevalue1.png",
      title:"Integrity",
      desc:"Maintaining high ethical standards, being honest and transparent with clients and candidates, and building trust."
    },
    {
      id:"1",
      icons:"img/corevalue2.png",
      title:"Quality",
      desc:"Providing high-quality services to clients and ensuring that nurses are matched with appropriate job opportunities that align with their skills and preferences."
    },
    {
      id:"1",
      icons:"img/corevalue3.png",
      title:"Professionalism",
      desc:"Demonstrating professionalism in all interactions with clients, candidates, and other stakeholders, and upholding the highest standards of conduct"
    },
    {
      id:"1",
      icons:"img/corevalue4.png",
      title:"Compassion",
      desc:"Understanding and empathizing with the needs of patients, and striving to provide compassionate care."
    },
    {
      id:"1",
      icons:"img/corevalue5.png",
      title:"Innovation",
      desc:"Embracing innovation and technology to improve the quality of services provided, and delivering cutting-edge solutions to clients."
    },
    {
      id:"1",
      icons:"img/corevalue6.png",
      title:"Teamwork",
      desc:"Collaborating effectively with clients, candidates, and other stakeholders, and working together to achieve shared goals."
    }
  ]
  return (
    <div>
     <div className='ServicesHome'>
      <h1>Core Values</h1>
      <div className='homeservices'>
        {
          services.map((items)=>(
            <div key={items.id} className="insideHomeServices">
              <img src={items.icons} alt="" />
              <h3>{items.title}</h3>
              <h5>{items.desc}</h5>
             
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}
