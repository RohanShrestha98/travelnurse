import React from 'react'
import { Link } from 'react-router-dom'
import BookAppointment from './BookAppointment'
import Contactus from './Contactus'
import Footer from './Footer'
import Founders from './Founders'
import Video from './Video'
import Welcome from './Welcome'

export default function Landing() {
  const services =[
    {
      id:"1",
      icons:"",
      title:"Filling staffing shortages",
      desc:"Filling staffing shortages is one of the most important services provided by travel nurses. When healthcare facilities experience unexpected staffing shortages, such as when regular nurses take leaves of absence or when there is an increase in patient volume, travel nurses can be brought in as temporary staff to fill in these gaps."
    },
    {
      id:"1",
      icons:"",
      title:"Flexibility",
      desc:"Travel nurses are highly trained and experienced in a range of nursing specialties, which enables them to be adaptable to new environments and provide high-quality care in various healthcare settings. These nurses are often trained in multiple areas of nursing, making them versatile and able to provide care in different departments and specialties."
    },
    {
      id:"1",
      icons:"",
      title:"Treatment Planning",
      desc:"Travel nurses play an important role in the development of treatment plans for patients. These nurses collaborate with other healthcare professionals, such as physicians, therapists, and social workers, to develop comprehensive plans that address a patient's unique needs."
    },
    {
      id:"1",
      icons:"",
      title:"Patient Care",
      desc:"Travel nurses provide direct patient care to individuals who are receiving medical treatment or recovering from illness or injury. This includes a wide range of duties, such as administering medication, monitoring vital signs, and assisting with daily activities."
    },
    {
      id:"1",
      icons:"",
      title:"Nursing Assessments",
      desc:"Nursing assessments are an important aspect of the care provided by travel nurses. These assessments allow travel nurses to evaluate a patient's physical, emotional, and social needs and develop a plan of care that addresses those needs. "
    },
    {
      id:"1",
      icons:"",
      title:"Support for Permanent Staff",
      desc:"Travel nurses not only provide direct patient care but can also offer support to permanent staff during times of staffing shortages and high patient volume. As experienced healthcare professionals, travel nurses can share their knowledge and expertise."
    }
  ]
  return (
    <div className='landing'>
      <Video/>
      <Welcome/>
      
      <Founders/>
      <div className='ServicesHome'>
      <h4>Services</h4>
      <h1>Our Health Care Services</h1>
      <div className='homeservices'>
        {
          services.map((items)=>(
            <div key={items.id} className="insideHomeServices">
              
              <h3>{items.title}</h3>
              <h5>{items.desc}</h5>
              <Link className='readmore'><p>Read more</p> </Link>
             
            </div>
          ))
        }
        
      </div>
      </div>
      <div className='UpdateHome'>
        <h4>Update</h4>
      <h1>Get Every Single <br /> Update Here</h1>
        <div className='updates'>
          <div className='leftUpdates'>
            <img src="img/nurse2.jpg" alt="" />
            <h4>COVID-19 pandemic</h4>
            <h3>During the COVID-19 pandemic, travel nurses have played a critical role in providing ...  </h3>
            <p>long-term care facilities, and other healthcare settings. Many travel nurses have traveled to COVID-19 hotspots ...</p>
            <p className='date'>July 13 , 2022 - 23 Comments</p>
          </div>
         < div className='leftUpdates'>
            <img src="img/nurse2.jpg" alt="" />
            <h4>Vaccine mandates</h4>
            <h3>This has sparked debate and discussion among travel nurses about the rights of individuals  ...</h3>
            <p> or not to get vaccinated, as well as concerns about how vaccine mandates may impact job opportunities for those who choose ... </p>
            <p className='date'>July 13 , 2022 - 23 Comments</p>
          </div>
         < div className='leftUpdates'>
            <div className='updateleft'><h3>Travel nursing is a popular career choice for registered nurses who enjoy the flexibility...</h3> <p>July 13 , 2022 - 23 Comments</p></div>
            <div className='updateleft'><h3>Travel nursing agencies have been actively recruiting and hiring nurses to meet...</h3> <p>July 13 , 2022 - 23 Comments</p></div>
            <div className='updateleft'><h3>Travel nurses can work in a variety of settings, including hospitals, ...</h3> <p>July 13 , 2022 - 23 Comments</p></div>
          </div>
        </div> 
      </div>
        <BookAppointment/>
        <Contactus/>
        <Footer/>
    </div>
  )
}
