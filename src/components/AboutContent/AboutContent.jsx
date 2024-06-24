import React from 'react'
import "../AboutContent/AboutContent.css"
import { Link } from 'react-router-dom'
import AboutCont from "../../assets/card.jpg"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='about__lft'>
            <h3 className='about__title'>Who AM I?
            </h3>
            <p>I am react frontend developer.i create responsive secure website for my clients.</p>
            <Link to="/contact" className="btn">contact</Link>
        </div>
        <div className='about__rgt'>
            <div className="about__cont">
                <div className='about__stack top'>
<img src={AboutCont} alt="" />
                </div>
                <div className='about__stack bottom'>
<img src={AboutCont} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent