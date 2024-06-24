import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [click, Setclick] = useState(false);
  const handleClick = () => Setclick(!click);
  const [color,SetColor] = useState(false);
  const changeColor = ()=>{
    if(window.scrollY >100){
      SetColor(true);
    }else{
      SetColor(false)
    }
  };
  window.addEventListener("scroll",changeColor);
  return (
    <div className="nav">
      <div className={color ? "nav__cont nav__bg" : "nav__cont"}>
        <Link to="/">
          <h2>Portfolio.</h2>
        </Link>
        <ul className={click ? "nav__list active":"nav__list"} >
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/project" className="nav__link">
              Project
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav__hamburger" onClick={handleClick}>
          {click ? (
            <GrClose size={20} style={{ color: "#fff" }} />
          ) : (
            <GiHamburgerMenu size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
