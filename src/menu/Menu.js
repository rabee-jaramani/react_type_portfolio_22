import gsap from 'gsap'
import React from 'react'

export default function Menu() {
    const closeMenu=()=>{
        gsap.to(".menu-cont",{left:2000,duration:1})
        gsap.to(".open-menu-bars",{display:"flex"})

    }
  return (
    <div className='menu-cont'>
        <div className='close-menu-icon-cont' onClick={closeMenu}>
            <div id='bar1'></div>
            <div id='bar2'></div>
        </div>
        <div className='menu-items'>
            <a href='#'><h4>Home</h4></a>
            <a href='#'><h4>Home</h4></a>
            <a href='#'><h4>Home</h4></a>
        </div>
    </div>
  )
}
