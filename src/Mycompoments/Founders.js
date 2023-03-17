import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css"

export default function Founders() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0
      };
      const sliderImages = [
        {
          id: 1,
          name: 'Dr. Emily Davis',
          work:"travel enthusiast",
          linkImg:"img/nurse2.jpg"
        },
        {
            id: 1,
            name: 'Dr. Emily Davis',
            work:"travel enthusiast",
            linkImg:"img/nurse.png"
          },
          {
              id: 1,
              name: 'Dr. Emily Davis',
              work:"travel enthusiast",
              linkImg:"img/nurse3.jpg"
            },
            {
                id: 1,
                name: 'Dr. Emily Davis',
                work:"travel enthusiast",
                linkImg:"img/nurse4.jpg"
              },
              {
                  id: 1,
                  name: 'Dr. Emily Davis',
                  work:"travel enthusiast",
                  linkImg:"img/nurse5.jpg"
                }
    ]
  return (
    <div className='doctor'>
     <h4>Doctors</h4>
     <h1>Meet our Qualified Doctors</h1>
     <Slider {...settings} className="founder_Slider">
        
        {sliderImages.map((item) => (
            <div className='nurses'>
                <div className='insideNurse'>
              <img
                src={ item.linkImg}
                alt={item.title}
              />
              <h3>{item.name}</h3>
              <p>{item.work}</p>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
