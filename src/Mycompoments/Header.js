import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"


export default function Header() {
    const navigation =[
        {
            id:"1",
            link:"/aboutus",
            title:"About Us"
        },
        {
            id:"2",
            link:"/services",
            title:"Services"
        },
        {
            id:"3",
            link:"/jobs",
            title:"Jobs"
        },
        {
            id:"4",
            link:"/whychoose",
            title:"Why Choose Us"
        },
        {
            id:"5",
            link:"/contact",
            title:"Contact Us"
        }
    ]
  return (
      <header>
      <nav>
        <div className='logo'>
            <Link to="/">
            <img src="img/logo.png" alt="" />
            </Link>
        </div>
        <div className='navigations'>
            {
                navigation.map((items)=>(
                    <div  key={items.id}>
                        <Link to={items.link} className="navigate">
                            <p>{items.title}</p>
                        </Link>
                        </div>
                ))
            }
        </div>
      </nav>
      </header>
  )
}
