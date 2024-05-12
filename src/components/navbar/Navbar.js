import React from 'react'
import { navbar_list } from '../../static/Index'
import { nokia} from '../../static/Index'
import { NavbarIcons } from '../../static/Index'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
  <img  src={nokia} alt="" />
{
  navbar_list.map((item,index) => {
    return (
      <p className='navbar_text'>{item}</p>
    )
  })
}
  <h1>{NavbarIcons}</h1>
    </div>
  )
}

export default Navbar