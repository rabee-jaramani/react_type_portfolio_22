import gsap from 'gsap';
import React, { useEffect } from 'react';
import me from '../images/me.png';
export default function Home() {
  const click = () => {
    gsap.from('.home-cont', { marginLeft: -1000 });
  };
  useEffect(() => {}, []);

  return (
    <div className="container home-cont">
      <div className="flex-row info-img-cont">
        <div className="my-name-roles">
          <h5 className="my-this-me">Hey, This is me</h5>
          <h1 className="my-name" onClick={() => click()}>
            Rabee
          </h1>
          <h1 className="my-web">Web</h1>
          <h1 className="my-fornt-end">Front-End</h1>
          <h1 className="my-developer">DEVELOPER</h1>
        </div>
        <div className="my-img-cont flex-row">
          <img src={me} alt="rabee" />
        </div>
      </div>
      {/* <div className="base"></div> */}
    </div>
  );
}
