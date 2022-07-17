import gsap from 'gsap';
import React, { useEffect } from 'react';
import me from '../images/me.png';
import about_img from '../images/about_img.jpg'
export default function Home() {
const openMenu=()=>{
  gsap.to(".open-menu-bars",{display:"none"})
  gsap.to(".menu-cont",{left:0,duration:1})
}
  return (
    <div className="container home-cont">
      <div className='open-menu-bars' onClick={openMenu}>
        <div className='open-menu-bar'></div>
        <div className='open-menu-bar'></div>
        <div className='open-menu-bar'></div>
      </div>
      <div className="flex-row info-img-cont">
        <div className="my-name-roles">
          <h5 className="my-this-me">Hey, This is me</h5>
          <h1 className="my-name">Rabee</h1>
          <h1 className="my-web">Web</h1>
          <h1 className="my-fornt-end">Front-End</h1>
          <h1 className="my-developer">DEVELOPER</h1>
        </div>
        <div className="my-img-cont flex-row">
          <img src={me} alt="rabee" />
        </div>
      </div>
      <div className='about-cont container flex-row'>
        <div className='about-img-cont'>
          <img className='center-it' src={about_img} alt="about-img"/>
        </div>
        <div className='about-info-cont'>
          <h1 className='heading'>ABOUT ME</h1>
          <p>First-rate Informatics Engineer with Innovative tech mind and +10 years of experience in developing,
programming and supporting. Focusing on details and chasing perfection.
A Web developer with 3+ years' experience in Next-js, React-js, JavaScript, HTML CSS and more.
A solid understanding of how systems and applications work.
Ambitious problem solver with a passion for Online businesses and would like to join a team of like-minded
developers. Constantly striving to improve myself and enhance my skills in technologies.
</p>
        </div>
      </div>
      {/* <div className="base"></div> */}
    </div>
  );
}
