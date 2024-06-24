import React from 'react'
import "./Hero.css";
import heroImg from "../assets/hero.jpg"
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div className='hero'>
        <div className="hero__cont">
        <div className="hero__mask">
            <img src={heroImg} alt="heroImg"className='hero__img'/>
        </div>
        <div className="hero__content">
            <p className='hero__desc'>Hi,I'M A fronted developer</p>
            <h3 className='hero__title'>React Developer</h3>
            <div className='hero__btns'>
                <Link to={"./project"} className='btn'>Project</Link>
                <Link to={"./contact"} className='btn btn--light'>Contact</Link>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero